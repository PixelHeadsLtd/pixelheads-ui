import { Component } from '@angular/core';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent {

  toggleBlade: boolean = false;

  constructor() {}
  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
    }
}
