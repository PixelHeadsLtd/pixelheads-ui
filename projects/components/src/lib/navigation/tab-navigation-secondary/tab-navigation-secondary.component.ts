import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'aa-tab-navigation-secondary',
  templateUrl: './tab-navigation-secondary.component.html',
  styleUrls: ['./tab-navigation-secondary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabNavigationSecondaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
