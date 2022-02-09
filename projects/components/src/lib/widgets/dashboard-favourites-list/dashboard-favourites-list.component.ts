import { Component, ChangeDetectionStrategy, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'aa-dashboard-favourites-list',
  templateUrl: './dashboard-favourites-list.component.html',
  styleUrls: ['./dashboard-favourites-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardFavouritesListComponent implements OnInit {

  @Input() isFavourite: boolean;
  @Input() showTags: boolean;
  @Input() itemAnchorTitle: string;
  @Input() itemAnchorURL: string;
  @Input() itemAnchor: string;
  @Input() itemTitle: string;
  @Input() itemDescription: string;
  @Input() showBody: boolean;
  @Input() favouriteId: string;
  @Input() iconName: string;
  @Input() tagName: string;
  @Input() lastViewed: string;
  @Input() favouritesTitle: string;
  @Input() favDescription: string;

  @Input() text = 'Click me';

  @Output() favClick = new EventEmitter();
  @Output() anchorClick = new EventEmitter();

  public onFavClick(event: Event) {
    this.favClick.emit(event);
  }

  public onAnchorClick(event: Event) {
    event.preventDefault();
    this.anchorClick.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }

}

