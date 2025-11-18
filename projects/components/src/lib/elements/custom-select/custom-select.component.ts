import { Component, Input, OnInit, HostListener, ElementRef, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
  id: any;
  display: string;
  selected?: boolean;
  icon?: string;
  iconColor?: string;
  showIcon?: boolean;
}

@Component({
  selector: 'ph-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ]
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {

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
    if (value !== undefined && value >= 0 && value < this.options.length) {
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
      this.showDropdown = false;
      this.closeDropdown.emit(this.showDropdown);  // Emit the updated value of showDropdown
      this.onTouched();  // Trigger the onTouched callback
    }
  }

  optionIsSelected(event: any, selectOption: SelectOption) {
    this.showDropdown = false;
    this.optionSelected.emit(selectOption);
    this.selectedOption = selectOption;
    this.onChange(selectOption);  // Trigger the onChange callback
    this.onTouched();  // Trigger the onTouched callback
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
    if(this.sIndex > -1 && this.sIndex < this.options.length) {
      this.optionIsSelected(null, this.options[this.sIndex]);
    }
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    const index = this.options.findIndex(option => option.id === value);
    if (index !== -1) {
      this.selectedOption = this.options[index];
      this.sIndex = index;
    }
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if you need to handle the disabled state
  }
}
