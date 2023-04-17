import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-unauthorised',
  templateUrl: './unauthorised.component.html',
  styleUrls: ['./unauthorised.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnauthorisedComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() strapline: string;
  @Input() straplineWidth: string;

  ngOnInit(): void {
  }

}
