import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  isOptional = true;
  showInput: boolean = false;
  showInputSmall: boolean= false;
  showTwoCol: boolean= false;
  myRadios?: string;
  toggleBlade: boolean= false;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
