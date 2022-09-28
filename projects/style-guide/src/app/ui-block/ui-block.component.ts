import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-block',
  templateUrl: './ui-block.component.html',
  styleUrls: ['./ui-block.component.scss']
})
export class UiBlockComponent implements OnInit {

  showUiBlock: boolean;
  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit(): void {
  }

}
