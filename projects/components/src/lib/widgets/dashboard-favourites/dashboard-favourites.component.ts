import { ChangeDetectionStrategy, EventEmitter, Component, Input, Output } from '@angular/core';
@Component({
  selector: 'ph-dashboard-favourites',
  templateUrl: './dashboard-favourites.component.html',
  styleUrls: ['./dashboard-favourites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardFavouritesComponent {

  @Input() isFavourite: boolean = false;
  @Input() favouritesTitle: string = '';
  @Input() favouritesText: string = '';
  @Input() favouritesURL: string = '';
  @Input() favIconClass: string = '';
  @Input() iconColour: string = '';
  @Input() materialIcons: boolean = false;
  @Input() tagName: string = '';
  @Input() favDescription: string = '';
  @Input() lastViewed: string = '';

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
