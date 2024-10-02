import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent  {

  @Input() leftPos: any;
  @Input() zIndex: number = 0;
  @Input() colorClass: string = '';

  constructor() { }

}
