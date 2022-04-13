import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  showBodyOne: boolean;
  showBodyTwo: boolean;
  showBodyThree: boolean;
  showBodyFour: boolean;
  showBodyFive: boolean;
  showBodySix: boolean;
  showAccordion: boolean;
  showAccordionAlt: boolean;
  showJustification: boolean;
  addJustification: boolean;
  toggleBlade: boolean;

  constructor() { }
  
  justification() {
    this.showJustification = true;
  }
  
  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
