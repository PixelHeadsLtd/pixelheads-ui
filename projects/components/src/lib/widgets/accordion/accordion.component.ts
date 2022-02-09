import { ChangeDetectionStrategy, Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit {

  @Input() showBody: boolean;
  @Input() disabled: boolean;
  @Input() iconsEnabled: boolean;
  @Input() dragable: boolean;
  @Input() sectionId: string;
  @Input() accordionHeading: string;
  @Input() accordionId: string;
  @Input() iconName: string;
  @Input() accordionClean: boolean;
  @Input() fontAwesome: boolean;
  @Input() fontClassName: string;
  @Input() iconBgColor: string;
  @Output() open = new EventEmitter<void>();

  onOpen(e: { stopPropagation: () => void; }) {
    if (this.disabled !== true) {
      this.open.emit();
      this.showBody = ! this.showBody;
      e.stopPropagation();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
