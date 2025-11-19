import { Component } from '@angular/core';
import { SelectOption } from 'projects/components/src/public-api';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  toggleBlade: boolean = false;
  standardSelect: boolean = false;
  customSelect: boolean = false;
  dataList: boolean = false;
  selectedCityIds: string[] = [];
  isDisabled: boolean = true;
  defaultStart: number = 0;
  defaultEnd: number = 3;
  selectedOption: string = '';
  selectedOptionTwo: string = '';

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  optionArray: SelectOption[] = [
    {
      id: 'pls-select',
      display: 'Please select',
      showIcon: true,
      icon: 'calendar_month',
      iconColor: 'ph-light-blue-100',
    },
    {
      id: 'jan',
      display: 'January',
      showIcon: true,
      icon: 'ac_unit',
      iconColor: 'ph-light-blue-50'
    },
    {
      id: 'feb',
      display: 'February',
      showIcon: true,
      icon: 'ac_unit',
      iconColor: 'ph-light-blue-50'
    },
    {
      id: 'mar',
      display: 'March',
      showIcon: true,
      icon: 'emoji_nature',
      iconColor: 'ph-orange-100'
    },
    {
      id: 'apr',
      display: 'April',
      showIcon: true,
      icon: 'emoji_nature',
      iconColor: 'ph-orange-100'
    },
    {
      id: 'may',
      display: 'May',
      showIcon: true,
      icon: 'emoji_nature',
      iconColor: 'ph-orange-100'
    },
    {
      id: 'jun',
      display: 'June',
      showIcon: true,
      icon: 'beach_access',
      iconColor: 'ph-red-100'
    },
    {
      id: 'jul',
      display: 'July',
      showIcon: true,
      icon: 'beach_access',
      iconColor: 'ph-red-100'
    },
    {
      id: 'aug',
      display: 'August',
      showIcon: true,
      icon: 'beach_access',
      iconColor: 'ph-red-100'
    },
    {
      id: 'sep',
      display: 'September',
      showIcon: true,
      icon: 'spa',
      iconColor: 'ph-ochre-100'
    },
    {
      id: 'oct',
      display: 'October',
      showIcon: true,
      icon: 'spa',
      iconColor: 'ph-ochre-100'
    },
    {
      id: 'nov',
      display: 'November',
      showIcon: true,
      icon: 'spa',
      iconColor: 'ph-ochre-100'
    },
    {
      id: 'dec',
      display: 'December',
      showIcon: true,
      icon: 'ac_unit',
      iconColor: 'ph-light-blue-50'
    }
  ];

  onOptionSelected() {
    console.log("Do something");
  }
}
