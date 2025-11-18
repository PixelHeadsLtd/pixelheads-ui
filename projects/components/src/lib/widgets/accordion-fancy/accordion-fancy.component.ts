import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
  selector: 'ph-accordion-fancy',
  templateUrl: './accordion-fancy.component.html',
  styleUrls: ['./accordion-fancy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AccordionFancyComponent  {

  @Input() showBody: boolean = false;
  @Input() materialIcons: boolean = false;
  @Input() itemTitle: string = '';
  @Input() accordionId: string = '';
  @Input() iconName: string = '';
  @Input() iconColour: string = '';

  constructor() { }


}
