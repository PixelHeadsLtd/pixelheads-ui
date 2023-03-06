import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {

  @Input() showBody: boolean;
  @Input() disabled: boolean;
  @Input() minWidth: number;
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
  @Input() customBgColor: string;
  @Input() clearPadding: boolean;
  @Input() verticalDisplay: boolean;
  @Input() verticalMinHeight: any;
  @Output() open = new EventEmitter<void>();

  onOpen(e: { stopPropagation: () => void; }) {
    if (this.disabled !== true) {
      this.open.emit();
      this.showBody = ! this.showBody;
      e.stopPropagation();
    }
  }

  constructor() { }

}
