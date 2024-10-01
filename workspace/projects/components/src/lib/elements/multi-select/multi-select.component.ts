import { ChangeDetectorRef, Component, Input, HostListener, ElementRef, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface SelectableItem {
  id: number;
  name: string;
  [key: string]: any; // Allows additional properties if needed
}

@Component({
  selector: 'aa-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true
    }
  ]
})
export class MultiSelectComponent<T extends SelectableItem> implements ControlValueAccessor {
  @Input() maxHeight: any = '';
  @Input() items: T[] = [];
  @Input() labelKey!: keyof T;
  @Input() childrenKey!: keyof T;
  @Output() valueChange = new EventEmitter<T[]>();

  searchTerm: string = '';
  selectedItems: T[] = [];
  isDropdownOpen: boolean = false;
  isAllSelected: boolean = false;

  private onChange: (value: T[]) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation(); // Prevents the click event from propagating and closing the dropdown
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  trackByItem(index: number, item: T): any {
    return item.id || item; // Use 'id' as a unique identifier, or fallback to the item reference itself if no 'id' exists
  }

  onItemClick(event: MouseEvent) {
    event.stopPropagation(); // Prevents popup closure when clicking on an item
  }

  get filteredItems(): T[] {
    if (!this.searchTerm) {
      return this.items;
    }
    const term = this.searchTerm.toLowerCase();
    const filteredItems: T[] = [];

    this.items.forEach(item => {
      const children = this.getChildren(item);
      const matchesParent = (item[this.labelKey] as unknown as string).toLowerCase().includes(term);
      const matchingChildren = children.filter(child => 
        (child[this.labelKey] as unknown as string).toLowerCase().includes(term)
      );

      if (matchesParent || matchingChildren.length > 0) {
        const itemCopy = { ...item } as T;
        (itemCopy[this.childrenKey] as unknown as T[]) = matchingChildren;
        filteredItems.push(itemCopy);
      }
    });

    return filteredItems;
  }

  getChildren(item: T): T[] {
    return (item[this.childrenKey] as unknown as T[]) || [];
  }

  toggleSelectAll() {
    if (this.isAllSelected) {
      this.selectedItems = [];
    } else {
      this.selectedItems = [...this.getAllSelectableItems(this.items)];
    }
    this.isAllSelected = !this.isAllSelected;
    this.updateValue();
  }

  toggleItemSelection(item: T) {
    const index = this.selectedItems.findIndex(selected => this.compareItems(selected, item));
  
    if (index === -1) {
      this.selectedItems.push(item);
      this.selectChildren(item); // Ensure children are also selected
    } else {
      this.selectedItems.splice(index, 1);
      this.deselectChildren(item); // Ensure children are also deselected
    }
  
    this.isAllSelected = this.selectedItems.length === this.getAllSelectableItems(this.items).length;
    this.updateValue();
  }
  
  applyFilter() {
    // You might not need this method if filteredItems is always updated automatically
    this.cdr.detectChanges(); // Manually trigger change detection if needed
  }
  
  compareItems(item1: T, item2: T): boolean {
    return item1 === item2 || (item1 && item2 && item1[this.labelKey] === item2[this.labelKey]);
  }
  
  isItemSelected(item: T): boolean {
    return this.selectedItems.some(selected => this.compareItems(selected, item));
  }

  selectChildren(item: T) {
    const children = this.getChildren(item);
    children.forEach(child => {
      if (!this.selectedItems.some(selected => this.compareItems(selected, child))) {
        this.selectedItems.push(child);
      }
    });
  }
  
  deselectChildren(item: T) {
    const children = this.getChildren(item);
    children.forEach(child => {
      const index = this.selectedItems.findIndex(selected => this.compareItems(selected, child));
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      }
    });
  }
  
  getAllSelectableItems(items: T[]): T[] {
    return items.flatMap(item => {
      const children = this.getChildren(item);
      return [item, ...children];
    });
  }

  clearSearch() {
    this.searchTerm = '';
  }

  writeValue(value: T[]): void {
    this.selectedItems = value || [];
    this.isAllSelected = this.selectedItems.length === this.getAllSelectableItems(this.items).length;
  }

  registerOnChange(fn: (value: T[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optionally handle disabled state
  }

  private updateValue() {
    this.onChange(this.selectedItems);
    this.valueChange.emit(this.selectedItems);
  }  
}
