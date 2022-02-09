import { ChangeDetectionStrategy, EventEmitter, Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'aa-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouritesComponent implements OnInit {

  @Input() isFavourite: boolean;
  @Input() favouritesTitle: string;
  @Input() favouritesText: string;

  @Output() favClick = new EventEmitter();
  @Output() anchorClick = new EventEmitter();

  public onFavClick(event: Event) {
    this.favClick.emit(event);
  }

  public onAnchorClick(event: Event) {
    this.anchorClick.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
