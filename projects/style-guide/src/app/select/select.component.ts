import { Component, OnInit } from '@angular/core';
import { SelectOption } from 'projects/components/src/public-api';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  toggleBlade: boolean;
  standardSelect: boolean;
  customSelect: boolean;
  dataList: boolean;
  isDisabled: boolean = true;


  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  optionArray: SelectOption[] = [
    {
      id: 'dec', 
      display: 'December',
      showIcon: true,
      icon: 'ac_unit',
      iconColor: 'aa-light-blue-50'
    },
    {
      id: 'jan', 
      display: 'January',
      showIcon: true,
      icon: 'ac_unit',
      iconColor: 'aa-light-blue-50'
    },
    {
      id: 'feb', 
      display: 'February',
      showIcon: true,
      icon: 'ac_unit',
      iconColor: 'aa-light-blue-50'
    },
    {
      id: 'mar', 
      display: 'March',
      showIcon: true,
      icon: 'emoji_nature',
      iconColor: 'aa-orange-100'
    },
    {
      id: 'apr', 
      display: 'April',
      showIcon: true,
      icon: 'emoji_nature',
      iconColor: 'aa-orange-100'
    },
    {
      id: 'may', 
      display: 'May',
      showIcon: true,
      icon: 'emoji_nature',
      iconColor: 'aa-orange-100'
    },
    {
      id: 'jun', 
      display: 'June',
      showIcon: true,
      icon: 'beach_access',
      iconColor: 'aa-red-100'
    },
    {
      id: 'jul', 
      display: 'July',
      showIcon: true,
      icon: 'beach_access',
      iconColor: 'aa-red-100'
    },
    {
      id: 'aug', 
      display: 'August',
      showIcon: true,
      icon: 'beach_access',
      iconColor: 'aa-red-100'
    },
    {
      id: 'sep', 
      display: 'September',
      showIcon: true,
      icon: 'spa',
      iconColor: 'aa-ochre-100'
    },
    {
      id: 'oct', 
      display: 'October',
      showIcon: true,
      icon: 'spa',
      iconColor: 'aa-ochre-100'
    },
    {
      id: 'nov', 
      display: 'November',
      showIcon: true,
      icon: 'spa',
      iconColor: 'aa-ochre-100'
    }
  ];

  onOptionSelected(selectOption : SelectOption) {
    console.log("Do something");
  }

  ngOnInit() {
  }

}
