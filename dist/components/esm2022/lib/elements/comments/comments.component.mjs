import { Component, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../pipes/date-pipe";
function CommentsComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Click to add a comment");
    i0.ɵɵelementEnd();
} }
function CommentsComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("There is (", ctx_r1.comments.length, ") comment");
} }
function CommentsComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("There are (", ctx_r2.comments.length, ") comments");
} }
function CommentsComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1, "There are currently no comments ");
    i0.ɵɵelementEnd();
} }
function CommentsComponent_div_10_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1, "You need to add a comment ");
    i0.ɵɵelementEnd();
} }
function CommentsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "label");
    i0.ɵɵtext(2, "Comment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 9);
    i0.ɵɵlistener("ngModelChange", function CommentsComponent_div_10_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.txtComment = $event); })("change", function CommentsComponent_div_10_Template_textarea_change_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.clicked = false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 10)(5, "button", 11);
    i0.ɵɵlistener("click", function CommentsComponent_div_10_Template_button_click_5_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.addComment($event, ctx_r10.cmt)); });
    i0.ɵɵtext(6, "Add comment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 12);
    i0.ɵɵlistener("click", function CommentsComponent_div_10_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r8); const ctx_r11 = i0.ɵɵnextContext(); ctx_r11.makeComments = false; return i0.ɵɵresetView(ctx_r11.toggleComments = false); });
    i0.ɵɵtext(8, "Close ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div");
    i0.ɵɵtemplate(10, CommentsComponent_div_10_div_10_Template, 2, 0, "div", 13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r4.txtComment);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r4.clicked && !ctx_r4.txtComment);
} }
function CommentsComponent_div_11_h3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Comments (", ctx_r12.comments.length, ")");
} }
function CommentsComponent_div_11_div_2_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 24)(1, "div")(2, "span");
    i0.ɵɵtext(3, "\u00A0");
    i0.ɵɵelementEnd()()();
} }
function CommentsComponent_div_11_div_2_tr_19_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "button", 26);
    i0.ɵɵlistener("click", function CommentsComponent_div_11_div_2_tr_19_td_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r21); const i_r17 = i0.ɵɵnextContext().index; const ctx_r19 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r19.removeComment(i_r17)); });
    i0.ɵɵtext(2, "delete_forever");
    i0.ɵɵelementEnd()();
} }
function CommentsComponent_div_11_div_2_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 25);
    i0.ɵɵpipe(6, "DateFormatPipe");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "DateFormatPipe");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CommentsComponent_div_11_div_2_tr_19_td_9_Template, 3, 0, "td", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cmt_r16 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", cmt_r16.comment);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cmt_r16.comment);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", ctx_r15.person);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r15.person);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", i0.ɵɵpipeBind1(6, 7, ctx_r15.currentDate));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 9, ctx_r15.currentDate));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r15.canDelete);
} }
const _c0 = () => ({ "max-height": "8rem" });
function CommentsComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "table", 18)(3, "thead")(4, "tr")(5, "th", 19)(6, "div")(7, "span");
    i0.ɵɵtext(8, "Comment");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "th", 20)(10, "div")(11, "span");
    i0.ɵɵtext(12, "Added by");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "th", 21)(14, "div")(15, "span");
    i0.ɵɵtext(16, "Date added");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(17, CommentsComponent_div_11_div_2_th_17_Template, 4, 0, "th", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵtemplate(19, CommentsComponent_div_11_div_2_tr_19_Template, 10, 11, "tr", 23);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngIf", ctx_r13.canDelete);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r13.comments);
} }
function CommentsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, CommentsComponent_div_11_h3_1_Template, 2, 1, "h3", 3)(2, CommentsComponent_div_11_div_2_Template, 20, 4, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r5.makeComments);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r5.toggleComments);
} }
const noop = () => {
};
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CommentsComponent),
    multi: true
};
export class CommentsComponent {
    constructor() {
        this.comments = [];
        this.commentsMade = new EventEmitter();
        this.toggleComments = false;
        this.clicked = false;
        this.person = '';
        this.makeComments = false;
        this.canDelete = false;
        this.showConfirmation = false;
        this.buttonClass = '';
        // Placeholders for the callbacks which are later provided
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.currentDate = new Date().getTime();
    }
    // get accessor
    get txtComment() {
        return this.innerValue;
    }
    // set accessor including call the onchange callback
    set txtComment(v) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }
    // Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }
    // From ControlValueAccessor interface
    writeValue(txtComment) {
        if (txtComment !== this.innerValue) {
            this.innerValue = txtComment;
        }
    }
    // From ControlValueAccessor interface
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    addComment(_EVENT, _COMMENTARRAY) {
        if (this.txtComment) {
            const comments = {
                comment: this.txtComment
            };
            this.comments.push(comments);
            this.commentsMade.emit(this.txtComment);
            console.log('comment is ', this.txtComment);
            console.log('this comment ', this.comments);
            this.txtComment = '';
        }
        else {
            this.clicked = true;
        }
    }
    removeComment(index) {
        this.comments.splice(index, 1);
    }
    static { this.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CommentsComponent, selectors: [["aa-comments"]], inputs: { comments: "comments", person: "person", canDelete: "canDelete", iconColour: "iconColour", buttonClass: "buttonClass" }, outputs: { commentsMade: "commentsMade" }, features: [i0.ɵɵProvidersFeature([CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR])], decls: 12, vars: 14, consts: [[1, "aa-comments"], [3, "click"], [1, "flex-center"], [4, "ngIf"], [1, "comments-panel", "margin-top-0-75", "box-shadow", "border-radius-0-25", "bg-aa-white-100", "padding-1"], ["class", "margin-top-0 italic aa-blue-100", 4, "ngIf"], ["class", "field boxed", 4, "ngIf"], [1, "margin-top-0", "italic", "aa-blue-100"], [1, "field", "boxed"], ["placeholder", "Your Comment", 3, "ngModel", "ngModelChange", "change"], [1, "flex-group", "flex-start"], [1, "secondary", "margin-top-1", 3, "click"], [1, "cancel", "margin-top-1", 3, "click"], ["role", "alert", "class", "error margin-top-1", 4, "ngIf"], ["role", "alert", 1, "error", "margin-top-1"], ["class", "scroll-panel", 4, "ngIf"], [1, "scroll-panel"], [1, "scroll-panel-content", 3, "ngStyle"], [1, "table-comments"], ["width", "62%"], ["width", "20%"], ["width", "16%"], ["width", "2", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["width", "2"], [3, "title"], [1, "material-icons", "aa-red-100", "transparent", 3, "click"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function CommentsComponent_Template_button_click_1_listener() { ctx.makeComments = !ctx.makeComments; ctx.toggleComments = false; return ctx.clicked = false; });
            i0.ɵɵelementStart(2, "div", 2)(3, "span");
            i0.ɵɵtext(4, "chat");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, CommentsComponent_span_5_Template, 2, 0, "span", 3)(6, CommentsComponent_span_6_Template, 2, 1, "span", 3)(7, CommentsComponent_span_7_Template, 2, 1, "span", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵtemplate(9, CommentsComponent_p_9_Template, 2, 0, "p", 5)(10, CommentsComponent_div_10_Template, 11, 2, "div", 6)(11, CommentsComponent_div_11_Template, 3, 2, "div", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("custom-icons cursor-pointer ", ctx.buttonClass, "");
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("material-icons ", ctx.iconColour, "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.comments.length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.comments.length === 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.comments.length > 1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("show-comments", ctx.makeComments);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.comments.length && !ctx.makeComments);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.makeComments);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.comments.length);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgStyle, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.DateFormatPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommentsComponent, [{
        type: Component,
        args: [{ selector: 'aa-comments', providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], template: "<div class=\"aa-comments\">\r\n  <button \r\n    class=\"custom-icons cursor-pointer {{buttonClass}}\"\r\n    (click)=\"makeComments = ! makeComments; toggleComments=false; clicked=false\"\r\n  >\r\n    <div class=\"flex-center\">\r\n      <span class=\"material-icons {{iconColour}}\">chat</span>\r\n      <span *ngIf=\"comments.length===0\">Click to add a comment</span>\r\n      <span *ngIf=\"comments.length===1\">There is ({{comments.length}}) comment</span>\r\n      <span *ngIf=\"comments.length>1\">There are ({{comments.length}}) comments</span>\r\n    </div>\r\n  </button>\r\n  <div\r\n    class=\"\r\n    comments-panel\r\n    margin-top-0-75\r\n    box-shadow\r\n    border-radius-0-25\r\n    bg-aa-white-100\r\n    padding-1\"\r\n    [class.show-comments]=\"makeComments\"\r\n  >\r\n    <p\r\n      class=\"margin-top-0 italic aa-blue-100\"\r\n      *ngIf=\"!comments.length && !makeComments\"\r\n    >There are currently no comments\r\n    </p>\r\n    <div *ngIf=\"makeComments\" class=\"field boxed\">\r\n      <label>Comment</label>\r\n      <textarea [(ngModel)]=\"txtComment\" placeholder=\"Your Comment\" (change)=\"clicked=false\"></textarea>\r\n      <div class=\"flex-group flex-start\">\r\n        <button class=\"secondary margin-top-1\" (click)=\"addComment($event, cmt)\">Add comment</button>\r\n        <button\r\n          class=\"cancel margin-top-1\"\r\n          (click)=\"makeComments=false; toggleComments=false\"\r\n          >Close\r\n        </button>\r\n        <div>\r\n          <div\r\n            *ngIf=\"clicked && !txtComment\"\r\n            role=\"alert\"\r\n            class=\"error margin-top-1\"\r\n            >You need to add a comment\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field boxed\" *ngIf=\"comments.length\">\r\n      <h3 *ngIf=\"makeComments\">Comments ({{comments.length}})</h3>\r\n      <div *ngIf=\"!toggleComments\" class=\"scroll-panel\">\r\n          <div class=\"scroll-panel-content\" [ngStyle]=\"{'max-height':'8rem'}\">\r\n            <table class=\"table-comments\">\r\n              <thead>\r\n                <tr>\r\n                  <th width=\"62%\"><div><span>Comment</span></div></th>\r\n                  <th width=\"20%\"><div><span>Added by</span></div></th>\r\n                  <th width=\"16%\"><div><span>Date added</span></div></th>\r\n                  <th width=\"2\" *ngIf=\"canDelete\"><div><span>&nbsp;</span></div></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                  <tr *ngFor=\"let cmt of comments; let i = index\">\r\n                      <td title=\"{{ cmt.comment }}\">{{ cmt.comment }}</td>\r\n                      <td title=\"{{ person }}\">{{ person }}</td>\r\n                      <td title=\"{{ currentDate | DateFormatPipe }}\">{{ currentDate | DateFormatPipe }}</td>\r\n                      <td *ngIf=\"canDelete\">\r\n                        <button\r\n                          class=\"material-icons aa-red-100 transparent\"\r\n                          (click)=\"removeComment(i)\"\r\n                          >delete_forever</button>\r\n                      </td>\r\n                  </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [], { comments: [{
            type: Input
        }], commentsMade: [{
            type: Output
        }], person: [{
            type: Input
        }], canDelete: [{
            type: Input
        }], iconColour: [{
            type: Input
        }], buttonClass: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CommentsComponent, { className: "CommentsComponent", filePath: "lib\\elements\\comments\\comments.component.ts", lineNumber: 23 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2VsZW1lbnRzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ01uRSw0QkFBa0M7SUFBQSxzQ0FBc0I7SUFBQSxpQkFBTzs7O0lBQy9ELDRCQUFrQztJQUFBLFlBQXNDO0lBQUEsaUJBQU87OztJQUE3QyxjQUFzQztJQUF0Qyx3RUFBc0M7OztJQUN4RSw0QkFBZ0M7SUFBQSxZQUF3QztJQUFBLGlCQUFPOzs7SUFBL0MsY0FBd0M7SUFBeEMsMEVBQXdDOzs7SUFhMUUsNEJBR0M7SUFBQSxnREFDRDtJQUFBLGlCQUFJOzs7SUFZRSwrQkFJRztJQUFBLDBDQUNIO0lBQUEsaUJBQU07Ozs7SUFoQlosOEJBQThDLFlBQUE7SUFDckMsdUJBQU87SUFBQSxpQkFBUTtJQUN0QixtQ0FBdUY7SUFBN0UscU9BQXdCLHNMQUE4QyxLQUFLLEtBQW5EO0lBQXFELGlCQUFXO0lBQ2xHLCtCQUFtQyxpQkFBQTtJQUNNLHNLQUFTLGVBQUEsdUNBQXVCLENBQUEsSUFBQztJQUFDLDJCQUFXO0lBQUEsaUJBQVM7SUFDN0Ysa0NBR0c7SUFERCxnTEFBc0IsS0FBSyxpREFBaUIsS0FBSyxLQUFDO0lBQ2pELHNCQUNIO0lBQUEsaUJBQVM7SUFDVCwyQkFBSztJQUNILDRF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QUNILENBQUM7SUFHRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztrRkFoRlUsaUJBQWlCO29FQUFqQixpQkFBaUIsOE9BRmpCLENBQUMsbUNBQW1DLENBQUM7WUNwQmxELDhCQUF5QixnQkFBQTtZQUdyQixrSkFBdUQsS0FBSyx1QkFBVSxLQUFLLElBQUM7WUFFNUUsOEJBQXlCLFdBQUE7WUFDcUIsb0JBQUk7WUFBQSxpQkFBTztZQUN2RCxvRUFBK0QsdURBQUEsdURBQUE7WUFHakUsaUJBQU0sRUFBQTtZQUVSLDhCQVNDO1lBQ0MsOERBSUksd0RBQUEsdURBQUE7WUFvRE4saUJBQU0sRUFBQTs7WUE1RUosY0FBbUQ7WUFBbkQsOEVBQW1EO1lBSTNDLGVBQXFDO1lBQXJDLGdFQUFxQztZQUNwQyxlQUF5QjtZQUF6QixnREFBeUI7WUFDekIsY0FBeUI7WUFBekIsZ0RBQXlCO1lBQ3pCLGNBQXVCO1lBQXZCLDhDQUF1QjtZQVdoQyxjQUFvQztZQUFwQyxpREFBb0M7WUFJakMsY0FBdUM7WUFBdkMsZ0VBQXVDO1lBR3BDLGNBQWtCO1lBQWxCLHVDQUFrQjtZQXFCRSxjQUFxQjtZQUFyQiwwQ0FBcUI7OztpRkQxQnRDLGlCQUFpQjtjQU43QixTQUFTOzJCQUNFLGFBQWEsYUFHWixDQUFDLG1DQUFtQyxDQUFDO29CQUl2QyxRQUFRO2tCQUFoQixLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTTtZQUlFLE1BQU07a0JBQWQsS0FBSztZQUdHLFNBQVM7a0JBQWpCLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSzs7a0ZBYkssaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5jb25zdCBub29wID0gKCkgPT4ge1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21tZW50QXJyYXkge1xyXG4gIGNvbW1lbnQ6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29tbWVudHNDb21wb25lbnQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWNvbW1lbnRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tbWVudHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgQElucHV0KCkgY29tbWVudHM6IENvbW1lbnRBcnJheVtdID0gW107XHJcbiAgQE91dHB1dCgpIGNvbW1lbnRzTWFkZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tbWVudEFycmF5PigpO1xyXG4gIGNtdD86IENvbW1lbnRBcnJheTtcclxuICB0b2dnbGVDb21tZW50czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwZXJzb246IHN0cmluZyA9ICcnO1xyXG4gIGN1cnJlbnREYXRlOiBhbnk7XHJcbiAgbWFrZUNvbW1lbnRzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY2FuRGVsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd0NvbmZpcm1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGljb25Db2xvdXI6IGFueTtcclxuICBASW5wdXQoKSBidXR0b25DbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhlIGludGVybmFsIGRhdGEgbW9kZWxcclxuICBwcml2YXRlIGlubmVyVmFsdWU6IGFueTtcclxuXHJcbiAgLy8gUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzIHdoaWNoIGFyZSBsYXRlciBwcm92aWRlZFxyXG4gIC8vIGJ5IHRoZSBDb250cm9sIFZhbHVlIEFjY2Vzc29yXHJcbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcclxuXHJcbiAgLy8gZ2V0IGFjY2Vzc29yXHJcbiAgZ2V0IHR4dENvbW1lbnQoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmlubmVyVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBzZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXHJcbiAgc2V0IHR4dENvbW1lbnQodjogYW55KSB7XHJcbiAgICBpZiAodiAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHY7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcclxuICBvbkJsdXIoKSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKCk7XHJcbiAgfVxyXG5cclxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gIHdyaXRlVmFsdWUodHh0Q29tbWVudDogYW55KSB7XHJcbiAgICBpZiAodHh0Q29tbWVudCAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHR4dENvbW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIGFkZENvbW1lbnQoX0VWRU5UOiBhbnksIF9DT01NRU5UQVJSQVk/OiBDb21tZW50QXJyYXkpIHtcclxuICAgIGlmICh0aGlzLnR4dENvbW1lbnQpIHtcclxuICAgICAgY29uc3QgY29tbWVudHM6IENvbW1lbnRBcnJheSA9IHtcclxuICAgICAgICBjb21tZW50OiB0aGlzLnR4dENvbW1lbnRcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnRzKTtcclxuICAgICAgdGhpcy5jb21tZW50c01hZGUuZW1pdCh0aGlzLnR4dENvbW1lbnQpO1xyXG4gICAgICBjb25zb2xlLmxvZygnY29tbWVudCBpcyAnLCB0aGlzLnR4dENvbW1lbnQpO1xyXG4gICAgICBjb25zb2xlLmxvZygndGhpcyBjb21tZW50ICcsIHRoaXMuY29tbWVudHMpO1xyXG4gICAgICB0aGlzLnR4dENvbW1lbnQgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVtb3ZlQ29tbWVudChpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvbW1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYWEtY29tbWVudHNcIj5cclxuICA8YnV0dG9uIFxyXG4gICAgY2xhc3M9XCJjdXN0b20taWNvbnMgY3Vyc29yLXBvaW50ZXIge3tidXR0b25DbGFzc319XCJcclxuICAgIChjbGljayk9XCJtYWtlQ29tbWVudHMgPSAhIG1ha2VDb21tZW50czsgdG9nZ2xlQ29tbWVudHM9ZmFsc2U7IGNsaWNrZWQ9ZmFsc2VcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNlbnRlclwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHt7aWNvbkNvbG91cn19XCI+Y2hhdDwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJjb21tZW50cy5sZW5ndGg9PT0wXCI+Q2xpY2sgdG8gYWRkIGEgY29tbWVudDwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJjb21tZW50cy5sZW5ndGg9PT0xXCI+VGhlcmUgaXMgKHt7Y29tbWVudHMubGVuZ3RofX0pIGNvbW1lbnQ8L3NwYW4+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwiY29tbWVudHMubGVuZ3RoPjFcIj5UaGVyZSBhcmUgKHt7Y29tbWVudHMubGVuZ3RofX0pIGNvbW1lbnRzPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9idXR0b24+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJcclxuICAgIGNvbW1lbnRzLXBhbmVsXHJcbiAgICBtYXJnaW4tdG9wLTAtNzVcclxuICAgIGJveC1zaGFkb3dcclxuICAgIGJvcmRlci1yYWRpdXMtMC0yNVxyXG4gICAgYmctYWEtd2hpdGUtMTAwXHJcbiAgICBwYWRkaW5nLTFcIlxyXG4gICAgW2NsYXNzLnNob3ctY29tbWVudHNdPVwibWFrZUNvbW1lbnRzXCJcclxuICA+XHJcbiAgICA8cFxyXG4gICAgICBjbGFzcz1cIm1hcmdpbi10b3AtMCBpdGFsaWMgYWEtYmx1ZS0xMDBcIlxyXG4gICAgICAqbmdJZj1cIiFjb21tZW50cy5sZW5ndGggJiYgIW1ha2VDb21tZW50c1wiXHJcbiAgICA+VGhlcmUgYXJlIGN1cnJlbnRseSBubyBjb21tZW50c1xyXG4gICAgPC9wPlxyXG4gICAgPGRpdiAqbmdJZj1cIm1ha2VDb21tZW50c1wiIGNsYXNzPVwiZmllbGQgYm94ZWRcIj5cclxuICAgICAgPGxhYmVsPkNvbW1lbnQ8L2xhYmVsPlxyXG4gICAgICA8dGV4dGFyZWEgWyhuZ01vZGVsKV09XCJ0eHRDb21tZW50XCIgcGxhY2Vob2xkZXI9XCJZb3VyIENvbW1lbnRcIiAoY2hhbmdlKT1cImNsaWNrZWQ9ZmFsc2VcIj48L3RleHRhcmVhPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm91cCBmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlY29uZGFyeSBtYXJnaW4tdG9wLTFcIiAoY2xpY2spPVwiYWRkQ29tbWVudCgkZXZlbnQsIGNtdClcIj5BZGQgY29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzPVwiY2FuY2VsIG1hcmdpbi10b3AtMVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwibWFrZUNvbW1lbnRzPWZhbHNlOyB0b2dnbGVDb21tZW50cz1mYWxzZVwiXHJcbiAgICAgICAgICA+Q2xvc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAqbmdJZj1cImNsaWNrZWQgJiYgIXR4dENvbW1lbnRcIlxyXG4gICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImVycm9yIG1hcmdpbi10b3AtMVwiXHJcbiAgICAgICAgICAgID5Zb3UgbmVlZCB0byBhZGQgYSBjb21tZW50XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQgYm94ZWRcIiAqbmdJZj1cImNvbW1lbnRzLmxlbmd0aFwiPlxyXG4gICAgICA8aDMgKm5nSWY9XCJtYWtlQ29tbWVudHNcIj5Db21tZW50cyAoe3tjb21tZW50cy5sZW5ndGh9fSk8L2gzPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiIXRvZ2dsZUNvbW1lbnRzXCIgY2xhc3M9XCJzY3JvbGwtcGFuZWxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtcGFuZWwtY29udGVudFwiIFtuZ1N0eWxlXT1cInsnbWF4LWhlaWdodCc6JzhyZW0nfVwiPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1jb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoIHdpZHRoPVwiNjIlXCI+PGRpdj48c3Bhbj5Db21tZW50PC9zcGFuPjwvZGl2PjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjIwJVwiPjxkaXY+PHNwYW4+QWRkZWQgYnk8L3NwYW4+PC9kaXY+PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIHdpZHRoPVwiMTYlXCI+PGRpdj48c3Bhbj5EYXRlIGFkZGVkPC9zcGFuPjwvZGl2PjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjJcIiAqbmdJZj1cImNhbkRlbGV0ZVwiPjxkaXY+PHNwYW4+Jm5ic3A7PC9zcGFuPjwvZGl2PjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGNtdCBvZiBjb21tZW50czsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHRpdGxlPVwie3sgY210LmNvbW1lbnQgfX1cIj57eyBjbXQuY29tbWVudCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgdGl0bGU9XCJ7eyBwZXJzb24gfX1cIj57eyBwZXJzb24gfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHRpdGxlPVwie3sgY3VycmVudERhdGUgfCBEYXRlRm9ybWF0UGlwZSB9fVwiPnt7IGN1cnJlbnREYXRlIHwgRGF0ZUZvcm1hdFBpcGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiY2FuRGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGFhLXJlZC0xMDAgdHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVDb21tZW50KGkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+ZGVsZXRlX2ZvcmV2ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=