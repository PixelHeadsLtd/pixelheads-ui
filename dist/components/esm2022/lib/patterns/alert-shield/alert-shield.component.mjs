import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "small": a0, "nowrap": a1 });
const _c1 = a0 => ({ "display": a0 });
function AlertShieldComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "span", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("alert-shield ", ctx_r0.alertShieldStatus, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c0, ctx_r0.alertShieldSmall, ctx_r0.noWrap));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(9, _c1, ctx_r0.hideLabel ? "none" : "inline"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.alertShieldText, " ");
} }
function AlertShieldComponent_div_1_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.tooltipHeading);
} }
const _c2 = (a0, a1, a2, a3) => ({ "tooltip-top-left": a0, "tooltip-top-right": a1, "tooltip-bottom-left": a2, "tooltip-bottom-right": a3 });
const _c3 = a0 => ({ "min-width": a0 });
function AlertShieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 4);
    i0.ɵɵtemplate(2, AlertShieldComponent_div_1_h4_2_Template, 2, 1, "h4", 6);
    i0.ɵɵprojection(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 3)(5, "span", 4);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(12, _c2, ctx_r1.tooltipTopLeft, ctx_r1.tooltipTopRight, ctx_r1.tooltipBottomLeft, ctx_r1.tooltipBottomRight));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("alert-shield-tooltip ", ctx_r1.alertShieldStatus, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(17, _c3, ctx_r1.minWidth));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showTooltipHeading);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("alert-shield ", ctx_r1.alertShieldStatus, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(19, _c0, ctx_r1.alertShieldSmall, ctx_r1.noWrap));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(22, _c1, ctx_r1.hideLabel ? "none" : "inline"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.alertShieldText, " ");
} }
function AlertShieldComponent_div_2_div_2_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r5.tooltipHeading);
} }
function AlertShieldComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, AlertShieldComponent_div_2_div_2_h4_1_Template, 2, 1, "h4", 6);
    i0.ɵɵprojection(2, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r4.minWidth));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.showTooltipHeading);
} }
const _c4 = (a0, a1, a2, a3) => ({ "small": a0, "nowrap": a1, "icon-only": a2, "rotate": a3 });
const _c5 = (a0, a1) => ({ "material-icons": a0, "material-icons-outlined": a1 });
function AlertShieldComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 3);
    i0.ɵɵtemplate(2, AlertShieldComponent_div_2_div_2_Template, 3, 4, "div", 8);
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 4);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(10, _c2, ctx_r2.tooltipTopLeft, ctx_r2.tooltipTopRight, ctx_r2.tooltipBottomLeft, ctx_r2.tooltipBottomRight));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("\n            flex-group \n            flex-align-center \n            flex-start \n            custom-alert-shield-container\n            ", ctx_r2.shieldColour, "\n        ");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(15, _c4, ctx_r2.alertShieldSmall, ctx_r2.noWrap, ctx_r2.iconOnly, ctx_r2.enableRotation));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(20, _c5, !ctx_r2.iconOutlined, ctx_r2.iconOutlined));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.iconName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(23, _c1, ctx_r2.hideLabel ? "none" : "inline"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.alertShieldText, " ");
} }
const _c6 = [[["", "tooltip-content", ""]], [["", "custom-tooltip-content", ""]]];
const _c7 = ["[tooltip-content]", "[custom-tooltip-content]"];
export class AlertShieldComponent {
    constructor() {
        this.alertShieldStatus = '';
        this.alertShieldText = '';
        this.showTooltip = false;
        this.showTooltipHeading = false;
        this.tooltipHeading = '';
        this.alertShieldSmall = false;
        this.noWrap = false;
        this.hideLabel = false;
        this.tooltipTopLeft = false;
        this.tooltipTopRight = false;
        this.tooltipBottomLeft = false;
        this.tooltipBottomRight = false;
        this.customShield = false;
        this.iconName = '';
        this.iconOutlined = false;
        this.bgRedLight = false;
        this.bgRedDark = false;
        this.bgGreenLight = false;
        this.bgGreenDark = false;
        this.bgOrangeLight = false;
        this.bgOrangeDark = false;
        this.bgBlueLight = false;
        this.bgBlueDark = false;
        this.bgGreyLight = false;
        this.bgGreyDark = false;
        this.iconOnly = false;
        this.enableRotation = false;
    }
    static { this.ɵfac = function AlertShieldComponent_Factory(t) { return new (t || AlertShieldComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertShieldComponent, selectors: [["aa-alert-shield"]], inputs: { alertShieldStatus: "alertShieldStatus", alertShieldText: "alertShieldText", showTooltip: "showTooltip", showTooltipHeading: "showTooltipHeading", tooltipHeading: "tooltipHeading", minWidth: "minWidth", alertShieldSmall: "alertShieldSmall", noWrap: "noWrap", hideLabel: "hideLabel", tooltipTopLeft: "tooltipTopLeft", tooltipTopRight: "tooltipTopRight", tooltipBottomLeft: "tooltipBottomLeft", tooltipBottomRight: "tooltipBottomRight", customShield: "customShield", iconName: "iconName", iconOutlined: "iconOutlined", bgRedLight: "bgRedLight", bgRedDark: "bgRedDark", bgGreenLight: "bgGreenLight", bgGreenDark: "bgGreenDark", bgOrangeLight: "bgOrangeLight", bgOrangeDark: "bgOrangeDark", bgBlueLight: "bgBlueLight", bgBlueDark: "bgBlueDark", bgGreyLight: "bgGreyLight", bgGreyDark: "bgGreyDark", shieldColour: "shieldColour", iconOnly: "iconOnly", enableRotation: "enableRotation" }, ngContentSelectors: _c7, decls: 3, vars: 3, consts: [[3, "class", "ngClass", 4, "ngIf"], ["class", "alert-shield-tooltip-wrapper", 3, "ngClass", 4, "ngIf"], ["class", "custom-alert-shield", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngStyle"], [1, "alert-shield-tooltip-wrapper", 3, "ngClass"], [4, "ngIf"], [1, "custom-alert-shield", 3, "ngClass"], ["class", "alert-shield-tooltip", 3, "ngStyle", 4, "ngIf"], [1, "alert-shield-tooltip", 3, "ngStyle"]], template: function AlertShieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c6);
            i0.ɵɵtemplate(0, AlertShieldComponent_div_0_Template, 3, 11, "div", 0)(1, AlertShieldComponent_div_1_Template, 7, 24, "div", 1)(2, AlertShieldComponent_div_2_Template, 7, 25, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.showTooltip && !ctx.customShield);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showTooltip && !ctx.customShield);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customShield);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertShieldComponent, [{
        type: Component,
        args: [{ selector: 'aa-alert-shield', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \r\n    *ngIf=\"!showTooltip && !customShield\" \r\n    class=\"alert-shield {{alertShieldStatus}}\" \r\n    [ngClass]=\"{\r\n        'small' : alertShieldSmall, \r\n        'nowrap' : noWrap \r\n        }\"\r\n    >\r\n    <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n        {{alertShieldText}}\r\n    </span>\r\n</div>\r\n\r\n<div \r\n    *ngIf=\"showTooltip && !customShield\" \r\n    class=\"alert-shield-tooltip-wrapper\"\r\n    [ngClass]=\"{\r\n        'tooltip-top-left' : tooltipTopLeft,\r\n        'tooltip-top-right' : tooltipTopRight,\r\n        'tooltip-bottom-left' : tooltipBottomLeft,\r\n        'tooltip-bottom-right' : tooltipBottomRight\r\n    }\"\r\n>\r\n    <div \r\n        class=\"alert-shield-tooltip {{alertShieldStatus}}\"\r\n        [ngStyle]=\"{'min-width' : minWidth}\"\r\n    >\r\n        <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n        <ng-content select=\"[tooltip-content]\"></ng-content>\r\n    </div>\r\n    <div \r\n        class=\"alert-shield {{alertShieldStatus}}\" \r\n        [ngClass]=\"{\r\n            'small' : alertShieldSmall, \r\n            'nowrap' : noWrap \r\n            }\"\r\n        >\r\n            <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n                {{alertShieldText}}\r\n            </span>\r\n    </div>\r\n</div>\r\n\r\n<div \r\n    *ngIf=\"customShield\" \r\n    class=\"custom-alert-shield\"\r\n    [ngClass]=\"{\r\n        'tooltip-top-left' : tooltipTopLeft,\r\n        'tooltip-top-right' : tooltipTopRight,\r\n        'tooltip-bottom-left' : tooltipBottomLeft,\r\n        'tooltip-bottom-right' : tooltipBottomRight\r\n    }\"\r\n>\r\n    <div \r\n        class=\"\r\n            flex-group \r\n            flex-align-center \r\n            flex-start \r\n            custom-alert-shield-container\r\n            {{shieldColour}}\r\n        \"\r\n        [ngClass]=\"{\r\n            'small' : alertShieldSmall,\r\n            'nowrap' : noWrap,\r\n            'icon-only' : iconOnly,\r\n            'rotate' : enableRotation\r\n        }\"\r\n      >\r\n        <div \r\n            *ngIf=\"showTooltip\"\r\n            class=\"alert-shield-tooltip\"\r\n            [ngStyle]=\"{'min-width' : minWidth}\"\r\n        >\r\n            <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n            <ng-content select=\"[custom-tooltip-content]\"></ng-content>\r\n        </div>\r\n        <div \r\n            [ngClass]=\"{\r\n                'material-icons' : !iconOutlined,\r\n                'material-icons-outlined' : iconOutlined\r\n            }\">\r\n            {{iconName}}\r\n        </div>\r\n        <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n            {{alertShieldText}}\r\n        </span>\r\n    </div>\r\n</div>" }]
    }], () => [], { alertShieldStatus: [{
            type: Input
        }], alertShieldText: [{
            type: Input
        }], showTooltip: [{
            type: Input
        }], showTooltipHeading: [{
            type: Input
        }], tooltipHeading: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], alertShieldSmall: [{
            type: Input
        }], noWrap: [{
            type: Input
        }], hideLabel: [{
            type: Input
        }], tooltipTopLeft: [{
            type: Input
        }], tooltipTopRight: [{
            type: Input
        }], tooltipBottomLeft: [{
            type: Input
        }], tooltipBottomRight: [{
            type: Input
        }], customShield: [{
            type: Input
        }], iconName: [{
            type: Input
        }], iconOutlined: [{
            type: Input
        }], bgRedLight: [{
            type: Input
        }], bgRedDark: [{
            type: Input
        }], bgGreenLight: [{
            type: Input
        }], bgGreenDark: [{
            type: Input
        }], bgOrangeLight: [{
            type: Input
        }], bgOrangeDark: [{
            type: Input
        }], bgBlueLight: [{
            type: Input
        }], bgBlueDark: [{
            type: Input
        }], bgGreyLight: [{
            type: Input
        }], bgGreyDark: [{
            type: Input
        }], shieldColour: [{
            type: Input
        }], iconOnly: [{
            type: Input
        }], enableRotation: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertShieldComponent, { className: "AlertShieldComponent", filePath: "lib\\patterns\\alert-shield\\alert-shield.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtc2hpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hbGVydC1zaGllbGQvYWxlcnQtc2hpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hbGVydC1zaGllbGQvYWxlcnQtc2hpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNBMUUsOEJBT0ssY0FBQTtJQUVHLFlBQ0o7SUFBQSxpQkFBTyxFQUFBOzs7SUFSUCx3RUFBMEM7SUFDMUMsNEZBR007SUFFQSxjQUF3RDtJQUF4RCwwRkFBd0Q7SUFDMUQsY0FDSjtJQURJLHVEQUNKOzs7SUFpQkksMEJBQStCO0lBQUEsWUFBa0I7SUFBQSxpQkFBSzs7O0lBQXZCLGNBQWtCO0lBQWxCLDJDQUFrQjs7Ozs7SUFkekQsOEJBU0MsYUFBQTtJQUtPLHlFQUFzRDtJQUN0RCxrQkFBb0Q7SUFDeEQsaUJBQU07SUFDTiw4QkFNSyxjQUFBO0lBRU8sWUFDSjtJQUFBLGlCQUFPLEVBQUEsRUFBQTs7O0lBdkJmLHlKQUtFO0lBR0UsY0FBa0Q7SUFBbEQsZ0ZBQWtEO0lBQ2xELHNFQUFvQztJQUUvQixjQUF3QjtJQUF4QixnREFBd0I7SUFJN0IsZUFBMEM7SUFBMUMsd0VBQTBDO0lBQzFDLDZGQUdNO0lBRUksY0FBd0Q7SUFBeEQsMkZBQXdEO0lBQzFELGNBQ0o7SUFESSx1REFDSjs7O0lBa0NBLDBCQUErQjtJQUFBLFlBQWtCO0lBQUEsaUJBQUs7OztJQUF2QixjQUFrQjtJQUFsQiwyQ0FBa0I7OztJQUxyRCw4QkFJQztJQUNHLCtFQUFzRDtJQUN0RCxxQkFBMkQ7SUFDL0QsaUJBQU07OztJQUpGLHFFQUFvQztJQUUvQixjQUF3QjtJQUF4QixnREFBd0I7Ozs7O0lBOUJ6Qyw4QkFTQyxhQUFBO0lBZ0JPLDJFQU9NO0lBQ04sOEJBSU87SUFDSCxZQUNKO0lBQUEsaUJBQU07SUFDTiwrQkFBK0Q7SUFDM0QsWUFDSjtJQUFBLGlCQUFPLEVBQUEsRUFBQTs7O0lBdkNYLHlKQUtFO0lBR0UsY0FNQztJQU5ELDJNQU1DO0lBQ0QscUlBS0U7SUFHRyxjQUFpQjtJQUFqQix5Q0FBaUI7SUFRbEIsY0FHRTtJQUhGLGdHQUdFO0lBQ0YsY0FDSjtJQURJLGdEQUNKO0lBQ00sY0FBd0Q7SUFBeEQsMkZBQXdEO0lBQzFELGNBQ0o7SUFESSx1REFDSjs7OztBRDdFUixNQUFNLE9BQU8sb0JBQW9CO0lBaUMvQjtRQS9CUyxzQkFBaUIsR0FBVyxFQUFFLENBQUM7UUFDL0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRTVCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUVwQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixtQkFBYyxHQUFZLEtBQUssQ0FBQztJQUV6QixDQUFDO3FGQWpDTixvQkFBb0I7b0VBQXBCLG9CQUFvQjs7WUNSakMsc0VBV00seURBQUEseURBQUE7O1lBVkQsNERBQW1DO1lBYW5DLGNBQWtDO1lBQWxDLDJEQUFrQztZQThCbEMsY0FBa0I7WUFBbEIsdUNBQWtCOzs7aUZEcENWLG9CQUFvQjtjQU5oQyxTQUFTOzJCQUNFLGlCQUFpQixtQkFHVix1QkFBdUIsQ0FBQyxNQUFNO29CQUl0QyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBRUcsWUFBWTtrQkFBcEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSzs7a0ZBL0JLLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWFsZXJ0LXNoaWVsZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LXNoaWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtc2hpZWxkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0U2hpZWxkQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgYWxlcnRTaGllbGRTdGF0dXM6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGFsZXJ0U2hpZWxkVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc2hvd1Rvb2x0aXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93VG9vbHRpcEhlYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0b29sdGlwSGVhZGluZzogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbWluV2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBhbGVydFNoaWVsZFNtYWxsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbm9XcmFwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGlkZUxhYmVsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdG9vbHRpcFRvcExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0b29sdGlwVG9wUmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0b29sdGlwQm90dG9tTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBCb3R0b21SaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBjdXN0b21TaGllbGQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaWNvbk91dGxpbmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYmdSZWRMaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJnUmVkRGFyazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJnR3JlZW5MaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJnR3JlZW5EYXJrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYmdPcmFuZ2VMaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJnT3JhbmdlRGFyazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJnQmx1ZUxpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYmdCbHVlRGFyazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJnR3JleUxpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYmdHcmV5RGFyazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNoaWVsZENvbG91cjogYW55O1xyXG4gIEBJbnB1dCgpIGljb25Pbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZW5hYmxlUm90YXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCI8ZGl2IFxyXG4gICAgKm5nSWY9XCIhc2hvd1Rvb2x0aXAgJiYgIWN1c3RvbVNoaWVsZFwiIFxyXG4gICAgY2xhc3M9XCJhbGVydC1zaGllbGQge3thbGVydFNoaWVsZFN0YXR1c319XCIgXHJcbiAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgJ3NtYWxsJyA6IGFsZXJ0U2hpZWxkU21hbGwsIFxyXG4gICAgICAgICdub3dyYXAnIDogbm9XcmFwIFxyXG4gICAgICAgIH1cIlxyXG4gICAgPlxyXG4gICAgPHNwYW4gW25nU3R5bGVdPVwieyAnZGlzcGxheSc6IGhpZGVMYWJlbCA/ICdub25lJyA6ICdpbmxpbmUnIH1cIj5cclxuICAgICAgICB7e2FsZXJ0U2hpZWxkVGV4dH19XHJcbiAgICA8L3NwYW4+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBcclxuICAgICpuZ0lmPVwic2hvd1Rvb2x0aXAgJiYgIWN1c3RvbVNoaWVsZFwiIFxyXG4gICAgY2xhc3M9XCJhbGVydC1zaGllbGQtdG9vbHRpcC13cmFwcGVyXCJcclxuICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAndG9vbHRpcC10b3AtbGVmdCcgOiB0b29sdGlwVG9wTGVmdCxcclxuICAgICAgICAndG9vbHRpcC10b3AtcmlnaHQnIDogdG9vbHRpcFRvcFJpZ2h0LFxyXG4gICAgICAgICd0b29sdGlwLWJvdHRvbS1sZWZ0JyA6IHRvb2x0aXBCb3R0b21MZWZ0LFxyXG4gICAgICAgICd0b29sdGlwLWJvdHRvbS1yaWdodCcgOiB0b29sdGlwQm90dG9tUmlnaHRcclxuICAgIH1cIlxyXG4+XHJcbiAgICA8ZGl2IFxyXG4gICAgICAgIGNsYXNzPVwiYWxlcnQtc2hpZWxkLXRvb2x0aXAge3thbGVydFNoaWVsZFN0YXR1c319XCJcclxuICAgICAgICBbbmdTdHlsZV09XCJ7J21pbi13aWR0aCcgOiBtaW5XaWR0aH1cIlxyXG4gICAgPlxyXG4gICAgICAgIDxoNCAqbmdJZj1cInNob3dUb29sdGlwSGVhZGluZ1wiPnt7dG9vbHRpcEhlYWRpbmd9fTwvaDQ+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Rvb2x0aXAtY29udGVudF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3M9XCJhbGVydC1zaGllbGQge3thbGVydFNoaWVsZFN0YXR1c319XCIgXHJcbiAgICAgICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICAgICAnc21hbGwnIDogYWxlcnRTaGllbGRTbWFsbCwgXHJcbiAgICAgICAgICAgICdub3dyYXAnIDogbm9XcmFwIFxyXG4gICAgICAgICAgICB9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIFtuZ1N0eWxlXT1cInsgJ2Rpc3BsYXknOiBoaWRlTGFiZWwgPyAnbm9uZScgOiAnaW5saW5lJyB9XCI+XHJcbiAgICAgICAgICAgICAgICB7e2FsZXJ0U2hpZWxkVGV4dH19XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgXHJcbiAgICAqbmdJZj1cImN1c3RvbVNoaWVsZFwiIFxyXG4gICAgY2xhc3M9XCJjdXN0b20tYWxlcnQtc2hpZWxkXCJcclxuICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAndG9vbHRpcC10b3AtbGVmdCcgOiB0b29sdGlwVG9wTGVmdCxcclxuICAgICAgICAndG9vbHRpcC10b3AtcmlnaHQnIDogdG9vbHRpcFRvcFJpZ2h0LFxyXG4gICAgICAgICd0b29sdGlwLWJvdHRvbS1sZWZ0JyA6IHRvb2x0aXBCb3R0b21MZWZ0LFxyXG4gICAgICAgICd0b29sdGlwLWJvdHRvbS1yaWdodCcgOiB0b29sdGlwQm90dG9tUmlnaHRcclxuICAgIH1cIlxyXG4+XHJcbiAgICA8ZGl2IFxyXG4gICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdXAgXHJcbiAgICAgICAgICAgIGZsZXgtYWxpZ24tY2VudGVyIFxyXG4gICAgICAgICAgICBmbGV4LXN0YXJ0IFxyXG4gICAgICAgICAgICBjdXN0b20tYWxlcnQtc2hpZWxkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICB7e3NoaWVsZENvbG91cn19XHJcbiAgICAgICAgXCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgICAgICdzbWFsbCcgOiBhbGVydFNoaWVsZFNtYWxsLFxyXG4gICAgICAgICAgICAnbm93cmFwJyA6IG5vV3JhcCxcclxuICAgICAgICAgICAgJ2ljb24tb25seScgOiBpY29uT25seSxcclxuICAgICAgICAgICAgJ3JvdGF0ZScgOiBlbmFibGVSb3RhdGlvblxyXG4gICAgICAgIH1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgKm5nSWY9XCJzaG93VG9vbHRpcFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYWxlcnQtc2hpZWxkLXRvb2x0aXBcIlxyXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJ7J21pbi13aWR0aCcgOiBtaW5XaWR0aH1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGg0ICpuZ0lmPVwic2hvd1Rvb2x0aXBIZWFkaW5nXCI+e3t0b29sdGlwSGVhZGluZ319PC9oND5cclxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2N1c3RvbS10b29sdGlwLWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgICAgICdtYXRlcmlhbC1pY29ucycgOiAhaWNvbk91dGxpbmVkLFxyXG4gICAgICAgICAgICAgICAgJ21hdGVyaWFsLWljb25zLW91dGxpbmVkJyA6IGljb25PdXRsaW5lZFxyXG4gICAgICAgICAgICB9XCI+XHJcbiAgICAgICAgICAgIHt7aWNvbk5hbWV9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIFtuZ1N0eWxlXT1cInsgJ2Rpc3BsYXknOiBoaWRlTGFiZWwgPyAnbm9uZScgOiAnaW5saW5lJyB9XCI+XHJcbiAgICAgICAgICAgIHt7YWxlcnRTaGllbGRUZXh0fX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+Il19