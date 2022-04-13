import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-favourites',
  templateUrl: './dashboard-favourites.component.html',
  styleUrls: ['./dashboard-favourites.component.scss']
})
export class DashboardFavouritesComponent implements OnInit {

  @Output() favClick = new EventEmitter();
  toggleBlade: boolean;
  showMore: boolean;

  constructor() { }

  public onFavClick(event: Event) {
    this.favClick.emit(event);
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}


