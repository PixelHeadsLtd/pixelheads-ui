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

  @Input() options: SelectOption[] = [];

  showDropdown: boolean = false;
  showIcon: boolean = false;
  @Input() setWidth: any;
  @Input() maxHeight: any;
  @Output() closeDropdown = new EventEmitter<boolean>();
  @Output() optionSelected = new EventEmitter<SelectOption>();
  @Output() highlightSection = new EventEmitter<SelectOption>();
  selectedOption?: SelectOption;

  @Input() set selectedIndex(value: number | undefined) {
    if (value) {
      this.selectedOption = this.options[value];
      this.sIndex = value;
    }
  }

  public sIndex: number = 0;

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
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
    if (index !== this.sIndex) {
      this.sIndex = index;
      this.highlightSection.emit(this.options[this.sIndex]);
    } else {
      this.sIndex = index;
      this.highlightSection.emit(undefined);
    }
  }

  ngOnInit() {
    this.closeDropdown.emit(this.showDropdown);
    this.highlightSection.emit(this.selectedOption);
    if(this.sIndex > -1) {
      this.optionIsSelected(null, this.options[this.sIndex]);
    }
    //console.log(this.selectedOption);
  }
}
