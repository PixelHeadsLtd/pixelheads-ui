import { ChangeDetectionStrategy, EventEmitter, Component, Input, Output } from '@angular/core';

interface FavouriteItem {
  favColour: string;
  favLabel: string;
  favTitle: string;
  favTextLineOne: string;
  favTextLineTwo: string;
  favTextLineThree?: string;
  isFavourite: boolean;
}

@Component({
  selector: 'ph-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouritesComponent {

  @Input() showLandscapeFavs: boolean = false;
  @Input() showPortraitFavs: boolean = false;
  @Input() anchorIsClicked: boolean = false;
  @Input() disableFavsStar: boolean = false;
  @Input() toggleFavourite: string = '';
  @Input() favsHeading: string = '';
  @Input() clickAnchor: string = '';
  @Input() favLabel: string = '';
  @Input() favTitle: string = '';
  @Input() favTextLineOne: string = '';
  @Input() favTextLineTwo: string = '';
  @Input() favTextLineThree: string = '';
  @Input() favColour: string = '';
  @Input() favsOrigin: Array<FavouriteItem> = [];
  @Input() favsTarget: Array<FavouriteItem> = [];
  @Input() favsPortrait: Array<FavouriteItem> = [];
  @Input() isFavourite: any = null;

  @Output() anchorClick = new EventEmitter<Event>();
  @Output() favClick = new EventEmitter<FavouriteItem>();

  public onAnchorClick(e: Event) {
    e.stopPropagation();
    this.anchorClick.emit(e);
  }

  public onFavClick(fav: FavouriteItem) {
    fav.isFavourite = !fav.isFavourite;
    this.favClick.emit(fav);
    if (this.favsOrigin.indexOf(fav) !== -1) {
      this.favsOrigin.splice(this.favsOrigin.indexOf(fav), 1);
      this.favsTarget.push(fav);
    } else {
      this.favsTarget.splice(this.favsTarget.indexOf(fav), 1);
      this.favsOrigin.push(fav);
    }
  }

  constructor() {
    if (!this.favsTarget) {
      this.favsTarget = [];
    }
    if (!this.favsOrigin) {
      this.favsOrigin = [];
    }
  }
}
