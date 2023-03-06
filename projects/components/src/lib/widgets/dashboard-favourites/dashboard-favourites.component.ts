import { ChangeDetectionStrategy, EventEmitter, Component, Input, Output, OnInit } from '@angular/core';
@Component({
  selector: 'aa-dashboard-favourites',
  templateUrl: './dashboard-favourites.component.html',
  styleUrls: ['./dashboard-favourites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardFavouritesComponent implements OnInit {

  @Input() isFavourite: boolean;
  @Input() favouritesTitle: string;
  @Input() favouritesText: string;
  @Input() favouritesURL: string;
  @Input() favIconClass: string;
  @Input() iconColour: string;
  @Input() materialIcons: boolean;
  @Input() tagName: string;
  @Input() favDescription: string;
  @Input() lastViewed: string;

  @Output() anchorClick = new EventEmitter<Event>();
  @Output() favClick = new EventEmitter<boolean>();

  public onAnchorClick(e: Event) {
    e.stopPropagation();
    this.anchorClick.emit(e);
  }

  public onFavClick(e) {
    this.isFavourite = !this.isFavourite;
    e.stopPropagation();
    this.favClick.emit(this.isFavourite);
  }

  constructor() { }

  ngOnInit() {
    this.favClick.emit(this.isFavourite);
  }

}
