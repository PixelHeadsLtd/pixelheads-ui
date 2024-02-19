import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function FileUploadComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.fileUploadText);
} }
function FileUploadComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 1)(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("custom-file-upload-graphic ", ctx_r1.bgColor, "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("material-icons margin-right-0-25 ", ctx_r1.textColor, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.iconName);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.textColor);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fileUploadText);
} }
const _c0 = a0 => ({ "ellipsis": a0 });
const _c1 = a0 => ({ "max-width": a0 });
function FileUploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r2.fileUploadName);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx_r2.truncateFileName))("ngStyle", i0.ɵɵpureFunction1(6, _c1, ctx_r2.truncateWidth));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.fileUploadName, " ");
} }
export class FileUploadComponent {
    constructor() {
        this.fileUploadLabel = '';
        this.fileUploadId = '';
        this.fileUploadValue = '';
        this.fileUploadName = '';
        this.fileUploadExtentions = '';
        this.fileUploadText = '';
        this.fieldClass = '';
        this.truncateFileName = false;
        this.customButton = false;
        this.iconName = '';
        this.textColor = '';
    }
    static { this.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FileUploadComponent, selectors: [["aa-file-upload"]], inputs: { fileUploadLabel: "fileUploadLabel", fileUploadId: "fileUploadId", fileUploadValue: "fileUploadValue", fileUploadName: "fileUploadName", fileUploadExtentions: "fileUploadExtentions", fileUploadText: "fileUploadText", fieldClass: "fieldClass", truncateFileName: "truncateFileName", truncateWidth: "truncateWidth", customButton: "customButton", iconName: "iconName", textColor: "textColor", bgColor: "bgColor" }, decls: 9, vars: 12, consts: [[3, "for"], [1, "flex-group", "flex-start", "flex-align-center"], [1, "file-upload"], ["name", "file-upload", "type", "file", 3, "id", "accept", "value", "title"], ["class", "file-upload-graphic", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "file-upload-name italic", 3, "title", "ngClass", "ngStyle", 4, "ngIf"], [1, "file-upload-graphic"], [1, "file-upload-name", "italic", 3, "title", "ngClass", "ngStyle"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "label", 0);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1)(4, "div", 2);
            i0.ɵɵelement(5, "input", 3);
            i0.ɵɵtemplate(6, FileUploadComponent_div_6_Template, 3, 1, "div", 4)(7, FileUploadComponent_div_7_Template, 6, 11, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, FileUploadComponent_div_8_Template, 2, 8, "div", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("field ", ctx.fieldClass, "");
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("for", ctx.fileUploadId);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.fileUploadLabel);
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("id", ctx.fileUploadId);
            i0.ɵɵpropertyInterpolate("accept", ctx.fileUploadExtentions);
            i0.ɵɵpropertyInterpolate("value", ctx.fileUploadValue);
            i0.ɵɵpropertyInterpolate("title", ctx.fileUploadName);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.customButton);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customButton);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.fileUploadName);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileUploadComponent, [{
        type: Component,
        args: [{ selector: 'aa-file-upload', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{fileUploadId}}\">{{fileUploadLabel}}</label>\r\n  <div class=\"flex-group flex-start flex-align-center\">\r\n    <div class=\"file-upload\">\r\n      <input \r\n        name=\"file-upload\" \r\n        type=\"file\" \r\n        id=\"{{fileUploadId}}\" \r\n        accept=\"{{fileUploadExtentions}}\" \r\n        value=\"{{fileUploadValue}}\"\r\n        title=\"{{fileUploadName}}\"\r\n      >\r\n      <div \r\n        *ngIf=\"!customButton\" \r\n        class=\"file-upload-graphic\"\r\n      >\r\n        <div>{{fileUploadText}}</div>\r\n      </div>\r\n      <div \r\n        *ngIf=\"customButton\" \r\n        class=\"custom-file-upload-graphic {{bgColor}}\"\r\n      >\r\n        <div class=\"flex-group flex-start flex-align-center\">\r\n          <div class=\"material-icons margin-right-0-25 {{textColor}}\">{{iconName}}</div>\r\n          <div class=\"{{textColor}}\">{{fileUploadText}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div \r\n      *ngIf=\"fileUploadName\" \r\n      title=\"{{ fileUploadName }}\"\r\n      class=\"file-upload-name italic\"\r\n      [ngClass]=\"{'ellipsis' : truncateFileName}\"\r\n      [ngStyle]=\"{'max-width' : truncateWidth}\"\r\n      >\r\n      {{ fileUploadName }}\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [], { fileUploadLabel: [{
            type: Input
        }], fileUploadId: [{
            type: Input
        }], fileUploadValue: [{
            type: Input
        }], fileUploadName: [{
            type: Input
        }], fileUploadExtentions: [{
            type: Input
        }], fileUploadText: [{
            type: Input
        }], fieldClass: [{
            type: Input
        }], truncateFileName: [{
            type: Input
        }], truncateWidth: [{
            type: Input
        }], customButton: [{
            type: Input
        }], iconName: [{
            type: Input
        }], textColor: [{
            type: Input
        }], bgColor: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FileUploadComponent, { className: "FileUploadComponent", filePath: "lib\\elements\\file-upload\\file-upload.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2VsZW1lbnRzL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ1lwRSw4QkFHQyxVQUFBO0lBQ00sWUFBa0I7SUFBQSxpQkFBTSxFQUFBOzs7SUFBeEIsZUFBa0I7SUFBbEIsMkNBQWtCOzs7SUFFekIsMkJBR0MsYUFBQSxVQUFBO0lBRStELFlBQVk7SUFBQSxpQkFBTTtJQUM5RSwyQkFBMkI7SUFBQSxZQUFrQjtJQUFBLGlCQUFNLEVBQUEsRUFBQTs7O0lBSnJELDRFQUE4QztJQUd2QyxlQUFzRDtJQUF0RCxvRkFBc0Q7SUFBQyxjQUFZO0lBQVoscUNBQVk7SUFDbkUsY0FBcUI7SUFBckIsK0JBQXFCO0lBQUMsY0FBa0I7SUFBbEIsMkNBQWtCOzs7OztJQUluRCw4QkFNRztJQUNELFlBQ0Y7SUFBQSxpQkFBTTs7O0lBTkosd0RBQTRCO0lBRTVCLDZFQUEyQyw2REFBQTtJQUczQyxjQUNGO0lBREUsc0RBQ0Y7O0FENUJKLE1BQU0sT0FBTyxtQkFBbUI7SUFnQjlCO1FBZFMsb0JBQWUsR0FBWSxFQUFFLENBQUM7UUFDOUIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIseUJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBQ2xDLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBRWxDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztJQUdoQixDQUFDO29GQWhCTixtQkFBbUI7b0VBQW5CLG1CQUFtQjtZQ1JoQywyQkFBa0MsZUFBQTtZQUNGLFlBQW1CO1lBQUEsaUJBQVE7WUFDekQsOEJBQXFELGFBQUE7WUFFakQsMkJBT0M7WUFDRCxvRUFLTSx3REFBQTtZQVVSLGlCQUFNO1lBQ04sb0VBUU07WUFDUixpQkFBTSxFQUFBOztZQXJDSCx1REFBNEI7WUFDeEIsY0FBc0I7WUFBdEIsaURBQXNCO1lBQUMsY0FBbUI7WUFBbkIseUNBQW1CO1lBTTNDLGVBQXFCO1lBQXJCLGdEQUFxQjtZQUNyQiw0REFBaUM7WUFDakMsc0RBQTJCO1lBQzNCLHFEQUEwQjtZQUd6QixjQUFtQjtZQUFuQix3Q0FBbUI7WUFNbkIsY0FBa0I7WUFBbEIsdUNBQWtCO1lBVXBCLGNBQW9CO1lBQXBCLHlDQUFvQjs7O2lGRHJCZCxtQkFBbUI7Y0FOL0IsU0FBUzsyQkFDRSxnQkFBZ0IsbUJBR1QsdUJBQXVCLENBQUMsTUFBTTtvQkFJdEMsZUFBZTtrQkFBdkIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSzs7a0ZBZEssbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtZmlsZS11cGxvYWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGZpbGVVcGxvYWRMYWJlbDogc3RyaW5nICA9ICcnO1xyXG4gIEBJbnB1dCgpIGZpbGVVcGxvYWRJZDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZmlsZVVwbG9hZFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmaWxlVXBsb2FkTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZmlsZVVwbG9hZEV4dGVudGlvbnM6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGZpbGVVcGxvYWRUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmaWVsZENsYXNzOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0cnVuY2F0ZUZpbGVOYW1lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHJ1bmNhdGVXaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIGN1c3RvbUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0ZXh0Q29sb3I6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGJnQ29sb3I6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkIHt7ZmllbGRDbGFzc319XCI+XHJcbiAgPGxhYmVsIGZvcj1cInt7ZmlsZVVwbG9hZElkfX1cIj57e2ZpbGVVcGxvYWRMYWJlbH19PC9sYWJlbD5cclxuICA8ZGl2IGNsYXNzPVwiZmxleC1ncm91cCBmbGV4LXN0YXJ0IGZsZXgtYWxpZ24tY2VudGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmlsZS11cGxvYWRcIj5cclxuICAgICAgPGlucHV0IFxyXG4gICAgICAgIG5hbWU9XCJmaWxlLXVwbG9hZFwiIFxyXG4gICAgICAgIHR5cGU9XCJmaWxlXCIgXHJcbiAgICAgICAgaWQ9XCJ7e2ZpbGVVcGxvYWRJZH19XCIgXHJcbiAgICAgICAgYWNjZXB0PVwie3tmaWxlVXBsb2FkRXh0ZW50aW9uc319XCIgXHJcbiAgICAgICAgdmFsdWU9XCJ7e2ZpbGVVcGxvYWRWYWx1ZX19XCJcclxuICAgICAgICB0aXRsZT1cInt7ZmlsZVVwbG9hZE5hbWV9fVwiXHJcbiAgICAgID5cclxuICAgICAgPGRpdiBcclxuICAgICAgICAqbmdJZj1cIiFjdXN0b21CdXR0b25cIiBcclxuICAgICAgICBjbGFzcz1cImZpbGUtdXBsb2FkLWdyYXBoaWNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdj57e2ZpbGVVcGxvYWRUZXh0fX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgKm5nSWY9XCJjdXN0b21CdXR0b25cIiBcclxuICAgICAgICBjbGFzcz1cImN1c3RvbS1maWxlLXVwbG9hZC1ncmFwaGljIHt7YmdDb2xvcn19XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3VwIGZsZXgtc3RhcnQgZmxleC1hbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtYXJnaW4tcmlnaHQtMC0yNSB7e3RleHRDb2xvcn19XCI+e3tpY29uTmFtZX19PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwie3t0ZXh0Q29sb3J9fVwiPnt7ZmlsZVVwbG9hZFRleHR9fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBcclxuICAgICAgKm5nSWY9XCJmaWxlVXBsb2FkTmFtZVwiIFxyXG4gICAgICB0aXRsZT1cInt7IGZpbGVVcGxvYWROYW1lIH19XCJcclxuICAgICAgY2xhc3M9XCJmaWxlLXVwbG9hZC1uYW1lIGl0YWxpY1wiXHJcbiAgICAgIFtuZ0NsYXNzXT1cInsnZWxsaXBzaXMnIDogdHJ1bmNhdGVGaWxlTmFtZX1cIlxyXG4gICAgICBbbmdTdHlsZV09XCJ7J21heC13aWR0aCcgOiB0cnVuY2F0ZVdpZHRofVwiXHJcbiAgICAgID5cclxuICAgICAge3sgZmlsZVVwbG9hZE5hbWUgfX1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19