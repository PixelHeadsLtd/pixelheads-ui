import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {

  @Input() showBody: boolean = false;
  @Input() disabled: boolean = false;
  @Input() iconsEnabled: boolean = false;
  @Input() minWidth: any;
  @Input() dragable: boolean = false;
  @Input() sectionId: string = '';
  @Input() accordionHeading: string = '';
  @Input() accordionId: string = '';
  @Input() iconName: string = '';
  @Input() accordionClean: boolean = false;
  @Input() fontAwesome: boolean = false;
  @Input() fontClassName: string = '';
  @Input() iconBgColor: string = '';
  @Input() customBgColor: string = '';
  @Input() clearPadding: boolean = false;
  @Input() verticalDisplay: boolean = false;
  @Input() verticalMinHeight: any;
  @Input() bespokeHeader: boolean = false;
  @Input() hideToggleIcon: boolean = false;
  @Input() toggleIconColor: string = '';
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() open = new EventEmitter<void>();

  onOpen(e: { stopPropagation: () => void; }) {
    e.stopPropagation();
    if (this.disabled !== true) {
      this.open.emit();
      this.showBody = ! this.showBody;
      e.stopPropagation();
    }
  }

  constructor() { }
}
