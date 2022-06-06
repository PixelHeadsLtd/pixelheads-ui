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

  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  optionArray: SelectOption[] = [
    {
      id: 'whichThirdPary', 
      display: 'Which 3rd party components do we currently support?',
      showIcon: true,
      icon: 'widgets',
      iconColor: 'aa-green-50'
    },
    {
      id: 'whatDateFormat', 
      display: 'What date format should I use for the NGB-datepicker?',
      showIcon: true,
      icon: 'edit_calendar',
      iconColor: 'aa-orange-50'
    },
    {
      id: 'contextMenu', 
      display: 'How do I add a context-menu to AG-grid?',
      showIcon: true,
      icon: 'more_vert',
      iconColor: 'aa-red-100'
    },
    {
      id: 'toolTip', 
      display: 'How do I add a tooltip to AG-grid?',
      showIcon: true,
      icon: 'mode_comment',
      iconColor: 'aa-ochre-100'
    },
    {
      id: 'setHeight', 
      display: 'How do I set the height on AG-grid?',
      showIcon: true,
      icon: 'menu',
      iconColor: 'aa-light-blue-80'
    }
  ];

  onOptionSelected(selectOption : SelectOption) {
    console.log("Do something");
  }

  ngOnInit() {
  }

}
