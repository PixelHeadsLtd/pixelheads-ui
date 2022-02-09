import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aa-blade-footer',
  templateUrl: './blade-footer.component.html',
  styleUrls: ['./blade-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BladeFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
