import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-fancy',
  templateUrl: './accordion-fancy.component.html',
  styleUrls: ['./accordion-fancy.component.scss']
})
export class AccordionFancyComponent implements OnInit {
  
  showMore: boolean;
  isFavourite = false;
  
  constructor() { }

  public onFavClick(event: Event) {
    this.isFavourite=!this.isFavourite;
  }
  
  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
