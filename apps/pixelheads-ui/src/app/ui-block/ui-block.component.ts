import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-block',
  templateUrl: './ui-block.component.html',
  styleUrls: ['./ui-block.component.scss']
})
export class UiBlockComponent {

  showUiBlock: boolean = false;
  toggleBlade: boolean = false;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
