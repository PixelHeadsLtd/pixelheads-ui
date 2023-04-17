import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-fancy',
  templateUrl: './accordion-fancy.component.html',
  styleUrls: ['./accordion-fancy.component.scss']
})
export class AccordionFancyComponent implements OnInit {

  constructor() { }

  showMore: boolean;
  isFavourite = false;

  toggleBlade: boolean;

  onAnchorClick() {
    console.log('You clicked the anchor');
  }

  onFavClick(toggleFav: boolean) {
    this.isFavourite = toggleFav;
    console.log('Favourite selected ' + this.isFavourite);
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
