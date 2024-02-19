import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-custom-wrapper',
  templateUrl: './custom-wrapper.component.html',
  styleUrls: ['./custom-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomWrapperComponent  {

  @Input() boxShadow: boolean = false;
  @Input() paddingSize: any;
  @Input() borderRadius: any;
  @Input() minWidth: any;
  @Input() maxWidth: any;
  @Input() minHeight: any;
  @Input() maxHeight: any;
  @Input() zIndex: number = 0;
  @Input() borderWidth: any;
  @Input() borderStyle: string = '';
  @Input() borderColour: any;
  @Input() backgroundColour: any;
  @Input() marginBottom: any;
  @Input() enableScrolling: boolean = false;
}
