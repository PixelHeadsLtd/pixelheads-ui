import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  @Input() leftPos: number;
  @Input() zIndex: number;
  @Input() colorClass: string;

  constructor() { }

  ngOnInit() {
  }

}
