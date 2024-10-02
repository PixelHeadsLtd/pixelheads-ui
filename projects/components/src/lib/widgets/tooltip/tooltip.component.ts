import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'aa-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  @Input() setMinWidth: any;
  @Input() setMaxWidth: any;
  @Input() isSuccess: boolean = false;
  @Input() isInfo: boolean = false;
  @Input() isWarning: boolean = false;
  @Input() includeLabel: boolean = false;
  @Input() includeLegend: boolean = false;
  @Input() labelName: string = '';
  @Input() isError: boolean = false;
  @Input() xpos: string = '';
  @Input() ypos: string = '';
  @Input() customIcon: boolean = false;
  @Input() iconName: string = '';
  @Input() zIndex: number = 0;
  @Input() labelFor: string = '';
  @Input() showAsAnchor: boolean = false;
  @Input() tooltipAnchor: any;
  @Input() preventAnchorWrapping: boolean = false;
  @Input() showAsButton: boolean = false;
  @Input() buttonText: string = '';
  @Input() buttonId: string = '';
  @Input() buttonClass: string = '';
  @Input() disabled: boolean = false;
  @Input() showTooltipOnClick: boolean = false;
  @Input() showTooltipOnHover: boolean = false;
  @Input() tooltipClicked: boolean = false;
  @Input() tooltipBtnText: string = '';

  @Input() hoverStayOpen: boolean = false;
  toggleTooltip: boolean = false;
  @Input() isHovered: boolean = false;
  @Output() buttonClick = new EventEmitter<Event>();
  hasInteracted: boolean = false;
  isPopupClosed: boolean = false;

  constructor(private elementRef: ElementRef) { }
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement:any) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.toggleTooltip = false;
      this.isPopupClosed = true;
      this.tooltipClicked = false
    }
  }

  public onButtonClick(e: Event) {
    e.stopPropagation();
    this.buttonClick.emit(e);
  }

  onMouseOver() {
    this.hasInteracted = true;
    this.isPopupClosed = false;
    this.toggleTooltip = true;
  }  

  onMouseOut() {
    this.toggleTooltip = true;
  }  

  closePopup(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault(); 
    this.toggleTooltip = false;
    this.isPopupClosed = true;
  }

  togglePopup(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.hasInteracted = true;
    this.isPopupClosed = !this.isPopupClosed;
    this.toggleTooltip = !this.isPopupClosed;
  }  

  onPopupClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (targetElement.tagName.toLowerCase() === 'a') {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
  }

  onIconClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.toggleTooltip = true;
  }

}
