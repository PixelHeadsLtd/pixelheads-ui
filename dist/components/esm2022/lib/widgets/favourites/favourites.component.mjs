import { ChangeDetectionStrategy, EventEmitter, Component, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../pipes/order-by";
function FavouritesComponent_section_0_h2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 8)(3, "strong", 9);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.favsHeading, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.favsTarget.length);
} }
function FavouritesComponent_section_0_div_3_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function FavouritesComponent_section_0_div_3_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const item_r6 = i0.ɵɵnextContext().$implicit; const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onFavClick(item_r6)); });
    i0.ɵɵelementEnd();
} }
function FavouritesComponent_section_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "section", 11)(2, "div")(3, "h4", 12);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "a", 13);
    i0.ɵɵlistener("click", function FavouritesComponent_section_0_div_3_Template_a_click_7_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.onAnchorClick($event)); });
    i0.ɵɵelementStart(8, "h3", 12);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "p", 14);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p", 15);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "slice");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "section", 16);
    i0.ɵɵelement(18, "div", 17);
    i0.ɵɵtemplate(19, FavouritesComponent_section_0_div_3_button_19_Template, 1, 0, "button", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("fav-saved", item_r6.isFavourite);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("\n          width-3 \n          height-3 \n          flex-center \n          border-radius-50 \n          ", item_r6.favColour, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r6.favLabel.length > 3 ? i0.ɵɵpipeBind3(5, 10, item_r6.favLabel, 0, 3) + "..." : item_r6.favLabel);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", item_r6.favTitle.length > 27 ? i0.ɵɵpipeBind3(10, 14, item_r6.favTitle, 0, 27) + "..." : item_r6.favTitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r6.favTextLineOne.length > 45 ? i0.ɵɵpipeBind3(13, 18, item_r6.favTextLineOne, 0, 45) + "..." : item_r6.favTextLineOne, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r6.favTextLineTwo.length > 45 ? i0.ɵɵpipeBind3(16, 22, item_r6.favTextLineTwo, 0, 45) + "..." : item_r6.favTextLineTwo, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r3.disableFavsStar);
} }
function FavouritesComponent_section_0_hr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr", 20);
} }
function FavouritesComponent_section_0_div_7_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function FavouritesComponent_section_0_div_7_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const item_r14 = i0.ɵɵnextContext().$implicit; const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.onFavClick(item_r14)); });
    i0.ɵɵelementEnd();
} }
function FavouritesComponent_section_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "section", 11)(2, "div")(3, "h4", 12);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "a", 13);
    i0.ɵɵlistener("click", function FavouritesComponent_section_0_div_7_Template_a_click_7_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.onAnchorClick($event)); });
    i0.ɵɵelementStart(8, "h3", 12);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "p", 14);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p", 15);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "slice");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "section", 16);
    i0.ɵɵelement(18, "div", 17);
    i0.ɵɵtemplate(19, FavouritesComponent_section_0_div_7_button_19_Template, 1, 0, "button", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("fav-saved", item_r14.isFavourite);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("\n          width-3 \n          height-3 \n          flex-center \n          border-radius-50 \n          ", item_r14.favColour, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r14.favLabel.length > 3 ? i0.ɵɵpipeBind3(5, 10, item_r14.favLabel, 0, 3) + "..." : item_r14.favLabel);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", item_r14.favTitle.length > 27 ? i0.ɵɵpipeBind3(10, 14, item_r14.favTitle, 0, 27) + "..." : item_r14.favTitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r14.favTextLineOne.length > 45 ? i0.ɵɵpipeBind3(13, 18, item_r14.favTextLineOne, 0, 45) + "..." : item_r14.favTextLineOne, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r14.favTextLineTwo.length > 45 ? i0.ɵɵpipeBind3(16, 22, item_r14.favTextLineTwo, 0, 45) + "..." : item_r14.favTextLineTwo, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r5.disableFavsStar);
} }
function FavouritesComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵtemplate(1, FavouritesComponent_section_0_h2_1_Template, 5, 2, "h2", 3);
    i0.ɵɵelementStart(2, "section", 4);
    i0.ɵɵtemplate(3, FavouritesComponent_section_0_div_3_Template, 20, 26, "div", 5);
    i0.ɵɵpipe(4, "orderBy");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, FavouritesComponent_section_0_hr_5_Template, 1, 0, "hr", 6);
    i0.ɵɵelementStart(6, "section", 4);
    i0.ɵɵtemplate(7, FavouritesComponent_section_0_div_7_Template, 20, 26, "div", 5);
    i0.ɵɵpipe(8, "orderBy");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.favsTarget.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(4, 4, ctx_r0.favsTarget, "favTitle"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.favsTarget.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(8, 7, ctx_r0.favsOrigin, "favTitle"));
} }
function FavouritesComponent_section_1_h2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 8)(3, "strong", 9);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r22.favsHeading, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r22.favsTarget.length);
} }
function FavouritesComponent_section_1_div_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function FavouritesComponent_section_1_div_3_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const item_r26 = i0.ɵɵnextContext().$implicit; const ctx_r29 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r29.onFavClick(item_r26)); });
    i0.ɵɵelementEnd();
} }
function FavouritesComponent_section_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "section", 24);
    i0.ɵɵelement(2, "div", 17);
    i0.ɵɵtemplate(3, FavouritesComponent_section_1_div_3_button_3_Template, 1, 0, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "h4", 12);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 25)(9, "a", 13);
    i0.ɵɵlistener("click", function FavouritesComponent_section_1_div_3_Template_a_click_9_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r32.onAnchorClick($event)); });
    i0.ɵɵelementStart(10, "h2", 26);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 27);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 27);
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 27);
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "slice");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("fav-saved", item_r26.isFavourite);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r23.disableFavsStar);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("\n        flex-none \n        width-3 \n        height-3 \n        flex-center \n        border-radius-50 \n        margin-right-0\n        ", item_r26.favColour, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r26.favLabel.length > 3 ? i0.ɵɵpipeBind3(7, 11, item_r26.favLabel, 0, 3) + "..." : item_r26.favLabel);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", item_r26.favTitle.length > 25 ? i0.ɵɵpipeBind3(12, 15, item_r26.favTitle, 0, 25) + "..." : item_r26.favTitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r26.favTextLineOne.length > 23 ? i0.ɵɵpipeBind3(15, 19, item_r26.favTextLineOne, 0, 23) + "..." : item_r26.favTextLineOne, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r26.favTextLineTwo.length > 23 ? i0.ɵɵpipeBind3(18, 23, item_r26.favTextLineTwo, 0, 23) + "..." : item_r26.favTextLineTwo, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r26.favTextLineThree.length > 23 ? i0.ɵɵpipeBind3(21, 27, item_r26.favTextLineThree, 0, 23) + "..." : item_r26.favTextLineThree, " ");
} }
function FavouritesComponent_section_1_hr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr", 20);
} }
function FavouritesComponent_section_1_div_7_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function FavouritesComponent_section_1_div_7_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r39); const item_r34 = i0.ɵɵnextContext().$implicit; const ctx_r37 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r37.onFavClick(item_r34)); });
    i0.ɵɵelementEnd();
} }
function FavouritesComponent_section_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "section", 24);
    i0.ɵɵelement(2, "div", 17);
    i0.ɵɵtemplate(3, FavouritesComponent_section_1_div_7_button_3_Template, 1, 0, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "h4", 12);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 25)(9, "a", 13);
    i0.ɵɵlistener("click", function FavouritesComponent_section_1_div_7_Template_a_click_9_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r40.onAnchorClick($event)); });
    i0.ɵɵelementStart(10, "h2", 26);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 27);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 27);
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 27);
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "slice");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("fav-saved", item_r34.isFavourite);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r25.disableFavsStar);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("\n        flex-none \n        width-3 \n        height-3 \n        flex-center \n        border-radius-50 \n        margin-right-0\n        ", item_r34.favColour, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r34.favLabel.length > 3 ? i0.ɵɵpipeBind3(7, 11, item_r34.favLabel, 0, 3) + "..." : item_r34.favLabel);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", item_r34.favTitle.length > 25 ? i0.ɵɵpipeBind3(12, 15, item_r34.favTitle, 0, 25) + "..." : item_r34.favTitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r34.favTextLineOne.length > 23 ? i0.ɵɵpipeBind3(15, 19, item_r34.favTextLineOne, 0, 23) + "..." : item_r34.favTextLineOne, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r34.favTextLineTwo.length > 23 ? i0.ɵɵpipeBind3(18, 23, item_r34.favTextLineTwo, 0, 23) + "..." : item_r34.favTextLineTwo, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r34.favTextLineThree.length > 23 ? i0.ɵɵpipeBind3(21, 27, item_r34.favTextLineThree, 0, 23) + "..." : item_r34.favTextLineThree, " ");
} }
function FavouritesComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 21);
    i0.ɵɵtemplate(1, FavouritesComponent_section_1_h2_1_Template, 5, 2, "h2", 3);
    i0.ɵɵelementStart(2, "section", 4);
    i0.ɵɵtemplate(3, FavouritesComponent_section_1_div_3_Template, 22, 31, "div", 22);
    i0.ɵɵpipe(4, "orderBy");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, FavouritesComponent_section_1_hr_5_Template, 1, 0, "hr", 6);
    i0.ɵɵelementStart(6, "section", 4);
    i0.ɵɵtemplate(7, FavouritesComponent_section_1_div_7_Template, 22, 31, "div", 22);
    i0.ɵɵpipe(8, "orderBy");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.favsTarget.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(4, 4, ctx_r1.favsTarget, "favTitle"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.favsTarget.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(8, 7, ctx_r1.favsOrigin, "favTitle"));
} }
export class FavouritesComponent {
    onAnchorClick(e) {
        e.stopPropagation();
        this.anchorClick.emit(e);
    }
    onFavClick(fav) {
        fav.isFavourite = !fav.isFavourite;
        this.favClick.emit(fav);
        if (this.favsOrigin.indexOf(fav) !== -1) {
            this.favsOrigin.splice(this.favsOrigin.indexOf(fav), 1);
            this.favsTarget.push(fav);
        }
        else {
            this.favsTarget.splice(this.favsTarget.indexOf(fav), 1);
            this.favsOrigin.push(fav);
        }
    }
    constructor() {
        this.showLandscapeFavs = false;
        this.showPortraitFavs = false;
        this.anchorIsClicked = false;
        this.disableFavsStar = false;
        this.toggleFavourite = '';
        this.favsHeading = '';
        this.clickAnchor = '';
        this.favLabel = '';
        this.favTitle = '';
        this.favTextLineOne = '';
        this.favTextLineTwo = '';
        this.favTextLineThree = '';
        this.favColour = '';
        this.favsOrigin = [];
        this.favsTarget = [];
        this.favsPortrait = [];
        this.isFavourite = null;
        this.anchorClick = new EventEmitter();
        this.favClick = new EventEmitter();
        if (!this.favsTarget) {
            this.favsTarget = [];
        }
        if (!this.favsOrigin) {
            this.favsOrigin = [];
        }
    }
    static { this.ɵfac = function FavouritesComponent_Factory(t) { return new (t || FavouritesComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FavouritesComponent, selectors: [["aa-favourites"]], inputs: { showLandscapeFavs: "showLandscapeFavs", showPortraitFavs: "showPortraitFavs", anchorIsClicked: "anchorIsClicked", disableFavsStar: "disableFavsStar", toggleFavourite: "toggleFavourite", favsHeading: "favsHeading", clickAnchor: "clickAnchor", favLabel: "favLabel", favTitle: "favTitle", favTextLineOne: "favTextLineOne", favTextLineTwo: "favTextLineTwo", favTextLineThree: "favTextLineThree", favColour: "favColour", favsOrigin: "favsOrigin", favsTarget: "favsTarget", favsPortrait: "favsPortrait", isFavourite: "isFavourite" }, outputs: { anchorClick: "anchorClick", favClick: "favClick" }, decls: 2, vars: 2, consts: [["class", "aa-favs aa-favs-landscape", 4, "ngIf"], ["class", "aa-favs aa-favs-portrait", 4, "ngIf"], [1, "aa-favs", "aa-favs-landscape"], ["class", "width-100 flex-group flex-start flex-align-center", 4, "ngIf"], [1, "flex-group", "flex-start"], ["class", "\n        flex-group\n        flex-align-center\n        space-between\n        bg-aa-white-100\n        margin-bottom-0-75\n        min-width-24\n        max-width-24\n        padding-0-75\n        box-shadow \n        bd-solid \n        bd-grey-10 \n        bd-1", 3, "fav-saved", 4, "ngFor", "ngForOf"], ["class", "min-width-100 margin-bottom-0-75", 4, "ngIf"], [1, "width-100", "flex-group", "flex-start", "flex-align-center"], [1, "flex-group", "flex-center", "bg-aa-light-blue-15", "border-radius-50", "width-1-25", "height-1-25", "margin-left-0-5", "font-size-xsmall"], [1, "flex-group", "flex-center"], [1, "flex-group", "flex-align-center", "space-between", "bg-aa-white-100", "margin-bottom-0-75", "min-width-24", "max-width-24", "padding-0-75", "box-shadow", "bd-solid", "bd-grey-10", "bd-1"], [1, "flex-group", "flex-start", "flex-align-center"], [1, "margin-0"], [1, "text-decoration-none", "cursor-pointer", 3, "click"], [1, "small", "padding-top-0-25", "margin-0"], [1, "small", "margin-0"], [1, "flex-group", "flex-align-center", "fav-controls"], [1, "flag", "au", "width-1", "height-1", "margin-0"], ["class", "btn-fav material-icons-outlined margin-0 margin-left-0-25", 3, "click", 4, "ngIf"], [1, "btn-fav", "material-icons-outlined", "margin-0", "margin-left-0-25", 3, "click"], [1, "min-width-100", "margin-bottom-0-75"], [1, "aa-favs", "aa-favs-portrait"], ["class", "\n        position-relative\n        flex-group\n        flex-center\n        flex-column\n        margin-bottom-0-75\n        bg-aa-white-100\n        min-width-12\n        max-width-12\n        min-height-14\n        max-height-14\n        padding-1\n        box-shadow \n        bd-solid \n        bd-grey-10 \n        bd-1", 3, "fav-saved", 4, "ngFor", "ngForOf"], [1, "position-relative", "flex-group", "flex-center", "flex-column", "margin-bottom-0-75", "bg-aa-white-100", "min-width-12", "max-width-12", "min-height-14", "max-height-14", "padding-1", "box-shadow", "bd-solid", "bd-grey-10", "bd-1"], [1, "flex-group", "flex-align-center", "position-absolute", "top-0-5", "right-0-5", "margin-right-0", "fav-controls"], [1, "margin-right-0", "margin-top-0-75"], [1, "margin-0", "margin-bottom-0-5", "text-align-center"], [1, "small", "margin-0", "text-align-center"]], template: function FavouritesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FavouritesComponent_section_0_Template, 9, 10, "section", 0)(1, FavouritesComponent_section_1_Template, 9, 10, "section", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showLandscapeFavs);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showPortraitFavs);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.SlicePipe, i2.OrderByPipe], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavouritesComponent, [{
        type: Component,
        args: [{ selector: 'aa-favourites', changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- LANDSCAPE -->\r\n<section class=\"aa-favs aa-favs-landscape\" *ngIf=\"showLandscapeFavs\">\r\n  <h2 *ngIf=\"favsTarget.length\" class=\"width-100 flex-group flex-start flex-align-center\">\r\n    {{favsHeading}}\r\n    <span \r\n      class=\"\r\n      flex-group \r\n      flex-center \r\n      bg-aa-light-blue-15 \r\n      border-radius-50\r\n      width-1-25\r\n      height-1-25\r\n      margin-left-0-5\r\n      font-size-xsmall\"\r\n      >\r\n      <strong class=\"flex-group flex-center\">{{favsTarget.length}}</strong>\r\n    </span>\r\n  </h2>\r\n  <section class=\"flex-group flex-start\">\r\n    <div \r\n      *ngFor=\"let item of favsTarget | orderBy:'favTitle'; let i = index\" \r\n      [class.fav-saved]=\"item.isFavourite\"\r\n      class=\"\r\n        flex-group\r\n        flex-align-center\r\n        space-between\r\n        bg-aa-white-100\r\n        margin-bottom-0-75\r\n        min-width-24\r\n        max-width-24\r\n        padding-0-75\r\n        box-shadow \r\n        bd-solid \r\n        bd-grey-10 \r\n        bd-1\"\r\n      >\r\n      <section class=\"flex-group flex-start flex-align-center\">\r\n        <div \r\n          class=\"\r\n          width-3 \r\n          height-3 \r\n          flex-center \r\n          border-radius-50 \r\n          {{item.favColour}}\"\r\n        >\r\n          <h4 class=\"margin-0\">{{(item.favLabel.length>3)? (item.favLabel | slice:0:3)+'...':(item.favLabel)}}</h4>\r\n        </div>\r\n        <div>\r\n          <a (click)=\"onAnchorClick($event)\" class=\"text-decoration-none cursor-pointer\">\r\n            <h3 class=\"margin-0\">\r\n              {{(item.favTitle.length>27)? (item.favTitle | slice:0:27)+'...':(item.favTitle)}}\r\n            </h3>\r\n          </a>\r\n          <p class=\"small padding-top-0-25 margin-0\">\r\n            {{(item.favTextLineOne.length>45)? (item.favTextLineOne | slice:0:45)+'...':(item.favTextLineOne)}}\r\n          </p>\r\n          <p class=\"small margin-0\">\r\n            {{(item.favTextLineTwo.length>45)? (item.favTextLineTwo | slice:0:45)+'...':(item.favTextLineTwo)}}\r\n          </p>\r\n        </div>\r\n      </section>\r\n      <section class=\"flex-group flex-align-center fav-controls\">\r\n        <div class=\"flag au width-1 height-1 margin-0\"></div>\r\n        <button \r\n          *ngIf=\"!disableFavsStar\"\r\n          (click)=\"onFavClick(item)\" \r\n          class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n          >\r\n        </button>\r\n      </section>\r\n    </div>\r\n  </section>\r\n\r\n  <hr *ngIf=\"favsTarget.length\" class=\"min-width-100 margin-bottom-0-75\" />\r\n\r\n  <section class=\"flex-group flex-start\">\r\n    <div \r\n      *ngFor=\"let item of favsOrigin | orderBy:'favTitle'; let i = index\" \r\n      [class.fav-saved]=\"item.isFavourite\"\r\n      class=\"\r\n        flex-group\r\n        flex-align-center\r\n        space-between\r\n        bg-aa-white-100\r\n        margin-bottom-0-75\r\n        min-width-24\r\n        max-width-24\r\n        padding-0-75\r\n        box-shadow \r\n        bd-solid \r\n        bd-grey-10 \r\n        bd-1\"\r\n      >\r\n      <section class=\"flex-group flex-start flex-align-center\">\r\n        <div \r\n          class=\"\r\n          width-3 \r\n          height-3 \r\n          flex-center \r\n          border-radius-50 \r\n          {{item.favColour}}\"\r\n        >\r\n          <h4 class=\"margin-0\">{{(item.favLabel.length>3)? (item.favLabel | slice:0:3)+'...':(item.favLabel)}}</h4>\r\n        </div>\r\n        <div>\r\n          <a (click)=\"onAnchorClick($event)\" class=\"text-decoration-none cursor-pointer\">\r\n            <h3 class=\"margin-0\">\r\n              {{(item.favTitle.length>27)? (item.favTitle | slice:0:27)+'...':(item.favTitle)}}\r\n            </h3>\r\n          </a>\r\n          <p class=\"small padding-top-0-25 margin-0\">\r\n            {{(item.favTextLineOne.length>45)? (item.favTextLineOne | slice:0:45)+'...':(item.favTextLineOne)}}\r\n          </p>\r\n          <p class=\"small margin-0\">\r\n            {{(item.favTextLineTwo.length>45)? (item.favTextLineTwo | slice:0:45)+'...':(item.favTextLineTwo)}}\r\n          </p>\r\n        </div>\r\n      </section>\r\n      <section class=\"flex-group flex-align-center fav-controls\">\r\n        <div class=\"flag au width-1 height-1 margin-0\"></div>\r\n        <button \r\n          *ngIf=\"!disableFavsStar\"\r\n          (click)=\"onFavClick(item)\" \r\n          class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n          >\r\n        </button>\r\n      </section>\r\n    </div>\r\n  </section>\r\n</section>\r\n\r\n<!-- PORTRAIT -->\r\n<section class=\"aa-favs aa-favs-portrait\" *ngIf=\"showPortraitFavs\">\r\n  <h2 *ngIf=\"favsTarget.length\" class=\"width-100 flex-group flex-start flex-align-center\">\r\n    {{favsHeading}}\r\n    <span \r\n      class=\"\r\n      flex-group \r\n      flex-center \r\n      bg-aa-light-blue-15 \r\n      border-radius-50\r\n      width-1-25\r\n      height-1-25\r\n      margin-left-0-5\r\n      font-size-xsmall\"\r\n      >\r\n      <strong class=\"flex-group flex-center\">{{favsTarget.length}}</strong>\r\n    </span>\r\n  </h2>\r\n  <section class=\"flex-group flex-start\">\r\n    <div  \r\n      *ngFor=\"let item of favsTarget | orderBy:'favTitle'; let i = index\" \r\n      [class.fav-saved]=\"item.isFavourite\"\r\n      class=\"\r\n        position-relative\r\n        flex-group\r\n        flex-center\r\n        flex-column\r\n        margin-bottom-0-75\r\n        bg-aa-white-100\r\n        min-width-12\r\n        max-width-12\r\n        min-height-14\r\n        max-height-14\r\n        padding-1\r\n        box-shadow \r\n        bd-solid \r\n        bd-grey-10 \r\n        bd-1\"\r\n      >\r\n      <section \r\n        class=\"\r\n        flex-group \r\n        flex-align-center \r\n        position-absolute \r\n        top-0-5 \r\n        right-0-5 \r\n        margin-right-0\r\n        fav-controls\"\r\n      >\r\n        <div class=\"flag au width-1 height-1 margin-0\"></div>\r\n        <button \r\n          *ngIf=\"!disableFavsStar\"\r\n          (click)=\"onFavClick(item)\" \r\n          class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n          >\r\n        </button>\r\n      </section>\r\n      <div \r\n        class=\"\r\n        flex-none \r\n        width-3 \r\n        height-3 \r\n        flex-center \r\n        border-radius-50 \r\n        margin-right-0\r\n        {{item.favColour}}\"\r\n        >\r\n        <h4 class=\"margin-0\">{{(item.favLabel.length>3)? (item.favLabel | slice:0:3)+'...':(item.favLabel)}}</h4>\r\n      </div>\r\n      <div class=\"margin-right-0 margin-top-0-75\">\r\n        <a (click)=\"onAnchorClick($event)\" class=\"text-decoration-none cursor-pointer\">\r\n          <h2 class=\"margin-0 margin-bottom-0-5 text-align-center\">\r\n            {{(item.favTitle.length>25)? (item.favTitle | slice:0:25)+'...':(item.favTitle)}}\r\n          </h2>\r\n        </a>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineOne.length>23)? (item.favTextLineOne | slice:0:23)+'...':(item.favTextLineOne)}}\r\n        </p>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineTwo.length>23)? (item.favTextLineTwo | slice:0:23)+'...':(item.favTextLineTwo)}}\r\n        </p>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineThree.length>23)? (item.favTextLineThree | slice:0:23)+'...':(item.favTextLineThree)}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n \r\n  <hr *ngIf=\"favsTarget.length\" class=\"min-width-100 margin-bottom-0-75\" />\r\n\r\n  <section class=\"flex-group flex-start\">\r\n    <div  \r\n      *ngFor=\"let item of favsOrigin | orderBy:'favTitle'; let i = index\" \r\n      [class.fav-saved]=\"item.isFavourite\"\r\n      class=\"\r\n        position-relative\r\n        flex-group\r\n        flex-center\r\n        flex-column\r\n        margin-bottom-0-75\r\n        bg-aa-white-100\r\n        min-width-12\r\n        max-width-12\r\n        min-height-14\r\n        max-height-14\r\n        padding-1\r\n        box-shadow \r\n        bd-solid \r\n        bd-grey-10 \r\n        bd-1\"\r\n      >\r\n      <section \r\n        class=\"\r\n        flex-group \r\n        flex-align-center \r\n        position-absolute \r\n        top-0-5 \r\n        right-0-5 \r\n        margin-right-0\r\n        fav-controls\"\r\n      >\r\n        <div class=\"flag au width-1 height-1 margin-0\"></div>\r\n        <button \r\n        *ngIf=\"!disableFavsStar\"\r\n          (click)=\"onFavClick(item)\" \r\n          class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n          >\r\n        </button>\r\n      </section>\r\n      <div \r\n        class=\"\r\n        flex-none \r\n        width-3 \r\n        height-3 \r\n        flex-center \r\n        border-radius-50 \r\n        margin-right-0\r\n        {{item.favColour}}\"\r\n        >\r\n        <h4 class=\"margin-0\">{{(item.favLabel.length>3)? (item.favLabel | slice:0:3)+'...':(item.favLabel)}}</h4>\r\n      </div>\r\n      <div class=\"margin-right-0 margin-top-0-75\">\r\n        <a (click)=\"onAnchorClick($event)\" class=\"text-decoration-none cursor-pointer\">\r\n          <h2 class=\"margin-0 margin-bottom-0-5 text-align-center\">\r\n            {{(item.favTitle.length>25)? (item.favTitle | slice:0:25)+'...':(item.favTitle)}}\r\n          </h2>\r\n        </a>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineOne.length>23)? (item.favTextLineOne | slice:0:23)+'...':(item.favTextLineOne)}}\r\n        </p>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineTwo.length>23)? (item.favTextLineTwo | slice:0:23)+'...':(item.favTextLineTwo)}}\r\n        </p>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineThree.length>23)? (item.favTextLineThree | slice:0:23)+'...':(item.favTextLineThree)}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</section>" }]
    }], () => [], { showLandscapeFavs: [{
            type: Input
        }], showPortraitFavs: [{
            type: Input
        }], anchorIsClicked: [{
            type: Input
        }], disableFavsStar: [{
            type: Input
        }], toggleFavourite: [{
            type: Input
        }], favsHeading: [{
            type: Input
        }], clickAnchor: [{
            type: Input
        }], favLabel: [{
            type: Input
        }], favTitle: [{
            type: Input
        }], favTextLineOne: [{
            type: Input
        }], favTextLineTwo: [{
            type: Input
        }], favTextLineThree: [{
            type: Input
        }], favColour: [{
            type: Input
        }], favsOrigin: [{
            type: Input
        }], favsTarget: [{
            type: Input
        }], favsPortrait: [{
            type: Input
        }], isFavourite: [{
            type: Input
        }], anchorClick: [{
            type: Output
        }], favClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FavouritesComponent, { className: "FavouritesComponent", filePath: "lib\\widgets\\favourites\\favourites.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3VyaXRlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9mYXZvdXJpdGVzL2Zhdm91cml0ZXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvZmF2b3VyaXRlcy9mYXZvdXJpdGVzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRTlGLDZCQUF3RjtJQUN0RixZQUNBO0lBQUEsK0JBVUcsZ0JBQUE7SUFDc0MsWUFBcUI7SUFBQSxpQkFBUyxFQUFBLEVBQUE7OztJQVp2RSxjQUNBO0lBREEsbURBQ0E7SUFXeUMsZUFBcUI7SUFBckIsOENBQXFCOzs7O0lBZ0QxRCxrQ0FJRztJQUZELG9PQUFTLGVBQUEsMEJBQWdCLENBQUEsSUFBQztJQUc1QixpQkFBUzs7OztJQWpEYiwrQkFnQkcsa0JBQUEsVUFBQSxhQUFBO0lBVXdCLFlBQStFOztJQUFBLGlCQUFLLEVBQUE7SUFFM0csMkJBQUssWUFBQTtJQUNBLDhLQUFTLGVBQUEsNkJBQXFCLENBQUEsSUFBQztJQUNoQyw4QkFBcUI7SUFDbkIsWUFDRjs7SUFBQSxpQkFBSyxFQUFBO0lBRVAsOEJBQTJDO0lBQ3pDLGFBQ0Y7O0lBQUEsaUJBQUk7SUFDSiw4QkFBMEI7SUFDeEIsYUFDRjs7SUFBQSxpQkFBSSxFQUFBLEVBQUE7SUFHUixvQ0FBMkQ7SUFDekQsMkJBQXFEO0lBQ3JELDZGQUtTO0lBQ1gsaUJBQVUsRUFBQTs7OztJQWhEVixnREFBb0M7SUFpQmhDLGVBS21CO0lBTG5CLDhKQUttQjtJQUVFLGVBQStFO0lBQS9FLDRIQUEr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Q0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztvRkEvQ1UsbUJBQW1CO29FQUFuQixtQkFBbUI7WUNqQmhDLDZFQWdJVSxnRUFBQTs7WUFoSWtDLDRDQUF1QjtZQW1JeEIsY0FBc0I7WUFBdEIsMkNBQXNCOzs7aUZEbEhwRCxtQkFBbUI7Y0FOL0IsU0FBUzsyQkFDRSxlQUFlLG1CQUdSLHVCQUF1QixDQUFDLE1BQU07b0JBSXRDLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBRUksV0FBVztrQkFBcEIsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07O2tGQXJCSSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRXZlbnRFbWl0dGVyLCBDb21wb25lbnQsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmludGVyZmFjZSBGYXZvdXJpdGVJdGVtIHtcclxuICBmYXZDb2xvdXI6IHN0cmluZztcclxuICBmYXZMYWJlbDogc3RyaW5nO1xyXG4gIGZhdlRpdGxlOiBzdHJpbmc7XHJcbiAgZmF2VGV4dExpbmVPbmU6IHN0cmluZztcclxuICBmYXZUZXh0TGluZVR3bzogc3RyaW5nO1xyXG4gIGZhdlRleHRMaW5lVGhyZWU/OiBzdHJpbmc7XHJcbiAgaXNGYXZvdXJpdGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtZmF2b3VyaXRlcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zhdm91cml0ZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Zhdm91cml0ZXMuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmF2b3VyaXRlc0NvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHNob3dMYW5kc2NhcGVGYXZzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1BvcnRyYWl0RmF2czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFuY2hvcklzQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVGYXZzU3RhcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRvZ2dsZUZhdm91cml0ZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZmF2c0hlYWRpbmc6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNsaWNrQW5jaG9yOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmYXZMYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZmF2VGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGZhdlRleHRMaW5lT25lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmYXZUZXh0TGluZVR3bzogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZmF2VGV4dExpbmVUaHJlZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZmF2Q29sb3VyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmYXZzT3JpZ2luOiBBcnJheTxGYXZvdXJpdGVJdGVtPiA9IFtdO1xyXG4gIEBJbnB1dCgpIGZhdnNUYXJnZXQ6IEFycmF5PEZhdm91cml0ZUl0ZW0+ID0gW107XHJcbiAgQElucHV0KCkgZmF2c1BvcnRyYWl0OiBBcnJheTxGYXZvdXJpdGVJdGVtPiA9IFtdO1xyXG4gIEBJbnB1dCgpIGlzRmF2b3VyaXRlOiBhbnkgPSBudWxsO1xyXG5cclxuICBAT3V0cHV0KCkgYW5jaG9yQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBmYXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8RmF2b3VyaXRlSXRlbT4oKTtcclxuXHJcbiAgcHVibGljIG9uQW5jaG9yQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmFuY2hvckNsaWNrLmVtaXQoZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25GYXZDbGljayhmYXY6IEZhdm91cml0ZUl0ZW0pIHtcclxuICAgIGZhdi5pc0Zhdm91cml0ZSA9ICFmYXYuaXNGYXZvdXJpdGU7XHJcbiAgICB0aGlzLmZhdkNsaWNrLmVtaXQoZmF2KTtcclxuICAgIGlmICh0aGlzLmZhdnNPcmlnaW4uaW5kZXhPZihmYXYpICE9PSAtMSkge1xyXG4gICAgICB0aGlzLmZhdnNPcmlnaW4uc3BsaWNlKHRoaXMuZmF2c09yaWdpbi5pbmRleE9mKGZhdiksIDEpO1xyXG4gICAgICB0aGlzLmZhdnNUYXJnZXQucHVzaChmYXYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mYXZzVGFyZ2V0LnNwbGljZSh0aGlzLmZhdnNUYXJnZXQuaW5kZXhPZihmYXYpLCAxKTtcclxuICAgICAgdGhpcy5mYXZzT3JpZ2luLnB1c2goZmF2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKCF0aGlzLmZhdnNUYXJnZXQpIHtcclxuICAgICAgdGhpcy5mYXZzVGFyZ2V0ID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuZmF2c09yaWdpbikge1xyXG4gICAgICB0aGlzLmZhdnNPcmlnaW4gPSBbXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPCEtLSBMQU5EU0NBUEUgLS0+XHJcbjxzZWN0aW9uIGNsYXNzPVwiYWEtZmF2cyBhYS1mYXZzLWxhbmRzY2FwZVwiICpuZ0lmPVwic2hvd0xhbmRzY2FwZUZhdnNcIj5cclxuICA8aDIgKm5nSWY9XCJmYXZzVGFyZ2V0Lmxlbmd0aFwiIGNsYXNzPVwid2lkdGgtMTAwIGZsZXgtZ3JvdXAgZmxleC1zdGFydCBmbGV4LWFsaWduLWNlbnRlclwiPlxyXG4gICAge3tmYXZzSGVhZGluZ319XHJcbiAgICA8c3BhbiBcclxuICAgICAgY2xhc3M9XCJcclxuICAgICAgZmxleC1ncm91cCBcclxuICAgICAgZmxleC1jZW50ZXIgXHJcbiAgICAgIGJnLWFhLWxpZ2h0LWJsdWUtMTUgXHJcbiAgICAgIGJvcmRlci1yYWRpdXMtNTBcclxuICAgICAgd2lkdGgtMS0yNVxyXG4gICAgICBoZWlnaHQtMS0yNVxyXG4gICAgICBtYXJnaW4tbGVmdC0wLTVcclxuICAgICAgZm9udC1zaXplLXhzbWFsbFwiXHJcbiAgICAgID5cclxuICAgICAgPHN0cm9uZyBjbGFzcz1cImZsZXgtZ3JvdXAgZmxleC1jZW50ZXJcIj57e2ZhdnNUYXJnZXQubGVuZ3RofX08L3N0cm9uZz5cclxuICAgIDwvc3Bhbj5cclxuICA8L2gyPlxyXG4gIDxzZWN0aW9uIGNsYXNzPVwiZmxleC1ncm91cCBmbGV4LXN0YXJ0XCI+XHJcbiAgICA8ZGl2IFxyXG4gICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmYXZzVGFyZ2V0IHwgb3JkZXJCeTonZmF2VGl0bGUnOyBsZXQgaSA9IGluZGV4XCIgXHJcbiAgICAgIFtjbGFzcy5mYXYtc2F2ZWRdPVwiaXRlbS5pc0Zhdm91cml0ZVwiXHJcbiAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgZmxleC1ncm91cFxyXG4gICAgICAgIGZsZXgtYWxpZ24tY2VudGVyXHJcbiAgICAgICAgc3BhY2UtYmV0d2VlblxyXG4gICAgICAgIGJnLWFhLXdoaXRlLTEwMFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b20tMC03NVxyXG4gICAgICAgIG1pbi13aWR0aC0yNFxyXG4gICAgICAgIG1heC13aWR0aC0yNFxyXG4gICAgICAgIHBhZGRpbmctMC03NVxyXG4gICAgICAgIGJveC1zaGFkb3cgXHJcbiAgICAgICAgYmQtc29saWQgXHJcbiAgICAgICAgYmQtZ3JleS0xMCBcclxuICAgICAgICBiZC0xXCJcclxuICAgICAgPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImZsZXgtZ3JvdXAgZmxleC1zdGFydCBmbGV4LWFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgd2lkdGgtMyBcclxuICAgICAgICAgIGhlaWdodC0zIFxyXG4gICAgICAgICAgZmxleC1jZW50ZXIgXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzLTUwIFxyXG4gICAgICAgICAge3tpdGVtLmZhdkNvbG91cn19XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDQgY2xhc3M9XCJtYXJnaW4tMFwiPnt7KGl0ZW0uZmF2TGFiZWwubGVuZ3RoPjMpPyAoaXRlbS5mYXZMYWJlbCB8IHNsaWNlOjA6MykrJy4uLic6KGl0ZW0uZmF2TGFiZWwpfX08L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSAoY2xpY2spPVwib25BbmNob3JDbGljaygkZXZlbnQpXCIgY2xhc3M9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZSBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJtYXJnaW4tMFwiPlxyXG4gICAgICAgICAgICAgIHt7KGl0ZW0uZmF2VGl0bGUubGVuZ3RoPjI3KT8gKGl0ZW0uZmF2VGl0bGUgfCBzbGljZTowOjI3KSsnLi4uJzooaXRlbS5mYXZUaXRsZSl9fVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJzbWFsbCBwYWRkaW5nLXRvcC0wLTI1IG1hcmdpbi0wXCI+XHJcbiAgICAgICAgICAgIHt7KGl0ZW0uZmF2VGV4dExpbmVPbmUubGVuZ3RoPjQ1KT8gKGl0ZW0uZmF2VGV4dExpbmVPbmUgfCBzbGljZTowOjQ1KSsnLi4uJzooaXRlbS5mYXZUZXh0TGluZU9uZSl9fVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJzbWFsbCBtYXJnaW4tMFwiPlxyXG4gICAgICAgICAgICB7eyhpdGVtLmZhdlRleHRMaW5lVHdvLmxlbmd0aD40NSk/IChpdGVtLmZhdlRleHRMaW5lVHdvIHwgc2xpY2U6MDo0NSkrJy4uLic6KGl0ZW0uZmF2VGV4dExpbmVUd28pfX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImZsZXgtZ3JvdXAgZmxleC1hbGlnbi1jZW50ZXIgZmF2LWNvbnRyb2xzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsYWcgYXUgd2lkdGgtMSBoZWlnaHQtMSBtYXJnaW4tMFwiPjwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAqbmdJZj1cIiFkaXNhYmxlRmF2c1N0YXJcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uRmF2Q2xpY2soaXRlbSlcIiBcclxuICAgICAgICAgIGNsYXNzPVwiYnRuLWZhdiBtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtYXJnaW4tMCBtYXJnaW4tbGVmdC0wLTI1XCJcclxuICAgICAgICAgID5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9zZWN0aW9uPlxyXG5cclxuICA8aHIgKm5nSWY9XCJmYXZzVGFyZ2V0Lmxlbmd0aFwiIGNsYXNzPVwibWluLXdpZHRoLTEwMCBtYXJnaW4tYm90dG9tLTAtNzVcIiAvPlxyXG5cclxuICA8c2VjdGlvbiBjbGFzcz1cImZsZXgtZ3JvdXAgZmxleC1zdGFydFwiPlxyXG4gICAgPGRpdiBcclxuICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmF2c09yaWdpbiB8IG9yZGVyQnk6J2ZhdlRpdGxlJzsgbGV0IGkgPSBpbmRleFwiIFxyXG4gICAgICBbY2xhc3MuZmF2LXNhdmVkXT1cIml0ZW0uaXNGYXZvdXJpdGVcIlxyXG4gICAgICBjbGFzcz1cIlxyXG4gICAgICAgIGZsZXgtZ3JvdXBcclxuICAgICAgICBmbGV4LWFsaWduLWNlbnRlclxyXG4gICAgICAgIHNwYWNlLWJldHdlZW5cclxuICAgICAgICBiZy1hYS13aGl0ZS0xMDBcclxuICAgICAgICBtYXJnaW4tYm90dG9tLTAtNzVcclxuICAgICAgICBtaW4td2lkdGgtMjRcclxuICAgICAgICBtYXgtd2lkdGgtMjRcclxuICAgICAgICBwYWRkaW5nLTAtNzVcclxuICAgICAgICBib3gtc2hhZG93IFxyXG4gICAgICAgIGJkLXNvbGlkIFxyXG4gICAgICAgIGJkLWdyZXktMTAgXHJcbiAgICAgICAgYmQtMVwiXHJcbiAgICAgID5cclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJmbGV4LWdyb3VwIGZsZXgtc3RhcnQgZmxleC1hbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgIHdpZHRoLTMgXHJcbiAgICAgICAgICBoZWlnaHQtMyBcclxuICAgICAgICAgIGZsZXgtY2VudGVyIFxyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1cy01MCBcclxuICAgICAgICAgIHt7aXRlbS5mYXZDb2xvdXJ9fVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGg0IGNsYXNzPVwibWFyZ2luLTBcIj57eyhpdGVtLmZhdkxhYmVsLmxlbmd0aD4zKT8gKGl0ZW0uZmF2TGFiZWwgfCBzbGljZTowOjMpKycuLi4nOihpdGVtLmZhdkxhYmVsKX19PC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGEgKGNsaWNrKT1cIm9uQW5jaG9yQ2xpY2soJGV2ZW50KVwiIGNsYXNzPVwidGV4dC1kZWNvcmF0aW9uLW5vbmUgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwibWFyZ2luLTBcIj5cclxuICAgICAgICAgICAgICB7eyhpdGVtLmZhdlRpdGxlLmxlbmd0aD4yNyk/IChpdGVtLmZhdlRpdGxlIHwgc2xpY2U6MDoyNykrJy4uLic6KGl0ZW0uZmF2VGl0bGUpfX1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxwIGNsYXNzPVwic21hbGwgcGFkZGluZy10b3AtMC0yNSBtYXJnaW4tMFwiPlxyXG4gICAgICAgICAgICB7eyhpdGVtLmZhdlRleHRMaW5lT25lLmxlbmd0aD40NSk/IChpdGVtLmZhdlRleHRMaW5lT25lIHwgc2xpY2U6MDo0NSkrJy4uLic6KGl0ZW0uZmF2VGV4dExpbmVPbmUpfX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwic21hbGwgbWFyZ2luLTBcIj5cclxuICAgICAgICAgICAge3soaXRlbS5mYXZUZXh0TGluZVR3by5sZW5ndGg+NDUpPyAoaXRlbS5mYXZUZXh0TGluZVR3byB8IHNsaWNlOjA6NDUpKycuLi4nOihpdGVtLmZhdlRleHRMaW5lVHdvKX19XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJmbGV4LWdyb3VwIGZsZXgtYWxpZ24tY2VudGVyIGZhdi1jb250cm9sc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGFnIGF1IHdpZHRoLTEgaGVpZ2h0LTEgbWFyZ2luLTBcIj48L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgKm5nSWY9XCIhZGlzYWJsZUZhdnNTdGFyXCJcclxuICAgICAgICAgIChjbGljayk9XCJvbkZhdkNsaWNrKGl0ZW0pXCIgXHJcbiAgICAgICAgICBjbGFzcz1cImJ0bi1mYXYgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWFyZ2luLTAgbWFyZ2luLWxlZnQtMC0yNVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvc2VjdGlvbj5cclxuPC9zZWN0aW9uPlxyXG5cclxuPCEtLSBQT1JUUkFJVCAtLT5cclxuPHNlY3Rpb24gY2xhc3M9XCJhYS1mYXZzIGFhLWZhdnMtcG9ydHJhaXRcIiAqbmdJZj1cInNob3dQb3J0cmFpdEZhdnNcIj5cclxuICA8aDIgKm5nSWY9XCJmYXZzVGFyZ2V0Lmxlbmd0aFwiIGNsYXNzPVwid2lkdGgtMTAwIGZsZXgtZ3JvdXAgZmxleC1zdGFydCBmbGV4LWFsaWduLWNlbnRlclwiPlxyXG4gICAge3tmYXZzSGVhZGluZ319XHJcbiAgICA8c3BhbiBcclxuICAgICAgY2xhc3M9XCJcclxuICAgICAgZmxleC1ncm91cCBcclxuICAgICAgZmxleC1jZW50ZXIgXHJcbiAgICAgIGJnLWFhLWxpZ2h0LWJsdWUtMTUgXHJcbiAgICAgIGJvcmRlci1yYWRpdXMtNTBcclxuICAgICAgd2lkdGgtMS0yNVxyXG4gICAgICBoZWlnaHQtMS0yNVxyXG4gICAgICBtYXJnaW4tbGVmdC0wLTVcclxuICAgICAgZm9udC1zaXplLXhzbWFsbFwiXHJcbiAgICAgID5cclxuICAgICAgPHN0cm9uZyBjbGFzcz1cImZsZXgtZ3JvdXAgZmxleC1jZW50ZXJcIj57e2ZhdnNUYXJnZXQubGVuZ3RofX08L3N0cm9uZz5cclxuICAgIDwvc3Bhbj5cclxuICA8L2gyPlxyXG4gIDxzZWN0aW9uIGNsYXNzPVwiZmxleC1ncm91cCBmbGV4LXN0YXJ0XCI+XHJcbiAgICA8ZGl2ICBcclxuICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmF2c1RhcmdldCB8IG9yZGVyQnk6J2ZhdlRpdGxlJzsgbGV0IGkgPSBpbmRleFwiIFxyXG4gICAgICBbY2xhc3MuZmF2LXNhdmVkXT1cIml0ZW0uaXNGYXZvdXJpdGVcIlxyXG4gICAgICBjbGFzcz1cIlxyXG4gICAgICAgIHBvc2l0aW9uLXJlbGF0aXZlXHJcbiAgICAgICAgZmxleC1ncm91cFxyXG4gICAgICAgIGZsZXgtY2VudGVyXHJcbiAgICAgICAgZmxleC1jb2x1bW5cclxuICAgICAgICBtYXJnaW4tYm90dG9tLTAtNzVcclxuICAgICAgICBiZy1hYS13aGl0ZS0xMDBcclxuICAgICAgICBtaW4td2lkdGgtMTJcclxuICAgICAgICBtYXgtd2lkdGgtMTJcclxuICAgICAgICBtaW4taGVpZ2h0LTE0XHJcbiAgICAgICAgbWF4LWhlaWdodC0xNFxyXG4gICAgICAgIHBhZGRpbmctMVxyXG4gICAgICAgIGJveC1zaGFkb3cgXHJcbiAgICAgICAgYmQtc29saWQgXHJcbiAgICAgICAgYmQtZ3JleS0xMCBcclxuICAgICAgICBiZC0xXCJcclxuICAgICAgPlxyXG4gICAgICA8c2VjdGlvbiBcclxuICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgIGZsZXgtZ3JvdXAgXHJcbiAgICAgICAgZmxleC1hbGlnbi1jZW50ZXIgXHJcbiAgICAgICAgcG9zaXRpb24tYWJzb2x1dGUgXHJcbiAgICAgICAgdG9wLTAtNSBcclxuICAgICAgICByaWdodC0wLTUgXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0LTBcclxuICAgICAgICBmYXYtY29udHJvbHNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsYWcgYXUgd2lkdGgtMSBoZWlnaHQtMSBtYXJnaW4tMFwiPjwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAqbmdJZj1cIiFkaXNhYmxlRmF2c1N0YXJcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uRmF2Q2xpY2soaXRlbSlcIiBcclxuICAgICAgICAgIGNsYXNzPVwiYnRuLWZhdiBtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtYXJnaW4tMCBtYXJnaW4tbGVmdC0wLTI1XCJcclxuICAgICAgICAgID5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8ZGl2IFxyXG4gICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgZmxleC1ub25lIFxyXG4gICAgICAgIHdpZHRoLTMgXHJcbiAgICAgICAgaGVpZ2h0LTMgXHJcbiAgICAgICAgZmxleC1jZW50ZXIgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cy01MCBcclxuICAgICAgICBtYXJnaW4tcmlnaHQtMFxyXG4gICAgICAgIHt7aXRlbS5mYXZDb2xvdXJ9fVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cIm1hcmdpbi0wXCI+e3soaXRlbS5mYXZMYWJlbC5sZW5ndGg+Myk/IChpdGVtLmZhdkxhYmVsIHwgc2xpY2U6MDozKSsnLi4uJzooaXRlbS5mYXZMYWJlbCl9fTwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFyZ2luLXJpZ2h0LTAgbWFyZ2luLXRvcC0wLTc1XCI+XHJcbiAgICAgICAgPGEgKGNsaWNrKT1cIm9uQW5jaG9yQ2xpY2soJGV2ZW50KVwiIGNsYXNzPVwidGV4dC1kZWNvcmF0aW9uLW5vbmUgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1hcmdpbi0wIG1hcmdpbi1ib3R0b20tMC01IHRleHQtYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHt7KGl0ZW0uZmF2VGl0bGUubGVuZ3RoPjI1KT8gKGl0ZW0uZmF2VGl0bGUgfCBzbGljZTowOjI1KSsnLi4uJzooaXRlbS5mYXZUaXRsZSl9fVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJzbWFsbCBtYXJnaW4tMCB0ZXh0LWFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAge3soaXRlbS5mYXZUZXh0TGluZU9uZS5sZW5ndGg+MjMpPyAoaXRlbS5mYXZUZXh0TGluZU9uZSB8IHNsaWNlOjA6MjMpKycuLi4nOihpdGVtLmZhdlRleHRMaW5lT25lKX19XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwic21hbGwgbWFyZ2luLTAgdGV4dC1hbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgIHt7KGl0ZW0uZmF2VGV4dExpbmVUd28ubGVuZ3RoPjIzKT8gKGl0ZW0uZmF2VGV4dExpbmVUd28gfCBzbGljZTowOjIzKSsnLi4uJzooaXRlbS5mYXZUZXh0TGluZVR3byl9fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cInNtYWxsIG1hcmdpbi0wIHRleHQtYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICB7eyhpdGVtLmZhdlRleHRMaW5lVGhyZWUubGVuZ3RoPjIzKT8gKGl0ZW0uZmF2VGV4dExpbmVUaHJlZSB8IHNsaWNlOjA6MjMpKycuLi4nOihpdGVtLmZhdlRleHRMaW5lVGhyZWUpfX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9zZWN0aW9uPlxyXG4gXHJcbiAgPGhyICpuZ0lmPVwiZmF2c1RhcmdldC5sZW5ndGhcIiBjbGFzcz1cIm1pbi13aWR0aC0xMDAgbWFyZ2luLWJvdHRvbS0wLTc1XCIgLz5cclxuXHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJmbGV4LWdyb3VwIGZsZXgtc3RhcnRcIj5cclxuICAgIDxkaXYgIFxyXG4gICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmYXZzT3JpZ2luIHwgb3JkZXJCeTonZmF2VGl0bGUnOyBsZXQgaSA9IGluZGV4XCIgXHJcbiAgICAgIFtjbGFzcy5mYXYtc2F2ZWRdPVwiaXRlbS5pc0Zhdm91cml0ZVwiXHJcbiAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgcG9zaXRpb24tcmVsYXRpdmVcclxuICAgICAgICBmbGV4LWdyb3VwXHJcbiAgICAgICAgZmxleC1jZW50ZXJcclxuICAgICAgICBmbGV4LWNvbHVtblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b20tMC03NVxyXG4gICAgICAgIGJnLWFhLXdoaXRlLTEwMFxyXG4gICAgICAgIG1pbi13aWR0aC0xMlxyXG4gICAgICAgIG1heC13aWR0aC0xMlxyXG4gICAgICAgIG1pbi1oZWlnaHQtMTRcclxuICAgICAgICBtYXgtaGVpZ2h0LTE0XHJcbiAgICAgICAgcGFkZGluZy0xXHJcbiAgICAgICAgYm94LXNoYWRvdyBcclxuICAgICAgICBiZC1zb2xpZCBcclxuICAgICAgICBiZC1ncmV5LTEwIFxyXG4gICAgICAgIGJkLTFcIlxyXG4gICAgICA+XHJcbiAgICAgIDxzZWN0aW9uIFxyXG4gICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgZmxleC1ncm91cCBcclxuICAgICAgICBmbGV4LWFsaWduLWNlbnRlciBcclxuICAgICAgICBwb3NpdGlvbi1hYnNvbHV0ZSBcclxuICAgICAgICB0b3AtMC01IFxyXG4gICAgICAgIHJpZ2h0LTAtNSBcclxuICAgICAgICBtYXJnaW4tcmlnaHQtMFxyXG4gICAgICAgIGZhdi1jb250cm9sc1wiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxhZyBhdSB3aWR0aC0xIGhlaWdodC0xIG1hcmdpbi0wXCI+PC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAqbmdJZj1cIiFkaXNhYmxlRmF2c1N0YXJcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uRmF2Q2xpY2soaXRlbSlcIiBcclxuICAgICAgICAgIGNsYXNzPVwiYnRuLWZhdiBtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtYXJnaW4tMCBtYXJnaW4tbGVmdC0wLTI1XCJcclxuICAgICAgICAgID5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8ZGl2IFxyXG4gICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgZmxleC1ub25lIFxyXG4gICAgICAgIHdpZHRoLTMgXHJcbiAgICAgICAgaGVpZ2h0LTMgXHJcbiAgICAgICAgZmxleC1jZW50ZXIgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cy01MCBcclxuICAgICAgICBtYXJnaW4tcmlnaHQtMFxyXG4gICAgICAgIHt7aXRlbS5mYXZDb2xvdXJ9fVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cIm1hcmdpbi0wXCI+e3soaXRlbS5mYXZMYWJlbC5sZW5ndGg+Myk/IChpdGVtLmZhdkxhYmVsIHwgc2xpY2U6MDozKSsnLi4uJzooaXRlbS5mYXZMYWJlbCl9fTwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFyZ2luLXJpZ2h0LTAgbWFyZ2luLXRvcC0wLTc1XCI+XHJcbiAgICAgICAgPGEgKGNsaWNrKT1cIm9uQW5jaG9yQ2xpY2soJGV2ZW50KVwiIGNsYXNzPVwidGV4dC1kZWNvcmF0aW9uLW5vbmUgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1hcmdpbi0wIG1hcmdpbi1ib3R0b20tMC01IHRleHQtYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHt7KGl0ZW0uZmF2VGl0bGUubGVuZ3RoPjI1KT8gKGl0ZW0uZmF2VGl0bGUgfCBzbGljZTowOjI1KSsnLi4uJzooaXRlbS5mYXZUaXRsZSl9fVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJzbWFsbCBtYXJnaW4tMCB0ZXh0LWFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAge3soaXRlbS5mYXZUZXh0TGluZU9uZS5sZW5ndGg+MjMpPyAoaXRlbS5mYXZUZXh0TGluZU9uZSB8IHNsaWNlOjA6MjMpKycuLi4nOihpdGVtLmZhdlRleHRMaW5lT25lKX19XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwic21hbGwgbWFyZ2luLTAgdGV4dC1hbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgIHt7KGl0ZW0uZmF2VGV4dExpbmVUd28ubGVuZ3RoPjIzKT8gKGl0ZW0uZmF2VGV4dExpbmVUd28gfCBzbGljZTowOjIzKSsnLi4uJzooaXRlbS5mYXZUZXh0TGluZVR3byl9fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cInNtYWxsIG1hcmdpbi0wIHRleHQtYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICB7eyhpdGVtLmZhdlRleHRMaW5lVGhyZWUubGVuZ3RoPjIzKT8gKGl0ZW0uZmF2VGV4dExpbmVUaHJlZSB8IHNsaWNlOjA6MjMpKycuLi4nOihpdGVtLmZhdlRleHRMaW5lVGhyZWUpfX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9zZWN0aW9uPlxyXG48L3NlY3Rpb24+Il19