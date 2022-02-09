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
