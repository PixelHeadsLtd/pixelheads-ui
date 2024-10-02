import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-unauthorised',
  templateUrl: './unauthorised.component.html',
  styleUrls: ['./unauthorised.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnauthorisedComponent {

  constructor() { }

  @Input() title: string = '';
  @Input() strapline: string = '';
  @Input() straplineWidth: string = '';
}
