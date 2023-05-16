import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'aa-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() buttonText: string;
  @Input() buttonId: string;
  @Input() buttonClass: string;
  @Input() buttonType = 'button';
  @Input() disabled: boolean;
  @Input() fieldClass: string;
  @Input() buttonIcon: string;
  @Input() customIcons: boolean;
  @Input() buttonEnriched: boolean;
  @Input() showBtnMenu: boolean;
  @Input() buttonSplit: boolean;
  @Input() iconName: string;
  @Input() title: string;
  @Input() iconColour: string;
  @Input() buttonLarge: boolean;
  @Input() buttonSummary: boolean;
  @Input() showDescription: boolean;
  @Input() status: string;
  @Input() level: number;
  @Input() desc: any;
  @Input() showCount: boolean;
  @Input() count: number;
  @Input() countColor: any;
  @Input() maxHeight: any;
  @Input() showLabel: boolean;
  @Input() customIconsRound: boolean;
  @Input() navLeftside: boolean;

  @Output() buttonClick = new EventEmitter<Event>();

  public onButtonClick(e: Event) {
    e.stopPropagation();
    this.buttonClick.emit(e);
  }

  constructor(private elementRef: ElementRef) { }
  @HostListener('document:click', ['$event.target'])

  public onClick(targetElement) {
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

  ngOnInit() {
  }
}
