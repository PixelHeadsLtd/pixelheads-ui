import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, ChangeDetectorRef, ElementRef, ViewChild, HostListener, AfterViewInit, HostBinding } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface ButtonClickEvent {
  rowIndex: number;
  colIndex: number;
  rowData: any;
  colData: any;
  actionType: string;
  isNested?: boolean;
  parentRowIndex?: number;
}

@Component({
  selector: 'ph-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicTableComponent implements AfterViewInit {
  @Input() setHeight: any;
  @Input() setMinHeight: any;
  @Input() setMaxHeight: any;
  @Input() showManageSlider: boolean = false;
  @Input() expandableRows: boolean = false;
  @Input() enablePagination: boolean = false;
  @Input() columns: any[] = [];
  @Input() rows: any[] = [];
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 5;
  @Input() totalItems: number = 0;
  @Input() totalPages: number = 2;
  @ViewChild('filterInput') filterInput: ElementRef | null = null;
  @ViewChild('manageSlider', { static: true }) manageSlider!: ElementRef;

  @Input() filterValues: { [key: string]: any } = {};
  @Output() filterValuesChange = new EventEmitter<{ [key: string]: any }>();

  @Input() sortColumn: string | null = null;
  @Input() sortOrder: 'asc' | 'desc' | null = null;

  @Output() columnsChange = new EventEmitter<any[]>();
  @Output() sortOrderChange = new EventEmitter<{ sortColumn: string | null, sortOrder: 'asc' | 'desc' | null }>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  @HostBinding('style.width.px') width: number | null = null;

  filterIndex: number = -1;
  sliderWidth: string | undefined;

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: any) {
    const clickedInsideFilterInput = this.filterInput?.nativeElement.contains(targetElement);
    const clickedInsideManageLink = targetElement.classList.contains('manage-anchor');
    const clickedInsideManageSlider = this.manageSlider?.nativeElement.contains(targetElement);

    if (!clickedInsideFilterInput && !clickedInsideManageLink && !clickedInsideManageSlider) {
      this.filterIndex = -1;
      this.showManageSlider = false;
    }
  }

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {}

  // Table elements
  @Output() buttonClicked = new EventEmitter<ButtonClickEvent>();

  handleButtonClick(rowIndex: number, colIndex: number, actionType: string, isNested: boolean = false, parentRowIndex?: number) {
    let rowData;
    if (isNested) {
      if (parentRowIndex !== undefined) {
        rowData = this.rows[parentRowIndex].nestedRows[rowIndex];
      } else {
        console.error('Parent row index is undefined for nested row');
        return;
      }
    } else {
      rowData = this.rows[rowIndex];
    }
    const colData = this.columns[colIndex];
    this.buttonClicked.emit({ rowIndex, colIndex, rowData, colData, actionType, isNested, parentRowIndex });
  }

  getPaginatedRows(): any[] {
    if (!this.enablePagination) {
      return this.filteredRows;
    }
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredRows.slice(startIndex, endIndex);
  }

  getNestedPaginatedRows(row: any): any[] {
    if (!this.enablePagination) {
      return row.nestedRows;
    }
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return row.nestedRows.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
      this.cdr.markForCheck();
    }
  }

  changePageSize(size: number): void {
    this.pageSize = size;
    this.pageSizeChange.emit(this.pageSize);
    this.updatePagination();
    this.cdr.markForCheck();
  }

  updatePagination(): void {
    if (!this.enablePagination) {
      this.totalItems = this.filteredRows.length;
      this.totalPages = 1; // Since all rows are shown on one page
    } else {
      this.totalItems = this.filteredRows.length;
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    }
  }

  toggleColumnVisibility(column: any) {
    column.visible = !column.visible;
    this.columnsChange.emit(this.columns);
  }

  toggleManageSlider(event: MouseEvent) {
    event.stopPropagation();
    this.showManageSlider = !this.showManageSlider;
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    this.columnsChange.emit(this.columns);
    this.filterValues = {};
    this.filterValuesChange.emit(this.filterValues);
  }

  dropRow(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.rows, event.previousIndex, event.currentIndex);
  }

  onResize(width: any) {
    this.width = width;
  }

  sortData(columnKey: string) {
    if (this.sortColumn === columnKey) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = columnKey;
      this.sortOrder = 'asc';
    }
    this.rows.sort((a, b) => {
      const aValue = this.getNestedPropertyValue(a, columnKey);
      const bValue = this.getNestedPropertyValue(b, columnKey);
      if (aValue < bValue) return this.sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return this.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    this.sortOrderChange.emit({ sortColumn: this.sortColumn, sortOrder: this.sortOrder });
  }

  getNestedPropertyValue(obj: any, key: string): any {
    const keys = key.split('.');
    let value = obj;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return null;
      }
    }
    return value;
  }

  isSorted(columnKey: string): boolean {
    return this.sortColumn === columnKey;
  }

  toggleRowExpansion(row: any): void {
    row.expanded = !row.expanded;
  }

  showFilter(index: number, event: MouseEvent): void {
    event.stopPropagation();
    this.filterIndex = index;
    setTimeout(() => {
      if (this.filterInput) {
        this.filterInput.nativeElement.focus();
      }
    });
  }

  clearFilter(index: number): void {
    const columnKey = this.columns[index].key;
    this.filterValues[columnKey] = '';
    this.filterIndex = -1;
    this.filterValuesChange.emit(this.filterValues);
  }

  clearAllFilters(): void {
    this.filterValues = {};
    this.filterValuesChange.emit(this.filterValues);
  }

  hasFilters(): boolean {
    return Object.keys(this.filterValues).some(key => this.filterValues[key]);
  }

  updateFilter(columnKey: string, value: any): void {
    this.setNestedPropertyValue(this.filterValues, columnKey, value.toLowerCase());
    this.filterValuesChange.emit(this.filterValues);
    this.updatePagination();
  }

  setNestedPropertyValue(obj: any, key: string, value: any) {
    const keys = key.split('.');
    let current = obj;
    keys.forEach((k, index) => {
      if (index === keys.length - 1) {
        current[k] = value;
      } else {
        if (!current[k]) {
          current[k] = {};
        }
        current = current[k];
      }
    });
  }

  get filteredRows(): any[] {
    return this.rows.filter(row =>
      this.columns.every(column => {
        const filterValue = this.getNestedPropertyValue(this.filterValues, column.key);
        return !filterValue || this.hasNestedPropertyValue(row, column.key, filterValue.toLowerCase());
      })
    );
  }
  

  hasNestedPropertyValue(obj: any, key: string, filterValue: string): boolean {
    const value = this.getNestedPropertyValue(obj, key);
    return value ? value.toString().toLowerCase().includes(filterValue) : false;
  }

  ngAfterViewInit() {
    this.updatePagination();
    if (this.manageSlider && this.manageSlider.nativeElement) {
      const width = (this.manageSlider.nativeElement as HTMLElement).offsetWidth;
      this.sliderWidth = width + 'px';
      this.cdr.detectChanges();
    }
  }
}