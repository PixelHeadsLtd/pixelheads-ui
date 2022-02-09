import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
@Component({
  selector: 'aa-accordion-fancy',
  templateUrl: './accordion-fancy.component.html',
  styleUrls: ['./accordion-fancy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AccordionFancyComponent implements OnInit {

  @Input() showBody: boolean;
  @Input() materialIcons: boolean;
  @Input() itemTitle: string;
  @Input() accordionId: string;
  @Input() iconName: string;
  @Input() iconColour: string;

  constructor() { }

  ngOnInit() {
  }

}
