import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = a0 => ({ "face-very-satisfied": a0 });
const _c1 = a0 => ({ "face-satisfied": a0 });
const _c2 = a0 => ({ "face-neutral": a0 });
const _c3 = a0 => ({ "face-dissatisfied": a0 });
const _c4 = a0 => ({ "face-very-dissatisfied": a0 });
function UserFeedbackComponent_section_0_article_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 5)(1, "h3", 6)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 8)(7, "div");
    i0.ɵɵtext(8, "Great");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 9);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_2_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.onFaceClick(5)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 10);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_2_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.onFaceClick(4)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 11);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_2_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.onFaceClick(3)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 12);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_2_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r5); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.onFaceClick(2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 13);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_2_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r5); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onFaceClick(1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div");
    i0.ɵɵtext(15, "Poor");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.question, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.appName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx_r1.rating === 5));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c1, ctx_r1.rating === 4));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c2, ctx_r1.rating === 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c3, ctx_r1.rating === 2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c4, ctx_r1.rating === 1));
} }
function UserFeedbackComponent_section_0_article_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 14)(1, "form", 15)(2, "div")(3, "label", 16);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 17);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "textarea", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 19)(9, "em");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 20)(12, "button", 21);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_3_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.sendFB()); });
    i0.ɵɵtext(13, "Send feedback");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r2.feedbackForm);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.description);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.footNote);
} }
function UserFeedbackComponent_section_0_article_4_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} }
function UserFeedbackComponent_section_0_article_4_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 37);
} }
function UserFeedbackComponent_section_0_article_4_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 38);
} }
function UserFeedbackComponent_section_0_article_4_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 39);
} }
function UserFeedbackComponent_section_0_article_4_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 40);
} }
function UserFeedbackComponent_section_0_article_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article")(1, "div", 22)(2, "h3", 6)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, "? ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 8)(9, "div");
    i0.ɵɵtext(10, "Great");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "div", 23)(12, "div", 24)(13, "div", 25)(14, "div", 26)(15, "div", 27);
    i0.ɵɵelementStart(16, "div");
    i0.ɵɵtext(17, "Poor");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "article", 14)(19, "p");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 28);
    i0.ɵɵtemplate(22, UserFeedbackComponent_section_0_article_4_div_22_Template, 1, 0, "div", 29)(23, UserFeedbackComponent_section_0_article_4_div_23_Template, 1, 0, "div", 30)(24, UserFeedbackComponent_section_0_article_4_div_24_Template, 1, 0, "div", 31)(25, UserFeedbackComponent_section_0_article_4_div_25_Template, 1, 0, "div", 32)(26, UserFeedbackComponent_section_0_article_4_div_26_Template, 1, 0, "div", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 34)(28, "button", 35);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_4_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.onClose()); });
    i0.ɵɵtext(29, "Close");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r3.question, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.appName);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c0, ctx_r3.rating === 5));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c1, ctx_r3.rating === 4));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c2, ctx_r3.rating === 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(19, _c3, ctx_r3.rating === 2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(21, _c4, ctx_r3.rating === 1));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.closingMessage);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.rating === 5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.rating === 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.rating === 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.rating === 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.rating === 1);
} }
function UserFeedbackComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "div", 1);
    i0.ɵɵtemplate(2, UserFeedbackComponent_section_0_article_2_Template, 16, 17, "article", 2)(3, UserFeedbackComponent_section_0_article_3_Template, 14, 4, "article", 3)(4, UserFeedbackComponent_section_0_article_4_Template, 30, 23, "article", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("user-feedback box-shadow margin-bottom-1 rating-", ctx_r0.rating, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.startRating);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.faceClicked && !ctx_r0.userClosedPanel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userClosedPanel);
} }
export class UserFeedbackComponent {
    onClose() {
        this.close.emit();
        this.toggleUserFeedback = !this.toggleUserFeedback;
        this.userClosedPanel = false;
        this.faceClicked = false;
        this.rating = null;
        this.startRating = true;
    }
    onFaceClick(rating) {
        this.faceClicked = true;
        this.rating = rating;
    }
    sendFB() {
        this.sendFeedback.emit({ rating: this.rating, comments: this.feedbackForm.value.comment });
        this.userClosedPanel = true;
        this.startRating = false;
    }
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.panelWidth = 0;
        this.question = '';
        this.appName = '';
        this.label = '';
        this.description = '';
        this.footNote = '';
        this.closingMessage = '';
        this.toggleUserFeedback = false;
        this.sendFeedback = new EventEmitter();
        // eslint-disable-next-line @angular-eslint/no-output-native
        this.close = new EventEmitter();
        this.startRating = true;
        this.faceClicked = false;
        this.rating = 0;
        this.userClosedPanel = false;
        this.feedbackForm = this.formBuilder.group({
            comment: [null]
        });
    }
    static { this.ɵfac = function UserFeedbackComponent_Factory(t) { return new (t || UserFeedbackComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserFeedbackComponent, selectors: [["aa-user-feedback"]], inputs: { panelWidth: "panelWidth", question: "question", appName: "appName", label: "label", description: "description", footNote: "footNote", closingMessage: "closingMessage", toggleUserFeedback: "toggleUserFeedback" }, outputs: { sendFeedback: "sendFeedback", close: "close" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [1, "position-relative"], ["class", "flex-group padding-1", 4, "ngIf"], ["class", "user-feedback-content padding-1", 4, "ngIf"], [4, "ngIf"], [1, "flex-group", "padding-1"], [1, "text-align-center", "margin-top-0-5"], [1, "italic"], [1, "feature-box", "faces", "tertiary", "flex-group", "flex-align-center"], [1, "face-very-satisfied-blk", 3, "ngClass", "click"], [1, "face-satisfied-blk", 3, "ngClass", "click"], [1, "face-neutral-blk", 3, "ngClass", "click"], [1, "face-dissatisfied-blk", 3, "ngClass", "click"], [1, "face-very-dissatisfied-blk", 3, "ngClass", "click"], [1, "user-feedback-content", "padding-1"], ["name", "sendFeedback", 3, "formGroup"], ["for", "feedback"], [1, "describe", "width-100"], ["formControlName", "comment", "id", "feedback"], [1, "padding-top-1", "max-readable-width"], [1, "align-center", "margin-top-1"], ["type", "button", 1, "primary", 3, "click"], [1, "flex-group", "voting-panel", "padding-1"], [1, "face-very-satisfied-blk", 3, "ngClass"], [1, "face-satisfied-blk", 3, "ngClass"], [1, "face-neutral-blk", 3, "ngClass"], [1, "face-dissatisfied-blk", 3, "ngClass"], [1, "face-very-dissatisfied-blk", 3, "ngClass"], [1, "thanks", "align-center"], ["class", "face-very-satisfied", 4, "ngIf"], ["class", "face-satisfied", 4, "ngIf"], ["class", "face-neutral", 4, "ngIf"], ["class", "face-dissatisfied", 4, "ngIf"], ["class", "face-very-dissatisfied", 4, "ngIf"], [1, "align-center"], ["type", "button", 1, "tertiary", 3, "click"], [1, "face-very-satisfied"], [1, "face-satisfied"], [1, "face-neutral"], [1, "face-dissatisfied"], [1, "face-very-dissatisfied"]], template: function UserFeedbackComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, UserFeedbackComponent_section_0_Template, 5, 6, "section", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.toggleUserFeedback);
        } }, dependencies: [i2.NgClass, i2.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserFeedbackComponent, [{
        type: Component,
        args: [{ selector: 'aa-user-feedback', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"user-feedback box-shadow margin-bottom-1 rating-{{ rating }}\" *ngIf=\"toggleUserFeedback\">\r\n  <div class=\"position-relative\">\r\n    <article class=\"flex-group padding-1\" *ngIf=\"startRating\">\r\n      <h3 class=\"text-align-center margin-top-0-5\">\r\n        <span>{{ question }} </span>\r\n        <strong class=\"italic\">{{ appName }}</strong>\r\n      </h3>\r\n      <div class=\"feature-box faces tertiary flex-group flex-align-center\">\r\n        <div>Great</div>\r\n        <button (click)=\"onFaceClick(5)\" [ngClass]=\"{ 'face-very-satisfied': rating === 5 }\" class=\"face-very-satisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(4)\" [ngClass]=\"{ 'face-satisfied': rating === 4 }\" class=\"face-satisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(3)\" [ngClass]=\"{ 'face-neutral': rating === 3 }\" class=\"face-neutral-blk\"></button>\r\n        <button (click)=\"onFaceClick(2)\" [ngClass]=\"{ 'face-dissatisfied': rating === 2 }\" class=\"face-dissatisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(1)\" [ngClass]=\"{ 'face-very-dissatisfied': rating === 1 }\" class=\"face-very-dissatisfied-blk\"></button>\r\n        <div>Poor</div>\r\n      </div>\r\n    </article>\r\n\r\n    <article *ngIf=\"faceClicked && !userClosedPanel\" class=\"user-feedback-content padding-1\">\r\n      <form name=\"sendFeedback\" [formGroup]=\"feedbackForm\">\r\n        <div>\r\n          <label for=\"feedback\">{{ label }}</label>\r\n          <div class=\"describe width-100\">{{ description }}</div>\r\n          <textarea formControlName=\"comment\" id=\"feedback\"></textarea>\r\n        </div>\r\n        <div class=\"padding-top-1 max-readable-width\">\r\n          <em>{{ footNote }}</em>\r\n        </div>\r\n        <div class=\"align-center margin-top-1\">\r\n          <button type=\"button\" class=\"primary\" (click)=\"sendFB()\">Send feedback</button>\r\n        </div>\r\n      </form>\r\n    </article>\r\n\r\n    <article *ngIf=\"userClosedPanel\">\r\n      <div class=\"flex-group voting-panel padding-1\">\r\n        <h3 class=\"text-align-center margin-top-0-5\">\r\n          <span>{{ question }} </span>\r\n          <strong class=\"italic\">{{ appName }}</strong>?\r\n        </h3>\r\n        <div class=\"feature-box faces tertiary flex-group flex-align-center\">\r\n          <div>Great</div>\r\n          <div [ngClass]=\"{ 'face-very-satisfied': rating === 5 }\" class=\"face-very-satisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-satisfied': rating === 4 }\" class=\"face-satisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-neutral': rating === 3 }\" class=\"face-neutral-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-dissatisfied': rating === 2 }\" class=\"face-dissatisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-very-dissatisfied': rating === 1 }\" class=\"face-very-dissatisfied-blk\"></div>\r\n          <div>Poor</div>\r\n        </div>\r\n      </div>\r\n      <article class=\"user-feedback-content padding-1\">\r\n        <p>{{ closingMessage }}</p>\r\n        <div class=\"thanks align-center\">\r\n          <div *ngIf=\"rating === 5\" class=\"face-very-satisfied\"></div>\r\n          <div *ngIf=\"rating === 4\" class=\"face-satisfied\"></div>\r\n          <div *ngIf=\"rating === 3\" class=\"face-neutral\"></div>\r\n          <div *ngIf=\"rating === 2\" class=\"face-dissatisfied\"></div>\r\n          <div *ngIf=\"rating === 1\" class=\"face-very-dissatisfied\"></div>\r\n        </div>\r\n        <div class=\"align-center\">\r\n          <button type=\"button\" class=\"tertiary\" (click)=\"onClose()\">Close</button>\r\n        </div>\r\n      </article>\r\n    </article>\r\n  </div>\r\n</section>\r\n" }]
    }], () => [{ type: i1.FormBuilder }], { panelWidth: [{
            type: Input
        }], question: [{
            type: Input
        }], appName: [{
            type: Input
        }], label: [{
            type: Input
        }], description: [{
            type: Input
        }], footNote: [{
            type: Input
        }], closingMessage: [{
            type: Input
        }], toggleUserFeedback: [{
            type: Input
        }], sendFeedback: [{
            type: Output
        }], close: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UserFeedbackComponent, { className: "UserFeedbackComponent", filePath: "lib\\widgets\\user-feedback\\user-feedback.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1mZWVkYmFjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy91c2VyLWZlZWRiYWNrL3VzZXItZmVlZGJhY2suY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvdXNlci1mZWVkYmFjay91c2VyLWZlZWRiYWNrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0lDRTVGLGtDQUEwRCxZQUFBLFdBQUE7SUFFaEQsWUFBZTtJQUFBLGlCQUFPO0lBQzVCLGlDQUF1QjtJQUFBLFlBQWE7SUFBQSxpQkFBUyxFQUFBO0lBRS9DLDhCQUFxRSxVQUFBO0lBQzlELHFCQUFLO0lBQUEsaUJBQU07SUFDaEIsaUNBQXFIO0lBQTdHLGlMQUFTLGVBQUEsbUJBQVksQ0FBQyxDQUFDLENBQUEsSUFBQztJQUFxRixpQkFBUztJQUM5SCxtQ0FBMkc7SUFBbkcsa0xBQVMsZUFBQSxtQkFBWSxDQUFDLENBQUMsQ0FBQSxJQUFDO0lBQTJFLGlCQUFTO0lBQ3BILG1DQUF1RztJQUEvRixrTEFBUyxlQUFBLG1CQUFZLENBQUMsQ0FBQyxDQUFBLElBQUM7SUFBdUUsaUJBQVM7SUFDaEgsbUNBQWlIO0lBQXpHLGtMQUFTLGVBQUEsbUJBQVksQ0FBQyxDQUFDLENBQUEsSUFBQztJQUFpRixpQkFBUztJQUMxSCxtQ0FBMkg7SUFBbkgsa0xBQVMsZUFBQSxtQkFBWSxDQUFDLENBQUMsQ0FBQSxJQUFDO0lBQTJGLGlCQUFTO0lBQ3BJLDRCQUFLO0lBQUEscUJBQUk7SUFBQSxpQkFBTSxFQUFBLEVBQUE7OztJ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OztpRkRVMUYscUJBQXFCO2NBTmpDLFNBQVM7MkJBQ0Usa0JBQWtCLG1CQUdYLHVCQUF1QixDQUFDLE1BQU07NENBR3RDLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTTtZQUVHLEtBQUs7a0JBQWQsTUFBTTs7a0ZBWEkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGZWVkYmFja0V2ZW50IH0gZnJvbSAnLi9mZWVkYmFja0V2ZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdXNlci1mZWVkYmFjaycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItZmVlZGJhY2suY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3VzZXItZmVlZGJhY2suY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyRmVlZGJhY2tDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHBhbmVsV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgcXVlc3Rpb246IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGFwcE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZm9vdE5vdGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNsb3NpbmdNZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0b2dnbGVVc2VyRmVlZGJhY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgc2VuZEZlZWRiYWNrID0gbmV3IEV2ZW50RW1pdHRlcjxGZWVkYmFja0V2ZW50PigpO1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW5hdGl2ZVxyXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgc3RhcnRSYXRpbmcgPSB0cnVlO1xyXG4gIGZhY2VDbGlja2VkID0gZmFsc2U7XHJcbiAgdGFiOiBhbnk7XHJcbiAgdmVyeURpc3NhdGlzZmllZDogYW55O1xyXG4gIGRpc3NhdGlzZmllZDogYW55O1xyXG4gIG5ldXRyYWw6IGFueTtcclxuICBzYXRpc2ZpZWQ6IGFueTtcclxuICB2ZXJ5U2F0aXNmaWVkOiBhbnk7XHJcbiAgcmF0aW5nOiBudW1iZXIgfCBudWxsID0gMDtcclxuICB1c2VyQ2xvc2VkUGFuZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgZmVlZGJhY2tGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICBjb21tZW50OiBbbnVsbF1cclxuICB9KTtcclxuXHJcbiAgb25DbG9zZSgpIHtcclxuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xyXG4gICAgdGhpcy50b2dnbGVVc2VyRmVlZGJhY2sgPSAhIHRoaXMudG9nZ2xlVXNlckZlZWRiYWNrO1xyXG4gICAgdGhpcy51c2VyQ2xvc2VkUGFuZWwgPSBmYWxzZTtcclxuICAgIHRoaXMuZmFjZUNsaWNrZWQgPSBmYWxzZTtcclxuICAgIHRoaXMucmF0aW5nID0gbnVsbDtcclxuICAgIHRoaXMuc3RhcnRSYXRpbmcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25GYWNlQ2xpY2socmF0aW5nOiBudW1iZXIpIHtcclxuICAgIHRoaXMuZmFjZUNsaWNrZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XHJcbiAgfVxyXG5cclxuICBzZW5kRkIoKSB7XHJcbiAgICB0aGlzLnNlbmRGZWVkYmFjay5lbWl0KHtyYXRpbmc6IHRoaXMucmF0aW5nLCBjb21tZW50czogdGhpcy5mZWVkYmFja0Zvcm0udmFsdWUuY29tbWVudH0pO1xyXG4gICAgdGhpcy51c2VyQ2xvc2VkUGFuZWwgPSB0cnVlO1xyXG4gICAgdGhpcy5zdGFydFJhdGluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICB9XHJcblxyXG59XHJcbiIsIjxzZWN0aW9uIGNsYXNzPVwidXNlci1mZWVkYmFjayBib3gtc2hhZG93IG1hcmdpbi1ib3R0b20tMSByYXRpbmcte3sgcmF0aW5nIH19XCIgKm5nSWY9XCJ0b2dnbGVVc2VyRmVlZGJhY2tcIj5cclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgIDxhcnRpY2xlIGNsYXNzPVwiZmxleC1ncm91cCBwYWRkaW5nLTFcIiAqbmdJZj1cInN0YXJ0UmF0aW5nXCI+XHJcbiAgICAgIDxoMyBjbGFzcz1cInRleHQtYWxpZ24tY2VudGVyIG1hcmdpbi10b3AtMC01XCI+XHJcbiAgICAgICAgPHNwYW4+e3sgcXVlc3Rpb24gfX0gPC9zcGFuPlxyXG4gICAgICAgIDxzdHJvbmcgY2xhc3M9XCJpdGFsaWNcIj57eyBhcHBOYW1lIH19PC9zdHJvbmc+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLWJveCBmYWNlcyB0ZXJ0aWFyeSBmbGV4LWdyb3VwIGZsZXgtYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdj5HcmVhdDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uRmFjZUNsaWNrKDUpXCIgW25nQ2xhc3NdPVwieyAnZmFjZS12ZXJ5LXNhdGlzZmllZCc6IHJhdGluZyA9PT0gNSB9XCIgY2xhc3M9XCJmYWNlLXZlcnktc2F0aXNmaWVkLWJsa1wiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uRmFjZUNsaWNrKDQpXCIgW25nQ2xhc3NdPVwieyAnZmFjZS1zYXRpc2ZpZWQnOiByYXRpbmcgPT09IDQgfVwiIGNsYXNzPVwiZmFjZS1zYXRpc2ZpZWQtYmxrXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25GYWNlQ2xpY2soMylcIiBbbmdDbGFzc109XCJ7ICdmYWNlLW5ldXRyYWwnOiByYXRpbmcgPT09IDMgfVwiIGNsYXNzPVwiZmFjZS1uZXV0cmFsLWJsa1wiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uRmFjZUNsaWNrKDIpXCIgW25nQ2xhc3NdPVwieyAnZmFjZS1kaXNzYXRpc2ZpZWQnOiByYXRpbmcgPT09IDIgfVwiIGNsYXNzPVwiZmFjZS1kaXNzYXRpc2ZpZWQtYmxrXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25GYWNlQ2xpY2soMSlcIiBbbmdDbGFzc109XCJ7ICdmYWNlLXZlcnktZGlzc2F0aXNmaWVkJzogcmF0aW5nID09PSAxIH1cIiBjbGFzcz1cImZhY2UtdmVyeS1kaXNzYXRpc2ZpZWQtYmxrXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGRpdj5Qb29yPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG5cclxuICAgIDxhcnRpY2xlICpuZ0lmPVwiZmFjZUNsaWNrZWQgJiYgIXVzZXJDbG9zZWRQYW5lbFwiIGNsYXNzPVwidXNlci1mZWVkYmFjay1jb250ZW50IHBhZGRpbmctMVwiPlxyXG4gICAgICA8Zm9ybSBuYW1lPVwic2VuZEZlZWRiYWNrXCIgW2Zvcm1Hcm91cF09XCJmZWVkYmFja0Zvcm1cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImZlZWRiYWNrXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaWJlIHdpZHRoLTEwMFwiPnt7IGRlc2NyaXB0aW9uIH19PC9kaXY+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgZm9ybUNvbnRyb2xOYW1lPVwiY29tbWVudFwiIGlkPVwiZmVlZGJhY2tcIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWRkaW5nLXRvcC0xIG1heC1yZWFkYWJsZS13aWR0aFwiPlxyXG4gICAgICAgICAgPGVtPnt7IGZvb3ROb3RlIH19PC9lbT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxpZ24tY2VudGVyIG1hcmdpbi10b3AtMVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInNlbmRGQigpXCI+U2VuZCBmZWVkYmFjazwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2FydGljbGU+XHJcblxyXG4gICAgPGFydGljbGUgKm5nSWY9XCJ1c2VyQ2xvc2VkUGFuZWxcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3JvdXAgdm90aW5nLXBhbmVsIHBhZGRpbmctMVwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cInRleHQtYWxpZ24tY2VudGVyIG1hcmdpbi10b3AtMC01XCI+XHJcbiAgICAgICAgICA8c3Bhbj57eyBxdWVzdGlvbiB9fSA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiaXRhbGljXCI+e3sgYXBwTmFtZSB9fTwvc3Ryb25nPj9cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLWJveCBmYWNlcyB0ZXJ0aWFyeSBmbGV4LWdyb3VwIGZsZXgtYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PkdyZWF0PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsgJ2ZhY2UtdmVyeS1zYXRpc2ZpZWQnOiByYXRpbmcgPT09IDUgfVwiIGNsYXNzPVwiZmFjZS12ZXJ5LXNhdGlzZmllZC1ibGtcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieyAnZmFjZS1zYXRpc2ZpZWQnOiByYXRpbmcgPT09IDQgfVwiIGNsYXNzPVwiZmFjZS1zYXRpc2ZpZWQtYmxrXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsgJ2ZhY2UtbmV1dHJhbCc6IHJhdGluZyA9PT0gMyB9XCIgY2xhc3M9XCJmYWNlLW5ldXRyYWwtYmxrXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsgJ2ZhY2UtZGlzc2F0aXNmaWVkJzogcmF0aW5nID09PSAyIH1cIiBjbGFzcz1cImZhY2UtZGlzc2F0aXNmaWVkLWJsa1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7ICdmYWNlLXZlcnktZGlzc2F0aXNmaWVkJzogcmF0aW5nID09PSAxIH1cIiBjbGFzcz1cImZhY2UtdmVyeS1kaXNzYXRpc2ZpZWQtYmxrXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlBvb3I8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwidXNlci1mZWVkYmFjay1jb250ZW50IHBhZGRpbmctMVwiPlxyXG4gICAgICAgIDxwPnt7IGNsb3NpbmdNZXNzYWdlIH19PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aGFua3MgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwicmF0aW5nID09PSA1XCIgY2xhc3M9XCJmYWNlLXZlcnktc2F0aXNmaWVkXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwicmF0aW5nID09PSA0XCIgY2xhc3M9XCJmYWNlLXNhdGlzZmllZFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cInJhdGluZyA9PT0gM1wiIGNsYXNzPVwiZmFjZS1uZXV0cmFsXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwicmF0aW5nID09PSAyXCIgY2xhc3M9XCJmYWNlLWRpc3NhdGlzZmllZFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cInJhdGluZyA9PT0gMVwiIGNsYXNzPVwiZmFjZS12ZXJ5LWRpc3NhdGlzZmllZFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGVydGlhcnlcIiAoY2xpY2spPVwib25DbG9zZSgpXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcbiJdfQ==