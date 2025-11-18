import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'ph-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() buttonLabel: string = '';
  @Input() buttonText: string = '';
  @Input() buttonId: string = '';
  @Input() buttonClass: string = '';
  @Input() buttonType: string = 'button';
  @Input() disabled: boolean = false;
  @Input() fieldClass: string = '';
  @Input() buttonIcon: string = '';
  @Input() customIcons: boolean = false;
  @Input() buttonEnriched: boolean = false;
  @Input() showBtnMenu: boolean = false;
  @Input() buttonSplit: boolean = false;
  @Input() navBottom: boolean = false;
  @Input() iconName: string = '';
  @Input() title: string = '';
  @Input() iconColour: string = '';
  @Input() buttonLarge: boolean = false;
  @Input() buttonSummary: boolean = false;
  @Input() showDescription: boolean = false;
  @Input() status: string = '';
  @Input() level: number = 0;
  @Input() desc: any;
  @Input() showCount: boolean = false;
  @Input() count: number = 0;
  @Input() countColor: any;
  @Input() maxHeight: any;
  @Input() showLabel: boolean = false;
  @Input() customIconsRound: boolean = false;
  @Input() customIconsRoundOutlined: boolean = false;
  @Input() navLeftside: boolean = false;
  @Input() buttonDayPicker: boolean = false;

  @Output() buttonClick = new EventEmitter<Event>();

  public onButtonClick(e: Event) {
    e.stopPropagation();
    this.buttonClick.emit(e);
    this.showBtnMenu = false;
  }

  constructor(private elementRef: ElementRef) { }
  @HostListener('document:click', ['$event.target'])

  public onClick(targetElement:any) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
        this.showBtnMenu = false;
    }
  }

  public open() {
    this.showBtnMenu = true;
  }

  public close() {
    this.showBtnMenu = false;
  }

}
