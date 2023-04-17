import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aa-graphic',
  templateUrl: './graphic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
