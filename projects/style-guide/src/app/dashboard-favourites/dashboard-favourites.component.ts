import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-favourites',
  templateUrl: './dashboard-favourites.component.html',
  styleUrls: ['./dashboard-favourites.component.scss']
})
export class DashboardFavouritesComponent implements OnInit {

  @Output() favClick = new EventEmitter();
  
  showMore: boolean;
  
  constructor() { }

  public onFavClick(event: Event) {
    this.favClick.emit(event);
  }
  
  dashBoardFavsHTML = 
  `<div class="flex-group">
  <aa-dashboard-favourites 
    [favIconClass]="'fas fa-piggy-bank aa-pink-100'" 
    [iconColour]="'aa-green-100'" 
    [tagName]="'Gold, Copper'" 
    [lastViewed]="'20-04-2020'" 
    [favDescription]="'Some long description'" 
    (favClick)="onFavClick($event)" 
    [favouritesTitle]="'No click event on star'" 
    [isFavourite]="true"
    >
  </aa-dashboard-favourites>
</div>`;
  
  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }
  
  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}


