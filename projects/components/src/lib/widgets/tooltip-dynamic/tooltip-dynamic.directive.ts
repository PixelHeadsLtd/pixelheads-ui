import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  ViewContainerRef,
  Injector,
  ComponentRef,
  Renderer2,
  ChangeDetectorRef
} from '@angular/core';
import { TooltipDynamicComponent } from './tooltip-dynamic.component';
import { TooltipDynamicPosition } from './tooltip-dynamic.enums';

@Directive({
  selector: '[phTooltip]'
})
export class TooltipDynamicDirective implements OnDestroy {
  @Input() phTooltip: string | string[] = '';
  @Input() position: TooltipDynamicPosition = TooltipDynamicPosition.DEFAULT;
  @Input() tooltipWidth: string = 'auto';
  @Input() tooltipStatus: string = '';

  private _showDelay = 300;
  @Input() set showDelay(value: number) {
    this._showDelay = value ?? 300;
  }
  get showDelay(): number {
    return this._showDelay;
  }

  private _hideDelay = 500;
  @Input() set hideDelay(value: number) {
    this._hideDelay = value ?? 500;
  }
  get hideDelay(): number {
    return this._hideDelay;
  }

  private componentRef: ComponentRef<TooltipDynamicComponent> | null = null;
  private showTimeout?: number;
  private hideTimeout?: number;
  private touchTimeout?: number;

  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.initializeTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setHideTooltipTimeout();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.componentRef && this.position === TooltipDynamicPosition.DYNAMIC) {
      this.componentRef.instance.left = event.clientX;
      this.componentRef.instance.top = event.clientY;
      this.componentRef.instance.tooltip = this.phTooltip;
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    event.preventDefault();
    window.clearTimeout(this.touchTimeout);
    this.touchTimeout = window.setTimeout(() => this.initializeTooltip(), 500);
  }

  @HostListener('touchend')
  onTouchEnd(): void {
    window.clearTimeout(this.touchTimeout);
    this.setHideTooltipTimeout();
  }

  private initializeTooltip() {
    if (this.componentRef === null) {
      window.clearTimeout(this.hideTimeout);

      const componentFactory = this.viewContainerRef.createComponent(TooltipDynamicComponent, { injector: this.injector });
      this.componentRef = componentFactory;

      this.setTooltipComponentProperties();

      const componentElement = this.componentRef.location.nativeElement;
      document.body.appendChild(componentElement);

      this.showTimeout = window.setTimeout(() => this.showTooltip(), this.showDelay);
    }
  }

  private setTooltipComponentProperties() {
    if (this.componentRef) {
      const instance = this.componentRef.instance as TooltipDynamicComponent;
      instance.tooltip = this.phTooltip;
      instance.position = this.position;
      instance.tooltipWidth = this.tooltipWidth;
      instance.tooltipStatus = this.tooltipStatus;

      const { left, right, top, bottom } = this.elementRef.nativeElement.getBoundingClientRect();

      switch (this.position) {
        case TooltipDynamicPosition.BELOW: {
          instance.left = Math.round((right - left) / 2 + left);
          instance.top = Math.round(bottom);
          break;
        }
        case TooltipDynamicPosition.ABOVE: {
          instance.left = Math.round((right - left) / 2 + left);
          instance.top = Math.round(top);
          break;
        }
        case TooltipDynamicPosition.RIGHT: {
          instance.left = Math.round(right);
          instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        case TooltipDynamicPosition.LEFT: {
          instance.left = Math.round(left);
          instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  private showTooltip() {
    if (this.componentRef) {
      const instance = this.componentRef.instance as TooltipDynamicComponent;
      instance.showTooltip();
    }
  }

  private setHideTooltipTimeout() {
    if (this.componentRef) {
      const instance = this.componentRef.instance as TooltipDynamicComponent;
      instance.hideTooltipWithDelay(this.hideDelay);
      this.hideTimeout = window.setTimeout(() => this.destroy(), this.hideDelay + 300);
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  private destroy(): void {
    if (this.componentRef) {
      window.clearTimeout(this.showTimeout);
      window.clearTimeout(this.hideTimeout);
      if (this.componentRef.location.nativeElement) {
        document.body.removeChild(this.componentRef.location.nativeElement);
      }
      this.componentRef = null;
    }
  }
}
