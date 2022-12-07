import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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
  @Input() setHeight: boolean;
  @Input() eleHeight: number;
  @Input() enableAnimation: boolean;
  @Output() open = new EventEmitter<void>();
  @ViewChild('myIdentifier') myIdentifier: ElementRef;

  onOpen(e: { stopPropagation: () => void; }) {
    if (this.disabled !== true) {
      this.open.emit();
      this.showBody = ! this.showBody;
      e.stopPropagation();
    }
    if (this.disabled !== true && this.showBody && this.enableAnimation) {
        this.setHeight = true;
        this.eleHeight = this.myIdentifier.nativeElement.offsetHeight;
        console.log('Height ' + this.eleHeight);
    } else {
      this.eleHeight = 0;
    }
  }

  constructor() { }

}
