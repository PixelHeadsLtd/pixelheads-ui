import { Component, ChangeDetectionStrategy, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'aa-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouritesListComponent implements OnInit {

  @Input() isFavourite: boolean;
  @Input() itemAnchorTitle: string;
  @Input() itemAnchor: string;
  @Input() itemDescription: string;

  @Input() text = 'Click me';

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
