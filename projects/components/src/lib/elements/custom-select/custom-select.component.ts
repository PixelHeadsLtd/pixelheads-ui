import { Component, Input, OnInit, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

export interface SelectOption {
  id: any;
  display: string;
  selected?: boolean;
  icon?: string;
  iconColor?: string;
  showIcon?: boolean;
}

@Component({
  selector: 'aa-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  @Input() options: SelectOption[];

  showDropdown: boolean;
  showIcon: boolean;
  @Input() defaultName: string;
  @Input() defaultIcon: string;
  @Input() defaultIconColor: string;
  @Input() setWidth: number;
  @Input() maxHeight: number;
  @Output() closeDropdown = new EventEmitter<boolean>();
  @Output() optionSelected = new EventEmitter<SelectOption>();
  @Output() highlightSection = new EventEmitter<SelectOption>();
  selectedOption: SelectOption;
  @Input() selectedIndex: any = null;

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
        this.closeDropdown.emit(this.showDropdown = false);
    }
  }

  optionIsSelected(event: any, selectOption: SelectOption) {
    this.showDropdown = false;
    this.optionSelected.emit(selectOption);
    this.selectedOption = selectOption;
  }

  setIndex(index: any) {
    if (index !== this.selectedIndex) {
      this.selectedIndex = index;
      this.highlightSection.emit(this.selectedIndex);
    } else {
      this.selectedIndex = index;
      this.highlightSection.emit(this.selectedIndex = null);
    }
  }

  ngOnInit() {
    this.closeDropdown.emit(this.showDropdown);
    this.highlightSection.emit(this.selectedIndex);
  }
}
