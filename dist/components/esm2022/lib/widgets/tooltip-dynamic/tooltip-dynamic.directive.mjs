import { Directive, HostListener, Input } from '@angular/core';
import { TooltipDynamicComponent } from './tooltip-dynamic.component';
import { TooltipDynamicPosition } from './tooltip-dynamic.enums';
import * as i0 from "@angular/core";
export class TooltipDynamicDirective {
    constructor(elementRef, appRef, componentFactoryResolver, injector) {
        this.elementRef = elementRef;
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.aaTooltip = '';
        this.position = TooltipDynamicPosition.DEFAULT;
        this.showDelay = 0;
        this.hideDelay = 0;
        this.componentRef = null;
    }
    onMouseEnter() {
        this.initializeTooltip();
    }
    onMouseLeave() {
        this.setHideTooltipTimeout();
    }
    onMouseMove($event) {
        if (this.componentRef !== null && this.position === TooltipDynamicPosition.DYNAMIC) {
            this.componentRef.instance.left = $event.clientX;
            this.componentRef.instance.top = $event.clientY;
            this.componentRef.instance.tooltip = this.aaTooltip;
        }
    }
    onTouchStart($event) {
        $event.preventDefault();
        window.clearTimeout(this.touchTimeout);
        this.touchTimeout = window.setTimeout(this.initializeTooltip.bind(this), 500);
    }
    onTouchEnd() {
        window.clearTimeout(this.touchTimeout);
        this.setHideTooltipTimeout();
    }
    initializeTooltip() {
        if (this.componentRef === null) {
            window.clearInterval(this.hideDelay);
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipDynamicComponent);
            this.componentRef = componentFactory.create(this.injector);
            this.appRef.attachView(this.componentRef.hostView);
            const [tooltipDOMElement] = this.componentRef.hostView.rootNodes;
            this.setTooltipComponentProperties();
            document.body.appendChild(tooltipDOMElement);
            this.showTimeout = window.setTimeout(this.showTooltip.bind(this), this.showDelay);
        }
    }
    setTooltipComponentProperties() {
        if (this.componentRef !== null) {
            this.componentRef.instance.tooltip = this.aaTooltip;
            this.componentRef.instance.position = this.position;
            const { left, right, top, bottom } = this.elementRef.nativeElement.getBoundingClientRect();
            switch (this.position) {
                case TooltipDynamicPosition.BELOW: {
                    this.componentRef.instance.left = Math.round((right - left) / 2 + left);
                    this.componentRef.instance.top = Math.round(bottom);
                    break;
                }
                case TooltipDynamicPosition.ABOVE: {
                    this.componentRef.instance.left = Math.round((right - left) / 2 + left);
                    this.componentRef.instance.top = Math.round(top);
                    break;
                }
                case TooltipDynamicPosition.RIGHT: {
                    this.componentRef.instance.left = Math.round(right);
                    this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
                    break;
                }
                case TooltipDynamicPosition.LEFT: {
                    this.componentRef.instance.left = Math.round(left);
                    this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
    showTooltip() {
        if (this.componentRef !== null) {
            this.componentRef.instance.visible = true;
        }
    }
    setHideTooltipTimeout() {
        this.hideTimeout = window.setTimeout(this.destroy.bind(this), this.hideDelay);
    }
    ngOnDestroy() {
        this.destroy();
    }
    destroy() {
        if (this.componentRef !== null) {
            window.clearInterval(this.showTimeout);
            window.clearInterval(this.hideDelay);
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
    static { this.ɵfac = function TooltipDynamicDirective_Factory(t) { return new (t || TooltipDynamicDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ApplicationRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Injector)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TooltipDynamicDirective, selectors: [["", "aaTooltip", ""]], hostBindings: function TooltipDynamicDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function TooltipDynamicDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function TooltipDynamicDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("mousemove", function TooltipDynamicDirective_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); })("touchstart", function TooltipDynamicDirective_touchstart_HostBindingHandler($event) { return ctx.onTouchStart($event); })("touchend", function TooltipDynamicDirective_touchend_HostBindingHandler() { return ctx.onTouchEnd(); });
        } }, inputs: { aaTooltip: "aaTooltip", position: "position", showDelay: "showDelay", hideDelay: "hideDelay" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipDynamicDirective, [{
        type: Directive,
        args: [{
                selector: '[aaTooltip]'
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Injector }], { aaTooltip: [{
            type: Input
        }], position: [{
            type: Input
        }], showDelay: [{
            type: Input
        }], hideDelay: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], onMouseMove: [{
            type: HostListener,
            args: ['mousemove', ['$event']]
        }], onTouchStart: [{
            type: HostListener,
            args: ['touchstart', ['$event']]
        }], onTouchEnd: [{
            type: HostListener,
            args: ['touchend']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1keW5hbWljLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL3Rvb2x0aXAtZHluYW1pYy90b29sdGlwLWR5bmFtaWMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFJTCxTQUFTLEVBR1QsWUFBWSxFQUVaLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFLakUsTUFBTSxPQUFPLHVCQUF1QjtJQVlsQyxZQUFvQixVQUFzQixFQUFVLE1BQXNCLEVBQVUsd0JBQWtELEVBQVUsUUFBa0I7UUFBOUksZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFWekosY0FBUyxHQUFvQixFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUEyQixzQkFBc0IsQ0FBQyxPQUFPLENBQUM7UUFDbEUsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFFZixpQkFBWSxHQUE2QixJQUFJLENBQUM7SUFLK0csQ0FBQztJQUd0SyxZQUFZO1FBQ1YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBR0QsV0FBVyxDQUFDLE1BQWtCO1FBQzVCLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxzQkFBc0IsQ0FBQyxPQUFPLEVB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RUFBRSxDQUFDLFFBQVEsQ0FBQztZQVF0QyxVQUFVO2tCQURULFlBQVk7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb29sdGlwRHluYW1pY0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC1keW5hbWljLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvb2x0aXBEeW5hbWljUG9zaXRpb24gfSBmcm9tICcuL3Rvb2x0aXAtZHluYW1pYy5lbnVtcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thYVRvb2x0aXBdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcER5bmFtaWNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBhYVRvb2x0aXA6IHN0cmluZyB8IHN0cmluZ1tdPScnO1xyXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBUb29sdGlwRHluYW1pY1Bvc2l0aW9uID0gVG9vbHRpcER5bmFtaWNQb3NpdGlvbi5ERUZBVUxUO1xyXG4gIEBJbnB1dCgpIHNob3dEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgaGlkZURlbGF5ID0gMDtcclxuXHJcbiAgcHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzaG93VGltZW91dD86IG51bWJlcjtcclxuICBwcml2YXRlIGhpZGVUaW1lb3V0PzogbnVtYmVyO1xyXG4gIHByaXZhdGUgdG91Y2hUaW1lb3V0PzogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZiwgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxyXG4gIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZVRvb2x0aXAoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0SGlkZVRvb2x0aXBUaW1lb3V0KCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZW1vdmUnLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2VNb3ZlKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmICE9PSBudWxsICYmIHRoaXMucG9zaXRpb24gPT09IFRvb2x0aXBEeW5hbWljUG9zaXRpb24uRFlOQU1JQykge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5sZWZ0ID0gJGV2ZW50LmNsaWVudFg7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRvcCA9ICRldmVudC5jbGllbnRZO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS50b29sdGlwID0gdGhpcy5hYVRvb2x0aXA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSlcclxuICBvblRvdWNoU3RhcnQoJGV2ZW50OiBUb3VjaEV2ZW50KTogdm9pZCB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpO1xyXG4gICAgdGhpcy50b3VjaFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmluaXRpYWxpemVUb29sdGlwLmJpbmQodGhpcyksIDUwMCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd0b3VjaGVuZCcpXHJcbiAgb25Ub3VjaEVuZCgpOiB2b2lkIHtcclxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpO1xyXG4gICAgdGhpcy5zZXRIaWRlVG9vbHRpcFRpbWVvdXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVRvb2x0aXAoKSB7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYgPT09IG51bGwpIHtcclxuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5oaWRlRGVsYXkpO1xyXG4gICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoVG9vbHRpcER5bmFtaWNDb21wb25lbnQpO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG5cclxuICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICAgIGNvbnN0IFt0b29sdGlwRE9NRWxlbWVudF0gPSAodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2RlcztcclxuXHJcbiAgICAgIHRoaXMuc2V0VG9vbHRpcENvbXBvbmVudFByb3BlcnRpZXMoKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9vbHRpcERPTUVsZW1lbnQpO1xyXG4gICAgICB0aGlzLnNob3dUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5zaG93VG9vbHRpcC5iaW5kKHRoaXMpLCB0aGlzLnNob3dEZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRvb2x0aXBDb21wb25lbnRQcm9wZXJ0aWVzKCkge1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRvb2x0aXAgPSB0aGlzLmFhVG9vbHRpcDtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xyXG5cclxuICAgICAgY29uc3Qge2xlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbX0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIHN3aXRjaCAodGhpcy5wb3NpdGlvbikge1xyXG4gICAgICAgIGNhc2UgVG9vbHRpcER5bmFtaWNQb3NpdGlvbi5CRUxPVzoge1xyXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UubGVmdCA9IE1hdGgucm91bmQoKHJpZ2h0IC0gbGVmdCkgLyAyICsgbGVmdCk7XHJcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS50b3AgPSBNYXRoLnJvdW5kKGJvdHRvbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBUb29sdGlwRHluYW1pY1Bvc2l0aW9uLkFCT1ZFOiB7XHJcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5sZWZ0ID0gTWF0aC5yb3VuZCgocmlnaHQgLSBsZWZ0KSAvIDIgKyBsZWZ0KTtcclxuICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRvcCA9IE1hdGgucm91bmQodG9wKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFRvb2x0aXBEeW5hbWljUG9zaXRpb24uUklHSFQ6IHtcclxuICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmxlZnQgPSBNYXRoLnJvdW5kKHJpZ2h0KTtcclxuICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRvcCA9IE1hdGgucm91bmQodG9wICsgKGJvdHRvbSAtIHRvcCkgLyAyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFRvb2x0aXBEeW5hbWljUG9zaXRpb24uTEVGVDoge1xyXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UubGVmdCA9IE1hdGgucm91bmQobGVmdCk7XHJcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS50b3AgPSBNYXRoLnJvdW5kKHRvcCArIChib3R0b20gLSB0b3ApIC8gMik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dUb29sdGlwKCkge1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRIaWRlVG9vbHRpcFRpbWVvdXQoKSB7XHJcbiAgICB0aGlzLmhpZGVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5kZXN0cm95LmJpbmQodGhpcyksIHRoaXMuaGlkZURlbGF5KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmICE9PSBudWxsKSB7XHJcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuc2hvd1RpbWVvdXQpO1xyXG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmhpZGVEZWxheSk7XHJcbiAgICAgIHRoaXMuYXBwUmVmLmRldGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19