import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "z-index": a0 });
export class LoadingSpinnerPageComponent {
    constructor() {
        this.loadingMessage = '';
        this.zIndex = 0;
    }
    static { this.ɵfac = function LoadingSpinnerPageComponent_Factory(t) { return new (t || LoadingSpinnerPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoadingSpinnerPageComponent, selectors: [["aa-loading-spinner-page"]], inputs: { loadingMessage: "loadingMessage", zIndex: "zIndex" }, decls: 6, vars: 4, consts: [[1, "loading-spinner-page", 3, "ngStyle"], [1, "foreground"], [1, "loading-spinner-small"], [1, "margin-top-1", "italic", "grey-50"], [1, "background"]], template: function LoadingSpinnerPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(5, "div", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx.zIndex));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.loadingMessage);
        } }, dependencies: [i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingSpinnerPageComponent, [{
        type: Component,
        args: [{ selector: 'aa-loading-spinner-page', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"loading-spinner-page\" [ngStyle]=\"{'z-index' : zIndex}\">\r\n  <div class=\"foreground\">\r\n    <div class=\"loading-spinner-small\"></div>\r\n    <div class=\"margin-top-1 italic grey-50\">{{loadingMessage}}</div>\r\n  </div>\r\n  <div class=\"background\"></div>\r\n</section>\r\n" }]
    }], () => [], { loadingMessage: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoadingSpinnerPageComponent, { className: "LoadingSpinnerPageComponent", filePath: "lib\\animations\\loading-spinner-page\\loading-spinner-page.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zcGlubmVyLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2FuaW1hdGlvbnMvbG9hZGluZy1zcGlubmVyLXBhZ2UvbG9hZGluZy1zcGlubmVyLXBhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2FuaW1hdGlvbnMvbG9hZGluZy1zcGlubmVyLXBhZ2UvbG9hZGluZy1zcGlubmVyLXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRbEYsTUFBTSxPQUFPLDJCQUEyQjtJQUt0QztRQUhTLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBVyxDQUFDLENBQUM7SUFFWixDQUFDOzRGQUxOLDJCQUEyQjtvRUFBM0IsMkJBQTJCO1lDUnhDLGtDQUF1RSxhQUFBO1lBRW5FLHlCQUF5QztZQUN6Qyw4QkFBeUM7WUFBQSxZQUFrQjtZQUFBLGlCQUFNLEVBQUE7WUFFbkUseUJBQThCO1lBQ2hDLGlCQUFVOztZQU40QixnRUFBZ0M7WUFHekIsZUFBa0I7WUFBbEIsd0NBQWtCOzs7aUZES2xELDJCQUEyQjtjQU52QyxTQUFTOzJCQUNFLHlCQUF5QixtQkFHbEIsdUJBQXVCLENBQUMsTUFBTTtvQkFJdEMsY0FBYztrQkFBdEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSzs7a0ZBSEssMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1sb2FkaW5nLXNwaW5uZXItcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctc3Bpbm5lci1wYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLXNwaW5uZXItcGFnZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU3Bpbm5lclBhZ2VDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBsb2FkaW5nTWVzc2FnZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iLCI8c2VjdGlvbiBjbGFzcz1cImxvYWRpbmctc3Bpbm5lci1wYWdlXCIgW25nU3R5bGVdPVwieyd6LWluZGV4JyA6IHpJbmRleH1cIj5cclxuICA8ZGl2IGNsYXNzPVwiZm9yZWdyb3VuZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImxvYWRpbmctc3Bpbm5lci1zbWFsbFwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1hcmdpbi10b3AtMSBpdGFsaWMgZ3JleS01MFwiPnt7bG9hZGluZ01lc3NhZ2V9fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuIl19