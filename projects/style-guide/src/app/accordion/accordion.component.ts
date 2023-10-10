import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  showVertOne: boolean;
  showVertTwo: boolean;
  showVertThree: boolean;
  showVertFour: boolean;
  showVertFive: boolean;

  showOne: boolean;
  showTwo: boolean;
  showThree: boolean;
  showFour: boolean;
  showFive: boolean;
  showSix: boolean;
  showSeven: boolean;
  showSevenNested: boolean;

  showCleanOne: boolean;
  showCleanTwo: boolean;

  showAccordion: boolean;
  showAccordionVertical: boolean;
  showAccordionAlt: boolean;

  showJustification: boolean;
  addJustification: boolean;
  toggleBlade: boolean;

  constructor() { }

  onClick() {
    console.log('You clicked');
  }

  justification() {
    this.showJustification = true;
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
