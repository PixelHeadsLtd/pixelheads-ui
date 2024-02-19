import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "left": a0 });
function ProjectTourComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("arrow-top ", ctx_r1.arrowClass, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c0, ctx_r1.arrowPos));
} }
const _c1 = a0 => ({ "top": a0 });
function ProjectTourComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("arrow-right ", ctx_r2.arrowClass, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c1, ctx_r2.arrowPos));
} }
function ProjectTourComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("arrow-bottom ", ctx_r3.arrowClass, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c0, ctx_r3.arrowPos));
} }
function ProjectTourComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("arrow-left ", ctx_r4.arrowClass, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c1, ctx_r4.arrowPos));
} }
function ProjectTourComponent_div_3_h3_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r5.tourModeHeading);
} }
const _c2 = (a0, a1, a2, a3, a4, a5) => ({ "width": a0, "top": a1, "right": a2, "bottom": a3, "left": a4, "z-index": a5 });
const _c3 = a0 => ({ "z-index": a0 });
function ProjectTourComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 3);
    i0.ɵɵtemplate(2, ProjectTourComponent_div_3_div_2_Template, 1, 6, "div", 4)(3, ProjectTourComponent_div_3_div_3_Template, 1, 6, "div", 4)(4, ProjectTourComponent_div_3_div_4_Template, 1, 6, "div", 4)(5, ProjectTourComponent_div_3_div_5_Template, 1, 6, "div", 4);
    i0.ɵɵelementStart(6, "div", 5);
    i0.ɵɵtemplate(7, ProjectTourComponent_div_3_h3_7_Template, 2, 1, "h3", 2);
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 6);
    i0.ɵɵprojection(11, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(12, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction6(8, _c2, ctx_r0.panelWidth, ctx_r0.topPos, ctx_r0.rightPos, ctx_r0.bottomPos, ctx_r0.leftPos, ctx_r0.zIndex + 1));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.arrowTop);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.arrowRight);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.arrowBottom);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.arrowLeft);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.enableHeading);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.tourModeBody, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(15, _c3, ctx_r0.zIndex));
} }
const _c4 = [[["", "nested-component", ""]], [["", "tour-navigation", ""]]];
const _c5 = a0 => ({ "tour-active": a0 });
const _c6 = a1 => ({ "position": "relative", "z-index": a1 });
const _c7 = () => ({});
const _c8 = ["[nested-component]", "[tour-navigation]"];
export class ProjectTourComponent {
    constructor() {
        this.tourMode = false;
        this.enableHeading = false;
        this.tourModeHeading = '';
        this.tourModeBody = '';
        this.arrowTop = false;
        this.arrowRight = false;
        this.arrowBottom = false;
        this.arrowLeft = false;
        this.arrowClass = '';
        this.zIndex = 0;
    }
    static { this.ɵfac = function ProjectTourComponent_Factory(t) { return new (t || ProjectTourComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProjectTourComponent, selectors: [["aa-project-tour"]], inputs: { tourMode: "tourMode", enableHeading: "enableHeading", tourModeHeading: "tourModeHeading", tourModeBody: "tourModeBody", topPos: "topPos", rightPos: "rightPos", bottomPos: "bottomPos", leftPos: "leftPos", panelWidth: "panelWidth", arrowPos: "arrowPos", arrowTop: "arrowTop", arrowRight: "arrowRight", arrowBottom: "arrowBottom", arrowLeft: "arrowLeft", arrowClass: "arrowClass", zIndex: "zIndex" }, ngContentSelectors: _c8, decls: 4, vars: 8, consts: [[1, "position-relative"], [3, "ngClass", "ngStyle"], [4, "ngIf"], [1, "tour-mode-info", 3, "ngStyle"], [3, "class", "ngStyle", 4, "ngIf"], [1, "tour-content"], [1, "tour-navigation", "flex-group", "flex-column"], [1, "tour-mode-overlay", 3, "ngStyle"], [3, "ngStyle"]], template: function ProjectTourComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c4);
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, ProjectTourComponent_div_3_Template, 13, 17, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c5, ctx.tourMode))("ngStyle", ctx.tourMode ? i0.ɵɵpureFunction1(5, _c6, ctx.zIndex + 1) : i0.ɵɵpureFunction0(7, _c7));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.tourMode);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProjectTourComponent, [{
        type: Component,
        args: [{ selector: 'aa-project-tour', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"position-relative\">\r\n    <div [ngClass]=\"{'tour-active' : tourMode}\" [ngStyle]=\"tourMode ? {'position' : 'relative', 'z-index' : zIndex+1} : {}\">\r\n        <ng-content select=\"[nested-component]\"></ng-content>\r\n    </div>\r\n    <div *ngIf=\"tourMode\">\r\n      <div class=\"tour-mode-info\"\r\n          [ngStyle]=\"{\r\n              'width' : panelWidth,\r\n              'top' : topPos,\r\n              'right' : rightPos,\r\n              'bottom' : bottomPos,\r\n              'left' : leftPos,\r\n              'z-index' : zIndex+1\r\n          }\">\r\n\r\n          <div *ngIf=\"arrowTop\" class=\"arrow-top {{arrowClass}}\" [ngStyle]=\"{'left' : arrowPos}\"></div>\r\n          <div *ngIf=\"arrowRight\" class=\"arrow-right {{arrowClass}}\" [ngStyle]=\"{'top' : arrowPos}\"></div>\r\n          <div *ngIf=\"arrowBottom\" class=\"arrow-bottom {{arrowClass}}\" [ngStyle]=\"{'left' : arrowPos}\"></div>\r\n          <div *ngIf=\"arrowLeft\" class=\"arrow-left {{arrowClass}}\" [ngStyle]=\"{'top' : arrowPos}\"></div>\r\n\r\n          <div class=\"tour-content\">\r\n            <h3 *ngIf=\"enableHeading\">{{tourModeHeading}}</h3>\r\n            <p>\r\n              {{tourModeBody}}\r\n            </p>\r\n          </div>\r\n          <div class=\"tour-navigation flex-group flex-column\">\r\n            <ng-content select=\"[tour-navigation]\"></ng-content>\r\n          </div>\r\n        </div>\r\n      <div class=\"tour-mode-overlay\" [ngStyle]=\"{'z-index':zIndex}\"></div>\r\n    </div>\r\n</div>\r\n" }]
    }], () => [], { tourMode: [{
            type: Input
        }], enableHeading: [{
            type: Input
        }], tourModeHeading: [{
            type: Input
        }], tourModeBody: [{
            type: Input
        }], topPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], bottomPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], panelWidth: [{
            type: Input
        }], arrowPos: [{
            type: Input
        }], arrowTop: [{
            type: Input
        }], arrowRight: [{
            type: Input
        }], arrowBottom: [{
            type: Input
        }], arrowLeft: [{
            type: Input
        }], arrowClass: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProjectTourComponent, { className: "ProjectTourComponent", filePath: "lib\\layout\\project-tour\\project-tour.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC10b3VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvcHJvamVjdC10b3VyL3Byb2plY3QtdG91ci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L3Byb2plY3QtdG91ci9wcm9qZWN0LXRvdXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDZWhFLHlCQUE2Rjs7O0lBQXZFLDhEQUFnQztJQUFDLHFFQUErQjs7OztJQUN0Rix5QkFBZ0c7OztJQUF4RSxnRUFBa0M7SUFBQyxxRUFBOEI7OztJQUN6Rix5QkFBbUc7OztJQUExRSxpRUFBbUM7SUFBQyxxRUFBK0I7OztJQUM1Rix5QkFBOEY7OztJQUF2RSwrREFBaUM7SUFBQyxxRUFBOEI7OztJQUdyRiwwQkFBMEI7SUFBQSxZQUFtQjtJQUFBLGlCQUFLOzs7SUFBeEIsY0FBbUI7SUFBbkIsNENBQW1COzs7OztJQWpCckQsMkJBQXNCLGFBQUE7SUFXaEIsMkVBQTZGLDhEQUFBLDhEQUFBLDhEQUFBO0lBSzdGLDhCQUEwQjtJQUN4Qix5RUFBa0Q7SUFDbEQseUJBQUc7SUFDRCxZQUNGO0lBQUEsaUJBQUksRUFBQTtJQUVOLCtCQUFvRDtJQUNsRCxzQkFBb0Q7SUFDdEQsaUJBQU0sRUFBQTtJQUVWLDBCQUFvRTtJQUN0RSxpQkFBTTs7O0lBekJBLGNBT0U7SUFQRiw0SkFPRTtJQUVJLGNBQWM7SUFBZCxzQ0FBYztJQUNkLGNBQWdCO0lBQWhCLHdDQUFnQjtJQUNoQixjQUFpQjtJQUFqQix5Q0FBaUI7SUFDakIsY0FBZTtJQUFmLHVDQUFlO0lBR2QsZUFBbUI7SUFBbkIsMkNBQW1CO0lBRXRCLGVBQ0Y7SUFERSxvREFDRjtJQU15QixlQUE4QjtJQUE5QixvRUFBOEI7Ozs7Ozs7QUR0Qm5FLE1BQU0sT0FBTyxvQkFBb0I7SUFtQi9CO1FBakJTLGFBQVEsR0FBYSxLQUFLLENBQUM7UUFDM0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFPMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBRVosQ0FBQztxRkFuQk4sb0JBQW9CO29FQUFwQixvQkFBb0I7O1lDUmpDLDhCQUErQixhQUFBO1lBRXZCLGtCQUFxRDtZQUN6RCxpQkFBTTtZQUNOLHVFQTJCTTtZQUNWLGlCQUFNOztZQS9CRyxjQUFzQztZQUF0QyxrRUFBc0MsbUdBQUE7WUFHckMsZUFBYztZQUFkLG1DQUFjOzs7aUZESVgsb0JBQW9CO2NBTmhDLFNBQVM7MkJBQ0UsaUJBQWlCLG1CQUdWLHVCQUF1QixDQUFDLE1BQU07b0JBSXRDLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7O2tGQWpCSyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1wcm9qZWN0LXRvdXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9qZWN0LXRvdXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2plY3QtdG91ci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0VG91ckNvbXBvbmVudCAge1xyXG5cclxuICBASW5wdXQoKSB0b3VyTW9kZTogYm9vbGVhbiAgPSBmYWxzZTtcclxuICBASW5wdXQoKSBlbmFibGVIZWFkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdG91ck1vZGVIZWFkaW5nOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0b3VyTW9kZUJvZHk6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRvcFBvczogYW55O1xyXG4gIEBJbnB1dCgpIHJpZ2h0UG9zOiBhbnk7XHJcbiAgQElucHV0KCkgYm90dG9tUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgbGVmdFBvczogYW55O1xyXG4gIEBJbnB1dCgpIHBhbmVsV2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBhcnJvd1BvczogYW55O1xyXG4gIEBJbnB1dCgpIGFycm93VG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYXJyb3dSaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFycm93Qm90dG9tOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYXJyb3dMZWZ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYXJyb3dDbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgIDxkaXYgW25nQ2xhc3NdPVwieyd0b3VyLWFjdGl2ZScgOiB0b3VyTW9kZX1cIiBbbmdTdHlsZV09XCJ0b3VyTW9kZSA/IHsncG9zaXRpb24nIDogJ3JlbGF0aXZlJywgJ3otaW5kZXgnIDogekluZGV4KzF9IDoge31cIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbmVzdGVkLWNvbXBvbmVudF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nSWY9XCJ0b3VyTW9kZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidG91ci1tb2RlLWluZm9cIlxyXG4gICAgICAgICAgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgICAgICd3aWR0aCcgOiBwYW5lbFdpZHRoLFxyXG4gICAgICAgICAgICAgICd0b3AnIDogdG9wUG9zLFxyXG4gICAgICAgICAgICAgICdyaWdodCcgOiByaWdodFBvcyxcclxuICAgICAgICAgICAgICAnYm90dG9tJyA6IGJvdHRvbVBvcyxcclxuICAgICAgICAgICAgICAnbGVmdCcgOiBsZWZ0UG9zLFxyXG4gICAgICAgICAgICAgICd6LWluZGV4JyA6IHpJbmRleCsxXHJcbiAgICAgICAgICB9XCI+XHJcblxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cImFycm93VG9wXCIgY2xhc3M9XCJhcnJvdy10b3Age3thcnJvd0NsYXNzfX1cIiBbbmdTdHlsZV09XCJ7J2xlZnQnIDogYXJyb3dQb3N9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiYXJyb3dSaWdodFwiIGNsYXNzPVwiYXJyb3ctcmlnaHQge3thcnJvd0NsYXNzfX1cIiBbbmdTdHlsZV09XCJ7J3RvcCcgOiBhcnJvd1Bvc31cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJhcnJvd0JvdHRvbVwiIGNsYXNzPVwiYXJyb3ctYm90dG9tIHt7YXJyb3dDbGFzc319XCIgW25nU3R5bGVdPVwieydsZWZ0JyA6IGFycm93UG9zfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cImFycm93TGVmdFwiIGNsYXNzPVwiYXJyb3ctbGVmdCB7e2Fycm93Q2xhc3N9fVwiIFtuZ1N0eWxlXT1cInsndG9wJyA6IGFycm93UG9zfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3VyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGgzICpuZ0lmPVwiZW5hYmxlSGVhZGluZ1wiPnt7dG91ck1vZGVIZWFkaW5nfX08L2gzPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICB7e3RvdXJNb2RlQm9keX19XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvdXItbmF2aWdhdGlvbiBmbGV4LWdyb3VwIGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0b3VyLW5hdmlnYXRpb25dXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b3VyLW1vZGUtb3ZlcmxheVwiIFtuZ1N0eWxlXT1cInsnei1pbmRleCc6ekluZGV4fVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=