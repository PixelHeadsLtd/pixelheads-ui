import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
