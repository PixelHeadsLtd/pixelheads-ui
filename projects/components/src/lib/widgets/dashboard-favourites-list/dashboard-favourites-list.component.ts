import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aa-dashboard-favourites-list',
  templateUrl: './dashboard-favourites-list.component.html',
  styleUrls: ['./dashboard-favourites-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardFavouritesListComponent {

  @Input() isFavourite: boolean = false;
  @Input() showTags: boolean = false;
  @Input() itemAnchorTitle: string = '';
  @Input() itemAnchorURL: string = '';
  @Input() itemAnchor: string = '';
  @Input() itemTitle: string = '';
  @Input() itemDescription: string = '';
  @Input() showBody: boolean = false;
  @Input() favouriteId: string = '';
  @Input() iconName: string = '';
  @Input() tagName: string = '';
  @Input() lastViewed: string = '';
  @Input() favouritesTitle: string = '';
  @Input() favDescription: string = '';

  @Output() anchorClick = new EventEmitter<Event>();
  @Output() favClick = new EventEmitter<boolean>();

  public onAnchorClick(e: Event) {
    e.stopPropagation();
    this.anchorClick.emit(e);
  }

  public onFavClick(e: any) {
    this.isFavourite = !this.isFavourite;
    e.stopPropagation();
    this.favClick.emit(this.isFavourite);
  }

  constructor() {
    this.favClick.emit(this.isFavourite);
  }
}
