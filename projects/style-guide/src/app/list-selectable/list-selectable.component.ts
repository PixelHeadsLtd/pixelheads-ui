import { Component } from '@angular/core';

@Component({
  selector: 'app-list-selectable',
  templateUrl: './list-selectable.component.html',
  styleUrls: ['./list-selectable.component.scss']
})
export class ListSelectableComponent {

  selectedIndex: number|null = null;
  toggleBlade: boolean = false;

  constructor() { }

  listSelectableItems = [
    {
      name: 'Vilnius',
    },
    {
      name: 'Kaunas'
    },
    {
      name: 'This is a disabled item',
      disabled: true
    },
    {
      name: 'Pavilnys'
    },
    {
      name: 'Pabradė'
    },
    {
      name: 'Klaipėda'
    }
  ];

  setIndex(index: number) {
    this.selectedIndex = index;
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
