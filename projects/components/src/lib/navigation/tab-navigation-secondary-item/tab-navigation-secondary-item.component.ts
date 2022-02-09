import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'aa-tab-navigation-secondary-item',
  templateUrl: './tab-navigation-secondary-item.component.html',
  styleUrls: ['./tab-navigation-secondary-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabNavigationSecondaryItemComponent implements OnInit {

  @Input() isActive: boolean;
  @Input() secondaryTabName: string;
  @Input() text = 'Click me';

  @Output() secondaryTabClick = new EventEmitter();

  public onClick(event: Event) {
    console.log('secondary tab clicked');
    this.secondaryTabClick.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
