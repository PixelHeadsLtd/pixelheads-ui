import { Component, Input, HostListener, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = [[["", "call-to-action", ""]], [["", "custom-content", ""]]];
const _c1 = (a0, a1) => ({ "show-popover": a0, "btn-small": a1 });
const _c2 = a0 => ({ "z-index": a0 });
const _c3 = a0 => ({ "label-hidden": a0 });
const _c4 = a0 => ({ "top": a0, "bottom": "unset", "transform": "rotate(180deg)" });
const _c5 = () => ({});
const _c6 = (a0, a1, a2, a3, a4) => ({ "top": a0, "right": a1, "bottom": a2, "left": a3, "width": a4 });
const _c7 = ["[call-to-action]", "[custom-content]"];
export class PopoverComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.showPopover = false; // now exposed as api and not property - more flexible
        this.buttonClass = '';
        this.hideLabel = false;
        this.btnSmall = false;
        this.popoverTop = false;
        this.zIndex = 0;
        this.popoverVisibilityChanged = new EventEmitter();
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.showPopover = false;
            this.popoverVisibilityChanged.emit(this.showPopover);
        }
    }
    open() {
        this.showPopover = true;
        this.popoverVisibilityChanged.emit(this.showPopover);
    }
    close() {
        this.showPopover = false;
        this.popoverVisibilityChanged.emit(this.showPopover);
    }
    changeVisibility() {
        this.showPopover = !this.showPopover;
        this.popoverVisibilityChanged.emit(this.showPopover);
    }
    ngOnInit() {
        this.popoverVisibilityChanged.emit(this.showPopover);
    }
    static { this.ɵfac = function PopoverComponent_Factory(t) { return new (t || PopoverComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PopoverComponent, selectors: [["aa-popover"]], hostBindings: function PopoverComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function PopoverComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { buttonClass: "buttonClass", leftPos: "leftPos", topPos: "topPos", bottomPos: "bottomPos", rightPos: "rightPos", width: "width", hideLabel: "hideLabel", btnSmall: "btnSmall", popoverTop: "popoverTop", arrowPos: "arrowPos", zIndex: "zIndex" }, outputs: { popoverVisibilityChanged: "popoverVisibilityChanged" }, ngContentSelectors: _c7, decls: 6, vars: 21, consts: [[1, "aa-popover", 3, "ngClass", "ngStyle"], [1, "aa-popover-header", 3, "ngClass", "click"], [1, "arrow", 3, "ngStyle"], [1, "aa-popover-content", "feature-box", 3, "ngStyle"]], template: function PopoverComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵlistener("click", function PopoverComponent_Template_div_click_1_listener() { return ctx.changeVisibility(); });
            i0.ɵɵprojection(2);
            i0.ɵɵelement(3, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵprojection(5, 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c1, ctx.showPopover, ctx.btnSmall))("ngStyle", i0.ɵɵpureFunction1(8, _c2, ctx.showPopover ? ctx.zIndex : ""));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c3, ctx.hideLabel));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngStyle", ctx.popoverTop ? i0.ɵɵpureFunction1(12, _c4, ctx.arrowPos) : i0.ɵɵpureFunction0(14, _c5));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction5(15, _c6, ctx.topPos, ctx.rightPos, ctx.bottomPos, ctx.leftPos, ctx.width));
        } }, dependencies: [i1.NgClass, i1.NgStyle] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverComponent, [{
        type: Component,
        args: [{ selector: 'aa-popover', template: "<div\r\n  class=\"aa-popover\"\r\n  [ngClass]=\"{\r\n  'show-popover' : showPopover,\r\n  'btn-small' : btnSmall\r\n  }\"\r\n  [ngStyle]=\"{\r\n    'z-index' : showPopover ? zIndex : ''\r\n  }\"\r\n  >\r\n  <div class=\"aa-popover-header\" (click)=\"changeVisibility()\" [ngClass]=\"{'label-hidden' : hideLabel}\">\r\n    <ng-content select=\"[call-to-action]\"></ng-content>\r\n    <div\r\n      class=\"arrow\"\r\n      [ngStyle]=\"popoverTop ? {\r\n        'top' : arrowPos,\r\n        'bottom' : 'unset',\r\n        'transform' : 'rotate(180deg)'\r\n      } : {}\"\r\n    ></div>\r\n  </div>\r\n  <div\r\n    class=\"aa-popover-content feature-box\"\r\n    [ngStyle]=\"{\r\n    'top': topPos,\r\n    'right': rightPos, \r\n    'bottom': bottomPos,\r\n    'left': leftPos, \r\n    'width': width\r\n  }\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [{ type: i0.ElementRef }], { buttonClass: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], topPos: [{
            type: Input
        }], bottomPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], width: [{
            type: Input
        }], hideLabel: [{
            type: Input
        }], btnSmall: [{
            type: Input
        }], popoverTop: [{
            type: Input
        }], arrowPos: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], popoverVisibilityChanged: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PopoverComponent, { className: "PopoverComponent", filePath: "lib\\widgets\\popover\\popover.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBYyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQU96RyxNQUFNLE9BQU8sZ0JBQWdCO0lBaUIzQixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBZjFDLGdCQUFXLEdBQVksS0FBSyxDQUFDLENBQUMsc0RBQXNEO1FBQzNFLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBTXpCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFbEIsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUVuQixDQUFDO0lBR3hDLE9BQU8sQ0FBQyxhQUFrQjtRQUMvQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztpRkE1Q1UsZ0JBQWdCO29FQUFoQixnQkFBZ0I7dUdBQWhCLDBCQUFzQjs7O1lDUG5DLDhCQVNHLGFBQUE7WUFDOEIsMEZBQVMsc0JBQWtCLElBQUM7WUFDekQsa0JBQW1EO1lBQ25ELHlCQU9PO1lBQ1QsaUJBQU07WUFDTiw4QkFRRztZQUNELHFCQUFtRDtZQUNyRCxpQkFBTSxFQUFBOztZQTdCTixtRkFHRSwwRUFBQTtZQUswRCxjQUF3QztZQUF4QyxvRUFBd0M7WUFJaEcsZUFJTztZQUpQLGtIQUlPO1lBS1QsY0FNQTtZQU5BLHNIQU1BOzs7aUZEdEJTLGdCQUFnQjtjQUw1QixTQUFTOzJCQUNFLFlBQVk7MkNBT2IsV0FBVztrQkFBbkIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUVJLHdCQUF3QjtrQkFBakMsTUFBTTtZQUtBLE9BQU87a0JBRGIsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLGVBQWUsQ0FBQzs7a0ZBbkJ0QyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtcG9wb3ZlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BvcG92ZXIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBzaG93UG9wb3ZlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyBub3cgZXhwb3NlZCBhcyBhcGkgYW5kIG5vdCBwcm9wZXJ0eSAtIG1vcmUgZmxleGlibGVcclxuICBASW5wdXQoKSBidXR0b25DbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbGVmdFBvczogYW55O1xyXG4gIEBJbnB1dCgpIHRvcFBvczogYW55O1xyXG4gIEBJbnB1dCgpIGJvdHRvbVBvczogYW55O1xyXG4gIEBJbnB1dCgpIHJpZ2h0UG9zOiBhbnk7XHJcbiAgQElucHV0KCkgd2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBoaWRlTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBidG5TbWFsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHBvcG92ZXJUb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBhcnJvd1BvczogYW55O1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgQE91dHB1dCgpIHBvcG92ZXJWaXNpYmlsaXR5Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudC50YXJnZXQnXSlcclxuICBwdWJsaWMgb25DbGljayh0YXJnZXRFbGVtZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcclxuICAgIGlmICghY2xpY2tlZEluc2lkZSkge1xyXG4gICAgICB0aGlzLnNob3dQb3BvdmVyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucG9wb3ZlclZpc2liaWxpdHlDaGFuZ2VkLmVtaXQodGhpcy5zaG93UG9wb3Zlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbigpIHtcclxuICAgIHRoaXMuc2hvd1BvcG92ZXIgPSB0cnVlO1xyXG4gICAgdGhpcy5wb3BvdmVyVmlzaWJpbGl0eUNoYW5nZWQuZW1pdCh0aGlzLnNob3dQb3BvdmVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIHRoaXMuc2hvd1BvcG92ZXIgPSBmYWxzZTtcclxuICAgIHRoaXMucG9wb3ZlclZpc2liaWxpdHlDaGFuZ2VkLmVtaXQodGhpcy5zaG93UG9wb3Zlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlVmlzaWJpbGl0eSgpIHtcclxuICAgIHRoaXMuc2hvd1BvcG92ZXIgPSAhdGhpcy5zaG93UG9wb3ZlcjtcclxuICAgIHRoaXMucG9wb3ZlclZpc2liaWxpdHlDaGFuZ2VkLmVtaXQodGhpcy5zaG93UG9wb3Zlcik7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wb3BvdmVyVmlzaWJpbGl0eUNoYW5nZWQuZW1pdCh0aGlzLnNob3dQb3BvdmVyKTtcclxuICB9XHJcbn1cclxuXHJcbiIsIjxkaXZcclxuICBjbGFzcz1cImFhLXBvcG92ZXJcIlxyXG4gIFtuZ0NsYXNzXT1cIntcclxuICAnc2hvdy1wb3BvdmVyJyA6IHNob3dQb3BvdmVyLFxyXG4gICdidG4tc21hbGwnIDogYnRuU21hbGxcclxuICB9XCJcclxuICBbbmdTdHlsZV09XCJ7XHJcbiAgICAnei1pbmRleCcgOiBzaG93UG9wb3ZlciA/IHpJbmRleCA6ICcnXHJcbiAgfVwiXHJcbiAgPlxyXG4gIDxkaXYgY2xhc3M9XCJhYS1wb3BvdmVyLWhlYWRlclwiIChjbGljayk9XCJjaGFuZ2VWaXNpYmlsaXR5KClcIiBbbmdDbGFzc109XCJ7J2xhYmVsLWhpZGRlbicgOiBoaWRlTGFiZWx9XCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY2FsbC10by1hY3Rpb25dXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImFycm93XCJcclxuICAgICAgW25nU3R5bGVdPVwicG9wb3ZlclRvcCA/IHtcclxuICAgICAgICAndG9wJyA6IGFycm93UG9zLFxyXG4gICAgICAgICdib3R0b20nIDogJ3Vuc2V0JyxcclxuICAgICAgICAndHJhbnNmb3JtJyA6ICdyb3RhdGUoMTgwZGVnKSdcclxuICAgICAgfSA6IHt9XCJcclxuICAgID48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImFhLXBvcG92ZXItY29udGVudCBmZWF0dXJlLWJveFwiXHJcbiAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAndG9wJzogdG9wUG9zLFxyXG4gICAgJ3JpZ2h0JzogcmlnaHRQb3MsIFxyXG4gICAgJ2JvdHRvbSc6IGJvdHRvbVBvcyxcclxuICAgICdsZWZ0JzogbGVmdFBvcywgXHJcbiAgICAnd2lkdGgnOiB3aWR0aFxyXG4gIH1cIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjdXN0b20tY29udGVudF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=