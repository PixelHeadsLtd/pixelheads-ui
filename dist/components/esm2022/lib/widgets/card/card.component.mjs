import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2, a3) => ({ "z-index": a0, "top": a1, "left": a2, "right": a3 });
function CardComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 4)(1, "div", 5);
    i0.ɵɵelement(2, "img", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "h3", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 7);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 8);
    i0.ɵɵprojection(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(7, _c0, ctx_r0.zIndex, ctx_r0.topPos, ctx_r0.leftPos, ctx_r0.rightPos));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("alt", ctx_r0.cardName);
    i0.ɵɵproperty("src", ctx_r0.imgPath, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r0.cardName);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.cardName);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", ctx_r0.cardRole);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.cardRole);
} }
const _c1 = a0 => ({ "z-index": a0 });
const _c2 = (a0, a1) => ({ "border": a0, "background-color": a1 });
const _c3 = a0 => ({ "color": a0 });
function CardComponent_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 9)(1, "div", 10);
    i0.ɵɵprojection(2, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 11);
    i0.ɵɵlistener("click", function CardComponent_article_1_Template_div_click_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onCardClick($event)); });
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵelement(5, "img", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h3", 13);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 7);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵprojection(12, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(17, _c1, ctx_r1.zIndex));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(19, _c2, ".35rem solid " + ctx_r1.themeColour, ctx_r1.themeColour));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("alt", ctx_r1.cardName);
    i0.ɵɵproperty("src", ctx_r1.imgPath, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", ctx_r1.cardName);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(22, _c3, ctx_r1.themeColour));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.cardName.length > 14 ? i0.ɵɵpipeBind3(8, 9, ctx_r1.cardName, 0, 14) + "..." : ctx_r1.cardName);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r1.cardRole);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.cardRole.length > 37 ? i0.ɵɵpipeBind3(11, 13, ctx_r1.cardRole, 0, 37) + "..." : ctx_r1.cardRole);
} }
function CardComponent_button_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r6.iconName);
} }
function CardComponent_button_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵprojection(1, 4);
    i0.ɵɵelementEnd();
} }
function CardComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function CardComponent_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onCardClick($event)); });
    i0.ɵɵtemplate(1, CardComponent_button_2_div_1_Template, 2, 1, "div", 15)(2, CardComponent_button_2_div_2_Template, 2, 0, "div", 16);
    i0.ɵɵelementStart(3, "div")(4, "h5");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(6, 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("card-mini flex-align-center flex-start ", ctx_r2.borderClass, " box-shadow");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showAsIcon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showAsProfile);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.title);
} }
const _c4 = (a0, a1, a2, a3) => ({ "z-index": a0, "top": a1, "left": a2, "width": a3 });
function CardComponent_article_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 19)(1, "div", 5);
    i0.ɵɵelement(2, "img", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵprojection(4, 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(3, _c4, ctx_r3.zIndex, ctx_r3.topPos, ctx_r3.leftPos, ctx_r3.cardWidth));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("alt", ctx_r3.cardName);
    i0.ɵɵproperty("src", ctx_r3.imgPath, i0.ɵɵsanitizeUrl);
} }
const _c5 = [[["", "card-menu", ""]], [["", "card-menu-opt", ""]], [["", "card-hover-content", ""]], [["", "content", ""]], [["", "profile-image", ""]], [["", "card-detailed-content", ""]]];
const _c6 = ["[card-menu]", "[card-menu-opt]", "[card-hover-content]", "[content]", "[profile-image]", "[card-detailed-content]"];
export class CardComponent {
    onCardClick(e) {
        this.cardClick.emit(e);
        e.stopPropagation();
    }
    constructor() {
        this.cardName = '';
        this.cardRole = '';
        this.cardOptional = false;
        this.cardMini = false;
        this.cardDetailed = false;
        this.themeColour = '';
        this.zIndex = 0;
        this.showAsIcon = false;
        this.showAsProfile = false;
        this.iconName = '';
        this.borderClass = '';
        this.cardClick = new EventEmitter();
    }
    static { this.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["aa-card"]], inputs: { cardName: "cardName", cardRole: "cardRole", cardOptional: "cardOptional", cardMini: "cardMini", cardDetailed: "cardDetailed", cardWidth: "cardWidth", themeColour: "themeColour", zIndex: "zIndex", imgPath: "imgPath", title: "title", showAsIcon: "showAsIcon", showAsProfile: "showAsProfile", iconName: "iconName", borderClass: "borderClass", topPos: "topPos", rightPos: "rightPos", leftPos: "leftPos" }, outputs: { cardClick: "cardClick" }, ngContentSelectors: _c6, decls: 4, vars: 4, consts: [["class", "aa-card flex-group width-control box-shadow", 3, "ngStyle", 4, "ngIf"], ["class", "aa-card-opt box-shadow", 3, "ngStyle", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], ["class", "aa-card card-detailed flex-group flex-nowrap box-shadow", 3, "ngStyle", 4, "ngIf"], [1, "aa-card", "flex-group", "width-control", "box-shadow", 3, "ngStyle"], [1, "card-image", "fingerprint", "border-light"], ["onerror", "this.style.display='none'", 3, "alt", "src"], [3, "title"], [1, "aa-toolbar"], [1, "aa-card-opt", "box-shadow", 3, "ngStyle"], [1, "flex-group", "flex-end", "flex-align-center"], [1, "cursor-pointer", 3, "click"], [1, "card-image", "fingerprint", 3, "ngStyle"], [3, "title", "ngStyle"], [3, "click"], ["class", "material-icons", 4, "ngIf"], ["class", "card-image fingerprint", 4, "ngIf"], [1, "material-icons"], [1, "card-image", "fingerprint"], [1, "aa-card", "card-detailed", "flex-group", "flex-nowrap", "box-shadow", 3, "ngStyle"], [3, "alt", "src"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c5);
            i0.ɵɵtemplate(0, CardComponent_article_0_Template, 10, 12, "article", 0)(1, CardComponent_article_1_Template, 13, 24, "article", 1)(2, CardComponent_button_2_Template, 7, 6, "button", 2)(3, CardComponent_article_3_Template, 5, 8, "article", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.cardOptional && !ctx.cardMini && !ctx.cardDetailed);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.cardOptional);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.cardMini);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.cardDetailed);
        } }, dependencies: [i1.NgIf, i1.NgStyle, i1.SlicePipe], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{ selector: 'aa-card', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article \r\n  *ngIf=\"!cardOptional && !cardMini && !cardDetailed\" \r\n  class=\"aa-card flex-group width-control box-shadow\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex,\r\n    'top' : topPos,\r\n    'left' : leftPos,\r\n    'right' : rightPos\r\n  }\"\r\n>\r\n  <div class=\"card-image fingerprint border-light\">\r\n    <img onerror=\"this.style.display='none'\" alt=\"{{cardName}}\" [src]=\"imgPath\">\r\n  </div>\r\n  <div>\r\n    <h3 title=\"{{cardName}}\">{{cardName}}</h3>\r\n    <p title=\"{{cardRole}}\">{{cardRole}}</p>\r\n    <div class=\"aa-toolbar\">\r\n      <ng-content select=\"[card-menu]\"></ng-content>\r\n    </div>\r\n  </div>\r\n</article>\r\n\r\n<article \r\n  *ngIf=\"cardOptional\" \r\n  class=\"aa-card-opt box-shadow\" \r\n  [ngStyle]=\"{'z-index' : zIndex}\"\r\n>\r\n    <div class=\"flex-group flex-end flex-align-center\">\r\n      <ng-content select=\"[card-menu-opt]\"></ng-content>\r\n    </div>\r\n    <div class=\"cursor-pointer\" (click)=\"onCardClick($event)\">\r\n      <div class=\"card-image fingerprint\" [ngStyle]=\"{'border' : '.35rem solid ' +themeColour, 'background-color' : themeColour}\">\r\n        <img onerror=\"this.style.display='none'\" alt=\"{{cardName}}\" [src]=\"imgPath\">\r\n      </div>\r\n      <h3 title=\"{{cardName}}\" [ngStyle]=\"{'color' : themeColour }\">{{ (cardName.length>14)? (cardName | slice:0:14)+'...':(cardName) }}</h3>\r\n      <p title=\"{{cardRole}}\">{{ (cardRole.length>37)? (cardRole | slice:0:37)+'...':(cardRole) }}</p>\r\n    </div>\r\n    <ng-content select=\"[card-hover-content]\"></ng-content>\r\n</article>\r\n\r\n<button \r\n  *ngIf=\"cardMini\" \r\n  class=\"card-mini flex-align-center flex-start {{borderClass}} box-shadow\"\r\n  (click)=\"onCardClick($event)\"\r\n>\r\n  <div *ngIf=\"showAsIcon\" class=\"material-icons\">{{iconName}}</div>\r\n  <div *ngIf=\"showAsProfile\" class=\"card-image fingerprint\">\r\n    <ng-content select=\"[profile-image]\"></ng-content>\r\n  </div>\r\n  <div>\r\n    <h5>{{title}}</h5>\r\n    <ng-content select=\"[content]\"></ng-content>\r\n  </div>\r\n</button>\r\n\r\n<article \r\n  *ngIf=\"cardDetailed\" \r\n  class=\"aa-card card-detailed flex-group flex-nowrap box-shadow\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex,\r\n    'top' : topPos,\r\n    'left' : leftPos,\r\n    'width' : cardWidth\r\n  }\"\r\n>\r\n  <div class=\"card-image fingerprint border-light\">\r\n    <img alt=\"{{cardName}}\" [src]=\"imgPath\">\r\n  </div>\r\n  <div>\r\n    <ng-content select=\"[card-detailed-content]\"></ng-content>\r\n  </div>\r\n</article>\r\n" }]
    }], () => [], { cardName: [{
            type: Input
        }], cardRole: [{
            type: Input
        }], cardOptional: [{
            type: Input
        }], cardMini: [{
            type: Input
        }], cardDetailed: [{
            type: Input
        }], cardWidth: [{
            type: Input
        }], themeColour: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], imgPath: [{
            type: Input
        }], title: [{
            type: Input
        }], showAsIcon: [{
            type: Input
        }], showAsProfile: [{
            type: Input
        }], iconName: [{
            type: Input
        }], borderClass: [{
            type: Input
        }], topPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], cardClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "lib\\widgets\\card\\card.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvY2FyZC9jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQWhHLGtDQVNDLGFBQUE7SUFFRyx5QkFBNEU7SUFDOUUsaUJBQU07SUFDTiwyQkFBSyxZQUFBO0lBQ3NCLFlBQVk7SUFBQSxpQkFBSztJQUMxQyw0QkFBd0I7SUFBQSxZQUFZO0lBQUEsaUJBQUk7SUFDeEMsOEJBQXdCO0lBQ3RCLGtCQUE4QztJQUNoRCxpQkFBTSxFQUFBLEVBQUE7OztJQWZSLG1IQUtFO0lBR3lDLGVBQWtCO0lBQWxCLGdEQUFrQjtJQUFDLHNEQUFlO0lBR3ZFLGVBQW9CO0lBQXBCLGtEQUFvQjtJQUFDLGNBQVk7SUFBWixxQ0FBWTtJQUNsQyxjQUFvQjtJQUFwQixrREFBb0I7SUFBQyxjQUFZO0lBQVoscUNBQVk7Ozs7Ozs7SUFPeEMsa0NBSUMsY0FBQTtJQUVLLHFCQUFrRDtJQUNwRCxpQkFBTTtJQUNOLCtCQUEwRDtJQUE5QixpS0FBUyxlQUFBLDBCQUFtQixDQUFBLElBQUM7SUFDdkQsK0JBQTRIO0lBQzFILHlCQUE0RTtJQUM5RSxpQkFBTTtJQUNOLDhCQUE4RDtJQUFBLFlBQW9FOztJQUFBLGlCQUFLO0lBQ3ZJLDRCQUF3QjtJQUFBLGFBQW9FOztJQUFBLGlCQUFJLEVBQUE7SUFFbEcsc0JBQXVEO0lBQzNELGlCQUFVOzs7SUFiUixvRUFBZ0M7SUFNUSxlQUF1RjtJQUF2RiwrR0FBdUY7SUFDaEYsY0FBa0I7SUFBbEIsZ0RBQWtCO0lBQUMsc0RBQWU7SUFFekUsY0FBb0I7SUFBcEIsa0RBQW9CO0lBQUMseUVBQW9DO0lBQUMsY0FBb0U7SUFBcEUsMEhBQW9FO0lBQy9ILGVBQW9CO0lBQXBCLGtEQUFvQjtJQUFDLGNBQW9FO0lBQXBFLDRIQUFvRTs7O0lBVWhHLCtCQUErQztJQUFBLFlBQVk7SUFBQSxpQkFBTTs7O0lBQWxCLGNBQVk7SUFBWixxQ0FBWTs7O0lBQzNELCtCQUEwRDtJQUN4RCxxQkFBa0Q7SUFDcEQsaUJBQU07Ozs7SUFSUixrQ0FJQztJQURDLG1LQUFTLGVBQUEsMEJBQW1CLENBQUEsSUFBQztJQUU3Qix3RUFBaUUsMkRBQUE7SUFJakUsMkJBQUssU0FBQTtJQUNDLFlBQVM7SUFBQSxpQkFBSztJQUNsQixxQkFBNEM7SUFDOUMsaUJBQU0sRUFBQTs7O0lBVk4sdUdBQXlFO0lBR25FLGNBQWdCO0lBQWhCLHdDQUFnQjtJQUNoQixjQUFtQjtJQUFuQiwyQ0FBbUI7SUFJbkIsZUFBUztJQUFULGtDQUFTOzs7O0lBS2pCLG1DQVNDLGFBQUE7SUFFRywwQkFBd0M7SUFDMUMsaUJBQU07SUFDTiwyQkFBSztJQUNILHFCQUEwRDtJQUM1RCxpQkFBTSxFQUFBOzs7SUFaTixvSEFLRTtJQUdLLGVBQWtCO0lBQWxCLGdEQUFrQjtJQUFDLHNEQUFlOzs7O0FEMUQzQyxNQUFNLE9BQU8sYUFBYTtJQXNCakIsV0FBVyxDQUFDLENBQVE7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDtRQXpCUyxhQUFRLEdBQVksRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUt4QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQU9oQyxDQUFDOzhFQTNCTixhQUFhO29FQUFiLGFBQWE7O1lDUjFCLHdFQW9CVSwyREFBQSx1REFBQSx5REFBQTs7WUFuQlAsOEVBQWlEO1lBc0JqRCxjQUFrQjtZQUFsQix1Q0FBa0I7WUFrQmxCLGNBQWM7WUFBZCxtQ0FBYztZQWVkLGNBQWtCO1lBQWxCLHVDQUFrQjs7O2lGRGhEUixhQUFhO2NBTnpCLFNBQVM7MkJBQ0UsU0FBUyxtQkFHRix1QkFBdUIsQ0FBQyxNQUFNO29CQUl0QyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFFSSxTQUFTO2tCQUFsQixNQUFNOztrRkFwQkksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1jYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgY2FyZE5hbWU6IHN0cmluZyAgPSAnJztcclxuICBASW5wdXQoKSBjYXJkUm9sZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY2FyZE9wdGlvbmFsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY2FyZE1pbmk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBjYXJkRGV0YWlsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBjYXJkV2lkdGg6IGFueTtcclxuICBASW5wdXQoKSB0aGVtZUNvbG91cjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIGltZ1BhdGg6IGFueTtcclxuICBASW5wdXQoKSB0aXRsZTogYW55O1xyXG4gIEBJbnB1dCgpIHNob3dBc0ljb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93QXNQcm9maWxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGJvcmRlckNsYXNzOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0b3BQb3M6IGFueTtcclxuICBASW5wdXQoKSByaWdodFBvczogYW55O1xyXG4gIEBJbnB1dCgpIGxlZnRQb3M6IGFueTtcclxuXHJcbiAgQE91dHB1dCgpIGNhcmRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcblxyXG4gIHB1YmxpYyBvbkNhcmRDbGljayhlOiBFdmVudCkge1xyXG4gICAgdGhpcy5jYXJkQ2xpY2suZW1pdChlKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iLCI8YXJ0aWNsZSBcclxuICAqbmdJZj1cIiFjYXJkT3B0aW9uYWwgJiYgIWNhcmRNaW5pICYmICFjYXJkRGV0YWlsZWRcIiBcclxuICBjbGFzcz1cImFhLWNhcmQgZmxleC1ncm91cCB3aWR0aC1jb250cm9sIGJveC1zaGFkb3dcIiBcclxuICBbbmdTdHlsZV09XCJ7XHJcbiAgICAnei1pbmRleCcgOiB6SW5kZXgsXHJcbiAgICAndG9wJyA6IHRvcFBvcyxcclxuICAgICdsZWZ0JyA6IGxlZnRQb3MsXHJcbiAgICAncmlnaHQnIDogcmlnaHRQb3NcclxuICB9XCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlIGZpbmdlcnByaW50IGJvcmRlci1saWdodFwiPlxyXG4gICAgPGltZyBvbmVycm9yPVwidGhpcy5zdHlsZS5kaXNwbGF5PSdub25lJ1wiIGFsdD1cInt7Y2FyZE5hbWV9fVwiIFtzcmNdPVwiaW1nUGF0aFwiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8aDMgdGl0bGU9XCJ7e2NhcmROYW1lfX1cIj57e2NhcmROYW1lfX08L2gzPlxyXG4gICAgPHAgdGl0bGU9XCJ7e2NhcmRSb2xlfX1cIj57e2NhcmRSb2xlfX08L3A+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWEtdG9vbGJhclwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY2FyZC1tZW51XVwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2FydGljbGU+XHJcblxyXG48YXJ0aWNsZSBcclxuICAqbmdJZj1cImNhcmRPcHRpb25hbFwiIFxyXG4gIGNsYXNzPVwiYWEtY2FyZC1vcHQgYm94LXNoYWRvd1wiIFxyXG4gIFtuZ1N0eWxlXT1cInsnei1pbmRleCcgOiB6SW5kZXh9XCJcclxuPlxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXgtZ3JvdXAgZmxleC1lbmQgZmxleC1hbGlnbi1jZW50ZXJcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NhcmQtbWVudS1vcHRdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIiAoY2xpY2spPVwib25DYXJkQ2xpY2soJGV2ZW50KVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZSBmaW5nZXJwcmludFwiIFtuZ1N0eWxlXT1cInsnYm9yZGVyJyA6ICcuMzVyZW0gc29saWQgJyArdGhlbWVDb2xvdXIsICdiYWNrZ3JvdW5kLWNvbG9yJyA6IHRoZW1lQ29sb3VyfVwiPlxyXG4gICAgICAgIDxpbWcgb25lcnJvcj1cInRoaXMuc3R5bGUuZGlzcGxheT0nbm9uZSdcIiBhbHQ9XCJ7e2NhcmROYW1lfX1cIiBbc3JjXT1cImltZ1BhdGhcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMyB0aXRsZT1cInt7Y2FyZE5hbWV9fVwiIFtuZ1N0eWxlXT1cInsnY29sb3InIDogdGhlbWVDb2xvdXIgfVwiPnt7IChjYXJkTmFtZS5sZW5ndGg+MTQpPyAoY2FyZE5hbWUgfCBzbGljZTowOjE0KSsnLi4uJzooY2FyZE5hbWUpIH19PC9oMz5cclxuICAgICAgPHAgdGl0bGU9XCJ7e2NhcmRSb2xlfX1cIj57eyAoY2FyZFJvbGUubGVuZ3RoPjM3KT8gKGNhcmRSb2xlIHwgc2xpY2U6MDozNykrJy4uLic6KGNhcmRSb2xlKSB9fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NhcmQtaG92ZXItY29udGVudF1cIj48L25nLWNvbnRlbnQ+XHJcbjwvYXJ0aWNsZT5cclxuXHJcbjxidXR0b24gXHJcbiAgKm5nSWY9XCJjYXJkTWluaVwiIFxyXG4gIGNsYXNzPVwiY2FyZC1taW5pIGZsZXgtYWxpZ24tY2VudGVyIGZsZXgtc3RhcnQge3tib3JkZXJDbGFzc319IGJveC1zaGFkb3dcIlxyXG4gIChjbGljayk9XCJvbkNhcmRDbGljaygkZXZlbnQpXCJcclxuPlxyXG4gIDxkaXYgKm5nSWY9XCJzaG93QXNJY29uXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7aWNvbk5hbWV9fTwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJzaG93QXNQcm9maWxlXCIgY2xhc3M9XCJjYXJkLWltYWdlIGZpbmdlcnByaW50XCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbcHJvZmlsZS1pbWFnZV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxoNT57e3RpdGxlfX08L2g1PlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2J1dHRvbj5cclxuXHJcbjxhcnRpY2xlIFxyXG4gICpuZ0lmPVwiY2FyZERldGFpbGVkXCIgXHJcbiAgY2xhc3M9XCJhYS1jYXJkIGNhcmQtZGV0YWlsZWQgZmxleC1ncm91cCBmbGV4LW5vd3JhcCBib3gtc2hhZG93XCIgXHJcbiAgW25nU3R5bGVdPVwie1xyXG4gICAgJ3otaW5kZXgnIDogekluZGV4LFxyXG4gICAgJ3RvcCcgOiB0b3BQb3MsXHJcbiAgICAnbGVmdCcgOiBsZWZ0UG9zLFxyXG4gICAgJ3dpZHRoJyA6IGNhcmRXaWR0aFxyXG4gIH1cIlxyXG4+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2UgZmluZ2VycHJpbnQgYm9yZGVyLWxpZ2h0XCI+XHJcbiAgICA8aW1nIGFsdD1cInt7Y2FyZE5hbWV9fVwiIFtzcmNdPVwiaW1nUGF0aFwiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY2FyZC1kZXRhaWxlZC1jb250ZW50XVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9hcnRpY2xlPlxyXG4iXX0=