import * as i0 from '@angular/core';
import { EventEmitter, Directive, ElementRef, Output, HostListener, Input, NgModule, Component, ChangeDetectionStrategy, forwardRef, Pipe, TemplateRef, ContentChild, ContentChildren, ViewChildren, ViewChild, Injectable, ComponentFactoryResolver } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { animate, style, AnimationBuilder } from '@angular/animations';
import { Subject } from 'rxjs';

class ClickOutsideDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.aaClickOutside = new EventEmitter();
    }
    onClick(target) {
        const clickedInside = this.elementRef.nativeElement.contains(target);
        if (!clickedInside) {
            this.aaClickOutside.emit();
        }
    }
}
ClickOutsideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aaClickOutside]',
            },] }
];
ClickOutsideDirective.ctorParameters = () => [
    { type: ElementRef }
];
ClickOutsideDirective.propDecorators = {
    aaClickOutside: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};

class TextareaAutoresizeDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    set formControlInstance(control) {
        this.cleanControlSubscription();
        setTimeout(() => this.resize());
        this.formControlSubscription = control.valueChanges.subscribe(() => {
            this.resize();
        });
    }
    onInput() {
        const isResizedThroughFormControl = !!this.formControlSubscription;
        if (!isResizedThroughFormControl) {
            this.resize();
        }
    }
    ngOnInit() {
        if (this.elementRef.nativeElement.scrollHeight) {
            setTimeout(() => this.resize());
        }
    }
    ngOnDestroy() {
        this.cleanControlSubscription();
    }
    cleanControlSubscription() {
        if (this.formControlSubscription) {
            this.formControlSubscription.unsubscribe();
        }
    }
    resize() {
        this.elementRef.nativeElement.style.height = '0';
        this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
    }
}
TextareaAutoresizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aaTextareaAutoresize]'
            },] }
];
TextareaAutoresizeDirective.ctorParameters = () => [
    { type: ElementRef }
];
TextareaAutoresizeDirective.propDecorators = {
    formControlInstance: [{ type: Input, args: ['aaTextareaAutoresize',] }],
    onInput: [{ type: HostListener, args: [':input',] }]
};

class DirectivesModule {
}
DirectivesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ClickOutsideDirective, TextareaAutoresizeDirective],
                imports: [
                    CommonModule
                ],
                exports: [ClickOutsideDirective, TextareaAutoresizeDirective]
            },] }
];

class LoadingSpinnerComponent {
    constructor() {
        this.loadingText = 'Loading...';
    }
    ngOnInit() {
    }
}
LoadingSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-loading-spinner',
                template: "<section class=\"align-item-center\">\r\n  <div class=\"flex-group flex-start\">\r\n      <div class=\"loading-spinner-small\"></div>\r\n      <div class=\"flex-align-center text-info font-size-default text-pulsate\">{{loadingText}}</div>\r\n  </div>\r\n</section>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
LoadingSpinnerComponent.ctorParameters = () => [];
LoadingSpinnerComponent.propDecorators = {
    loadingText: [{ type: Input }]
};

class LoadingSpinnerPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingSpinnerPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-loading-spinner-page',
                template: "<section class=\"loading-spinner-page\" [ngStyle]=\"{'z-index' : zIndex}\">\r\n  <div class=\"foreground\">\r\n    <div class=\"loading-spinner-small\"></div>\r\n    <div class=\"margin-top-1 italic grey-50\">{{loadingMessage}}</div>\r\n  </div>\r\n  <div class=\"background\"></div>\r\n</section>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
LoadingSpinnerPageComponent.ctorParameters = () => [];
LoadingSpinnerPageComponent.propDecorators = {
    loadingMessage: [{ type: Input }],
    zIndex: [{ type: Input }]
};

class AnimationsModule {
}
AnimationsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LoadingSpinnerComponent, LoadingSpinnerPageComponent],
                imports: [
                    CommonModule
                ],
                exports: [LoadingSpinnerComponent, LoadingSpinnerPageComponent]
            },] }
];

class ButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.buttonType = 'button';
        this.buttonClick = new EventEmitter();
    }
    onButtonClick(e) {
        e.stopPropagation();
        this.buttonClick.emit(e);
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.showBtnMenu = false;
        }
    }
    open() {
        this.showBtnMenu = true;
    }
    close() {
        this.showBtnMenu = false;
    }
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-button',
                template: "<div \r\n  *ngIf=\"!buttonEnriched && !buttonSplit &&!buttonSummary\" \r\n  class=\"field {{fieldClass}}\"\r\n  [class.button-large]=\"buttonLarge\"\r\n>\r\n  <label \r\n    [ngClass]=\"{ 'show-label': showLabel }\"\r\n    [for]=\"buttonId\">\r\n    {{buttonLabel}}\r\n  </label>\r\n  <button \r\n    [type]=\"buttonType\" \r\n    [name]=\"buttonId\" \r\n    [id]=\"buttonId\" \r\n    [class]=\"buttonClass\" \r\n    [disabled]=\"disabled\" \r\n    (click)=\"onButtonClick($event)\"\r\n    [ngClass]=\"{'material-icons' : customIconsRound}\"\r\n  >\r\n    <div *ngIf=\"!customIconsRound\" [ngClass]=\"{'flex-group flex-start' : customIcons}\">\r\n      <span *ngIf=\"customIcons\" class=\"material-icons\">{{buttonIcon}}</span>\r\n      <span>{{buttonText}}</span>\r\n      <div *ngIf=\"showCount\" class=\"count {{countColor}}\">{{count}}</div>\r\n    </div>\r\n    <span *ngIf=\"customIconsRound\">{{buttonIcon}}</span>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"buttonEnriched\" class=\"field {{fieldClass}}\">\r\n  <button \r\n    [type]=\"buttonType\" \r\n    [name]=\"buttonId\" \r\n    [id]=\"buttonId\" \r\n    [disabled]=\"disabled\" \r\n    (click)=\"onButtonClick($event)\"\r\n    class=\"btn-enriched box-shadow gradient-v-grey\"\r\n  >\r\n    <div class=\"flex-group flex-end btn-enriched-toolbar\">\r\n      <ng-content select=\"[toolbar]\"></ng-content>\r\n    </div>\r\n    <div class=\"btn-enriched-content flex-group flex-start flex-align-center\">\r\n      <div class=\"material-icons {{iconColour}}\">{{iconName}}</div>\r\n      <h2 class=\"margin-0\">{{title}}</h2>\r\n    </div>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"buttonSplit\" class=\"field {{fieldClass}}\">\r\n  <label [for]=\"buttonId\">{{buttonLabel}}</label>\r\n  <div class=\"button-split\">\r\n    <button\r\n      (click)=\"showBtnMenu=!showBtnMenu\" \r\n      [class]=\"buttonClass\"\r\n      [type]=\"buttonType\" \r\n      [name]=\"buttonId\" \r\n      [id]=\"buttonId\"\r\n     >\r\n      {{buttonText}}\r\n    </button>\r\n    <nav \r\n      (click)=\"showBtnMenu=false\" \r\n      *ngIf=\"showBtnMenu\" \r\n      class=\"box-shadow-strong\"\r\n      [ngStyle]=\"{'max-height' : maxHeight}\"\r\n    >\r\n      <ng-content select=\"[bs-buttons]\"></ng-content>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"buttonSummary\" class=\"field {{fieldClass}} flex-stretch\">\r\n  <button\r\n    class=\"{{status}} button-summary border-radius-0-5 box-shadow bg-aa-white-100 padding-1-5 flex-column bd-aa-grey-5\"\r\n  >\r\n    <div class=\"flex-group flex-start flex-align-center\">\r\n      <h1 class=\"priority bg-aa-white-100 border-radius-50 width-3 height-3 flex-center bd-solid\">{{level}}</h1>\r\n      <h2 class=\"margin-0\">{{title}}</h2>\r\n    </div>\r\n    <p *ngIf=\"showDescription\" class=\"margin-top-1\">\r\n      {{desc}}\r\n    </p>\r\n  </button>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
ButtonComponent.propDecorators = {
    buttonLabel: [{ type: Input }],
    buttonText: [{ type: Input }],
    buttonId: [{ type: Input }],
    buttonClass: [{ type: Input }],
    buttonType: [{ type: Input }],
    disabled: [{ type: Input }],
    fieldClass: [{ type: Input }],
    buttonIcon: [{ type: Input }],
    customIcons: [{ type: Input }],
    buttonEnriched: [{ type: Input }],
    showBtnMenu: [{ type: Input }],
    buttonSplit: [{ type: Input }],
    iconName: [{ type: Input }],
    title: [{ type: Input }],
    iconColour: [{ type: Input }],
    buttonLarge: [{ type: Input }],
    buttonSummary: [{ type: Input }],
    showDescription: [{ type: Input }],
    status: [{ type: Input }],
    level: [{ type: Input }],
    desc: [{ type: Input }],
    showCount: [{ type: Input }],
    count: [{ type: Input }],
    countColor: [{ type: Input }],
    maxHeight: [{ type: Input }],
    showLabel: [{ type: Input }],
    customIconsRound: [{ type: Input }],
    buttonClick: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};

class CheckboxComponent {
    constructor() { }
    ngOnInit() {
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-checkbox',
                template: "\r\n  <div class=\"field checkbox {{fieldClass}}\">\r\n      <label for=\"{{checkboxId}}\">\r\n          <input \r\n            type=\"checkbox\" \r\n            value={{checkboxValue}} \r\n            name={{checkboxName}} \r\n            id={{checkboxId}} \r\n            checked={{checkboxChecked}}\r\n            disabled=\"{{disabled}}\"\r\n          >\r\n          <span>{{checkboxText}}</span>\r\n      </label>\r\n  </div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    checkboxId: [{ type: Input }],
    checkboxName: [{ type: Input }],
    checkboxValue: [{ type: Input }],
    checkboxText: [{ type: Input }],
    checkboxChecked: [{ type: Input }],
    fieldClass: [{ type: Input }],
    disabled: [{ type: Input }]
};

const noop = () => {
};
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CommentsComponent),
    multi: true
};
class CommentsComponent {
    constructor() {
        this.commentsMade = new EventEmitter();
        // The internal data model
        this.innerValue = '';
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
}
CommentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comments',
                template: "<div class=\"aa-comments\">\r\n  <div \r\n    (click)=\"\r\n    makeComments=!makeComments; \r\n    toggleComments=false; \r\n    clicked=false\" \r\n    class=\"\r\n    comments-trigger \r\n    cursor-pointer \r\n    flex-group \r\n    flex-start \r\n    margin-bottom-0-5\"\r\n  >\r\n    <div class=\"material-icons aa-orange-100 margin-top-0-25 margin-right-0-5\">comment</div>\r\n    <h3 class=\"margin-top-0-25\">\r\n      <span *ngIf=\"comments.length===0\">Click to add a comment</span>\r\n      <span *ngIf=\"comments.length===1\">There is ({{comments.length}}) comment</span>\r\n      <span *ngIf=\"comments.length>1\">There are ({{comments.length}}) comments</span>\r\n    </h3>\r\n  </div>\r\n  <div \r\n    class=\"\r\n    comments-panel \r\n    box-shadow-strong\r\n    border-radius-0-25 \r\n    bg-aa-white-100 \r\n    padding-1\" \r\n    [class.show-comments]=\"makeComments\"\r\n  >\r\n    <p \r\n      class=\"margin-top-0 italic aa-blue-100\" \r\n      *ngIf=\"!comments.length && !makeComments\"\r\n    >There are currently no comments\r\n    </p>\r\n    <div *ngIf=\"makeComments\" class=\"field boxed\">\r\n      <label>Comment</label>\r\n      <textarea [(ngModel)]=\"txtComment\" placeholder=\"Your Comment\" (change)=\"clicked=false\"></textarea>\r\n      <div class=\"flex-group flex-start\">\r\n        <button class=\"secondary margin-top-1\" (click)=\"addComment($event, cmt)\">Add comment</button>\r\n        <button \r\n          class=\"cancel margin-top-1\" \r\n          (click)=\"makeComments=false; toggleComments=false\"\r\n          >Close\r\n        </button>\r\n        <div>\r\n          <div \r\n            *ngIf=\"clicked && !txtComment\" \r\n            role=\"alert\"\r\n            class=\"error margin-top-1\" \r\n            >You need to add a comment\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"field boxed\" *ngIf=\"comments.length\">\r\n      <h3 *ngIf=\"makeComments\">Comments ({{comments.length}})</h3>\r\n      <div *ngIf=\"!toggleComments\" class=\"scroll-panel\">\r\n          <div class=\"scroll-panel-content\" [ngStyle]=\"{'max-height':'8rem'}\">\r\n            <table class=\"table-comments\">\r\n              <thead>\r\n                <tr>\r\n                  <th width=\"62%\"><div><span>Comment</span></div></th>\r\n                  <th width=\"20%\"><div><span>Added by</span></div></th>\r\n                  <th width=\"16%\"><div><span>Date added</span></div></th>\r\n                  <th width=\"2\" *ngIf=\"canDelete\"><div><span>&nbsp;</span></div></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                  <tr *ngFor=\"let cmt of comments; let i = index\"> \r\n                      <td title=\"{{ cmt.comment }}\">{{ cmt.comment }}</td>\r\n                      <td title=\"{{ person }}\">{{ person }}</td>\r\n                      <td title=\"{{ currentDate | DateFormatPipe }}\">{{ currentDate | DateFormatPipe }}</td>\r\n                      <td *ngIf=\"canDelete\">\r\n                        <button \r\n                          class=\"material-icons aa-red-100 transparent\" \r\n                          (click)=\"removeComment(i)\"\r\n                          >delete_forever</button>\r\n                      </td>\r\n                  </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>",
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                styles: [""]
            },] }
];
CommentsComponent.ctorParameters = () => [];
CommentsComponent.propDecorators = {
    comments: [{ type: Input }],
    commentsMade: [{ type: Output }],
    person: [{ type: Input }],
    canDelete: [{ type: Input }]
};

class CustomSelectComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.closeDropdown = new EventEmitter();
        this.optionSelected = new EventEmitter();
        this.highlightSection = new EventEmitter();
        this.selectedIndex = null;
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.closeDropdown.emit(this.showDropdown = false);
        }
    }
    optionIsSelected(event, selectOption) {
        this.showDropdown = false;
        this.optionSelected.emit(selectOption);
        this.selectedOption = selectOption;
    }
    setIndex(index) {
        if (index !== this.selectedIndex) {
            this.selectedIndex = index;
            this.highlightSection.emit(this.selectedIndex);
        }
        else {
            this.selectedIndex = index;
            this.highlightSection.emit(this.selectedIndex = null);
        }
    }
    ngOnInit() {
        this.closeDropdown.emit(this.showDropdown);
        this.highlightSection.emit(this.selectedIndex);
    }
}
CustomSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-custom-select',
                template: "<div \r\n  class=\"aa-custom-select\"\r\n  [ngStyle]=\"{'width' : setWidth+'rem'}\"\r\n>\r\n  <button \r\n    class=\"\r\n    border-radius-0-25\r\n    flex-align-center\"\r\n    (click)=\"showDropdown=!showDropdown\"\r\n  >\r\n    <span \r\n      class=\"\r\n      material-icons \r\n      padding-right-0-5\r\n      {{ selectedOption?.iconColor || defaultIconColor }}\"\r\n    >{{ selectedOption?.icon || defaultIcon }}\r\n    </span>\r\n\r\n    <span *ngIf=\"!selectedOption?.display\">{{ defaultName }}</span>\r\n    <span *ngIf=\"selectedOption?.display\">{{ selectedOption?.display }}</span>\r\n\r\n  </button>\r\n  <div \r\n    [class.show-dropdown]=\"showDropdown\" \r\n    class=\"aa-custom-select-dropdown box-shadow-strong\"\r\n  >\r\n    <div *ngFor=\" let option of options; let i = index\">\r\n      <button \r\n        (click)=\"optionIsSelected($event, option); setIndex(i)\" \r\n        class=\"flex-align-center\"\r\n        [class.selected]=\"selectedIndex === i\"\r\n      >\r\n        <span \r\n          *ngIf=\"option.showIcon\"\r\n          class=\"\r\n          material-icons \r\n          padding-right-0-5 \r\n          {{option.iconColor}}\"\r\n        >{{ option.icon }}</span>\r\n          {{ option.display }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [""]
            },] }
];
CustomSelectComponent.ctorParameters = () => [
    { type: ElementRef }
];
CustomSelectComponent.propDecorators = {
    options: [{ type: Input }],
    defaultName: [{ type: Input }],
    defaultIcon: [{ type: Input }],
    defaultIconColor: [{ type: Input }],
    setWidth: [{ type: Input }],
    closeDropdown: [{ type: Output }],
    optionSelected: [{ type: Output }],
    highlightSection: [{ type: Output }],
    selectedIndex: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};

class DateFormatPipe {
    transform(value) {
        const datePipe = new DatePipe('en-US');
        value = datePipe.transform(value, 'd MMMM y');
        return value;
    }
}
DateFormatPipe.decorators = [
    { type: Pipe, args: [{
                name: 'DateFormatPipe',
            },] }
];

class FieldComponent {
    constructor() { }
    ngOnInit() {
    }
}
FieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-field',
                template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{fieldId}}\">{{fieldLabel}}</label>\r\n  <input \r\n    type=\"text\" \r\n    name=\"{{fieldId}}\" \r\n    id=\"{{fieldId}}\" \r\n    readonly=\"{{readOnly}}\" \r\n    value=\"{{inputValue}}\" \r\n  >\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
FieldComponent.ctorParameters = () => [];
FieldComponent.propDecorators = {
    fieldId: [{ type: Input }],
    fieldLabel: [{ type: Input }],
    fieldClass: [{ type: Input }],
    inputValue: [{ type: Input }],
    buttonClass: [{ type: Input }],
    readOnly: [{ type: Input }]
};

class InputTextComponent {
    constructor() { }
    ngOnInit() {
    }
}
InputTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-input-text',
                template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{inputTextId}}\">\r\n    {{inputTextLabel}}\r\n    <span class=\"optional\" *ngIf=\"isOptional\">Optional</span>\r\n  </label>\r\n  <input \r\n    type=\"text\" \r\n    name=\"{{inputTextId}}\" \r\n    id=\"{{inputTextId}}\" \r\n    placeholder=\"{{inputPlaceholder}}\" \r\n    readonly=\"{{readOnly}}\"\r\n    value=\"{{inputValue}}\"\r\n    >\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
InputTextComponent.ctorParameters = () => [];
InputTextComponent.propDecorators = {
    isOptional: [{ type: Input }],
    readOnly: [{ type: Input }],
    inputTextLabel: [{ type: Input }],
    inputTextId: [{ type: Input }],
    inputPlaceholder: [{ type: Input }],
    fieldClass: [{ type: Input }],
    inputValue: [{ type: Input }]
};

class FileUploadComponent {
    constructor() { }
    ngOnInit() {
    }
}
FileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-file-upload',
                template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{fileUploadId}}\">{{fileUploadLabel}}</label>\r\n  <div class=\"flex-group flex-start\">\r\n    <div class=\"file-upload\">\r\n      <input \r\n        name=\"file-upload\" \r\n        type=\"file\" \r\n        id=\"{{fileUploadId}}\" \r\n        accept=\"{{fileUploadExtentions}}\" \r\n        value=\"{{fileUploadValue}}\"\r\n        title=\"{{fileUploadName}}\"\r\n      >\r\n      <div class=\"file-upload-graphic\">\r\n        <div>{{fileUploadText}}</div>\r\n      </div>\r\n    </div>\r\n    <div \r\n      *ngIf=\"fileUploadName\" \r\n      class=\"file-upload-name margin-top-0-5 italic\"\r\n      >\r\n      {{ fileUploadName }}\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
FileUploadComponent.ctorParameters = () => [];
FileUploadComponent.propDecorators = {
    fileUploadLabel: [{ type: Input }],
    fileUploadId: [{ type: Input }],
    fileUploadValue: [{ type: Input }],
    fileUploadName: [{ type: Input }],
    fileUploadExtentions: [{ type: Input }],
    fileUploadText: [{ type: Input }],
    fieldClass: [{ type: Input }]
};

class SliderComponent {
    constructor() {
        this.sliderCheckedChanged = new EventEmitter();
    }
    set sliderChecked(value) {
        this.sliderCheckedValue = value;
        if (value) {
            this.sliderCheckedChanged.emit(true);
        }
        else {
            this.sliderCheckedChanged.emit(false);
        }
    }
    ngOnInit() {
    }
    onChange(event) {
        if (event.target.checked) {
            this.sliderCheckedChanged.emit(true);
            this.sliderCheckedValue = true;
        }
        else {
            this.sliderCheckedChanged.emit(false);
            this.sliderCheckedValue = false;
        }
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-slider',
                template: "<div \r\n    class=\"{{fieldClass}} field slider\"\r\n    [ngClass]=\"{'slider-inline flex-group flex-start nowrap' : sliderInline}\"\r\n>\r\n    <label>{{labelText}}</label>\r\n    <label>\r\n        <input \r\n            type=\"checkbox\"\r\n            [name]=\"sliderName\"\r\n            [id]=\"sliderId\"\r\n            [checked]=\"sliderCheckedValue\"\r\n            [disabled]=\"disabled\"\r\n            (change)=\"onChange($event)\"\r\n         />\r\n        <span class=\"slider-btn\"></span>\r\n    </label>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
SliderComponent.ctorParameters = () => [];
SliderComponent.propDecorators = {
    fieldClass: [{ type: Input }],
    labelText: [{ type: Input }],
    sliderInline: [{ type: Input }],
    sliderId: [{ type: Input }],
    sliderName: [{ type: Input }],
    disabled: [{ type: Input }],
    sliderChecked: [{ type: Input }],
    sliderCheckedChanged: [{ type: Output }]
};

class ElementsModule {
}
ElementsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ButtonComponent,
                    CheckboxComponent,
                    CommentsComponent,
                    CustomSelectComponent,
                    DateFormatPipe,
                    FieldComponent,
                    InputTextComponent,
                    FileUploadComponent,
                    SliderComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                exports: [
                    ButtonComponent,
                    CheckboxComponent,
                    CommentsComponent,
                    CustomSelectComponent,
                    FieldComponent,
                    InputTextComponent,
                    FileUploadComponent,
                    SliderComponent
                ]
            },] }
];

class BladeComponent {
    constructor() {
        this.bladeOpen = new EventEmitter();
        this.bladePinned = new EventEmitter();
    }
    onClose() {
        this.bladeOpen.emit(this.toggleBlade = false);
        if (!this.suppressAutoClose) {
            this.bladeOpen.emit(this.toggleBlade);
        }
    }
    toggleThePin(e) {
        this.isPinned = !this.isPinned;
        e.stopPropagation();
        this.bladePinned.emit(this.isPinned);
    }
    ngOnInit() {
        this.bladePinned.emit(this.isPinned); // isPinned callback
        this.bladeOpen.emit(this.toggleBlade); // isOpen callback
    }
}
BladeComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-blade',
                template: "<!-- MODAL UI BLOCK -->\r\n<div class=\"aa-blade-modal\" *ngIf=\"toggleBlade && showModal\" [ngStyle]=\"{'z-index' : zIndex}\"></div>\r\n\r\n<!-- HEADER BAKED IN -->\r\n<aside \r\n  *ngIf=\"!customBlade\" \r\n  class=\"blade animate-all {{bladeSize}}\" \r\n  [ngClass]=\"{\r\n    'show-blade' : toggleBlade,\r\n    'show-tabs' : bladeTabs\r\n  }\"\r\n  [ngStyle]=\"{\r\n    'top' : topPosition + 'rem', \r\n    'z-index' : zIndex+10\r\n  }\"\r\n>\r\n  <article class=\"blade-header flex-group space-between\">\r\n    <div class=\"flex-group flex-start flex-align-center\">\r\n      <div \r\n          *ngIf=\"enablePinning\" \r\n          (click)=\"toggleThePin($event)\"\r\n          [ngClass]=\"{'pinned' : isPinned}\" \r\n          class=\"material-icons pin flex-end\"\r\n      >\r\n        push_pin\r\n      </div>\r\n      <div *ngIf=\"enableIcon\" class=\"material-icons header-icon margin-right-0-5\">{{iconName}}</div>\r\n      <h2 class=\"margin-top-0-25 margin-0 ellipsis\" [ngStyle]=\"{'max-width' : headingMaxWidth+'rem' }\">\r\n        {{bladeHeading}}\r\n      </h2>\r\n    </div>\r\n    <a class=\"anchor-close flex-align-center\" (click)=\"onClose()\">Close</a>\r\n    <ng-content *ngIf=\"bladeTabs\" select=\"[blade-tabs]\"></ng-content>\r\n  </article>\r\n  <ng-content></ng-content>\r\n</aside>\r\n\r\n<!-- CUSTOMISABLE HEADER, CONTENT AND FOOTER -->\r\n<aside \r\n  *ngIf=\"customBlade\" \r\n  class=\"blade animate-all {{bladeSize}}\" \r\n  [ngClass]=\"{\r\n    'show-blade' : toggleBlade,\r\n    'show-tabs custom-header-tabs' : customBladeTabs\r\n  }\" \r\n  [ngStyle]=\"{\r\n    'top' : topPosition + 'rem', \r\n    'z-index' : zIndex\r\n  }\"\r\n>\r\n  <article class=\"blade-header custom-header\">\r\n    <ng-content select=\"[custom-header]\"></ng-content>\r\n    <ng-content *ngIf=\"customBladeTabs\" select=\"[custom-blade-tabs]\"></ng-content>\r\n  </article>\r\n  <article class=\"blade-content\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </article>\r\n  <article class=\"blade-footer\">\r\n    <ng-content select=\"[custom-footer]\"></ng-content>\r\n  </article>\r\n</aside>\r\n\r\n",
                styles: [""]
            },] }
];
BladeComponent.ctorParameters = () => [];
BladeComponent.propDecorators = {
    pinBlade: [{ type: Input }],
    topPosition: [{ type: Input }],
    zIndex: [{ type: Input }],
    suppressAutoClose: [{ type: Input }],
    customBlade: [{ type: Input }],
    enableIcon: [{ type: Input }],
    iconName: [{ type: Input }],
    bladeTabs: [{ type: Input }],
    customBladeTabs: [{ type: Input }],
    headingMaxWidth: [{ type: Input }],
    showModal: [{ type: Input }],
    oneColWidth: [{ type: Input }],
    bladeSize: [{ type: Input }],
    bladeHeading: [{ type: Input }],
    enablePinning: [{ type: Input }],
    toggleBlade: [{ type: Input }],
    isPinned: [{ type: Input }],
    bladeOpen: [{ type: Output }],
    bladePinned: [{ type: Output }]
};

class BladeFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
BladeFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-blade-footer',
                template: "<article class=\"blade-footer flex-group flex-start\">\r\n  <ng-content></ng-content>\r\n</article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
BladeFooterComponent.ctorParameters = () => [];

class BladeBottomComponent {
    constructor() {
        this.bladePinned = new EventEmitter();
        this.bladeOpen = new EventEmitter();
        this.bladeFullScreen = new EventEmitter();
    }
    toggle() {
        this.isOpen = !this.isOpen;
        this.bladeOpen.emit(this.isOpen);
        if (this.isPinned && this.isOpen) {
            this.isPinned = true;
            this.bladePinned.emit(true);
        }
        else {
            this.bladePinned.emit(false);
        }
    }
    toggleThePin(e) {
        this.isPinned = !this.isPinned;
        e.stopPropagation();
        this.bladePinned.emit(this.isPinned);
    }
    toggleFullScreen(e) {
        this.isFullScreen = !this.isFullScreen;
        e.stopPropagation();
        this.bladeFullScreen.emit(this.isFullScreen);
    }
    expandedPosition() {
        if (!this.isOpen) {
            return this.closedPos;
        }
        else if (this.isFullScreen) {
            return this.fullScreenPos;
        }
        else if (this.isPinned || this.isOpen) {
            return this.splitScreenPos;
        }
    }
    ngOnInit() {
        if (this.innitiallyPinned) {
            this.isPinned = true;
            this.isOpen = true;
            this.isFullScreen = false;
        }
        this.bladePinned.emit(this.isPinned); // isPinned callback
        this.bladeOpen.emit(this.isOpen); // isOpen callback
        this.bladeFullScreen.emit(this.isFullScreen); // isFullScreen callback
    }
}
BladeBottomComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-blade-bottom',
                template: "<div \r\n  class=\"blade-bottom\" \r\n  [ngClass]=\"{\r\n    'show' : isOpen, \r\n    'pinned' : isPinned, \r\n    'fullscreen' : isFullScreen\r\n  }\" \r\n  [ngStyle]=\"{\r\n    'top': expandedPosition(), \r\n    'z-index': zIndex\r\n  }\">\r\n  <section class=\"blade-bottom-header flex-group cursor-pointer {{headerBgColor}}\" (click)=\"toggle()\">\r\n      <div class=\"flex-group flex-start flex-align-center\">\r\n        <ng-content select=\"[custom-header]\"></ng-content>\r\n      </div>\r\n      <div class=\"flex-group flex-end controls {{controlsColor}}\">\r\n        <div *ngIf=\"!disablePinning\" (click)=\"toggleThePin($event)\" class=\"material-icons pin flex-end\">push_pin</div>\r\n        <div (click)=\"toggleFullScreen($event)\" class=\"material-icons flex-end\">\r\n          <span *ngIf=\"!isFullScreen\">open_in_full</span>\r\n          <span *ngIf=\"isFullScreen\">close_fullscreen</span>\r\n        </div>\r\n      </div>\r\n  </section>\r\n  <section class=\"blade-bottom-content\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </section>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
BladeBottomComponent.ctorParameters = () => [];
BladeBottomComponent.propDecorators = {
    fullScreenPos: [{ type: Input }],
    splitScreenPos: [{ type: Input }],
    closedPos: [{ type: Input }],
    isOpen: [{ type: Input }],
    isPinned: [{ type: Input }],
    disablePinning: [{ type: Input }],
    isFullScreen: [{ type: Input }],
    innitiallyPinned: [{ type: Input }],
    controlsColor: [{ type: Input }],
    headerBgColor: [{ type: Input }],
    zIndex: [{ type: Input }],
    bladePinned: [{ type: Output }],
    bladeOpen: [{ type: Output }],
    bladeFullScreen: [{ type: Output }]
};

class BladeTopComponent {
    constructor() {
        this.bladeOpen = new EventEmitter();
        this.bladePinned = new EventEmitter();
    }
    onClose() {
        this.isOpen = false;
        this.bladeOpen.emit(this.isOpen);
    }
    toggleThePin(e) {
        this.isPinned = !this.isPinned;
        e.stopPropagation();
        this.bladePinned.emit(this.isPinned);
    }
    ngOnInit() {
        this.bladePinned.emit(this.isPinned); // isPinned callback
        this.bladeOpen.emit(this.isOpen); // isOpen callback
    }
}
BladeTopComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-blade-top',
                template: "<section \r\n    class=\"blade-top gradient-h-blue width-control flex-group\"\r\n    [ngClass]=\"{'show-top-blade box-shadow-light' : isOpen}\"\r\n    [ngStyle]=\"{\r\n        'left' : leftPos+'rem', \r\n        'right' : rightPos+'rem',\r\n        'margin-top' : topPos+'rem',\r\n        'z-index' : zIndex,\r\n        'max-height' : maxHeight+'rem'\r\n    }\">\r\n    <div class=\"flex-group flex-start\">\r\n        <div *ngIf=\"userProfile\" class=\"position-relative margin-top-1-5\">\r\n            <div class=\"flag {{countryFlag}}\"></div>\r\n            <div class=\"user-profile fingerprint\" \r\n                [ngStyle]=\"{\r\n                    'border' : borderThickness+'rem'+' solid '+borderColour, \r\n                    'border-style' : 'solid', \r\n                    'width' : profileSize+'rem', \r\n                    'height' : profileSize+'rem'\r\n                }\">\r\n                <ng-content select=\"[user-profile]\"></ng-content>\r\n            </div>\r\n        </div>\r\n        <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n    <div class=\"blade-top-controls flex-group\">\r\n        <button (click)=\"toggleThePin($event)\" class=\"material-icons pin flex-end margin-right-0-5\" [ngStyle]=\"{'transform': isPinned ? 'rotate(0deg)' : 'rotate(90deg)'}\">push_pin</button>\r\n        <button (click)=\"onClose()\" class=\"material-icons\">close</button>\r\n    </div>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
BladeTopComponent.ctorParameters = () => [];
BladeTopComponent.propDecorators = {
    rightPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    topPos: [{ type: Input }],
    zIndex: [{ type: Input }],
    maxHeight: [{ type: Input }],
    countryFlag: [{ type: Input }],
    paddingTop: [{ type: Input }],
    paddingRight: [{ type: Input }],
    paddingBottom: [{ type: Input }],
    paddingLeft: [{ type: Input }],
    userProfile: [{ type: Input }],
    borderColour: [{ type: Input }],
    profileSize: [{ type: Input }],
    borderThickness: [{ type: Input }],
    isOpen: [{ type: Input }],
    isPinned: [{ type: Input }],
    bladeOpen: [{ type: Output }],
    bladePinned: [{ type: Output }]
};

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-footer',
                template: "<footer class=\"{{colorClass}}\" [ngStyle]=\"{'left':leftPos+'rem', 'z-index':zIndex}\">\r\n  <ng-content></ng-content>\r\n</footer>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
FooterComponent.ctorParameters = () => [];
FooterComponent.propDecorators = {
    leftPos: [{ type: Input }],
    zIndex: [{ type: Input }],
    colorClass: [{ type: Input }]
};

class ProjectTourComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectTourComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-project-tour',
                template: "<div class=\"position-relative\">\r\n    <div [ngClass]=\"{'tour-active' : tourMode}\" [ngStyle]=\"tourMode && {'position' : 'relative', 'z-index' : zIndex+1}\">\r\n        <ng-content select=\"[nested-component]\"></ng-content>\r\n    </div>\r\n    <div *ngIf=\"tourMode\">\r\n      <div class=\"tour-mode-info\"\r\n          [ngStyle]=\"{\r\n              'width' : panelWidth,\r\n              'top' : topPos, \r\n              'right' : rightPos, \r\n              'bottom' : bottomPos,\r\n              'left' : leftPos,\r\n              'z-index' : zIndex+1\r\n          }\">\r\n          \r\n          <div *ngIf=\"arrowTop\" class=\"arrow-top\" [ngStyle]=\"{'left' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n          <div *ngIf=\"arrowRight\" class=\"arrow-right\" [ngStyle]=\"{'top' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n          <div *ngIf=\"arrowBottom\" class=\"arrow-bottom\" [ngStyle]=\"{'left' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n          <div *ngIf=\"arrowLeft\" class=\"arrow-left\" [ngStyle]=\"{'top' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n\r\n          <div class=\"tour-content\">\r\n            <h3 *ngIf=\"enableHeading\">{{tourModeHeading}}</h3>\r\n            <p>\r\n              {{tourModeBody}}\r\n            </p>\r\n          </div>\r\n          <div class=\"tour-navigation flex-group flex-column\">\r\n            <ng-content select=\"[tour-navigation]\"></ng-content>\r\n          </div>\r\n        </div>\r\n      <div class=\"tour-mode-overlay\" [ngStyle]=\"{'z-index':zIndex}\"></div>\r\n    </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ProjectTourComponent.ctorParameters = () => [];
ProjectTourComponent.propDecorators = {
    tourMode: [{ type: Input }],
    enableHeading: [{ type: Input }],
    tourModeHeading: [{ type: Input }],
    tourModeBody: [{ type: Input }],
    topPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    panelWidth: [{ type: Input }],
    arrowPos: [{ type: Input }],
    arrowTop: [{ type: Input }],
    arrowRight: [{ type: Input }],
    arrowBottom: [{ type: Input }],
    arrowLeft: [{ type: Input }],
    arrowIsPlum: [{ type: Input }],
    zIndex: [{ type: Input }]
};

class UiBlockComponent {
    ngOnInit() {
    }
}
UiBlockComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-ui-block',
                template: "<article \r\n    *ngIf=\"showUiBlock\" \r\n    class=\"aa-ui-block flex-group flex-center\"\r\n    [ngStyle]=\"{\r\n        'top' : topPos+'rem',\r\n        'bottom' : bottomPos+'rem'\r\n    }\"\r\n>\r\n    <h1\r\n        [ngStyle]=\"{\r\n            'font-size' : fontSize+'rem',\r\n            'text-transform' : allCaps&&'uppercase'\r\n        }\"\r\n    >\r\n        {{message}}\r\n    </h1>\r\n    <div class=\"background\"></div>\r\n</article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
UiBlockComponent.propDecorators = {
    showUiBlock: [{ type: Input }],
    topPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    fontSize: [{ type: Input }],
    allCaps: [{ type: Input }],
    message: [{ type: Input }],
    zIndex: [{ type: Input }]
};

class UnauthorisedComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnauthorisedComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-unauthorised',
                template: "<section class=\"unauthorised flex-group flex-column space-between flex-nowrap\">\r\n    <div class=\"unauthorised-content flex-group flex-center flex-column\">\r\n        <h1>{{title}}</h1>\r\n        <p \r\n            class=\"align-center margin-bottom-0-25\"\r\n            [ngStyle]=\"{'max-width' : straplineWidth}\"\r\n        >\r\n            {{strapline}}\r\n        </p>      \r\n        <a class=\"flex-center\" href=\"https://core.angloamerican.com/security-amp/amp\">\r\n            <span class=\"material-icons padding-right-0-25 aa-blue-100\">rocket_launch</span>\r\n            Discover other applications\r\n        </a>\r\n    </div>\r\n    <div class=\"unauthorised-image\">\r\n        <aa-graphic class=\"app-graphic\"></aa-graphic>\r\n    </div>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
UnauthorisedComponent.ctorParameters = () => [];
UnauthorisedComponent.propDecorators = {
    title: [{ type: Input }],
    strapline: [{ type: Input }],
    straplineWidth: [{ type: Input }]
};

class GraphicComponent {
    constructor() { }
    ngOnInit() {
    }
}
GraphicComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-graphic',
                template: "<svg id=\"Component_14_1\" data-name=\"Component 14 \u2013 1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"3000.5\" height=\"1070\" viewBox=\"0 0 3000.5 1070\">\r\n  <defs>\r\n    <clipPath id=\"clip-path\">\r\n      <path id=\"Path_2942\" data-name=\"Path 2942\" d=\"M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z\" transform=\"translate(-595.631 -4434.948) rotate(90)\" fill=\"#f1533e\"/>\r\n    </clipPath>\r\n    <clipPath id=\"clip-path-2\">\r\n      <path id=\"Path_2941\" data-name=\"Path 2941\" d=\"M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z\" transform=\"translate(-595.631 -4434.948) rotate(90)\" fill=\"#ce3423\"/>\r\n    </clipPath>\r\n  </defs>\r\n  <path id=\"Path_2912\" data-name=\"Path 2912\" d=\"M0,0H147.64V147.64H0Z\" transform=\"translate(886.68 282.885)\" fill=\"none\"/>\r\n  <path id=\"Path_2911\" data-name=\"Path 2911\" d=\"M0,1623.508s260.514-112.259,500.813,32.555,236.13,334.158,236.13,334.158,51.686-8.794,108.582,0,102.747,31.246,102.747,31.246,101.5-275.6,454.337-286.822,505.814,286.822,505.814,286.822,30.428-22.639,105.456-31.246,105.665,0,105.665,0,38.973-286.635,339.085-412.739,541.87-31.245,541.87-31.245V2379.99H0Z\" transform=\"translate(0 -1475)\" fill=\"#e79f1c\"/>\r\n  <rect id=\"Rectangle_39\" data-name=\"Rectangle 39\" width=\"3000\" height=\"467\" transform=\"translate(0.5 603)\" fill=\"#d78e0a\"/>\r\n  <g id=\"Group_79\" data-name=\"Group 79\" transform=\"translate(89.487 -132.268)\">\r\n    <rect id=\"Rectangle_25\" data-name=\"Rectangle 25\" width=\"27.212\" height=\"11.792\" transform=\"translate(215.548 471.065)\" fill=\"#b38011\"/>\r\n    <rect id=\"Rectangle_26\" data-name=\"Rectangle 26\" width=\"12.699\" height=\"31.748\" transform=\"translate(222.805 442.945)\" fill=\"#b38011\"/>\r\n    <rect id=\"Rectangle_24\" data-name=\"Rectangle 24\" width=\"141.505\" height=\"141.505\" transform=\"translate(157.495 479.229)\" fill=\"#b38011\"/>\r\n    <path id=\"Path_12\" data-name=\"Path 12\" d=\"M236.3,632.331H228v2.117l-23.29-2.117s-4.56-.532-4.56,5.473,4.56,5.749,4.56,5.749L228,640.8v2.752h8.3\" transform=\"translate(-7.143 -199.062)\" fill=\"#b38011\"/>\r\n    <path id=\"Path_13\" data-name=\"Path 13\" d=\"M36.149.012h-8.3V2.129L4.56.012S0-.52,0,5.485s4.56,5.749,4.56,5.749L27.85,8.481v2.752h8.3\" transform=\"translate(265.303 444.492) rotate(180)\" fill=\"#b38011\"/>\r\n    <text id=\"TNT\" transform=\"translate(180.172 566.884)\" fill=\"#b38011\" font-size=\"51\" font-family=\"SegoeUI-Bold, Segoe UI\" font-weight=\"700\" letter-spacing=\"-0.05em\"><tspan x=\"0\" y=\"0\">TNT</tspan></text>\r\n  </g>\r\n  <g id=\"Group_94\" data-name=\"Group 94\" transform=\"translate(23.5 -127.268)\">\r\n    <rect id=\"Rectangle_27\" data-name=\"Rectangle 27\" width=\"41.726\" height=\"175.974\" transform=\"translate(68.601 444.76)\" fill=\"#b38011\"/>\r\n    <path id=\"Path_14\" data-name=\"Path 14\" d=\"M154.242,606.709s.651,16.287-13.03,23.453-34.691-9.772-46.092-4.235-8.958,18.567-8.958,18.567\" transform=\"translate(3.469 -197.59)\" fill=\"none\" stroke=\"#1c1c1c\" stroke-width=\"5\"/>\r\n    <path id=\"Path_15\" data-name=\"Path 15\" d=\"M140.714,574.389l2.606,16.776h-11.4l6.515,6.678-22.8,8.632s29.805-3.095,29.805-2.443-2.117,9.935-2.117,9.935L157,605.334l9.121,14.658-2.28-14.658h35.017l-33.877-10.424L179.8,583.347,159.77,586.6v-9.935L152.44,586.6Z\" transform=\"translate(0.71 -194.586)\" fill=\"#b38011\"/>\r\n  </g>\r\n  <g id=\"Group_80\" data-name=\"Group 80\" transform=\"translate(16.5 -133.268)\">\r\n    <rect id=\"Rectangle_27-2\" data-name=\"Rectangle 27\" width=\"41.726\" height=\"175.974\" transform=\"translate(68.601 444.76)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_28\" data-name=\"Rectangle 28\" width=\"41.726\" height=\"19.049\" transform=\"translate(68.601 476.508)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_29\" data-name=\"Rectangle 29\" width=\"41.726\" height=\"19.049\" transform=\"translate(68.601 570.844)\" fill=\"#fff\"/>\r\n    <path id=\"Path_14-2\" data-name=\"Path 14\" d=\"M154.242,606.709s.651,16.287-13.03,23.453-34.691-9.772-46.092-4.235-8.958,18.567-8.958,18.567\" transform=\"translate(3.469 -197.59)\" fill=\"none\" stroke=\"#1c1c1c\" stroke-width=\"5\"/>\r\n    <path id=\"Path_15-2\" data-name=\"Path 15\" d=\"M140.714,574.389l2.606,16.776h-11.4l6.515,6.678-22.8,8.632s29.805-3.095,29.805-2.443-2.117,9.935-2.117,9.935L157,605.334l9.121,14.658-2.28-14.658h35.017l-33.877-10.424L179.8,583.347,159.77,586.6v-9.935L152.44,586.6Z\" transform=\"translate(0.71 -194.586)\" fill=\"#f1533e\"/>\r\n  </g>\r\n  <g id=\"Group_95\" data-name=\"Group 95\" transform=\"translate(188.5 -164.531)\" opacity=\"0.24\">\r\n    <path id=\"Path_11\" data-name=\"Path 11\" d=\"M501.381,1064.276s-10.921-7.066,11.834-7.066,16.12-9.207,28.12-15.207S580,1026,584,1020s6-7.333,7.333-15.333,22-36.667,50-38.667S720,950.669,736,938s22-26,22-35.333-12-14.667,0-20,11.333-4,24.667,6.667,22,14,26.667,37.333S822.669,972,827.336,978,870,1022,882,1028s84,12,107.334,14,75.334-2.667,75.334-2.667,30.667,14,35.333,14,8.464,9.293,8.464,9.293H1100l-593.1,1.646Z\" transform=\"translate(179.186 -216.09)\"/>\r\n    <ellipse id=\"Ellipse_7\" data-name=\"Ellipse 7\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(861.186 599.532)\"/>\r\n    <ellipse id=\"Ellipse_15\" data-name=\"Ellipse 15\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(876.186 622.532)\"/>\r\n    <ellipse id=\"Ellipse_16\" data-name=\"Ellipse 16\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(893.186 624.532)\"/>\r\n    <ellipse id=\"Ellipse_17\" data-name=\"Ellipse 17\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(887.186 652.532)\"/>\r\n    <ellipse id=\"Ellipse_18\" data-name=\"Ellipse 18\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(859.186 638.532)\"/>\r\n    <ellipse id=\"Ellipse_19\" data-name=\"Ellipse 19\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(845.186 658.532)\"/>\r\n    <ellipse id=\"Ellipse_20\" data-name=\"Ellipse 20\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(834.186 686.532)\"/>\r\n    <ellipse id=\"Ellipse_21\" data-name=\"Ellipse 21\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(864.186 673.532)\"/>\r\n    <ellipse id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(881.186 586.532)\"/>\r\n    <ellipse id=\"Ellipse_9\" data-name=\"Ellipse 9\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(891.186 599.532)\"/>\r\n    <ellipse id=\"Ellipse_10\" data-name=\"Ellipse 10\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(899.186 574.532)\"/>\r\n    <ellipse id=\"Ellipse_11\" data-name=\"Ellipse 11\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(888.186 557.532)\"/>\r\n    <ellipse id=\"Ellipse_12\" data-name=\"Ellipse 12\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(907.186 547.532)\"/>\r\n    <ellipse id=\"Ellipse_22\" data-name=\"Ellipse 22\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(911.186 526.532)\"/>\r\n    <ellipse id=\"Ellipse_13\" data-name=\"Ellipse 13\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(917.186 565.532)\"/>\r\n    <ellipse id=\"Ellipse_14\" data-name=\"Ellipse 14\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(912.186 585.532)\"/>\r\n  </g>\r\n  <g id=\"Group_77\" data-name=\"Group 77\" transform=\"translate(188.5 -172)\">\r\n    <path id=\"Path_11-2\" data-name=\"Path 11\" d=\"M501.381,1064.276s-10.921-7.066,11.834-7.066,16.12-9.207,28.12-15.207S580,1026,584,1020s6-7.333,7.333-15.333,22-36.667,50-38.667S720,950.669,736,938s22-26,22-35.333-12-14.667,0-20,11.333-4,24.667,6.667,22,14,26.667,37.333S822.669,972,827.336,978,870,1022,882,1028s84,12,107.334,14,75.334-2.667,75.334-2.667,30.667,14,35.333,14,8.464,9.293,8.464,9.293H1100l-593.1,1.646Z\" transform=\"translate(179.186 -216.09)\"/>\r\n    <ellipse id=\"Ellipse_7-2\" data-name=\"Ellipse 7\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(861.186 599.532)\"/>\r\n    <ellipse id=\"Ellipse_15-2\" data-name=\"Ellipse 15\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(876.186 622.532)\"/>\r\n    <ellipse id=\"Ellipse_16-2\" data-name=\"Ellipse 16\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(893.186 624.532)\"/>\r\n    <ellipse id=\"Ellipse_17-2\" data-name=\"Ellipse 17\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(887.186 652.532)\"/>\r\n    <ellipse id=\"Ellipse_18-2\" data-name=\"Ellipse 18\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(859.186 638.532)\"/>\r\n    <ellipse id=\"Ellipse_19-2\" data-name=\"Ellipse 19\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(845.186 658.532)\"/>\r\n    <ellipse id=\"Ellipse_20-2\" data-name=\"Ellipse 20\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(834.186 686.532)\"/>\r\n    <ellipse id=\"Ellipse_21-2\" data-name=\"Ellipse 21\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(864.186 673.532)\"/>\r\n    <ellipse id=\"Ellipse_8-2\" data-name=\"Ellipse 8\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(881.186 586.532)\"/>\r\n    <ellipse id=\"Ellipse_9-2\" data-name=\"Ellipse 9\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(891.186 599.532)\"/>\r\n    <ellipse id=\"Ellipse_10-2\" data-name=\"Ellipse 10\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(899.186 574.532)\"/>\r\n    <ellipse id=\"Ellipse_11-2\" data-name=\"Ellipse 11\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(888.186 557.532)\"/>\r\n    <ellipse id=\"Ellipse_12-2\" data-name=\"Ellipse 12\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(907.186 547.532)\"/>\r\n    <ellipse id=\"Ellipse_22-2\" data-name=\"Ellipse 22\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(911.186 526.532)\"/>\r\n    <ellipse id=\"Ellipse_13-2\" data-name=\"Ellipse 13\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(917.186 565.532)\"/>\r\n    <ellipse id=\"Ellipse_14-2\" data-name=\"Ellipse 14\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(912.186 585.532)\"/>\r\n  </g>\r\n  <g id=\"Group_102\" data-name=\"Group 102\" transform=\"translate(581.463 -119.92)\" opacity=\"0.25\">\r\n    <path id=\"Path_56\" data-name=\"Path 56\" d=\"M1819.809,692.472c-.808-1.616,2.02-16.966,2.02-16.966l-14.946-9.291,3.635-6.867-7.271-10.907-7.675-2.02-7.675-13.734-6.059,4.039v-10.1l-11.714-7.675-8.887,2.828-10.907-9.291h-11.311l-5.251,9.291-21.409,4.847,2.828,44.839,3.232,23.429Z\" transform=\"translate(488.078 -170.489)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_54\" data-name=\"Path 54\" d=\"M1672.395,799.61l-40.8-90.485h191.876l-39.183,90.485Z\" transform=\"translate(498.958 -183.506)\" fill=\"#1c1c1c\"/>\r\n    <circle id=\"Ellipse_27\" data-name=\"Ellipse 27\" cx=\"18.171\" cy=\"18.171\" r=\"18.171\" transform=\"translate(2158.593 601.656)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Ellipse_27_-_Outline\" data-name=\"Ellipse 27 - Outline\" d=\"M18.171,6A12.171,12.171,0,1,0,30.342,18.171,12.185,12.185,0,0,0,18.171,6m0-6A18.171,18.171,0,1,1,0,18.171,18.171,18.171,0,0,1,18.171,0Z\" transform=\"translate(2158.593 601.656)\" fill=\"#1c1c1c\"/>\r\n    <circle id=\"Ellipse_28\" data-name=\"Ellipse 28\" cx=\"18.171\" cy=\"18.171\" r=\"18.171\" transform=\"translate(2262.427 601.656)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Ellipse_28_-_Outline\" data-name=\"Ellipse 28 - Outline\" d=\"M18.171,6A12.171,12.171,0,1,0,30.342,18.171,12.185,12.185,0,0,0,18.171,6m0-6A18.171,18.171,0,1,1,0,18.171,18.171,18.171,0,0,1,18.171,0Z\" transform=\"translate(2262.427 601.656)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_55\" data-name=\"Path 55\" d=\"M1703.724,626.5l10.1,11.311h11.715l2.02,9.291,15.754,15.35-3.636,5.655,14.138,8.079v18.178H1643.131l-6.867-12.522,10.1-2.424,8.079-8.887,7.271,3.232-3.636-11.311,11.311-10.5h7.271v-10.5l12.522-3.635,3.232-11.311Z\" transform=\"translate(498.329 -172.375)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_37\" data-name=\"Rectangle 37\" width=\"222.38\" height=\"21.632\" rx=\"10.816\" transform=\"translate(2117.924 515.127)\" fill=\"#1c1c1c\"/>\r\n  </g>\r\n  <g id=\"Group_74\" data-name=\"Group 74\" transform=\"translate(630.19 -124.92)\">\r\n    <g id=\"Group_99\" data-name=\"Group 99\" transform=\"translate(0 8)\" opacity=\"0.25\">\r\n      <path id=\"Path_47\" data-name=\"Path 47\" d=\"M1372.5,812.456,1527.1,650.7l12.928,9.7L1383.862,824.38s-6.388,4.255-11.366-1.159S1372.5,812.456,1372.5,812.456Z\" transform=\"translate(373.869 -199)\" fill=\"#1c1c1c\"/>\r\n      <path id=\"Path_46\" data-name=\"Path 46\" d=\"M1462.5,602.161l2.452-5.149s45.849,18.879,77.477,51.242,49.771,75.515,49.771,75.515l-4.974,2.883s-20.014-36.084-28.207-45.491-8.952-10.621-12.667-12.067-12.995,5.884-12.995,5.884L1515.209,656.1l5.394-10.052s.735-2.942-1.962-6.13-13.975-11.033-27.95-20.84A251.271,251.271,0,0,0,1462.5,602.161Z\" transform=\"translate(373.869 -199)\" fill=\"#1c1c1c\"/>\r\n    </g>\r\n    <g id=\"Group_98\" data-name=\"Group 98\">\r\n      <path id=\"Path_47-2\" data-name=\"Path 47\" d=\"M1372.5,812.456,1527.1,650.7l12.928,9.7L1383.862,824.38s-6.388,4.255-11.366-1.159S1372.5,812.456,1372.5,812.456Z\" transform=\"translate(373.869 -199)\" fill=\"#fffbff\"/>\r\n      <path id=\"Path_46-2\" data-name=\"Path 46\" d=\"M1462.5,602.161l2.452-5.149s45.849,18.879,77.477,51.242,49.771,75.515,49.771,75.515l-4.974,2.883s-20.014-36.084-28.207-45.491-8.952-10.621-12.667-12.067-12.995,5.884-12.995,5.884L1515.209,656.1l5.394-10.052s.735-2.942-1.962-6.13-13.975-11.033-27.95-20.84A251.271,251.271,0,0,0,1462.5,602.161Z\" transform=\"translate(373.869 -199)\" fill=\"#1e1d26\"/>\r\n    </g>\r\n    <g id=\"Group_101\" data-name=\"Group 101\" transform=\"translate(-1 4)\" opacity=\"0.25\">\r\n      <path id=\"Path_51\" data-name=\"Path 51\" d=\"M1417.949,700.2l90.927,90.927,10.059-10.059-91.913-91.716Z\" transform=\"translate(373.869 -199)\" fill=\"#1e1d26\"/>\r\n      <path id=\"Path_50\" data-name=\"Path 50\" d=\"M1394.63,662.107s-1.972-1.07-3.338,0a3.214,3.214,0,0,0-.91,3.043l3.186,10.772L1418.45,700.2l10.469-10.165L1404.8,666.06Z\" transform=\"translate(373.869 -199)\" fill=\"#1e1d26\"/>\r\n      <path id=\"Path_48\" data-name=\"Path 48\" d=\"M1515.634,778.63l-9.1,8.7,9.1,8.7s-1.882,9.41,3.685,21.329,12.939,17.957,12.939,17.957,8.469-3.372,18.114-12.7a56.905,56.905,0,0,0,13.174-18.82,47.407,47.407,0,0,0-18.271-13.252,58.24,58.24,0,0,0-21.407-3.686Z\" transform=\"translate(375.999 -196.893)\" fill=\"none\" stroke=\"#26201e\" stroke-width=\"4\"/>\r\n      <path id=\"Path_49\" data-name=\"Path 49\" d=\"M1537.19,842.828a67.161,67.161,0,0,0,20.52-14.731c9.7-10.234,13.287-18.584,13.287-18.584l-3.462-4.616s-8.658,13.952-14.044,18.711-20.379,15.172-20.379,15.172Z\" transform=\"translate(373.869 -199)\" fill=\"#1e1d26\"/>\r\n      <path id=\"Path_52\" data-name=\"Path 52\" d=\"M1382.565,707.693s-34.615-32.564-36.667-35.9a45.593,45.593,0,0,1-5.641-32.564c3.333-16.923,5.641-20.769,5.641-20.769s12.821-7.18,25.385-7.692,24.1,2.82,28.718,6.667,35.9,36.667,35.9,36.667Z\" transform=\"translate(373.869 -199)\" fill=\"#1e1d26\"/>\r\n      <path id=\"Path_53\" data-name=\"Path 53\" d=\"M1449.763,1894.309l8.286,8.4,8.987-9.22-8.987-8.87Z\" transform=\"translate(434.869 -1303)\" fill=\"#1e1d26\"/>\r\n    </g>\r\n    <g id=\"Group_100\" data-name=\"Group 100\">\r\n      <path id=\"Path_51-2\" data-name=\"Path 51\" d=\"M1417.949,700.2l90.927,90.927,10.059-10.059-91.913-91.716Z\" transform=\"translate(373.869 -199)\" fill=\"#f3523f\"/>\r\n      <path id=\"Path_50-2\" data-name=\"Path 50\" d=\"M1394.63,662.107s-1.972-1.07-3.338,0a3.214,3.214,0,0,0-.91,3.043l3.186,10.772L1418.45,700.2l10.469-10.165L1404.8,666.06Z\" transform=\"translate(372.869 -199)\" fill=\"#1e1e23\"/>\r\n      <path id=\"Path_48-2\" data-name=\"Path 48\" d=\"M1515.634,778.63l-9.1,8.7,9.1,8.7s-1.882,9.41,3.685,21.329,12.939,17.957,12.939,17.957,8.469-3.372,18.114-12.7a56.905,56.905,0,0,0,13.174-18.82,47.407,47.407,0,0,0-18.271-13.252,58.24,58.24,0,0,0-21.407-3.686Z\" transform=\"translate(375.999 -196.893)\" fill=\"none\" stroke=\"#26201e\" stroke-width=\"4\"/>\r\n      <path id=\"Path_49-2\" data-name=\"Path 49\" d=\"M1537.19,842.828a67.161,67.161,0,0,0,20.52-14.731c9.7-10.234,13.287-18.584,13.287-18.584l-3.462-4.616s-8.658,13.952-14.044,18.711-20.379,15.172-20.379,15.172Z\" transform=\"translate(373.869 -199)\" fill=\"#26201e\"/>\r\n      <path id=\"Path_52-2\" data-name=\"Path 52\" d=\"M1382.565,707.693s-34.615-32.564-36.667-35.9a45.593,45.593,0,0,1-5.641-32.564c3.333-16.923,5.641-20.769,5.641-20.769s12.821-7.18,25.385-7.692,24.1,2.82,28.718,6.667,35.9,36.667,35.9,36.667Z\" transform=\"translate(373.869 -199)\" fill=\"#3696da\"/>\r\n      <path id=\"Path_53-2\" data-name=\"Path 53\" d=\"M1449.763,1894.309l8.286,8.4,8.987-9.22-8.987-8.87Z\" transform=\"translate(434.869 -1303)\" fill=\"#26201e\"/>\r\n    </g>\r\n  </g>\r\n  <g id=\"Group_75\" data-name=\"Group 75\" transform=\"translate(577.463 -124.92)\">\r\n    <path id=\"Path_56-2\" data-name=\"Path 56\" d=\"M1819.809,692.472c-.808-1.616,2.02-16.966,2.02-16.966l-14.946-9.291,3.635-6.867-7.271-10.907-7.675-2.02-7.675-13.734-6.059,4.039v-10.1l-11.714-7.675-8.887,2.828-10.907-9.291h-11.311l-5.251,9.291-21.409,4.847,2.828,44.839,3.232,23.429Z\" transform=\"translate(488.078 -170.489)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_54-2\" data-name=\"Path 54\" d=\"M1672.395,799.61l-40.8-90.485h191.876l-39.183,90.485Z\" transform=\"translate(498.958 -183.506)\" fill=\"#1c1c1c\"/>\r\n    <circle id=\"Ellipse_27-2\" data-name=\"Ellipse 27\" cx=\"18.171\" cy=\"18.171\" r=\"18.171\" transform=\"translate(2158.593 601.656)\" fill=\"#fff\"/>\r\n    <path id=\"Ellipse_27_-_Outline-2\" data-name=\"Ellipse 27 - Outline\" d=\"M18.171,6A12.171,12.171,0,1,0,30.342,18.171,12.185,12.185,0,0,0,18.171,6m0-6A18.171,18.171,0,1,1,0,18.171,18.171,18.171,0,0,1,18.171,0Z\" transform=\"translate(2158.593 601.656)\" fill=\"#414546\"/>\r\n    <circle id=\"Ellipse_28-2\" data-name=\"Ellipse 28\" cx=\"18.171\" cy=\"18.171\" r=\"18.171\" transform=\"translate(2262.427 601.656)\" fill=\"#fff\"/>\r\n    <path id=\"Ellipse_28_-_Outline-2\" data-name=\"Ellipse 28 - Outline\" d=\"M18.171,6A12.171,12.171,0,1,0,30.342,18.171,12.185,12.185,0,0,0,18.171,6m0-6A18.171,18.171,0,1,1,0,18.171,18.171,18.171,0,0,1,18.171,0Z\" transform=\"translate(2262.427 601.656)\" fill=\"#414546\"/>\r\n    <path id=\"Path_55-2\" data-name=\"Path 55\" d=\"M1703.724,626.5l10.1,11.311h11.715l2.02,9.291,15.754,15.35-3.636,5.655,14.138,8.079v18.178H1643.131l-6.867-12.522,10.1-2.424,8.079-8.887,7.271,3.232-3.636-11.311,11.311-10.5h7.271v-10.5l12.522-3.635,3.232-11.311Z\" transform=\"translate(498.329 -172.375)\" fill=\"#464646\"/>\r\n    <rect id=\"Rectangle_37-2\" data-name=\"Rectangle 37\" width=\"222.38\" height=\"21.632\" rx=\"10.816\" transform=\"translate(2117.924 515.127)\" fill=\"#2f99db\"/>\r\n  </g>\r\n  <g id=\"Group_76\" data-name=\"Group 76\" transform=\"translate(228.935 -165.513)\">\r\n    <g class=\"wheel\" id=\"Group_92\" data-name=\"Group 92\">\r\n      <g id=\"Group_91\" data-name=\"Group 91\">\r\n        <path id=\"Path_16\" data-name=\"Path 16\" d=\"M792,808.792l427.5-109.28s32.391-8.732,51.849-5.065,30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L903.671,861.669s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.347,151.347,0,0,1,792,808.792Z\" transform=\"translate(212.065 -216.035)\" fill=\"#f1533e\"/>\r\n        <path id=\"Path_17\" data-name=\"Path 17\" d=\"M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z\" transform=\"translate(1143.99 313.513) rotate(45)\" fill=\"#f1533e\"/>\r\n        <path id=\"Path_18\" data-name=\"Path 18\" d=\"M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z\" transform=\"translate(1358.907 296.513) rotate(90)\" fill=\"#f1533e\"/>\r\n        <path id=\"Path_19\" data-name=\"Path 19\" d=\"M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z\" transform=\"matrix(-0.719, 0.695, -0.695, -0.719, 1525.317, 440.564)\" fill=\"#f1533e\"/>\r\n      </g>\r\n      <g id=\"Group_89\" data-name=\"Group 89\" transform=\"translate(-8 3)\">\r\n        <g id=\"Group_90\" data-name=\"Group 90\">\r\n          <g id=\"Mask_Group_1\" data-name=\"Mask Group 1\" transform=\"translate(1962.538 4728.461)\" clip-path=\"url(#clip-path-2)\">\r\n            <circle id=\"Ellipse_35\" data-name=\"Ellipse 35\" cx=\"191.322\" cy=\"191.322\" r=\"191.322\" transform=\"translate(-873.777 -4358.178)\" fill=\"#ce3423\"/>\r\n          </g>\r\n          <g id=\"Mask_Group_3\" data-name=\"Mask Group 3\" transform=\"translate(-2886.987 1243.986) rotate(90)\" clip-path=\"url(#clip-path-2)\">\r\n            <circle id=\"Ellipse_37\" data-name=\"Ellipse 37\" cx=\"191.322\" cy=\"191.322\" r=\"191.322\" transform=\"translate(-873.777 -4358.178)\" fill=\"#ce3423\"/>\r\n          </g>\r\n          <g id=\"Mask_Group_5\" data-name=\"Mask Group 5\" transform=\"matrix(0.695, 0.719, -0.719, 0.695, -1243.157, 3946.799)\" clip-path=\"url(#clip-path-2)\">\r\n            <circle id=\"Ellipse_39\" data-name=\"Ellipse 39\" cx=\"191.322\" cy=\"191.322\" r=\"191.322\" transform=\"translate(-873.777 -4358.178)\" fill=\"#ce3423\"/>\r\n          </g>\r\n          <g id=\"Mask_Group_4\" data-name=\"Mask Group 4\" transform=\"translate(-2149.155 -1902.434) rotate(135)\" clip-path=\"url(#clip-path-2)\">\r\n            <circle id=\"Ellipse_38\" data-name=\"Ellipse 38\" cx=\"191.322\" cy=\"191.322\" r=\"191.322\" transform=\"translate(-873.777 -4358.178)\" fill=\"#ce3423\"/>\r\n          </g>\r\n        </g>\r\n      </g>\r\n      <circle id=\"Ellipse_23\" data-name=\"Ellipse 23\" cx=\"177.322\" cy=\"177.322\" r=\"177.322\" transform=\"translate(1095.065 387.513)\" fill=\"#3696da\"/>\r\n    </g>\r\n  </g>\r\n\r\n  <g id=\"Group_76\" data-name=\"Group 76\" transform=\"translate(228.935 -165.513)\">\r\n    <g id=\"Group_92\" data-name=\"Group 92\">\r\n      <path id=\"Path_2913\" data-name=\"Path 2913\" d=\"M54.226,2a52.226,52.226,0,1,0,52.226,52.226A52.245,52.245,0,0,0,54.226,2ZM12.445,54.226A41.77,41.77,0,0,1,54.226,12.445a41.271,41.271,0,0,1,25.591,8.826L21.272,79.817A41.271,41.271,0,0,1,12.445,54.226ZM54.226,96.008a41.271,41.271,0,0,1-25.591-8.826L87.181,28.635a41.271,41.271,0,0,1,8.826,25.591A41.77,41.77,0,0,1,54.226,96.008Z\" transform=\"translate(1217.565 510.013)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"2\"/>\r\n    </g>\r\n  </g>\r\n\r\n  <path id=\"Ellipse_32\" data-name=\"Ellipse 32\" d=\"M550,0h4.229l.253,0h.2l.236,0,.217,0c.074,0,.135,0,.2,0l.249,0,.2,0,.242,0,.211,0,.226,0,.227,0,.195,0,.259,0,.195,0,.235,0,.219,0,.212,0,.235,0,.206,0,.248,0,.208,0,.19,0,.193,0,.237,0h.025l.192,0,.214,0H560l.19,0,.2,0,.222,0,.221,0,.208,0h.069l.182,0,.194,0,.257,0,.193,0,.2,0,.248,0,.2,0h.074l.175,0,.194,0,.213,0,.241,0,.2,0,.078,0,.171,0,.19,0,.251.005.2,0,.2,0,.256.006.195,0,.086,0,.171,0,.193,0,.2,0,.137,0,.2,0,.2,0,.166,0,.193,0,.093,0,.169,0,.194.005.215.006.233.006.194.005.094,0,.169,0,.195.005.218.006.112,0,.125,0,.081,0,.121,0,.075,0,.172,0,.085,0,.11,0,.086,0,.173.005.069,0,.128,0,.075,0h.035l-.181,6Q559.956,6,550,6V0Zm30,.678c6.677.3,13.353.708,19.965,1.21l-.454,5.983q-9.842-.748-19.783-1.2L580,.678Zm29.931,2.044q6.871.628,13.691,1.4h0l.152.017h.011l.285.032.019,0,.115.013.078.009.1.012.165.019.055.006.149.017.047.005.191.022h0l.214.025h0q2.305.266,4.6.548l-.73,5.955q-9.793-1.2-19.7-2.107Zm29.8,3.422.1.014.067.009.1.014.1.014.084.012.179.025.031,0,.159.022.058.008.183.026h0q3.718.521,7.415,1.083h.007l.407.062.029,0,.178.027.024,0,.192.029.047.007.144.022.061.009.153.024.038.006.183.028.065.01.116.018.085.013.109.017.148.023.086.013.111.017.061.009.4.063.042.007.133.021.023,0,.444.07h.006q2.62.412,5.232.846h0l.441.073.034.006.128.021.045.007.225.038.059.01.1.017.089.015.087.015.178.03.013,0,.181.03.042.007,1.142.194-1.008,5.915q-9.727-1.658-19.576-3.022Zm29.605,4.808q8.557,1.6,17.012,3.417h.006l.142.031.024.005.421.091.033.007.126.027.049.01.383.083.073.016.093.02.113.025.091.02.149.033.062.014.13.028.056.012.38.083.029.006.232.051-1.287,5.86q-9.641-2.117-19.418-3.943Zm29.352,6.2c1.242.294,2.478.59,3.717.89h0l.2.048.009,0,.389.095.038.009.158.038.035.008.186.045.034.008.152.037.06.015.115.028.076.019.165.041.074.018.1.025.1.024.073.018.107.026.022.005.247.061.053.013.118.029.044.011.422.1.011,0,.147.036.007,0,.446.111.008,0q1.813.452,3.621.913l.022.006.141.036h0l.433.111.029.007.135.035.022.006.256.066.033.008.1.026.085.022.092.024.087.023.133.034.116.03.079.021.107.028.075.019.138.036.038.01.18.047.045.012.158.041.026.007c1.987.516,3.946,1.036,5.923,1.571l-1.566,5.792q-9.526-2.576-19.2-4.864l1.38-5.839Zm29.022,7.6q6.775,1.95,13.47,4.044l.017.005.56.175.049.015.115.036.06.019.36.113.067.021.1.031.077.024.092.029.155.049.083.026.095.03.08.025.123.039.045.014.172.055.058.018.125.04.058.019.135.043.043.014.18.057.025.008.157.05.043.014.168.054.009,0,.191.061.012,0,.176.056.023.008.178.057.008,0,.377.121.03.01,1.4.452L744.982,36.3q-9.385-3.035-18.935-5.785Zm28.612,9q6.382,2.18,12.683,4.49h0l.568.209.029.011.274.1.022.008.248.091.047.017.255.094.066.025.195.072.079.029.23.085.1.039.143.053.116.043.2.075.139.052.1.038.292.109.036.013.172.064.043.016c.924.345,1.851.694,2.772,1.043l-2.126,5.611q-9.227-3.5-18.633-6.711Zm28.139,10.4c6.227,2.479,12.358,5.04,18.454,7.708l-2.406,5.5q-9.036-3.955-18.267-7.631l2.219-5.574Zm27.582,11.8.481.221.008,0,.168.077.056.026.255.117.1.045.129.059.205.095.082.038.177.082.077.036.237.11.053.025.23.107.027.013.267.124.022.01q6.665,3.092,13.217,6.333l.022.011.259.128.035.017.226.112.043.021.232.115.08.04L828.9,64l.126.063.154.077.118.059.116.058.218.109.072.036.371.185-2.684,5.366q-8.82-4.411-17.851-8.548Zm26.938,13.185q4.1,2.139,8.153,4.34l.019.01.506.275.02.011.334.182h0l.167.091.03.016.287.157.059.032.463.253.078.043.2.112.111.061.13.071.1.058.191.105.114.063.124.068.132.072.161.088.126.07.109.06.2.108.1.057.138.076.1.053.2.113.093.052.171.095.1.053.183.1.081.045.22.122.063.035.185.1.067.037.228.127.056.031.212.118.034.019.238.133.053.03.244.136,0,0,.247.138.039.022.252.141.013.007.246.138.025.014.257.144.017.01.526.3.014.008,1.349.763-2.961,5.219q-8.578-4.867-17.385-9.464l2.776-5.319ZM865.2,83.708c1.566.926,3.144,1.868,4.7,2.808l.005,0,.5.3.018.011.3.185.028.017.47.286.048.029.461.281.058.035.249.152.065.04.141.086.069.042.231.141.078.048.211.129.094.058.126.077.1.063.179.11.118.073.113.069.166.1.117.072.134.082.1.059.2.121.092.057.155.1.093.057.185.114.087.054.211.13.05.031.186.116.066.041.219.136.058.036.2.122.043.027.228.142.051.032.238.148,0,0,.239.149.037.023.238.149.033.021.235.147.012.008.247.155.029.018.5.314.021.013.254.16,0,0,.525.33,0,0q1.714,1.08,3.418,2.171L879,99.24q-8.3-5.316-16.847-10.367l3.053-5.165Zm25.4,15.947q3.262,2.173,6.484,4.387l0,0,.253.174.012.008.247.17,0,0,.231.159.051.035.22.152.045.031.178.123.071.049.2.137.084.058.141.1.134.093.13.09.106.073.144.1.144.1.1.067.184.128.1.068.129.09.068.048.238.166.046.032.455.318.017.012q3.137,2.194,6.23,4.423l-3.508,4.868q-8-5.764-16.26-11.269Zm24.5,17.316q1.254.94,2.5,1.885l0,0,.5.378h0l.236.18.027.02.235.179h0l.23.176.029.022.221.168.042.032.45.344.039.03.223.171.024.018.217.167.021.016.221.17.042.032.221.17.023.018.208.16.035.027.216.167.046.035.444.343.041.032.219.17.031.024.215.166.017.013.228.177.029.023.231.179,0,0,.234.182.014.011.23.179.027.021.472.368.01.007q3.691,2.883,7.319,5.821l-3.777,4.662q-7.656-6.2-15.595-12.15Zm23.482,18.657.76.641.006.005.127.108.026.022.119.1.021.018.139.118,0,0,.127.108.064.054.063.053.08.068.046.039.084.072.037.031.443.377.012.01q2.022,1.722,4.023,3.462l.012.011.111.1h0l.349.3,0,0,.1.088.026.023.091.08.04.035.089.078.033.029.284.248.056.049.067.059.066.057.061.053.085.075.045.039.117.1.015.013.134.118.027.023.108.095.037.032.1.091.028.024.123.108.012.01.281.247,0,0,.136.12.007.006q3.136,2.765,6.212,5.567l-4.041,4.436q-7.284-6.636-14.872-13.026Zm22.373,19.987c.926.877,1.833,1.744,2.751,2.627l.012.012.118.114.018.017.114.11.019.018.263.253.015.014.113.109.029.028.1.095.034.033.1.094.034.033.094.091.055.054.1.1.057.056.065.063.068.066.053.051.073.071.045.044.079.077.027.026.3.291.018.018.1.095.018.018.1.1.007.007.438.427.007.007.109.106h0q4.417,4.316,8.709,8.724l-4.3,4.186q-6.871-7.056-14.065-13.874ZM982.1,176.893c2.376,2.541,4.708,5.09,7.022,7.674l.007.008.117.131.005.006.49.548.012.013q2.888,3.237,5.7,6.508l-4.549,3.913q-6.422-7.467-13.189-14.7l4.383-4.1Zm19.8,22.539q1.144,1.388,2.276,2.783l.006.007.08.1.034.042.067.082.044.055.059.073.077.095.027.033.114.14h0l.114.141.008.01.11.137,0,0q3.494,4.328,6.865,8.713l.014.019.1.125.014.018.217.283.022.029.08.1.046.06.054.071.054.071.044.058.065.085.024.032q.891,1.165,1.773,2.334l-4.789,3.614q-5.932-7.86-12.228-15.5Zm18.324,23.747c.772,1.071,1.534,2.137,2.3,3.213l.01.015.09.127.022.031.078.11.027.038.079.112.022.032.092.13.009.013.1.141.026.037.073.1.037.053.058.083.046.065.05.071.051.073.045.064.052.073.041.059.114.163.031.044.066.094.027.039.065.092.034.049.062.089.029.042.068.1.019.027.237.339.02.028.066.094.032.045.062.089.036.051.058.084.036.051.064.092.006.009.239.343.031.045.062.09.031.045.063.091.034.049.062.089.034.049.06.087.037.054.113.163.034.049.057.082.041.06.049.071.053.076.044.063.056.081.041.059.069.1.028.041.1.144.009.013.088.128.028.041.07.1.032.047.067.1.031.045.078.113.019.028.2.3h0l.1.145.013.019.089.13.012.018.094.137.006.009q2.344,3.433,4.626,6.911l-5.017,3.291q-5.4-8.232-11.186-16.254l4.867-3.51Zm16.727,24.9q.7,1.127,1.4,2.257l.006.01.075.122.013.021.214.348.024.039.046.075.048.079.034.056.059.1.029.047.068.111.021.035.078.128.012.02q2.482,4.057,4.867,8.153l0,0,.274.471,0,.005.08.138.025.043.064.11.025.044.061.1.028.048.061.105.027.046.077.133.021.037.069.12.043.074.04.069.05.087.031.054.054.094.025.043.063.11,0,.006q1.05,1.824,2.081,3.657l-5.229,2.942q-4.829-8.582-10.064-16.966Zm15.006,25.973.058.109.01.019.083.156.009.016.071.134.024.046.057.107.028.052.052.1.03.056.052.1.03.056.063.12.014.027.081.153.017.033.062.118.032.06.045.086.036.069.047.089.032.06.049.093.031.059.054.1.025.048.079.15.013.025.066.126.027.051.051.1.034.064.047.089.032.06.047.09.035.067.046.088.032.061.077.147.016.031.065.124.025.048.052.1.032.062.049.095.03.057.052.1.027.051.061.117.019.036.079.152.007.014.075.144.012.024.067.13.02.038.06.117.021.04.06.115.022.042.073.142,0,.006.165.32.006.011.073.141.016.032.067.13.012.023.071.138.01.019.327.639,0,.007.08.157v0l.08.157,0,.007c1.881,3.688,3.7,7.381,5.467,11.119l-5.422,2.568q-4.216-8.9-8.857-17.614ZM1065.105,301q4.013,9.023,7.592,18.22l.011.028.054.139.01.025.019.05-5.593,2.171q-3.565-9.184-7.575-18.2l5.482-2.439Zm11.191,27.828q1.668,4.628,3.224,9.295v0l.044.132.009.027.043.13.006.017.044.134.006.017.185.558.01.031.038.114.015.045.036.108.017.051.035.107.013.04.175.533.014.042.034.1.02.06.032.1.021.063.03.091.024.072.029.09.023.072.1.322.025.078.026.08.026.079.026.08.029.089.023.071.031.1.021.064.038.117.015.046.051.158.019.06.033.1.021.064.033.1.019.059.035.111.016.05.039.123.013.04.161.5,0,.011.049.154.008.026.046.144.008.026.047.147.007.021c.416,1.313.817,2.6,1.22,3.919l-5.738,1.754q-2.881-9.427-6.222-18.694Zm9.12,28.572c1.785,6.407,3.418,12.886,4.885,19.392l-5.853,1.319q-2.169-9.623-4.812-19.1Zm6.961,29.174c.96,4.822,1.829,9.649,2.611,14.52v.007l.027.171,0,.011c.029.181.056.349.084.53l.007.043.019.121.012.074.014.09.013.084.012.079.015.1.009.058.089.566,0,.01.023.145,0,.012q.24,1.544.467,3.092l-5.936.873q-1.437-9.77-3.358-19.409l5.885-1.172Zm4.739,29.617q.806,6.644,1.39,13.344v0l.012.138,0,.029.011.124,0,.05c0,.038.006.076.01.114l0,.052.01.112.007.089.012.136.009.106.006.069.009.108.005.061.01.118,0,.055.012.145,0,.022.045.547s0,0,0,0q.183,2.237.34,4.477l-5.985.421q-.693-9.859-1.877-19.6Zm2.481,29.887.011.253c0,.015,0,.029,0,.044,0,.035,0,.071,0,.106l0,.066c0,.035,0,.071,0,.106l.006.131c0,.025,0,.049,0,.074l0,.1,0,.066.006.138v.024c0,.062,0,.109.007.172v.033l.006.142c0,.012,0,.025,0,.037.169,4.094.275,8.186.317,12.306h0l0,.374h0c0,.187,0,.371,0,.558v.01c0,.062,0,.1,0,.166,0,.008,0,.017,0,.025,0,.125,0,.232,0,.357,0,.007,0,.014,0,.021,0,.062,0,.1,0,.161,0,.007,0,.014,0,.021,0,.125,0,.233,0,.358,0,.008,0,.015,0,.023,0,.063,0,.092,0,.154,0,.01,0,.02,0,.03,0,.125,0,.223,0,.348,0,.014,0,.028,0,.041,0,.031,0,.106,0,.137,0,.013,0,.027,0,.04,0,.125,0,.219,0,.344v.042c0,.031,0,.1,0,.131v.05c0,.125,0,.211,0,.336,0,.018,0,.035,0,.053v.123c0,.017,0,.033,0,.05V464h0v.166c0,.017,0,.034,0,.051v.116c0,.019,0,.039,0,.058,0,.047,0,.091,0,.138s0,.07,0,.105v.032q0,.571,0,1.142v.022c0,.029,0,.057,0,.086,0,.047,0,.121,0,.168l-6-.031L1094,464q0-8.866-.4-17.652Zm-5.777,29.82,6,.182c-.039,1.275-.083,2.536-.134,3.808,0,0,0,0,0,.007l-.006.163c0,.013,0,.025,0,.038,0,.047,0,.092-.006.139l0,.043c0,.047,0,.1-.006.144v.033l-.007.173c0,.017,0,.034,0,.051l-.005.121,0,.075,0,.094,0,.083,0,.087q0,.046,0,.092c0,.016,0,.053,0,.068l0,.1v.023q-.01.218-.019.436v.017q0,.07-.006.141v.022q0,.072-.006.143c0,.016,0-.007,0,.009q-.018.388-.036.775h0q-.119,2.5-.27,4.993v0q-.023.377-.046.754l0,.034-.008.121,0,.048c0,.039,0,.077-.007.116l0,.052-.007.111,0,.057c0,.065-.008.131-.013.2l0,.072-.005.08-.006.094,0,.073-.007.106c0,.022,0,.044,0,.065l-.007.113,0,.059-.01.152c0,.006,0,.012,0,.018-.008.123-.016.234-.024.358l0,.03-.01.149,0,.034-.011.164s0,0,0,0c-.114,1.681-.239,3.348-.374,5.024l-5.98-.484Q1093.519,485.787,1093.82,475.9Zm-2.01,29.475,5.966.635c-.213,2-.439,3.98-.682,5.975l0,.016-.019.16,0,.023-.02.163,0,.014-.043.352-.006.047-.015.12-.009.073-.012.1-.01.076-.012.093-.01.082-.01.084-.011.086-.008.062-.029.231,0,.025c-.005.042-.011.084-.016.126l0,.036-.016.126,0,.036-.017.131,0,.02q-.058.458-.118.916v0q-.262,2.013-.544,4.02v0l-.021.153h0c-.035.251-.071.5-.107.754l0,.026-.018.126-.006.042-.017.117-.007.051-.016.111-.009.061-.023.158-.015.1-.01.072-.015.1-.01.069-.015.1-.01.065-.017.116-.007.05-.021.14,0,.03C1095.592,523.044,1091.113,511.923,1091.81,505.374ZM351.572,31.116l1.862,5.7q-9.447,3.084-18.721,6.454c-2.017-5.651-.976-6.028-.886-6.061l.025-.009.272-.1.006,0Q342.776,33.988,351.572,31.116ZM380.308,22.5l1.582,5.788q-9.589,2.621-19.021,5.532L361.1,28.091q4.088-1.261,8.205-2.469l.018-.005.139-.041.008,0,.29-.085h.005l.13-.038.038-.011.123-.036.049-.014.206-.06.062-.018.1-.029.085-.025.082-.024.121-.035.069-.02.157-.046.061-.018.121-.035.064-.018.149-.043.029-.008.182-.053.037-.011.156-.045.032-.009.185-.053h0l.2-.057h0l.191-.055.01,0Q376.345,23.588,380.308,22.5Zm29.114-7.21,1.3,5.857q-9.7,2.157-19.259,4.606l-1.489-5.812c2.125-.544,4.263-1.08,6.4-1.6h0l.193-.047.016,0,.388-.095.032-.008.174-.042.016,0,.38-.092.056-.014.127-.031.063-.015.174-.042.051-.012.129-.031.077-.019.11-.027.07-.017.157-.038.09-.022.1-.024.087-.021.093-.022.089-.021.14-.034.116-.028.076-.018.106-.025.077-.018.094-.023.144-.034.111-.026.081-.019.1-.024.073-.017.174-.042.083-.02.1-.024.076-.018.1-.025.081-.019.093-.022.153-.036.108-.026.074-.017.1-.024.077-.018.156-.037.1-.023.1-.023.079-.019.1-.024.091-.021.1-.025.14-.033.09-.021.09-.021.095-.022.081-.019.162-.038.093-.022.085-.02.1-.024.078-.018.142-.033.05-.012.158-.037.074-.017.118-.027.066-.015.18-.042h0l.18-.042.06-.014.131-.03.057-.013.372-.086.042-.01.159-.037.031-.007.392-.09.017,0,.195-.045h0l.4-.092.013,0C407.123,15.809,408.275,15.55,409.422,15.294Zm29.43-5.815,1.024,5.912q-9.8,1.7-19.463,3.686L419.2,13.2q4.264-.878,8.554-1.7l.021,0,.414-.079.046-.009.108-.021.087-.016.09-.017.168-.032.052-.01.144-.027.05-.009.163-.031.027-.005.2-.038h0l.207-.039h0c3.092-.583,6.2-1.145,9.314-1.684Zm29.676-4.424.746,5.954q-9.872,1.237-19.626,2.769l-.931-5.927Q456.1,6.692,463.541,5.7l.034,0,.271-.036.018,0,.1-.013.1-.013.082-.011L464.3,5.6l.026,0,.195-.026.037,0,.189-.025h0c1.261-.166,2.516-.326,3.78-.485Zm29.838-3.038L498.836,8q-9.917.779-19.729,1.855l-.654-5.964c3.223-.353,6.446-.682,9.686-.988h0l.642-.06h.008l.425-.04h.009l.207-.019h0l.418-.038.024,0,.409-.037.032,0,.182-.017.021,0,.209-.019h0l.2-.018.029,0,.19-.017h.014l.2-.018.029,0,.175-.016.036,0,.394-.035.053,0,.164-.014.034,0,.2-.017.04,0,.158-.014.052,0,.189-.016h.008l.193-.017.052,0,.154-.013.044,0,.193-.017.043,0,.148-.013.069-.006.164-.014.024,0,.191-.016.056,0,.152-.013.045,0,.195-.016.031,0,.167-.014.052,0,.154-.013.047,0,.19-.016.048,0,.148-.012.057,0,.2-.016h0l.2-.016.045,0,.173-.014.024,0,.2-.016.036,0,.171-.014.038,0,.4-.032.038,0,.169-.014.037,0,.2-.016h.014l.188-.015.034,0,.41-.032.024,0,.2-.015h.009ZM528.314.354l.2,6q-9.94.325-19.787.948l-.378-5.988c2.765-.175,5.527-.332,8.3-.472h0l.639-.032.032,0,.408-.02.039,0,.172-.008.036,0,.19-.009.058,0,.144-.007.063,0,.175-.008.052,0,.151-.007.076,0,.121-.006.078,0,.174-.008.08,0L519.45.7l.083,0,.141-.007.115-.005.1,0,.1,0,.093,0,.123-.006.134-.006.1,0,.1,0,.093,0,.151-.007.1,0,.113,0,.089,0,.108,0,.121-.005.132-.006.1,0,.094,0,.095,0L521.9.595l.054,0L522.1.586l.061,0,.183-.008h.009l.2-.008.04,0,.184-.008h.018c1.832-.075,3.676-.143,5.513-.2ZM550,0V6q-5.8,0-11.579.1l-.105-6c3.007-.053,5.994-.085,9.012-.1h.223c.214,0,.435,0,.659,0H550Z\" transform=\"translate(-331 77)\" fill=\"#fff\"/>\r\n  <g id=\"Group_96\" data-name=\"Group 96\" transform=\"translate(-1703 2156.2)\">\r\n    <path id=\"Path_2930\" data-name=\"Path 2930\" d=\"M3805.85-1925.85,3781.5-1545.2h175.65l-25-380.65Z\" transform=\"translate(-244)\" fill=\"#b38011\"/>\r\n    <path id=\"Path_2931\" data-name=\"Path 2931\" d=\"M3802.5-1870.85l-3.35,53.65h140l-3.3-53.65Z\" transform=\"translate(-243.825)\" fill=\"#b38011\"/>\r\n    <path id=\"Path_2932\" data-name=\"Path 2932\" d=\"M3795.5-1762.15l-3.65,53.3h154.3l-3-53.3Z\" transform=\"translate(-243.675)\" fill=\"#b38011\"/>\r\n    <path id=\"Path_2933\" data-name=\"Path 2933\" d=\"M3788.15-1654.85l-3.65,55h169l-4-55Z\" transform=\"translate(-243.675)\" fill=\"#b38011\"/>\r\n  </g>\r\n  <!-- <g id=\"Group_97\" data-name=\"Group 97\" transform=\"translate(-1947 2149)\" opacity=\"0.62\">\r\n    <path id=\"Path_2936\" data-name=\"Path 2936\" d=\"M3944.371-2037.962s-22.429-18.461-51.852-8.462-30.986,32.577-30.986,32.577-8.049,3.077-11.449,10.769-5.978,13.077-5.978,13.077-38.058,17.154-18.013,43.577,52.125,4.115,52.125,4.115,7.815,6.192,21.608,4.885,21.1-6.962,21.1-6.962,7.815,9.231,23.445,9.5,30.244-7.423,30.244-7.423,16.919,23.307,45.834,18.961,41.927-24.885,41.927-24.885,38.8,23.077,67.989,0,15.4-47.692,15.4-47.692,7.268-4.038,9.886-9.192a35.592,35.592,0,0,0,3.125-11.538s27.079.731,33.838-16.693.274-32.038-18.756-39.231-33.6,7.692-33.6,7.692-15.043-13.346-33.565-10a86.262,86.262,0,0,0-32.588,13.846s-30.478-29.192-70.06-18.961S3944.371-2037.962,3944.371-2037.962Z\" transform=\"translate(0)\" fill=\"#925e00\"/>\r\n    <path id=\"Path_2935\" data-name=\"Path 2935\" d=\"M3843.152-1990a89.856,89.856,0,0,0,10.7,0,18.223,18.223,0,0,0,10.3-4.35,37.4,37.4,0,0,0,23.35,9.35c14.65.65,29.3-5,29.3-5s16.35,20.35,44.7,16,42.65-25,42.65-25,44.377,23.4,69.236,0,14.114-48,14.114-48a22.383,22.383,0,0,0,9-8.65,24.852,24.852,0,0,0,3.35-11s7.25.7,10.95,0,10.05-5,10.05-5-13.8-6.2-26.281-2.8-24.631,10.5-24.631,10.5-23.581-24.754-68.275-18.907-58.822,41.665-58.822,41.665-27.257-18.74-56.2-5.808-28.466,32.54-28.466,32.54a28.919,28.919,0,0,0-10.154,10.276A48,48,0,0,0,3843.152-1990Z\" transform=\"translate(0.109 -1)\" fill=\"#925e00\"/>\r\n  </g> -->\r\n  <g id=\"Group_86\" data-name=\"Group 86\" transform=\"translate(-1711 2148.2)\">\r\n    <path id=\"Path_2930-2\" data-name=\"Path 2930\" d=\"M3805.85-1925.85,3781.5-1545.2h175.65l-25-380.65Z\" transform=\"translate(-244)\" fill=\"#f9e44d\"/>\r\n    <path id=\"Path_2931-2\" data-name=\"Path 2931\" d=\"M3802.5-1870.85l-3.35,53.65h140l-3.3-53.65Z\" transform=\"translate(-243.825)\" fill=\"#e79f1c\"/>\r\n    <path id=\"Path_2932-2\" data-name=\"Path 2932\" d=\"M3795.5-1762.15l-3.65,53.3h154.3l-3-53.3Z\" transform=\"translate(-243.675)\" fill=\"#e79f1c\"/>\r\n    <path id=\"Path_2933-2\" data-name=\"Path 2933\" d=\"M3788.15-1654.85l-3.65,55h169l-4-55Z\" transform=\"translate(-243.675)\" fill=\"#e79f1c\"/>\r\n  </g>\r\n  <path id=\"Ellipse_33\" data-name=\"Ellipse 33\" d=\"M688,0h4.126l.3,0,.3,0,.455,0,.284,0,.3,0,.293,0,.3,0,.289,0,.3,0h.067l.737.006.254,0,.283,0,.291,0,.289,0,.3,0h.05l1.9.022h.01c2.98.039,5.918.092,8.889.162l-.141,6Q697.967,6,688,6V0Zm30,.527c5.393.19,10.722.428,16.083.719h.029l.232.013.073,0,.2.011.1.006.174.01.2.011.079,0q1.4.078,2.792.16l-.353,5.99q-9.877-.582-19.831-.933Zm29.959,1.587q3.906.277,7.8.589h.013l.29.023.023,0,.286.023.022,0,.61.05.052,0,.237.019.118.01.166.014.141.012.147.012.154.013.133.011.158.013.122.01.178.015.031,0L759.4,3l.036,0,.234.02.045,0,.229.02.053,0,.23.02.037,0,1.31.113.027,0,.237.021.045,0,.226.02.06.005.222.02.058.005.218.019.065.006.653.058.122.011.139.012.169.015.11.01.193.017.095.009.238.022.043,0q1.7.154,3.4.316l-.567,5.973Q757.474,8.8,747.539,8.1Zm29.879,2.655q9.976,1.068,19.861,2.368l-.782,5.949q-9.813-1.29-19.717-2.35ZM807.6,8.5q2.79.4,5.573.821h.008l.6.09.1.015.189.029.133.02.139.021.164.025.106.016.189.029.052.008c4.026.616,8.063,1.264,12.064,1.937l.01,0,.248.042.028,0,.169.028-1,5.916q-9.76-1.648-19.621-3.066Zm29.611,4.813.018,0,.261.047.059.011.226.041.081.015.219.04.076.014.276.051.145.026.135.025.168.031.108.02.18.033.093.017.2.036.053.01c5.8,1.069,11.6,2.2,17.339,3.393L855.63,23q-9.69-2.006-19.488-3.784Zm29.417,5.9q4.9,1.077,9.763,2.211l.01,0,.27.063.07.016.206.048.1.024.172.04.118.028.76.179.039.009.22.052.046.011q3.853.909,7.694,1.855l-1.435,5.826q-9.6-2.365-19.325-4.5ZM895.8,26.206q9.7,2.518,19.289,5.269l-1.654,5.768q-9.508-2.727-19.143-5.229ZM0,563.154l6,.017L6,564.5c0,6.165-5.93,9.365-5.977,4.7v-.037c0-.087,0-.175,0-.263v-.015q0-.284,0-.567c0-.019,0-.016,0-.035q0-.12,0-.241c0-.019,0-.031,0-.05l0-.268v0c0-.093,0-.187,0-.28v-.044c0-.077,0-.152,0-.229,0-.019,0-.049,0-.068v-.211c0-.019,0-.046,0-.065q0-.27,0-.539c0-.019,0-.056,0-.075q0-.1,0-.2c0-.019,0-.065,0-.084,0-.068,0-.137,0-.206,0-.019,0-.046,0-.065,0-.088,0-.175,0-.263,0-.038,0-.029,0-.067v-.291q0-.094,0-.187v-.082c0-.088,0-.177,0-.266v-.188q0-.073,0-.147v0Q0,563.658,0,563.154Zm1.04-29.98,5.987.4q-.655,9.817-.894,19.723l-6-.144c.128-5.322.345-10.611.651-15.9h0l.013-.224v-.005l.012-.2,0-.03.012-.208c0-.009,0-.018,0-.027,0-.056.007-.111.01-.168,0-.023,0-.047,0-.07l.009-.151.006-.1.007-.122q0-.052.006-.1l0-.08c.008-.136.017-.273.025-.409v-.011Q.969,534.259,1.042,533.174Zm2.952-29.85,5.949.781q-1.283,9.765-2.153,19.629l-5.977-.527c.586-6.652,1.316-13.3,2.181-19.884Zm4.855-29.6,5.887,1.16q-1.905,9.671-3.4,19.45L5.4,493.427l.018-.116.018-.116.015-.1.018-.116.008-.054.066-.424v-.008q.8-5.175,1.72-10.321l0-.021.074-.414.012-.066.021-.116.016-.087.029-.159.018-.1.016-.088.025-.136.01-.055.032-.179.012-.066.028-.155.006-.035.036-.2.007-.039.032-.174.005-.03.077-.422,0-.009C8.088,477.651,8.461,475.69,8.848,473.725Zm6.73-29.229,5.8,1.531q-2.516,9.537-4.634,19.194l-5.861-1.285q1.892-8.631,4.1-17.171l0-.008.109-.42.013-.051.03-.117.018-.068.045-.171.027-.1.02-.078.034-.131.015-.058.049-.186.01-.037.046-.176.006-.022.169-.642Zm8.559-28.748,5.694,1.891Q26.72,427.008,24,436.507l-5.768-1.652q2.754-9.614,5.906-19.106Zm10.327-28.162,5.567,2.237q-3.684,9.169-6.991,18.475l-5.654-2.008q.623-1.754,1.26-3.5l.019-.053.133-.364.028-.077.033-.091.046-.125.028-.078.054-.148.023-.062.05-.138.018-.048.066-.181.016-.044.055-.151.016-.044.142-.385.009-.026c1.1-2.979,2.218-5.927,3.375-8.884l.007-.018.073-.187,0-.012.075-.191.015-.038.057-.145.023-.058.068-.173.021-.054.046-.117.036-.091.033-.084.073-.185.021-.052.052-.131.007-.017Q33.912,388.96,34.464,387.586Zm12.02-27.481,5.423,2.568q-4.233,8.938-8.1,18.022l-5.521-2.349q.547-1.286,1.1-2.569l.01-.022.054-.126.02-.046.077-.177.039-.089.036-.084.053-.122.021-.048.082-.188,0-.009.085-.2v0q3.186-7.322,6.615-14.563Zm13.632-26.718,5.263,2.882q-4.753,8.68-9.153,17.515l-5.371-2.675.413-.827.017-.034.107-.215.034-.067.121-.242.029-.057.092-.182.055-.109.065-.128.107-.213.053-.105.075-.149.042-.082.08-.159v0l.186-.368.02-.039.089-.176.017-.033.288-.568,0-.009c.706-1.388,1.411-2.761,2.13-4.144l.011-.02.292-.56.017-.033.093-.178.015-.029.184-.352.014-.026.085-.162.04-.076.079-.15.045-.086.129-.245.056-.107.068-.129.072-.137.077-.146.089-.17.053-.1.086-.164.041-.077.126-.238.03-.057.106-.2.031-.059.273-.514.016-.03Q58.543,336.26,60.117,333.387ZM75.272,307.5l5.09,3.177q-5.245,8.4-10.151,16.965L65,324.661q3.488-6.089,7.146-12.1l0,0,.484-.794,0-.008.322-.526.007-.011Q74.114,309.358,75.272,307.5ZM91.86,282.508l4.906,3.454q-5.706,8.1-11.089,16.378l-5.029-3.272c.429-.659.844-1.294,1.275-1.951l0-.006.343-.522.038-.057.1-.145.057-.086.12-.182.094-.142.073-.11.088-.133.06-.091.146-.221.021-.031.135-.2.045-.067.124-.186.034-.051.158-.237.02-.03.144-.217.025-.038.331-.5.013-.019.511-.765,0-.005q1.128-1.685,2.27-3.363v0q.435-.64.873-1.279l.015-.022.34-.5.02-.03.144-.21.031-.045.162-.236.017-.025.141-.206.047-.068.127-.184.034-.049.152-.22.055-.08.105-.152.06-.087.12-.174.079-.114.1-.142.077-.111.075-.109.31-.446.051-.073.1-.143.042-.06.349-.5.014-.02c.452-.647.892-1.276,1.347-1.921Zm17.928-24.052,4.713,3.713q-6.138,7.792-11.968,15.759l-4.843-3.543Q103.582,266.333,109.788,258.456Zm19.177-23.071,4.513,3.954q-6.541,7.466-12.788,15.115l-4.647-3.8.007-.008.172-.21.053-.065.128-.156.059-.072.169-.207.03-.037.144-.176.064-.079.125-.153.053-.064.172-.209.043-.052.135-.164.058-.071.133-.162.048-.059.171-.207.053-.064.125-.151.063-.076.145-.175.045-.054.158-.191.063-.076.123-.149.056-.068.171-.206.047-.056.132-.159.066-.079.121-.146.057-.069.171-.2.051-.062.131-.158.059-.071.153-.184.023-.028.176-.21.057-.069.129-.154.057-.068.175-.209.021-.025.157-.187.061-.072.125-.149.059-.071.174-.208.037-.044.141-.168.06-.071.14-.167.041-.049.175-.208.054-.064.131-.156.055-.065.163-.194.021-.025.177-.209.054-.064.129-.152.06-.071.172-.2.046-.054.135-.159.067-.079.124-.146.057-.067.17-.2.063-.074.122-.143.068-.08.125-.147.059-.07.161-.19.08-.093.1-.113.09-.105.11-.129.121-.141.1-.118.09-.106.089-.1.094-.109.055-.064.213-.248.049-.057.119-.139.042-.049.415-.482.008-.009q1.678-1.95,3.375-3.887ZM149.3,213.333l4.308,4.177q-6.912,7.129-13.545,14.445l-4.445-4.03Q142.313,220.535,149.3,213.333Zm21.4-21.014,4.1,4.383q-7.255,6.783-14.245,13.758l-4.238-4.247.014-.014.2-.2.015-.015Q163.492,199.06,170.7,192.319Zm22.4-19.956,3.884,4.573q-7.571,6.432-14.892,13.06l-4.027-4.448.214-.194.036-.033.187-.169.035-.032.213-.192.042-.038.156-.141.088-.079.12-.109.09-.081.154-.139.151-.136.07-.063.137-.123.043-.039q6.153-5.529,12.485-10.926l.021-.018.153-.13.055-.046.435-.37.1-.082.053-.045ZM216.4,153.479l3.669,4.748q-7.863,6.076-15.488,12.351l-3.813-4.633,1.072-.88.055-.045.139-.114.08-.065.123-.1.19-.155.1-.08.123-.1.093-.076.152-.124.058-.047.218-.178.041-.033.187-.153.05-.04.2-.159.028-.023.461-.375.034-.028.214-.174.013-.011.466-.378.035-.028.206-.167.023-.019.462-.373.041-.033.194-.156.037-.03.454-.366.055-.044.165-.133.07-.056.19-.153.03-.024.215-.172.072-.058.151-.121.077-.062.145-.116.131-.1.145-.116.116-.093.094-.075.126-.1.077-.061.478-.381.036-.029.162-.129.029-.023c2.5-1.99,4.99-3.944,7.525-5.9Zm24.146-17.8L244,140.588q-8.13,5.716-16.036,11.637l-3.6-4.8c2.128-1.593,4.237-3.153,6.39-4.725l.032-.023.173-.126.024-.018.515-.375.072-.053.141-.1.073-.053.465-.338.092-.067.127-.092.1-.073.119-.086.148-.107.14-.1.145-.1.1-.071.13-.094.1-.072.163-.118.08-.058.2-.145.079-.057.153-.111.083-.06.172-.124.058-.042.229-.165.05-.036.181-.13.07-.05.185-.133.047-.034.235-.169.034-.025.2-.142.064-.046.181-.13.056-.04.465-.333.066-.047.178-.127.057-.041.473-.337.046-.033.2-.139.05-.035.483-.344.022-.016.216-.153.046-.032.219-.156.018-.013.25-.177,0,0,.235-.167.038-.027.224-.158.016-.012.495-.349.03-.021.221-.156.026-.019.494-.347Zm24.914-16.709,3.232,5.055q-8.375,5.355-16.539,10.917l-3.378-4.959q8.242-5.615,16.685-11.013Zm25.616-15.612,3.012,5.189q-8.6,4.991-17,10.194l-3.159-5.1q4.367-2.7,8.787-5.353l.005,0,.527-.315.029-.017.211-.126.078-.047.169-.1.082-.049.2-.117.135-.08.136-.081.136-.081.089-.053.155-.092.062-.037.79-.469,0,0c1.851-1.1,3.69-2.176,5.555-3.259Zm26.255-14.511,2.792,5.311q-8.8,4.627-17.419,9.468L299.769,98.4Q308.457,93.515,317.335,88.848ZM344.17,75.439l2.571,5.421q-8.987,4.263-17.8,8.742l-2.718-5.349q.972-.494,1.946-.985h0l.242-.122.1-.05.144-.073.128-.064.1-.05.585-.294.009,0q7.078-3.553,14.263-6.966l.008,0Zm27.36-12.306,2.351,5.52q-9.155,3.9-18.146,8.015l-2.5-5.455q5.238-2.4,10.531-4.723l.016-.007.24-.105.073-.032.194-.085.083-.036.193-.084.128-.056.186-.081.139-.061.114-.05.156-.068.086-.038.174-.076.033-.014C367.574,64.828,369.528,63.986,371.53,63.134Zm27.831-11.2,2.13,5.609q-9.305,3.533-18.457,7.288l-2.277-5.551.068-.028.033-.013.606-.248.094-.038.151-.062.115-.047.143-.058.137-.056.116-.047.25-.1.1-.039.173-.07.105-.043.164-.067.1-.041.208-.085.05-.02.556-.225.031-.013.251-.1.035-.014Q391.748,54.822,399.361,51.931Zm28.25-10.1,1.91,5.688q-9.439,3.169-18.736,6.561l-2.057-5.636Q418.1,45.023,427.611,41.831Zm28.613-9,1.69,5.757q-9.554,2.8-18.975,5.833L437.1,38.712l.765-.245.072-.023.16-.051.119-.038.139-.044.159-.051.1-.032.235-.075.036-.012.29-.093.006,0,.278-.089.036-.011.262-.083.025-.008q4.006-1.272,8.036-2.5l.008,0,.283-.087.02-.006.887-.27.007,0,.275-.083.045-.014.246-.075.047-.014.269-.081.014,0,.582-.176.046-.014.234-.071.068-.021.225-.068.061-.018.27-.081.01,0,.3-.089.013,0,.266-.08.066-.02.223-.067.063-.019.236-.071.051-.015.577-.172.032-.01.255-.076.052-.015.235-.07.058-.017.271-.08.008,0,.6-.177h0l.285-.084.028-.008Zm28.936-7.9,1.471,5.817q-9.653,2.44-19.183,5.107l-1.617-5.778q3.29-.92,6.595-1.814l.053-.014.225-.061.078-.021.206-.055.084-.023.273-.074.112-.03.15-.04.179-.048.088-.024.192-.052.063-.017.215-.058.014,0c3.6-.963,7.179-1.9,10.8-2.811Zm29.215-6.8L515.627,24q-9.737,2.077-19.36,4.382l-1.4-5.835,1.674-.4.072-.017.179-.042.107-.025.157-.037.139-.033.135-.032.567-.134.017,0,.281-.066.023-.005.277-.065.021-.005Q506.409,19.829,514.375,18.129Zm29.449-5.714,1.034,5.91q-9.807,1.716-19.508,3.661L524.172,16.1l.055-.011.192-.038.1-.02L524.7,16l.12-.024.166-.033.27-.054.108-.022.187-.037.088-.017.188-.037.085-.017.2-.039.07-.014.205-.041.049-.01.978-.192.033-.006.23-.045.035-.007.239-.047.01,0,1.289-.251h0l.255-.049.009,0,1.546-.3.015,0,1.541-.293.018,0,.25-.047h.007l1.555-.292h0l.253-.047.014,0,1.274-.237.03-.005.232-.043.036-.007.238-.044.013,0,1.282-.235.023,0,.245-.045.014,0c1.913-.349,3.8-.687,5.723-1.022Zm29.642-4.628.817,5.944q-9.862,1.356-19.628,2.942L553.7,10.75Q560.76,9.6,567.877,8.575l.03,0,.261-.038.059-.008.228-.033.086-.012.211-.03.083-.012.222-.032.176-.025.171-.024.18-.026.092-.013.205-.029.068-.01.225-.032.029,0c1.083-.153,2.179-.306,3.264-.455Zm29.8-3.547.6,5.97q-9.912,1-19.735,2.229l-.745-5.954c2.625-.329,5.226-.642,7.86-.946h.008l.262-.03h0l.756-.087.053-.006.179-.021.113-.013.159-.018.141-.016.141-.016.159-.018.126-.014.21-.024.072-.008.913-.1h.013Q598.9,4.679,603.262,4.239Zm29.89-2.472.387,5.988q-9.942.643-19.8,1.519l-.53-5.977Q623.139,2.416,633.153,1.768ZM663.114.362l.175,6q-9.957.29-19.841.813l-.317-5.992q4.349-.23,8.713-.415h.032l.269-.011.049,0,.25-.01.061,0,.246-.01.059,0,.248-.01.057,0,.6-.024.1,0L654,.677l.131-.005.16-.006.144-.006.152-.006.143-.006.148-.006.153-.006.122,0,.178-.007.064,0,.761-.029h.011l.237-.009.051,0,.231-.009.051,0,.235-.009.044,0c2.042-.074,4.048-.14,6.094-.2ZM688,0V6q-7.408,0-14.778.129l-.1-6,.187,0,.807-.013h.02l.255,0h.018l.263,0h.008c2.77-.043,5.527-.073,8.3-.089l.284,0h.014l.817,0h.829c.191,0,.366,0,.559,0H688Z\" transform=\"translate(2083)\" fill=\"#fff\"/>\r\n  <g id=\"Group_103\" data-name=\"Group 103\" transform=\"translate(231.5 -166)\" opacity=\"0.25\">\r\n    <path id=\"Path_43\" data-name=\"Path 43\" d=\"M1643,919.486l25.717,12.82v11.282l12.308-11.282,14.872,5.128,2.564,9.744,12.82-9.744,10.256,12.308,14.359-2.564,7.179,15.9,14.359,17.949H1768.2l5.641,9.744-5.641,16.41,8.718,10.256-3.077,12.821-8.205,6.667,8.205,9.231-8.205,4.615H1660Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_45\" data-name=\"Path 45\" d=\"M1632.306,916.409l36.4,15.4v11.438l12.371-11.437,14.939,4.435,2.442,10.971,12.263-9.57,10.5,11.2,15.182-1.634-5.128,18.941,5.128,15.385h-24.615l7.179,14.872-10.256,9.231,6.667,22.051-13.846,10.256-3.077,11.795s-39.487-7.179-41.026-11.795S1632.306,916.409,1632.306,916.409Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_36\" data-name=\"Rectangle 36\" width=\"82\" height=\"34\" transform=\"translate(1902.002 752.148)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_35\" data-name=\"Rectangle 35\" width=\"20\" height=\"55\" transform=\"translate(1818.002 669.148)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_41\" data-name=\"Path 41\" d=\"M1541.026,873l-28.718,14.18v33.333h18.974V895.9l9.744-4.615Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_40\" data-name=\"Path 40\" d=\"M1345.128,809.231h-22.051s-6.667-2.03-6.667-8.205,6.667-9.744,6.667-9.744h89.231s30.256,1.539,35.9,4.1,4.113,4.678,5.128,10.769,0,109.744,0,109.744H1345.128Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_34\" data-name=\"Rectangle 34\" width=\"78\" height=\"78\" transform=\"translate(1702.002 608.148)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_33\" data-name=\"Rectangle 33\" width=\"254\" height=\"75\" rx=\"15\" transform=\"translate(1655.002 708.148)\" fill=\"#1c1c1c\"/>\r\n    <circle id=\"Ellipse_25\" data-name=\"Ellipse 25\" cx=\"28\" cy=\"28\" r=\"28\" transform=\"translate(1651.002 783.148)\" fill=\"#1c1c1c\"/>\r\n    <circle id=\"Ellipse_26\" data-name=\"Ellipse 26\" cx=\"28\" cy=\"28\" r=\"28\" transform=\"translate(1858.002 783.148)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Rectangle_32\" data-name=\"Rectangle 32\" d=\"M38,10a28,28,0,0,0,0,56H245a28,28,0,0,0,0-56H38M38,0H245a38,38,0,0,1,0,76H38A38,38,0,0,1,38,0Z\" transform=\"translate(1641.002 773.148)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_42\" data-name=\"Path 42\" d=\"M1631.281,860.512h-26.154l35.385,191.795h72.308l-32.308-25.641Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n  </g>\r\n  <g id=\"Group_73\" data-name=\"Group 73\" transform=\"translate(225.5 -172)\">\r\n    <path id=\"Path_43-2\" data-name=\"Path 43\" d=\"M1643,919.486l25.717,12.82v11.282l12.308-11.282,14.872,5.128,2.564,9.744,12.82-9.744,10.256,12.308,14.359-2.564,7.179,15.9,14.359,17.949H1768.2l5.641,9.744-5.641,16.41,8.718,10.256-3.077,12.821-8.205,6.667,8.205,9.231-8.205,4.615H1660Z\" transform=\"translate(341.002 -203.852)\" fill=\"#464646\"/>\r\n    <path id=\"Path_45-2\" data-name=\"Path 45\" d=\"M1632.306,916.409l36.4,15.4v11.438l12.371-11.437,14.939,4.435,2.442,10.971,12.263-9.57,10.5,11.2,15.182-1.634-5.128,18.941,5.128,15.385h-24.615l7.179,14.872-10.256,9.231,6.667,22.051-13.846,10.256-3.077,11.795s-39.487-7.179-41.026-11.795S1632.306,916.409,1632.306,916.409Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_36-2\" data-name=\"Rectangle 36\" width=\"82\" height=\"34\" transform=\"translate(1902.002 752.148)\" fill=\"#464646\"/>\r\n    <rect id=\"Rectangle_35-2\" data-name=\"Rectangle 35\" width=\"20\" height=\"55\" transform=\"translate(1818.002 669.148)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_41-2\" data-name=\"Path 41\" d=\"M1541.026,873l-28.718,14.18v33.333h18.974V895.9l9.744-4.615Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_40-2\" data-name=\"Path 40\" d=\"M1345.128,809.231h-22.051s-6.667-2.03-6.667-8.205,6.667-9.744,6.667-9.744h89.231s30.256,1.539,35.9,4.1,4.113,4.678,5.128,10.769,0,109.744,0,109.744H1345.128Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_34-2\" data-name=\"Rectangle 34\" width=\"78\" height=\"78\" transform=\"translate(1702.002 608.148)\" fill=\"#3696da\"/>\r\n    <rect id=\"Rectangle_33-2\" data-name=\"Rectangle 33\" width=\"254\" height=\"75\" rx=\"15\" transform=\"translate(1655.002 708.148)\" fill=\"#f1533e\"/>\r\n    <circle id=\"Ellipse_25-2\" data-name=\"Ellipse 25\" cx=\"28\" cy=\"28\" r=\"28\" transform=\"translate(1651.002 783.148)\" fill=\"#1c1c1c\"/>\r\n    <circle id=\"Ellipse_26-2\" data-name=\"Ellipse 26\" cx=\"28\" cy=\"28\" r=\"28\" transform=\"translate(1858.002 783.148)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Rectangle_32-2\" data-name=\"Rectangle 32\" d=\"M38,10a28,28,0,0,0,0,56H245a28,28,0,0,0,0-56H38M38,0H245a38,38,0,0,1,0,76H38A38,38,0,0,1,38,0Z\" transform=\"translate(1641.002 773.148)\" fill=\"#707070\"/>\r\n    <path id=\"Path_42-2\" data-name=\"Path 42\" d=\"M1631.281,860.512h-26.154l35.385,191.795h72.308l-32.308-25.641Z\" transform=\"translate(341.002 -203.852)\" fill=\"#f1533e\"/>\r\n  </g>\r\n  <g id=\"Group_78\" data-name=\"Group 78\" transform=\"translate(118.5 -172)\">\r\n    <rect id=\"Rectangle_3\" data-name=\"Rectangle 3\" width=\"111\" height=\"31\" rx=\"6\" transform=\"translate(354 675.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_4\" data-name=\"Rectangle 4\" width=\"4\" height=\"11\" transform=\"translate(366 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_5\" data-name=\"Rectangle 5\" width=\"4\" height=\"11\" transform=\"translate(378 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_6\" data-name=\"Rectangle 6\" width=\"4\" height=\"11\" transform=\"translate(390 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_7\" data-name=\"Rectangle 7\" width=\"4\" height=\"11\" transform=\"translate(402 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_8\" data-name=\"Rectangle 8\" width=\"4\" height=\"11\" transform=\"translate(414 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_9\" data-name=\"Rectangle 9\" width=\"4\" height=\"11\" transform=\"translate(426 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_10\" data-name=\"Rectangle 10\" width=\"4\" height=\"11\" transform=\"translate(438 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_11\" data-name=\"Rectangle 11\" width=\"4\" height=\"11\" transform=\"translate(450 675.872)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_1\" data-name=\"Path 1\" d=\"M294.08,903.017s.038,7.284-7.671,7.284H152.992s-22.311-.637-25.817,15.937-7.012,36.017-7.012,36.017-2.55,13.068,11.793,15.937c.319-.319,248.612,0,248.612,0s9.243.638,12.112-12.749.956-57.053-3.187-72.671-15.915-32.415-15.915-32.415a9.41,9.41,0,0,0-6.4-3.284c-4.144-.319-62.153,0-62.153,0s-6.375.319-6.693,8.606S294.08,903.017,294.08,903.017Z\" transform=\"translate(187 -216.128)\" fill=\"#d5341f\"/>\r\n    <path id=\"Path_2\" data-name=\"Path 2\" d=\"M305.851,864.728h61.918s14.9,16.307,16.6,51.535.92,46.648.92,46.648.215,6.3-5.447,6.3H354.378s-9.241,1.32-13.2-11.127-7.544-24.518-7.544-24.518-3.263-10.939-16.277-16.408-16.785-8.11-14.9-23.764S305.851,864.728,305.851,864.728Z\" transform=\"translate(188 -215.555)\" fill=\"#3696da\"/>\r\n    <rect id=\"Rectangle_2\" data-name=\"Rectangle 2\" width=\"91\" height=\"24\" transform=\"translate(453 760.872)\"/>\r\n    <rect id=\"Rectangle_12\" data-name=\"Rectangle 12\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(336 701.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_17\" data-name=\"Rectangle 17\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(376 701.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_20\" data-name=\"Rectangle 20\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(416 701.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_13\" data-name=\"Rectangle 13\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(336 711.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_16\" data-name=\"Rectangle 16\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(376 711.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_19\" data-name=\"Rectangle 19\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(416 711.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_14\" data-name=\"Rectangle 14\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(336 721.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(376 721.872)\" fill=\"#fff\"/>\r\n    <path id=\"Path_2946\" data-name=\"Path 2946\" d=\"M519.133,657.2s-3.945-6.312-10.651-5.128-7.1,9.467-7.1,9.467,3.55,35.9,4.339,41.815,6.706,18.54,6.706,18.54L592.9,906.117l15.385-4.734s-50.1-184.221-52.466-190.533-4.734-16.568-11.44-24.458S519.133,657.2,519.133,657.2Z\" transform=\"translate(184 -208.128)\" opacity=\"0.25\"/>\r\n    <rect id=\"Rectangle_18\" data-name=\"Rectangle 18\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(416 721.872)\" fill=\"#fff\"/>\r\n    <path id=\"Path_6\" data-name=\"Path 6\" d=\"M504.537,660.75l-56.8,33.531,5.917,8.284,56.8-33.925Z\" transform=\"translate(189 -216.128)\" fill=\"#fff\"/>\r\n    <path id=\"Path_5\" data-name=\"Path 5\" d=\"M451.677,689.547l7.89,13.018L379.882,757l-13.807-14.6Z\" transform=\"translate(189 -216.128)\" fill=\"#da5241\"/>\r\n    <path id=\"Path_4\" data-name=\"Path 4\" d=\"M509.179,690.639,359.885,742.528s-23.578,8.466-37.6,28.9-14.9,24.51-18.237,40.9-1.821,49.461-1.821,49.461h37.627s-1.821-28.524,5.462-43.393,15.779-30.344,31.862-39.144,111.667-52.5,115.005-54.317,21.848-13.655,21.848-13.655Z\" transform=\"translate(189 -214.128)\"/>\r\n    <path id=\"Path_9\" data-name=\"Path 9\" d=\"M616.693,872.287,592.651,826.07l6.536-2.568L624.4,872.287Z\" transform=\"translate(189 -218.128)\" fill=\"#fffdf8\"/>\r\n    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M563.078,744.617l43.077,81.539-14.872,7.692-42.564-83.59Z\" transform=\"translate(189 -218.128)\" fill=\"#da5243\"/>\r\n    <rect id=\"Rectangle_22\" data-name=\"Rectangle 22\" width=\"15\" height=\"25\" transform=\"translate(802 650.872)\"/>\r\n    <path id=\"Path_7\" data-name=\"Path 7\" d=\"M519.133,657.2s-3.945-6.312-10.651-5.128-7.1,9.467-7.1,9.467,3.55,35.9,4.339,41.815,6.706,18.54,6.706,18.54L592.9,906.117l15.385-4.734s-50.1-184.221-52.466-190.533-4.734-16.568-11.44-24.458S519.133,657.2,519.133,657.2Z\" transform=\"translate(189 -214.128)\" fill=\"#3696da\"/>\r\n    <rect id=\"Rectangle_41\" data-name=\"Rectangle 41\" width=\"48\" height=\"100.296\" transform=\"translate(771 672.576)\" fill=\"#b08c22\"/>\r\n    <path id=\"Path_10\" data-name=\"Path 10\" d=\"M613.809,1055.624l-9.467-13.412V977.123h18.146v65.089Z\" transform=\"translate(186.659 -217.424)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_23\" data-name=\"Rectangle 23\" width=\"48\" height=\"99\" transform=\"translate(776 672.576)\" fill=\"#f1533e\"/>\r\n    <g id=\"Path_2914\" data-name=\"Path 2914\" transform=\"translate(368.5 775)\">\r\n      <path d=\"M 227 63.99999618530273 L 33 63.99999618530273 C 28.81413269042969 63.99999618530273 24.75456619262695 63.18062973022461 20.93400001525879 61.564697265625 C 17.24279975891113 60.0034294128418 13.92733287811279 57.76792907714844 11.0797004699707 54.92029571533203 C 8.232067108154297 52.07266235351562 5.996566772460938 48.75719451904297 4.435299873352051 45.06599807739258 C 2.819366693496704 41.24542999267578 2 37.18586349487305 2 32.99999618530273 C 2 28.81412887573242 2.819366693496704 24.75456237792969 4.435299873352051 20.93399620056152 C 5.996566772460938 17.24279594421387 8.232067108154297 13.92733001708984 11.0797004699707 11.07969665527344 C 13.92733287811279 8.232063293457031 17.24279975891113 5.996562957763672 20.93400001525879 4.435296535491943 C 24.75456619262695 2.819363117218018 28.81413269042969 1.999996423721313 33 1.999996423721313 L 33.08706665039062 1.999996423721313 L 33.17380142211914 1.992429733276367 L 130.0680847167969 -6.459805488586426 L 226.8259735107422 1.992396354675293 L 226.9127960205078 1.999996423721313 L 227 1.999996423721313 C 231.1858673095703 1.999996423721313 235.2454376220703 2.819363117218018 239.0659942626953 4.435296535491943 C 242.7572021484375 5.996562957763672 246.0726623535156 8.232063293457031 248.9203033447266 11.07969665527344 C 251.7679290771484 13.92733001708984 254.0034332275391 17.24279594421387 255.564697265625 20.93399620056152 C 257.1806335449219 24.75456237792969 258 28.81412887573242 258 32.99999618530273 C 258 37.18586349487305 257.1806335449219 41.24542999267578 255.564697265625 45.06599807739258 C 254.0034332275391 48.75719451904297 251.7679290771484 52.07266235351562 248.9203033447266 54.92029571533203 C 246.0726623535156 57.76792907714844 242.7572021484375 60.0034294128418 239.0659942626953 61.564697265625 C 235.2454376220703 63.18062973022461 231.1858673095703 63.99999618530273 227 63.99999618530273 Z\" stroke=\"none\"/>\r\n      <path d=\"M 130.0678558349609 -4.452213287353516 L 33.17414855957031 4.000011444091797 L 33 4.000011444091797 C 29.083251953125 4.000011444091797 25.28582763671875 4.766223907470703 21.71310424804688 6.277332305908203 C 18.26028442382812 7.737762451171875 15.15849304199219 9.829296112060547 12.493896484375 12.49390411376953 C 9.82928466796875 15.15851211547852 7.737747192382812 18.26029586791992 6.277328491210938 21.71311950683594 C 4.766220092773438 25.28583145141602 4 29.08326148986816 4 33.0000114440918 C 4 36.91676330566406 4.766220092773438 40.71418762207031 6.277328491210938 44.28690338134766 C 7.737747192382812 47.73972320556641 9.82928466796875 50.84151077270508 12.493896484375 53.50611877441406 C 15.15849304199219 56.17072677612305 18.26028442382812 58.26226043701172 21.71310424804688 59.72269058227539 C 25.28582763671875 61.23379516601562 29.083251953125 62.0000114440918 33 62.0000114440918 L 227 62.0000114440918 C 230.916748046875 62.0000114440918 234.7141723632812 61.23379516601562 238.2868957519531 59.72269058227539 C 241.7397155761719 58.26226043701172 244.8415069580078 56.17072677612305 247.506103515625 53.50611877441406 C 250.1707153320312 50.84151077270508 252.2622528076172 47.73972320556641 253.7226715087891 44.28690338134766 C 255.2337799072266 40.71418762207031 256 36.91676330566406 256 33.0000114440918 C 256 29.08326148986816 255.2337799072266 25.28583145141602 253.7226715087891 21.71311950683594 C 252.2622528076172 18.26029586791992 250.1707153320312 15.15851211547852 247.506103515625 12.49390411376953 C 244.8415069580078 9.829296112060547 241.7397155761719 7.737762451171875 238.2868957519531 6.277332305908203 C 234.7141723632812 4.766223907470703 230.916748046875 4.000011444091797 227 4.000011444091797 L 226.8256072998047 4.000011444091797 L 130.0678558349609 -4.452213287353516 M 130.0681457519531 -8.467414855957031 L 227 1.1444091796875e-05 C 245.2253875732422 1.1444091796875e-05 260 14.77461624145508 260 33.0000114440918 C 260 51.22540283203125 245.2253875732422 66.00000762939453 227 66.00000762939453 L 33 66.00000762939453 C 14.77461242675781 66.00000762939453 0 51.22540283203125 0 33.0000114440918 C 0 14.77461624145508 14.77461242675781 1.1444091796875e-05 33 1.1444091796875e-05 L 130.0681457519531 -8.467414855957031 Z\" stroke=\"none\" fill=\"#707070\"/>\r\n    </g>\r\n    <circle id=\"Ellipse_1\" data-name=\"Ellipse 1\" cx=\"29\" cy=\"29\" r=\"29\" transform=\"translate(372.5 778.872)\"/>\r\n    <path id=\"Ellipse_1_-_Outline\" data-name=\"Ellipse 1 - Outline\" d=\"M29,12A17,17,0,1,0,46,29,17.019,17.019,0,0,0,29,12M29,0A29,29,0,1,1,0,29,29,29,0,0,1,29,0Z\" transform=\"translate(372.5 778.872)\" fill=\"#fff\"/>\r\n    <circle id=\"Ellipse_31\" data-name=\"Ellipse 31\" cx=\"29\" cy=\"29\" r=\"29\" transform=\"translate(566.5 778.872)\"/>\r\n    <path id=\"Ellipse_31_-_Outline\" data-name=\"Ellipse 31 - Outline\" d=\"M29,12A17,17,0,1,0,46,29,17.019,17.019,0,0,0,29,12M29,0A29,29,0,1,1,0,29,29,29,0,0,1,29,0Z\" transform=\"translate(566.5 778.872)\" fill=\"#fff\"/>\r\n    <circle id=\"Ellipse_3\" data-name=\"Ellipse 3\" cx=\"8\" cy=\"8\" r=\"8\" transform=\"translate(445.5 777.872)\" fill=\"#fff\"/>\r\n    <circle id=\"Ellipse_6\" data-name=\"Ellipse 6\" cx=\"8\" cy=\"8\" r=\"8\" transform=\"translate(533.5 777.872)\" fill=\"#fff\"/>\r\n    <circle id=\"Ellipse_4\" data-name=\"Ellipse 4\" cx=\"8\" cy=\"8\" r=\"8\" transform=\"translate(445.5 819.872)\" fill=\"#fff\"/>\r\n    <circle id=\"Ellipse_5\" data-name=\"Ellipse 5\" cx=\"8\" cy=\"8\" r=\"8\" transform=\"translate(533.5 819.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_1\" data-name=\"Rectangle 1\" width=\"203\" height=\"23\" transform=\"translate(396.5 795.872)\" fill=\"#d95141\"/>\r\n  </g>\r\n  <g id=\"Group_81\" data-name=\"Group 81\" transform=\"translate(-2816.027 1193.05)\">\r\n    <path id=\"Path_2917\" data-name=\"Path 2917\" d=\"M3702.706-913.606s3.08,12.724,3.464,21.786,0,17.159,0,17.159h51.7l31.571,32.549s3.164,1.012,4.574,0,4.575-3.437,4.575-3.437,1.144-2.024,0-3.3-3.679-3.437-3.679-3.437l3.679-1.413s6.633,4.106,8.272,3.7,6.6-3.7,6.6-3.7.762-1.776,0-2.922a14.424,14.424,0,0,0-3.049-2.673v-2.807l8.272,2.807s2.687.764,4.193,0,4.823-2.807,4.823-2.807,2.306-3.17,1.277-4.315-4.708-4.335-4.708-4.335.629-2.673,2.287-1.909,5.852,3.189,5.852,3.189a6.8,6.8,0,0,0,4.956,0,24.912,24.912,0,0,1,4.441-1.279s1.526-2.291.763-3.055-3.927-9.548-10.159-16.04-18.946-18.083-18.946-18.083-2.42-1.642,0-4.449,10.808-10.827,10.808-10.827,2.936-3.418,1.144-4.067-10.807-1.279-10.807-1.279-3.927-1.031-5.585,0-34.309,16.174-34.309,16.174Z\" transform=\"translate(0 14.199)\" fill=\"#f9e44d\"/>\r\n    <path id=\"Path_2918\" data-name=\"Path 2918\" d=\"M3760.478-868.45l-20.471,19.745s-4.327,3.8-1.144,8.516a51.306,51.306,0,0,0,7.51,8.536,7.743,7.743,0,0,0,8.634-1.661c4.194-3.934,20.072-19.993,20.072-19.993Z\" transform=\"translate(5.026 23.025)\" fill=\"#f9e44d\"/>\r\n    <path id=\"Path_2919\" data-name=\"Path 2919\" d=\"M3858.951-964.783l-56.667,59.33,15.248,14.379,57.3-57.917Z\" transform=\"translate(14.303 8.987)\" fill=\"#f5e64d\"/>\r\n    <path id=\"Path_2920\" data-name=\"Path 2920\" d=\"M3818.6-1020.339s14.734,18.064,23.387,26.352,23.636,22.533,23.636,22.533a2.681,2.681,0,0,1,0,3.953c-2.021,2.043-6.614,6.874-6.614,6.874l20.223,19.229,5.318-6.244s2.821-1.91,3.831,0,37.093,63.015,37.093,63.015L3943.01-902.2s2.669-4.335,0-8.02-7.625-19.229-43.84-54.613-76.873-61.621-76.873-61.621Z\" transform=\"translate(16.647)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2921\" data-name=\"Path 2921\" d=\"M3877.384-987.82l3.812-3.819s3.3-2.559,6.48,0a96.941,96.941,0,0,1,8.52,8.669,4.287,4.287,0,0,1,0,5.213,16.023,16.023,0,0,1-3.945,3.819Z\" transform=\"translate(25.091 4.907)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2922\" data-name=\"Path 2922\" d=\"M3912.833-998.842l20.719,67.732.877-69.889Z\" transform=\"translate(30.184 3.709)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2923\" data-name=\"Path 2923\" d=\"M3873.51-880.357l4.3,15.658,45.384-21.635Z\" transform=\"translate(24.535 20.419)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2924\" data-name=\"Path 2924\" d=\"M3867.95-829.137l8.883,10.312,50.205-46.841Z\" transform=\"translate(23.736 23.431)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2925\" data-name=\"Path 2925\" d=\"M3830.5-851.248,3843.842-858l12.828,8.536,7.872,12.584L3848.8-820.955l-15.115-1.528Z\" transform=\"translate(18.357 24.548)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2926\" data-name=\"Path 2926\" d=\"M3827.143-816.45s-7.418,3.456-9.82,7.39-6.976,11.19-5.451,12.851,12.695,8.268,12.695,8.268l17.155-5.213s-2.917-11.343-5.833-14.513S3827.143-816.45,3827.143-816.45Z\" transform=\"translate(15.637 30.603)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2927\" data-name=\"Path 2927\" d=\"M3881.282-807.217c-1.01.115-11.417,4.067-11.417,4.067s-6.347,8.631-7.243,9.662S3874.935-781,3874.935-781s1.677-2.54,7.128-3.819,6.6-2.559,6.6-2.559l-1.01-3.934Z\" transform=\"translate(22.965 31.949)\" fill=\"#f8e44d\"/>\r\n  </g>\r\n  <g transform=\"translate(-1947 2142)\">\r\n    <g class=\"smoke-one\" id=\"Group_87\" data-name=\"Group 87\" transform=\"translate(-1947 2142)\">\r\n      <path id=\"Path_2936-2\" data-name=\"Path 2936\" d=\"M3942.425-2037.962s-22.077-18.461-51.039-8.462-30.5,32.577-30.5,32.577-7.923,3.077-11.269,10.769-5.885,13.077-5.885,13.077-37.462,17.154-17.731,43.577,51.308,4.115,51.308,4.115,7.692,6.192,21.269,4.885,20.769-6.962,20.769-6.962,7.692,9.231,23.077,9.5,29.77-7.423,29.77-7.423,16.654,23.307,45.115,18.961,41.269-24.885,41.269-24.885,38.192,23.077,66.923,0,15.154-47.692,15.154-47.692,7.153-4.038,9.73-9.192a36.047,36.047,0,0,0,3.077-11.538s26.654.731,33.308-16.693.269-32.038-18.462-39.231-33.077,7.692-33.077,7.692-14.808-13.346-33.039-10-32.077,13.846-32.077,13.846-30-29.192-68.961-18.961S3942.425-2037.962,3942.425-2037.962Z\" fill=\"#e6e6e6\"/>\r\n      <path id=\"Path_2935-2\" data-name=\"Path 2935\" d=\"M3843.152-1990a89.856,89.856,0,0,0,10.7,0,18.223,18.223,0,0,0,10.3-4.35,37.4,37.4,0,0,0,23.35,9.35c14.65.65,29.3-5,29.3-5s16.35,20.35,44.7,16,42.65-25,42.65-25,44.377,23.4,69.236,0,14.114-48,14.114-48a22.383,22.383,0,0,0,9-8.65,24.852,24.852,0,0,0,3.35-11s7.25.7,10.95,0,10.05-5,10.05-5-13.8-6.2-26.281-2.8-24.631,10.5-24.631,10.5-23.581-24.754-68.275-18.907-58.822,41.665-58.822,41.665-27.257-18.74-56.2-5.808-28.466,32.54-28.466,32.54a28.919,28.919,0,0,0-10.154,10.276A48,48,0,0,0,3843.152-1990Z\" transform=\"translate(0.109 -1)\" fill=\"#fff\"/>\r\n    </g>\r\n    <g class=\"smoke-two\" id=\"Group_87\" data-name=\"Group 87\" transform=\"translate(-1947 2142)\">\r\n      <path id=\"Path_2936-2\" data-name=\"Path 2936\" d=\"M3942.425-2037.962s-22.077-18.461-51.039-8.462-30.5,32.577-30.5,32.577-7.923,3.077-11.269,10.769-5.885,13.077-5.885,13.077-37.462,17.154-17.731,43.577,51.308,4.115,51.308,4.115,7.692,6.192,21.269,4.885,20.769-6.962,20.769-6.962,7.692,9.231,23.077,9.5,29.77-7.423,29.77-7.423,16.654,23.307,45.115,18.961,41.269-24.885,41.269-24.885,38.192,23.077,66.923,0,15.154-47.692,15.154-47.692,7.153-4.038,9.73-9.192a36.047,36.047,0,0,0,3.077-11.538s26.654.731,33.308-16.693.269-32.038-18.462-39.231-33.077,7.692-33.077,7.692-14.808-13.346-33.039-10-32.077,13.846-32.077,13.846-30-29.192-68.961-18.961S3942.425-2037.962,3942.425-2037.962Z\" fill=\"#e6e6e6\"/>\r\n      <path id=\"Path_2935-2\" data-name=\"Path 2935\" d=\"M3843.152-1990a89.856,89.856,0,0,0,10.7,0,18.223,18.223,0,0,0,10.3-4.35,37.4,37.4,0,0,0,23.35,9.35c14.65.65,29.3-5,29.3-5s16.35,20.35,44.7,16,42.65-25,42.65-25,44.377,23.4,69.236,0,14.114-48,14.114-48a22.383,22.383,0,0,0,9-8.65,24.852,24.852,0,0,0,3.35-11s7.25.7,10.95,0,10.05-5,10.05-5-13.8-6.2-26.281-2.8-24.631,10.5-24.631,10.5-23.581-24.754-68.275-18.907-58.822,41.665-58.822,41.665-27.257-18.74-56.2-5.808-28.466,32.54-28.466,32.54a28.919,28.919,0,0,0-10.154,10.276A48,48,0,0,0,3843.152-1990Z\" transform=\"translate(0.109 -1)\" fill=\"#fff\"/>\r\n    </g>\r\n  </g>\r\n  <g id=\"Group_93\" data-name=\"Group 93\" transform=\"translate(82.487 -138.545)\">\r\n    <rect id=\"Rectangle_25-2\" data-name=\"Rectangle 25\" width=\"27.212\" height=\"11.792\" transform=\"translate(215.548 471.065)\" fill=\"#1d1d1e\"/>\r\n    <rect id=\"Rectangle_26-2\" data-name=\"Rectangle 26\" width=\"12.699\" height=\"31.748\" transform=\"translate(222.805 442.945)\" fill=\"#1d1d1e\"/>\r\n    <rect id=\"Rectangle_24-2\" data-name=\"Rectangle 24\" width=\"141.505\" height=\"141.505\" transform=\"translate(157.495 479.229)\" fill=\"#3497d9\"/>\r\n    <path id=\"Path_12-2\" data-name=\"Path 12\" d=\"M236.3,632.331H228v2.117l-23.29-2.117s-4.56-.532-4.56,5.473,4.56,5.749,4.56,5.749L228,640.8v2.752h8.3\" transform=\"translate(-7.143 -199.062)\" fill=\"#3698d7\"/>\r\n    <path id=\"Path_13-2\" data-name=\"Path 13\" d=\"M36.149.012h-8.3V2.129L4.56.012S0-.52,0,5.485s4.56,5.749,4.56,5.749L27.85,8.481v2.752h8.3\" transform=\"translate(265.303 444.492) rotate(180)\" fill=\"#3698d7\"/>\r\n    <text id=\"TNT-2\" data-name=\"TNT\" transform=\"translate(180.172 566.884)\" fill=\"#fff\" font-size=\"51\" font-family=\"SegoeUI-Bold, Segoe UI\" font-weight=\"700\" letter-spacing=\"-0.05em\"><tspan x=\"0\" y=\"0\">TNT</tspan></text>\r\n  </g>\r\n</svg>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
GraphicComponent.ctorParameters = () => [];

class CustomWrapperComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-custom-wrapper',
                template: "<section\r\n    class=\"{{borderColour}} {{backgroundColour}} position-relative\"\r\n    [ngClass]=\"{\r\n        'box-shadow-strong' : boxShadow\r\n    }\"\r\n    [ngStyle]=\"{\r\n        'border-radius' : borderRadius,\r\n        'padding' : paddingSize,\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'min-height' : minHeight,\r\n        'max-height' : maxHeight,\r\n        'z-index' : zIndex,\r\n        'border-width' : borderWidth,\r\n        'border-style' : borderStyle,\r\n        'margin-bottom' : marginBottom,\r\n        'overflow': enableScrolling ? 'auto' : 'initial'\r\n    }\"\r\n>\r\n    <ng-content></ng-content>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
CustomWrapperComponent.ctorParameters = () => [];
CustomWrapperComponent.propDecorators = {
    boxShadow: [{ type: Input }],
    paddingSize: [{ type: Input }],
    borderRadius: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }],
    minHeight: [{ type: Input }],
    maxHeight: [{ type: Input }],
    zIndex: [{ type: Input }],
    borderWidth: [{ type: Input }],
    borderStyle: [{ type: Input }],
    borderColour: [{ type: Input }],
    backgroundColour: [{ type: Input }],
    marginBottom: [{ type: Input }],
    enableScrolling: [{ type: Input }]
};

class LayoutModule {
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BladeComponent,
                    FooterComponent,
                    BladeFooterComponent,
                    BladeBottomComponent,
                    BladeTopComponent,
                    ProjectTourComponent,
                    UiBlockComponent,
                    UnauthorisedComponent,
                    GraphicComponent,
                    CustomWrapperComponent
                ],
                imports: [CommonModule, RouterModule],
                exports: [
                    BladeComponent,
                    FooterComponent,
                    BladeFooterComponent,
                    BladeBottomComponent,
                    BladeTopComponent,
                    ProjectTourComponent,
                    UiBlockComponent,
                    UnauthorisedComponent,
                    GraphicComponent,
                    CustomWrapperComponent
                ],
            },] }
];

class ContextMenuComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.showContextMenu = false;
        }
    }
    open() {
        this.showContextMenu = true;
    }
    close() {
        this.showContextMenu = false;
    }
    ngOnInit() {
    }
}
ContextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-context-menu',
                template: "<nav \r\n  class=\"context-menu flex-group width-control\" \r\n  [ngStyle]=\"{\r\n    'top' : topPos+'rem', \r\n    'left' : leftPos+'rem', \r\n    'right' : rightPos+'rem'\r\n  }\" \r\n  [ngClass]=\"{\r\n    'position-absolute' : absolutePosition\r\n  }\"\r\n  >\r\n  <div class=\"margin-right-0\">\r\n    <button \r\n      (click)=\"showContextMenu=!showContextMenu\" \r\n      class=\"material-icons\">\r\n      more_vert\r\n    </button>\r\n  </div>\r\n  <ul \r\n    *ngIf=\"showContextMenu\" \r\n    class=\"strip-bullets\" \r\n    [ngClass]=\"{'show-on-left' : showOnLeft}\"\r\n    [ngStyle]=\"{'min-width' : minWidth+'rem'}\"\r\n  >\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ContextMenuComponent.ctorParameters = () => [
    { type: ElementRef }
];
ContextMenuComponent.propDecorators = {
    absolutePosition: [{ type: Input }],
    leftPos: [{ type: Input }],
    topPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    zIndex: [{ type: Input }],
    minWidth: [{ type: Input }],
    showOnLeft: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};

class ContextMenuItemComponent {
    constructor(router) {
        this.router = router;
    }
    onClick() {
        this.router.navigate([this.routerLink, 500]);
    }
    ngOnInit() {
    }
}
ContextMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-context-menu-item',
                template: "<li>\r\n    <a [routerLink]=\"routerLink\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">{{menuItemText}}</a>\r\n</li>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ContextMenuItemComponent.ctorParameters = () => [
    { type: Router }
];
ContextMenuItemComponent.propDecorators = {
    menuItemText: [{ type: Input }],
    routerLink: [{ type: Input }],
    routerLinkActive: [{ type: Input }],
    minWidth: [{ type: Input }]
};

class NavContextComponent {
    constructor() { }
    toggle() {
        this.showMenu = !this.showMenu;
    }
    ngOnInit() {
    }
}
NavContextComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-nav-context',
                template: "<nav class=\"nav-context\" \r\n    [ngStyle]=\"{\r\n        'width' : navWidth+'rem', \r\n        'left' : leftPos+'rem', \r\n        'top' : topPos+'rem', \r\n        'bottom' : bottomPos+'rem', \r\n        'z-index' : zIndex\r\n    }\">\r\n    <div class=\"nav-context-content\">\r\n        <button (click)=\"toggle()\" class=\"material-icons menu\">menu</button>\r\n        <ul [ngClass]=\"{'show-menu' : showMenu}\">\r\n            <ng-content></ng-content>\r\n        </ul>\r\n    </div>\r\n</nav>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
NavContextComponent.ctorParameters = () => [];
NavContextComponent.propDecorators = {
    navWidth: [{ type: Input }],
    topPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    zIndex: [{ type: Input }],
    showMenu: [{ type: Input }]
};

class ProgressIndicatorComponent {
    constructor() { }
    ngOnInit() { }
}
ProgressIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-progress-indicator',
                template: "<li *ngIf=\"!iconsEnabled\" class=\"{{ progressClass }}\">\r\n  <div>{{ progressCount }}</div>\r\n  <a *ngIf=\"asLink\" href=\"{{ progressLink }}\">{{ progressLabel }}</a>\r\n  <span *ngIf=\"!asLink\">{{ progressLabel }}</span>\r\n</li>\r\n\r\n<li *ngIf=\"iconsEnabled\" class=\"align-center {{ progressClass }}\">\r\n  <i class=\"material-icons padding-x-0-25\">{{ iconName }}</i>\r\n  <a *ngIf=\"asLink\" href=\"{{ progressLink }}\">{{ progressLabel }}</a>\r\n  <span *ngIf=\"!asLink\">{{ progressLabel }}</span>\r\n</li>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ProgressIndicatorComponent.ctorParameters = () => [];
ProgressIndicatorComponent.propDecorators = {
    asLink: [{ type: Input }],
    progressCount: [{ type: Input }],
    progressClass: [{ type: Input }],
    progressLink: [{ type: Input }],
    progressLabel: [{ type: Input }],
    iconsEnabled: [{ type: Input }],
    iconName: [{ type: Input }]
};

class ProgressIndicatorAdvancedComponent {
    constructor() {
        this.progressClick = new EventEmitter();
    }
    onProgressClick(e) {
        e.stopPropagation();
        this.progressClick.emit(e);
    }
    ngOnInit() {
    }
}
ProgressIndicatorAdvancedComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-progress-indicator-advanced',
                template: "<section class=\"indicator-item flex-group {{ progressClass }}\">\r\n    <div *ngIf=\"showDescription\" class=\"description\">\r\n        <p class=\"box-shadow\">{{description}}</p>\r\n        <div class=\"material-icons {{iconClass}}\">pan_tool_alt</div>\r\n    </div>\r\n    <div class=\"bus-stop flex-group flex-column flex-center\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ProgressIndicatorAdvancedComponent.propDecorators = {
    progressClass: [{ type: Input }],
    progressLabel: [{ type: Input }],
    iconClass: [{ type: Input }],
    showDescription: [{ type: Input }],
    description: [{ type: Input }],
    asLink: [{ type: Input }],
    progressLink: [{ type: Input }],
    progressClick: [{ type: Output }]
};

class StepperComponent {
    constructor() { }
    ngOnInit() {
    }
}
StepperComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-stepper',
                template: "<div class=\"aa-stepper\">\r\n    <form formGroup=\"formName\">\r\n        <ul class=\"aa-stepper-header flex-group\">\r\n        <ng-content select=\"[steps-header]\"></ng-content>\r\n        </ul>\r\n        <section class=\"aa-stepper-content\">\r\n            <ng-content select=\"[steps-content]\"></ng-content>\r\n        </section>\r\n        <nav class=\"aa-stepper-footer\">\r\n            <ng-content select=\"[steps-footer]\"></ng-content>\r\n        </nav>\r\n    </form>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
StepperComponent.ctorParameters = () => [];
StepperComponent.propDecorators = {
    formName: [{ type: Input }]
};

class TabNavigationContentDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TabNavigationContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[aaTabNavigationContent]'
            },] }
];
TabNavigationContentDirective.ctorParameters = () => [
    { type: TemplateRef }
];

class TabNavigationHeaderContentDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TabNavigationHeaderContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[aaTabNavigationHeaderContent]'
            },] }
];
TabNavigationHeaderContentDirective.ctorParameters = () => [
    { type: TemplateRef }
];

class TabNavigationItemComponent {
    ngOnInit() { }
    ngAfterContentChecked() {
        this.templateRef = this.templateRefDirective && this.templateRefDirective.templateRef;
        this.templateRefHeader = this.templateRefHeaderDirective && this.templateRefHeaderDirective.templateRef;
    }
    get route() {
        return this.routerLink || this.tabRoute;
    }
}
TabNavigationItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tab-navigation-item',
                template: "<!-- BELOW ONLY USED FOR ROUTER-OUTLET VERSION -->\r\n<ng-container *ngIf=\"!templateRef\">\r\n  <li [ngClass]=\"{'tab-disabled' : tabDisabled}\">\r\n    <a *ngIf=\"!tabDisabled\" [id]=\"tabId\" [routerLink]=\"route\">\r\n      {{ tabName }}\r\n      <span *ngIf=\"enableIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</span>\r\n    </a>\r\n    <span *ngIf=\"tabDisabled\">\r\n      {{ tabName }}\r\n      <span *ngIf=\"enableIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</span>\r\n    </span>\r\n  </li>\r\n</ng-container>\r\n",
                styles: [""]
            },] }
];
TabNavigationItemComponent.propDecorators = {
    templateRefDirective: [{ type: ContentChild, args: [TabNavigationContentDirective,] }],
    templateRefHeaderDirective: [{ type: ContentChild, args: [TabNavigationHeaderContentDirective,] }],
    tabId: [{ type: Input }],
    tabName: [{ type: Input }],
    activeColor: [{ type: Input }],
    enableIcons: [{ type: Input }],
    iconName: [{ type: Input }],
    iconColour: [{ type: Input }],
    enableCount: [{ type: Input }],
    tabCount: [{ type: Input }],
    countColour: [{ type: Input }],
    tabRoute: [{ type: Input }],
    tabDisabled: [{ type: Input }],
    showRightDivider: [{ type: Input }],
    routerLink: [{ type: Input }],
    routerLinkActive: [{ type: Input }]
};

class TabNavigationComponent {
    constructor() {
        this.autoChangeTabs = true;
        this.displayTabContent = true;
        this.tabClicked = new EventEmitter();
        this.tabChanged = new EventEmitter();
    }
    get contentTabs() {
        var _a;
        return (_a = this.tabNavigationItems) === null || _a === void 0 ? void 0 : _a.filter((tabNavigationItem) => !!tabNavigationItem.templateRef);
    }
    ngOnInit() { }
    ngAfterContentInit() {
        if (this.contentTabs && this.contentTabs[0]) {
            this.changeTab(this.contentTabs[0]);
        }
    }
    isActive(tab) {
        return this.currentTab.tabName === tab.tabName;
    }
    isDividerTab() {
        return true;
    }
    onTabClicked(tab) {
        this.tabClicked.emit(tab);
        if (this.autoChangeTabs) {
            this.changeTab(tab);
        }
    }
    changeTab(tab) {
        this.currentTab = tab;
        this.tabChanged.emit(tab);
    }
    changeTabById(tabId) {
        const tab = this.contentTabs.find((x) => x.tabId === tabId);
        if (tab) {
            this.changeTab(tab);
        }
    }
}
TabNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tab-navigation',
                template: "\r\n<!-- ROUTER-OUTLET -->\r\n<nav *ngIf=\"routerOutlet\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n        <a *ngIf=\"!tab.tabDisabled\" [id]=\"tab.tabId\" [class.active]=\"isActive(tab)\" (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n          <span *ngIf=\"tab.enableIcons\" class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count {{tab.countColour}}\">{{tab.tabCount}}</span>\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\">\r\n          {{ tab.tabName }}\r\n          <span *ngIf=\"tab.enableIcons\" class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count {{tab.countColour}}\">{{tab.tabCount}}</span>\r\n        </span>\r\n      </li>\r\n      <li *ngIf=\"tab.showRightDivider\" class=\"divider-tab\"></li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- INFO-PANEL NG-TEMPLATE -->\r\n<div *ngIf=\"tabInfo\">\r\n  <nav class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n    <div class=\"float-right flex-group\">\r\n      <div class=\"flex-align-center\">\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">close_fullscreen</button>\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">open_in_full</button>\r\n      </div>\r\n    </div>\r\n    <ul class=\"flex-group flex-center\">\r\n      <ng-container *ngFor=\"let tab of contentTabs\">\r\n        <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n          <a class=\"{{tab.activeColor}}\" title=\"{{ tab.tabName }}\" *ngIf=\"!tab.tabDisabled\" [id]=\"tab.tabId\" (click)=\"onTabClicked(tab)\" [ngClass]=\"{'active': isActive(tab)}\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </a>\r\n          <span title=\"{{ tab.tabName }}\" *ngIf=\"tab.tabDisabled\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </span>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n  </nav>\r\n  \r\n  <ng-container *ngIf=\"displayTabContent && currentTab\">\r\n    <ng-template *ngTemplateOutlet=\"currentTab.templateRef\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<!-- INFO PANEL ROUTER-OUTLET -->\r\n<nav *ngIf=\"tabInfoRouterOutlet\" class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n  <div class=\"float-right flex-group\">\r\n    <div class=\"flex-align-center\">\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"material-icons\">close_fullscreen</button>\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"material-icons\">open_in_full</button>\r\n    </div>\r\n  </div>\r\n  <ul class=\"flex-group flex-center\">\r\n    <ng-content select=\"[tabs]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n",
                styles: [""]
            },] }
];
TabNavigationComponent.ctorParameters = () => [];
TabNavigationComponent.propDecorators = {
    tabNavigationItems: [{ type: ContentChildren, args: [TabNavigationItemComponent,] }],
    autoChangeTabs: [{ type: Input }],
    displayTabContent: [{ type: Input }],
    tabInfo: [{ type: Input }],
    routerOutlet: [{ type: Input }],
    ngTemplate: [{ type: Input }],
    tabInfoRouterOutlet: [{ type: Input }],
    toggleFullscreen: [{ type: Input }],
    standardTabs: [{ type: Input }],
    tabClicked: [{ type: Output }],
    tabChanged: [{ type: Output }]
};

class TabNavigationSecondaryContentDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TabNavigationSecondaryContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[aaTabNavigationSecondaryContent]'
            },] }
];
TabNavigationSecondaryContentDirective.ctorParameters = () => [
    { type: TemplateRef }
];

class TabNavigationSecondaryItemComponent {
    ngOnInit() { }
    ngAfterContentChecked() {
        this.templateRef = this.templateRefDirective && this.templateRefDirective.templateRef;
    }
    get route() {
        return this.routerLink || this.tabRoute;
    }
}
TabNavigationSecondaryItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tab-navigation-secondary-item',
                template: "<!-- BELOW ONLY USED FOR ROUTER-OUTLET VERSION -->\r\n<ng-container *ngIf=\"!templateRef\">\r\n  <li [ngClass]=\"{'tab-disabled' : tabDisabled}\">\r\n    <a *ngIf=\"!tabDisabled\" [id]=\"tabId\" [routerLink]=\"route\">{{ tabName }}</a>\r\n    <span *ngIf=\"tabDisabled\">{{ tabName }}</span>\r\n  </li>\r\n</ng-container>\r\n",
                styles: [""]
            },] }
];
TabNavigationSecondaryItemComponent.propDecorators = {
    templateRefDirective: [{ type: ContentChild, args: [TabNavigationSecondaryContentDirective,] }],
    tabId: [{ type: Input }],
    tabName: [{ type: Input }],
    tabRoute: [{ type: Input }],
    tabDisabled: [{ type: Input }],
    routerLink: [{ type: Input }],
    routerLinkActive: [{ type: Input }]
};

class TabNavigationSecondaryComponent {
    constructor() {
        this.autoChangeTabs = true;
        this.displayTabContent = true;
        this.tabClicked = new EventEmitter();
        this.tabChanged = new EventEmitter();
    }
    get contentTabs() {
        var _a;
        return (_a = this.tabNavigationItems) === null || _a === void 0 ? void 0 : _a.filter((tabNavigationItem) => !!tabNavigationItem.templateRef);
    }
    ngOnInit() { }
    ngAfterContentInit() {
        if (this.contentTabs && this.contentTabs[0]) {
            this.changeTab(this.contentTabs[0]);
        }
    }
    isActive(tab) {
        return this.currentTab.tabName === tab.tabName;
    }
    onTabClicked(tab) {
        this.tabClicked.emit(tab);
        if (this.autoChangeTabs) {
            this.changeTab(tab);
        }
    }
    changeTab(tab) {
        this.currentTab = tab;
        this.tabChanged.emit(tab);
    }
    changeTabById(tabId) {
        const tab = this.contentTabs.find((x) => x.tabId === tabId);
        if (tab) {
            this.changeTab(tab);
        }
    }
}
TabNavigationSecondaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tab-navigation-secondary',
                template: "\r\n<!-- ROUTER-OUTLET -->\r\n<nav *ngIf=\"routerOutlet\" class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li>\r\n        <a \r\n          class=\"{{tabColour}}\" \r\n          *ngIf=\"!isActive(tab) && !tab.tabDisabled\" \r\n          [id]=\"tab.tabId\" \r\n          [class.active]=\"isActive(tab)\" \r\n          (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n        </a>\r\n        <a \r\n          class=\"{{tabActiveColour}}\" \r\n          *ngIf=\"isActive(tab) && !tab.tabDisabled\" \r\n          [id]=\"tab.tabId\" \r\n          [class.active]=\"isActive(tab)\" \r\n          (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\" class=\"tab-disabled\">{{ tab.tabName }}</span>\r\n      </li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>",
                styles: [""]
            },] }
];
TabNavigationSecondaryComponent.ctorParameters = () => [];
TabNavigationSecondaryComponent.propDecorators = {
    tabNavigationItems: [{ type: ContentChildren, args: [TabNavigationSecondaryItemComponent,] }],
    autoChangeTabs: [{ type: Input }],
    displayTabContent: [{ type: Input }],
    routerOutlet: [{ type: Input }],
    ngTemplate: [{ type: Input }],
    tabColour: [{ type: Input }],
    tabActiveColour: [{ type: Input }],
    tabClicked: [{ type: Output }],
    tabChanged: [{ type: Output }]
};

class NavigationModule {
}
NavigationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ContextMenuComponent,
                    ContextMenuItemComponent,
                    NavContextComponent,
                    ProgressIndicatorComponent,
                    ProgressIndicatorAdvancedComponent,
                    StepperComponent,
                    TabNavigationComponent,
                    TabNavigationItemComponent,
                    TabNavigationSecondaryComponent,
                    TabNavigationSecondaryItemComponent,
                    TabNavigationContentDirective,
                    TabNavigationSecondaryContentDirective,
                    TabNavigationHeaderContentDirective
                ],
                imports: [CommonModule, RouterModule],
                exports: [
                    ContextMenuComponent,
                    ContextMenuItemComponent,
                    NavContextComponent,
                    StepperComponent,
                    ProgressIndicatorComponent,
                    ProgressIndicatorAdvancedComponent,
                    TabNavigationComponent,
                    TabNavigationItemComponent,
                    TabNavigationSecondaryComponent,
                    TabNavigationSecondaryItemComponent,
                    TabNavigationContentDirective,
                    TabNavigationSecondaryContentDirective,
                    TabNavigationHeaderContentDirective
                ]
            },] }
];

class AlertComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-alert',
                template: "<div \r\n    role=\"alert\" \r\n    class={{alertClass}}\r\n    [ngClass]=\"{'align-icon-top' : alignIconTop}\"\r\n>\r\n    <div \r\n        *ngIf=\"collapsible\" \r\n        class=\"\r\n        flex-group \r\n        space-between \r\n        flex-align-center \r\n        margin-top-0-5\"\r\n    >\r\n        <h3 class=\"margin-0\">{{ alertTitle }}</h3>\r\n        <div \r\n            class=\"flex-align-center cursor-pointer\"\r\n            (click)=\"expandPanel=!expandPanel\"\r\n        >\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"!expandPanel\">open_in_full</span>\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"expandPanel\">close_fullscreen</span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!collapsible\">\r\n        {{ alertText }}\r\n    </div> \r\n    <div \r\n        *ngIf=\"collapsible\"\r\n        class=\"overflow-hidden\"\r\n        [ngStyle]=\"{ 'height': !expandPanel ? '3rem' : 'auto' }\"\r\n        [ngClass]=\"{\r\n            'margin-top-0-75' : collapsible,\r\n            'expanded' : expandPanel\r\n        }\"\r\n    >\r\n        {{ alertText }}\r\n    </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    alertClass: [{ type: Input }],
    alertTitle: [{ type: Input }],
    alertText: [{ type: Input }],
    collapsible: [{ type: Input }],
    alignIconTop: [{ type: Input }],
    expandPanel: [{ type: Input }]
};

class AlertShieldComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertShieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-alert-shield',
                template: "<div \r\n    *ngIf=\"!showTooltip && !customShield\" \r\n    class=\"alert-shield {{alertShieldStatus}}\" \r\n    [ngClass]=\"{\r\n        'small' : alertShieldSmall, \r\n        'nowrap' : noWrap \r\n        }\"\r\n    >\r\n    <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n        {{alertShieldText}}\r\n    </span>\r\n</div>\r\n\r\n<div *ngIf=\"showTooltip && !customShield\" class=\"alert-shield-tooltip-wrapper\">\r\n    <div \r\n        class=\"alert-shield-tooltip {{alertShieldStatus}} {{xpos}} {{ypos}}\"\r\n        [ngStyle]=\"{'min-width' : minWidth}\"\r\n    >\r\n        <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n        <ng-content select=\"[tooltip-content]\"></ng-content>\r\n    </div>\r\n    <div \r\n        class=\"alert-shield {{alertShieldStatus}}\" \r\n        [ngClass]=\"{\r\n            'small' : alertShieldSmall, \r\n            'nowrap' : noWrap \r\n            }\"\r\n        >\r\n            <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n                {{alertShieldText}}\r\n            </span>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"customShield\" class=\"custom-alert-shield\">\r\n    <div \r\n        class=\"\r\n            flex-group \r\n            flex-align-center \r\n            flex-start \r\n            custom-alert-shield-container\r\n            {{shieldColour}}\r\n        \"\r\n        [ngClass]=\"{\r\n            'small' : alertShieldSmall,\r\n            'nowrap' : noWrap,\r\n            'icon-only' : iconOnly,\r\n            'rotate' : enableRotation\r\n        }\"\r\n      >\r\n        <div \r\n            *ngIf=\"showTooltip\"\r\n            class=\"alert-shield-tooltip {{xpos}} {{ypos}}\"\r\n            [ngStyle]=\"{'min-width' : minWidth}\"\r\n        >\r\n            <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n            <ng-content select=\"[custom-tooltip-content]\"></ng-content>\r\n        </div>\r\n        <div \r\n            [ngClass]=\"{\r\n                'material-icons' : !iconOutlined,\r\n                'material-icons-outlined' : iconOutlined\r\n            }\">\r\n            {{iconName}}\r\n        </div>\r\n        <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n            {{alertShieldText}}\r\n        </span>\r\n    </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
AlertShieldComponent.ctorParameters = () => [];
AlertShieldComponent.propDecorators = {
    alertShieldStatus: [{ type: Input }],
    alertShieldText: [{ type: Input }],
    showTooltip: [{ type: Input }],
    showTooltipHeading: [{ type: Input }],
    tooltipHeading: [{ type: Input }],
    minWidth: [{ type: Input }],
    alertShieldSmall: [{ type: Input }],
    noWrap: [{ type: Input }],
    xpos: [{ type: Input }],
    ypos: [{ type: Input }],
    hideLabel: [{ type: Input }],
    customShield: [{ type: Input }],
    iconName: [{ type: Input }],
    iconOutlined: [{ type: Input }],
    bgRedLight: [{ type: Input }],
    bgRedDark: [{ type: Input }],
    bgGreenLight: [{ type: Input }],
    bgGreenDark: [{ type: Input }],
    bgOrangeLight: [{ type: Input }],
    bgOrangeDark: [{ type: Input }],
    bgBlueLight: [{ type: Input }],
    bgBlueDark: [{ type: Input }],
    bgGreyLight: [{ type: Input }],
    bgGreyDark: [{ type: Input }],
    shieldColour: [{ type: Input }],
    iconOnly: [{ type: Input }],
    enableRotation: [{ type: Input }]
};

class AnchorBackComponent {
    ngOnInit() { }
}
AnchorBackComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-anchor-back',
                template: "<a class=\"anchor-back\" [attr.href]=\"anchorURL\">{{anchorBackText}}</a>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
AnchorBackComponent.propDecorators = {
    anchorBackText: [{ type: Input }],
    anchorURL: [{ type: Input }]
};

class ProgressBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-progress-bar',
                template: "<div class=\"progress-bar\" [ngStyle]=\"{'width' : maxWidth+'rem'}\">\r\n    <span>\r\n        <strong>{{titleBold}} </strong>\r\n        <span>{{titleRegular}}</span>\r\n    </span>\r\n    <div class=\"progress\"><div [ngStyle]=\"{'width' : complete+'%'}\"></div></div>\r\n    <div class=\"flex-group space-between\">\r\n        <div>{{leftSideText}}</div>\r\n        <div>{{rightSideText}}</div>\r\n    </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    titleBold: [{ type: Input }],
    titleRegular: [{ type: Input }],
    leftSideText: [{ type: Input }],
    rightSideText: [{ type: Input }],
    complete: [{ type: Input }],
    maxWidth: [{ type: Input }]
};

class ProgressCircleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProgressCircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-progress-circle',
                template: "<div *ngIf=\"!isSmall\" class=\"progress-circle\" [ngClass]=\"{'panel-view' : panelView}\">\r\n  <h3 class=\"flex-center title {{headerColor}}\" [ngClass]=\"{'padding-right-1' : enableTooltip}\">\r\n    <span \r\n      title=\"{{name}}\"\r\n      class=\"flex-group flex-align-center\"\r\n      >\r\n      {{ (name.length>19)? (name | slice:0:19)+'...':(name) }}\r\n      <span title=\"Error\" *ngIf=\"isError\" class=\"material-icons status padding-left-0-25 small aa-red-100\">error_outline</span>\r\n      <span title=\"Warning\" *ngIf=\"isWarning\" class=\"material-icons status padding-left-0-25 small aa-orange-100\">warning_amber</span>\r\n      <span title=\"Info\" *ngIf=\"isInfo\" class=\"material-icons-outlined status small padding-left-0-25 aa-light-blue-100\">info</span>\r\n    </span>\r\n    <div *ngIf=\"enableTooltip\" class=\"aa-tooltip icon-info margin-left-0-25\" [ngStyle]=\"{'position' : 'absolute', 'right' : '.75rem'}\">\r\n      <div class=\"feature-box {{xpos}} {{ypos}}\" [ngStyle]=\"{'min-width' : tooltipMinWidth+'rem'}\">\r\n        <p>{{tooltipBody}}</p>\r\n      </div>\r\n    </div>\r\n    <span *ngIf=\"panelView && !hideChevron\" class=\"material-icons\">chevron_right</span>\r\n  </h3>\r\n  <div class=\"percent\">\r\n    <svg viewBox=\"20 0 60 100\">\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.3', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (250 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n    </svg>\r\n    <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n  </div>\r\n  <span class=\"align-center number\" *ngIf=\"panelView\">{{value}}</span>\r\n</div>\r\n\r\n<li *ngIf=\"isSmall\" class=\"flex-group flex-start\">\r\n  <div class=\"progress-circle small margin-right-0-5\">\r\n    <div class=\"percent\">\r\n      <svg>\r\n        <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.2', 'stroke': colour }\" cx=\"15\" cy=\"15\" r=\"15\"></circle>\r\n        <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (92 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"15\" cy=\"15\" r=\"15\"></circle>\r\n      </svg>\r\n      <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"margin-top-0-75\">{{name}}</div>\r\n</li>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ProgressCircleComponent.ctorParameters = () => [];
ProgressCircleComponent.propDecorators = {
    name: [{ type: Input }],
    percent: [{ type: Input }],
    value: [{ type: Input }],
    colour: [{ type: Input }],
    isSmall: [{ type: Input }],
    panelView: [{ type: Input }],
    enableTooltip: [{ type: Input }],
    tooltipTitle: [{ type: Input }],
    tooltipBody: [{ type: Input }],
    xpos: [{ type: Input }],
    ypos: [{ type: Input }],
    tooltipMinWidth: [{ type: Input }],
    hideChevron: [{ type: Input }],
    headerColor: [{ type: Input }],
    isError: [{ type: Input }],
    isWarning: [{ type: Input }],
    isInfo: [{ type: Input }]
};

class ActionsSummaryComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActionsSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-actions-summary',
                template: "<article \r\n    class=\"actions-summary flex-group flex-start\"\r\n    [ngClass]=\"{ \r\n        'flex-column' : verticalDisplay,\r\n        'flex-nowrap' : noWrap\r\n    }\"\r\n>\r\n    <section \r\n        *ngFor=\"let item of actionsSummaryItems; let i = index\" \r\n        class=\"\r\n            flex-center \r\n            flex-group \r\n            flex-column\r\n        \"\r\n    >\r\n        <strong class=\"nowrap margin-0\">{{item.title}}</strong>\r\n        <h4 class=\"\r\n            {{item.status}} \r\n            flex-center \r\n            bd-2 \r\n            bd-solid \r\n            border-radius-50 \r\n            width-2 \r\n            height-2 \r\n            margin-top-0-75\r\n            margin-right-0\"\r\n            >\r\n            {{item.value}}\r\n        </h4>\r\n    </section>\r\n</article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ActionsSummaryComponent.ctorParameters = () => [];
ActionsSummaryComponent.propDecorators = {
    title: [{ type: Input }],
    value: [{ type: Input }],
    status: [{ type: Input }],
    verticalDisplay: [{ type: Input }],
    noWrap: [{ type: Input }],
    actionsSummaryItems: [{ type: Input }]
};

class StatusIndicatorComponent {
}
StatusIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-status-indicator',
                template: "<section class=\"status-indicator flex-group flex-start\">\r\n    <div \r\n      *ngFor=\"let item of currentStatus; let i = index\" \r\n      class=\"status-container\"\r\n      [ngClass]=\"{'remove-line' : removeLine}\"\r\n    >\r\n      <div \r\n        class=\"{{item.iconClass}} {{item.iconStatus}}\" \r\n        title=\"{{item.iconTitle}}\">\r\n        {{item.iconName}}\r\n        </div>\r\n    </div>\r\n  </section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
StatusIndicatorComponent.propDecorators = {
    iconClass: [{ type: Input }],
    iconTitle: [{ type: Input }],
    iconName: [{ type: Input }],
    iconStatus: [{ type: Input }],
    removeLine: [{ type: Input }],
    currentStatus: [{ type: Input }]
};

class CounterComponent {
    constructor() { }
    ngOnInit() {
    }
}
CounterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-counter',
                template: "<span \r\n    class=\"\r\n    flex-group \r\n    flex-center \r\n    border-radius-50\r\n    width-1-25\r\n    height-1-25\r\n    font-size-xsmall\"\r\n    \r\n    [ngClass]=\"{\r\n        'bg-aa-light-blue-100' : countInfo,\r\n        'bg-aa-red-100' : countError, \r\n        'bg-aa-orange-100' : countWarning,\r\n        'bg-aa-green-100' : countSuccess,\r\n        'bg-aa-light-blue-15' : countInfoLight,\r\n        'bg-aa-red-10' : countErrorLight, \r\n        'bg-aa-orange-10' : countWarningLight,\r\n        'bg-aa-green-15' : countSuccessLight\r\n    }\"\r\n    >\r\n    <strong \r\n        class=\"flex-group flex-center\"\r\n        [ngClass]=\"{\r\n            'aa-white-100' : \r\n            countInfo || \r\n            countError || \r\n            countWarning || \r\n            countSuccess\r\n        }\"\r\n        >\r\n        {{ count }}\r\n    </strong>\r\n</span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
CounterComponent.ctorParameters = () => [];
CounterComponent.propDecorators = {
    count: [{ type: Input }],
    countError: [{ type: Input }],
    countWarning: [{ type: Input }],
    countInfo: [{ type: Input }],
    countSuccess: [{ type: Input }],
    countErrorLight: [{ type: Input }],
    countWarningLight: [{ type: Input }],
    countInfoLight: [{ type: Input }],
    countSuccessLight: [{ type: Input }]
};

class PatternsModule {
}
PatternsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AlertComponent,
                    AlertShieldComponent,
                    AnchorBackComponent,
                    ProgressBarComponent,
                    ProgressCircleComponent,
                    ActionsSummaryComponent,
                    StatusIndicatorComponent,
                    CounterComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    AlertComponent,
                    AlertShieldComponent,
                    AnchorBackComponent,
                    ProgressBarComponent,
                    ProgressCircleComponent,
                    ActionsSummaryComponent,
                    StatusIndicatorComponent,
                    CounterComponent
                ]
            },] }
];

class IconFilterPipe {
    transform(items, searchIcon) {
        if (!items) {
            return [];
        }
        if (!searchIcon) {
            return items;
        }
        return items.filter(it => {
            return it.toLocaleLowerCase().includes(searchIcon);
        });
    }
}
IconFilterPipe.decorators = [
    { type: Pipe, args: [{ name: 'iconFilter' },] }
];

class AccordionComponent {
    constructor() {
        this.open = new EventEmitter();
    }
    onOpen(e) {
        if (this.disabled !== true) {
            this.open.emit();
            this.showBody = !this.showBody;
            e.stopPropagation();
        }
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-accordion',
                template: "<article \r\n  class=\"accordion-container\"\r\n  [ngStyle]=\"{'min-width' : minWidth+'rem', 'min-height': verticalDisplay ? verticalMinHeight : 'auto' }\"\r\n  [ngClass]=\"{'box-shadow-strong' : showBody, 'vertical flex-group flex-start' : verticalDisplay }\"\r\n>\r\n  <h3 class=\"margin-0\">\r\n    <button \r\n      class=\"accordion-trigger flex-group space-between flex-align-center {{customBgColor}}\" \r\n      (click)=\"onOpen($event)\" \r\n      [attr.aria-expanded.true]=\"showBody\"\r\n      [ngClass]=\"{'expanded' : showBody, 'clean' : accordionClean, 'disabled' : disabled, 'flex-column' : verticalDisplay}\"\r\n      aria-controls=\"sectionId\" \r\n      [id]=\"accordionId\" \r\n      type=\"button\">\r\n        <div class=\"flex-align-center flex-group flex-start\">\r\n            <div *ngIf=\"dragable\" class=\"accordion-icon material-icons drag-icon\">drag_indicator</div>\r\n            <div *ngIf=\"iconsEnabled && !fontAwesome\" class=\"accordion-icon material-icons {{iconBgColor}}\">{{iconName}}</div>\r\n            <div *ngIf=\"iconsEnabled && fontAwesome\" class=\"accordion-icon {{fontClassName}}\"></div>\r\n            <div class=\"nested-icons\">\r\n              <div class=\"material-icons\" *ngIf=\"!showBody\">add_circle_outline</div>\r\n              <div class=\"material-icons\" *ngIf=\"showBody\">remove_circle_outline</div>\r\n            </div>\r\n            <div class=\"accordion-heading\">{{accordionHeading}}</div>\r\n          </div>\r\n        <div class=\"flex-group flex-end flex-align-center\">\r\n          <ng-content select=\"[header-custom]\"></ng-content>\r\n            <div class=\"toggle-icons flex-align-center\">\r\n              <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n              <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n            </div>\r\n        </div>\r\n    </button>\r\n  </h3>\r\n  <div \r\n    *ngIf=\"showBody\" \r\n    [id]=\"sectionId\" \r\n    class=\"accordion-panel\"\r\n    [ngStyle]=\"{ 'padding': clearPadding ? '0' : '1rem 1.25rem' }\"\r\n    >\r\n      <ng-content></ng-content>\r\n  </div>\r\n</article>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
AccordionComponent.ctorParameters = () => [];
AccordionComponent.propDecorators = {
    showBody: [{ type: Input }],
    disabled: [{ type: Input }],
    minWidth: [{ type: Input }],
    iconsEnabled: [{ type: Input }],
    dragable: [{ type: Input }],
    sectionId: [{ type: Input }],
    accordionHeading: [{ type: Input }],
    accordionId: [{ type: Input }],
    iconName: [{ type: Input }],
    accordionClean: [{ type: Input }],
    fontAwesome: [{ type: Input }],
    fontClassName: [{ type: Input }],
    iconBgColor: [{ type: Input }],
    customBgColor: [{ type: Input }],
    clearPadding: [{ type: Input }],
    verticalDisplay: [{ type: Input }],
    verticalMinHeight: [{ type: Input }],
    open: [{ type: Output }]
};

class AccordionFancyComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccordionFancyComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-accordion-fancy',
                template: "<section [id]=\"accordionId\">\r\n  <h3 class=\"margin-0\">\r\n    <button class=\"accordion-fancy-trigger box flex-group flex-align-center space-between\" (click)=\"showBody=!showBody\"\r\n        [attr.aria-expanded.true]=\"showBody\" aria-controls=\"accordionId\" type=\"button\">\r\n        <div class=\"flex-align-center\">\r\n          <div *ngIf=\"materialIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</div>\r\n          <div *ngIf=\"!materialIcons\" class=\"font-awesome-icons {{iconName}} {{iconColour}}\"></div>\r\n          <span>{{itemTitle}}</span>\r\n        </div>\r\n        <div class=\"aa-toggle flex-align-center\">\r\n          <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n          <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n        </div>\r\n    </button>\r\n  </h3>\r\n  <div *ngIf=\"showBody\" class=\"accordion-fancy-panel\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
AccordionFancyComponent.ctorParameters = () => [];
AccordionFancyComponent.propDecorators = {
    showBody: [{ type: Input }],
    materialIcons: [{ type: Input }],
    itemTitle: [{ type: Input }],
    accordionId: [{ type: Input }],
    iconName: [{ type: Input }],
    iconColour: [{ type: Input }]
};

class CardComponent {
    constructor() {
        this.cardClick = new EventEmitter();
    }
    onCardClick(e) {
        this.cardClick.emit(e);
        e.stopPropagation();
    }
    ngOnInit() {
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-card',
                template: "<article \r\n  *ngIf=\"!cardOptional && !cardMini && !cardDetailed\" \r\n  class=\"aa-card flex-group width-control box-shadow\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex,\r\n    'top' : topPos+'rem',\r\n    'left' : leftPos+'rem',\r\n    'right' : rightPos+'rem'\r\n  }\"\r\n>\r\n  <div class=\"card-image fingerprint border-light\">\r\n    <img alt=\"{{cardName}}\" onerror=\"this.style.display='none'\" [src]=\"imgPath\">\r\n  </div>\r\n  <div>\r\n    <h3 title=\"{{cardName}}\">{{cardName}}</h3>\r\n    <p title=\"{{cardRole}}\">{{cardRole}}</p>\r\n    <div class=\"aa-toolbar\">\r\n      <ng-content select=\"[card-menu]\"></ng-content>\r\n    </div>\r\n  </div>\r\n</article>\r\n\r\n<article \r\n  *ngIf=\"cardOptional\" \r\n  class=\"aa-card-opt box-shadow\" \r\n  [ngStyle]=\"{'z-index' : zIndex}\"\r\n>\r\n    <div class=\"flex-group flex-end flex-align-center\">\r\n      <ng-content select=\"[card-menu-opt]\"></ng-content>\r\n    </div>\r\n    <div class=\"cursor-pointer\" (click)=\"onCardClick($event)\">\r\n      <div class=\"card-image fingerprint\" [ngStyle]=\"{'border' : '.35rem solid ' +themeColour, 'background-color' : themeColour}\">\r\n        <img alt=\"{{cardName}}\" onerror=\"this.style.display='none'\" [src]=\"imgPath\">\r\n      </div>\r\n      <h3 title=\"{{cardName}}\" [ngStyle]=\"{'color' : themeColour }\">{{ (cardName.length>14)? (cardName | slice:0:14)+'...':(cardName) }}</h3>\r\n      <p title=\"{{cardRole}}\">{{ (cardRole.length>37)? (cardRole | slice:0:37)+'...':(cardRole) }}</p>\r\n    </div>\r\n    <ng-content select=\"[card-hover-content]\"></ng-content>\r\n</article>\r\n\r\n<button \r\n  *ngIf=\"cardMini\" \r\n  class=\"card-mini flex-align-center flex-start {{borderClass}} box-shadow\"\r\n  (click)=\"onCardClick($event)\"\r\n>\r\n  <div *ngIf=\"showAsIcon\" class=\"material-icons\">{{iconName}}</div>\r\n  <div *ngIf=\"showAsProfile\" class=\"card-image fingerprint\">\r\n    <ng-content select=\"[profile-image]\"></ng-content>\r\n  </div>\r\n  <div>\r\n    <h5>{{title}}</h5>\r\n    <ng-content select=\"[content]\"></ng-content>\r\n  </div>\r\n</button>\r\n\r\n<article \r\n  *ngIf=\"cardDetailed\" \r\n  class=\"aa-card card-detailed flex-group box-shadow\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex,\r\n    'top' : topPos,\r\n    'left' : leftPos,\r\n    'width' : cardWidth\r\n  }\"\r\n>\r\n  <div class=\"card-image fingerprint border-light\">\r\n    <img alt=\"{{cardName}}\" onerror=\"this.style.display='none'\" [src]=\"imgPath\">\r\n  </div>\r\n  <div>\r\n    <ng-content select=\"[card-detailed-content]\"></ng-content>\r\n  </div>\r\n</article>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    cardName: [{ type: Input }],
    cardRole: [{ type: Input }],
    cardOptional: [{ type: Input }],
    cardMini: [{ type: Input }],
    cardDetailed: [{ type: Input }],
    cardWidth: [{ type: Input }],
    themeColour: [{ type: Input }],
    zIndex: [{ type: Input }],
    imgPath: [{ type: Input }],
    title: [{ type: Input }],
    showAsIcon: [{ type: Input }],
    showAsProfile: [{ type: Input }],
    iconName: [{ type: Input }],
    borderClass: [{ type: Input }],
    topPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    cardClick: [{ type: Output }]
};

class CarouselItemDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
}
CarouselItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aaCarouselItem]'
            },] }
];
CarouselItemDirective.ctorParameters = () => [
    { type: TemplateRef }
];

class CarouselItemElementDirective {
}
CarouselItemElementDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aaCarouselSlide]'
            },] }
];
class CarouselComponent {
    constructor(builder) {
        this.builder = builder;
        this.timing = '250ms ease-in';
        this.showControls = true;
        this.currentSlide = 0;
    }
    next() {
        if (this.currentSlide + 1 === this.items.length) {
            return;
        }
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }
    buildAnimation(offset) {
        return this.builder.build([
            animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
        ]);
    }
    prev() {
        if (this.currentSlide === 0) {
            return;
        }
        this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
        });
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-carousel',
                template: "<section \r\n    class=\"flex-group flex-center {{customClass}}\"\r\n    [ngStyle]=\"{'width' : carouselOuterWidth}\"\r\n>\r\n    <div \r\n        class=\"aa-carousel\" \r\n        [ngStyle]=\"{\r\n            'width' : carouselInnerWidth,\r\n            'height' : carouselInnerHeight\r\n        }\"\r\n    >\r\n        <div class=\"aa-carousel-content flex-group flex-nowrap\" #carousel>\r\n            <div \r\n                aaCarouselSlide\r\n                *ngFor=\"let item of items;\" \r\n                class=\"carousel-item {{carouselItemBgColour}}\" \r\n                [ngStyle]=\"{\r\n                    'min-width' : carouselItemWidth,\r\n                    'padding' : carouselItemPadding\r\n                }\"\r\n            >\r\n                <ng-container [ngTemplateOutlet]=\"item.tpl\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<footer class=\"aa-carousel-footer flex-group flex-center\">\r\n    <button \r\n        (click)=\"prev()\"\r\n        class=\"{{prevBtnColour}} material-icons\" \r\n        type=\"button\" \r\n        >\r\n        <span>{{prevBtnIcon}}</span>\r\n    </button>\r\n    <button \r\n        (click)=\"next()\"\r\n        class=\"{{nextBtnColour}} material-icons\" \r\n        type=\"button\" \r\n        >\r\n        <span>{{nextBtnIcon}}</span>\r\n    </button>\r\n</footer>\r\n\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
CarouselComponent.ctorParameters = () => [
    { type: AnimationBuilder }
];
CarouselComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [CarouselItemDirective,] }],
    itemsElements: [{ type: ViewChildren, args: [CarouselItemElementDirective, { read: ElementRef },] }],
    carousel: [{ type: ViewChild, args: ['carousel',] }],
    timing: [{ type: Input }],
    showControls: [{ type: Input }],
    carouselOuterWidth: [{ type: Input }],
    carouselOuterHeight: [{ type: Input }],
    carouselInnerWidth: [{ type: Input }],
    carouselInnerHeight: [{ type: Input }],
    carouselItemWidth: [{ type: Input }],
    customClass: [{ type: Input }],
    carouselItemBgColour: [{ type: Input }],
    carouselItemPadding: [{ type: Input }],
    nextBtnColour: [{ type: Input }],
    nextBtnIcon: [{ type: Input }],
    prevBtnColour: [{ type: Input }],
    prevBtnIcon: [{ type: Input }]
};

class DashboardContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-dashboard-container',
                template: "<article class=\"dashboard-container\" [id]=\"dashboardId\">\r\n  <h3 [class]=\"'dashboard-heading flex-group space-between ' + headerColor\">\r\n    <span>{{dashboardHeading}}</span>\r\n    <!-- <span class=\"icon-drag\"></span> -->\r\n  </h3>\r\n  <ng-content></ng-content>\r\n</article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
DashboardContainerComponent.ctorParameters = () => [];
DashboardContainerComponent.propDecorators = {
    dashboardId: [{ type: Input }],
    dashboardHeading: [{ type: Input }],
    headerColor: [{ type: Input }]
};

class DashboardFavouritesComponent {
    constructor() {
        this.anchorClick = new EventEmitter();
        this.favClick = new EventEmitter();
    }
    onAnchorClick(e) {
        e.stopPropagation();
        this.anchorClick.emit(e);
    }
    onFavClick(e) {
        this.isFavourite = !this.isFavourite;
        e.stopPropagation();
        this.favClick.emit(this.isFavourite);
    }
    ngOnInit() {
        this.favClick.emit(this.isFavourite);
    }
}
DashboardFavouritesComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-dashboard-favourites',
                template: "<article class=\"dashboard-favourite flex-group flex-align-center\">\r\n  <div *ngIf=\"!materialIcons\" class=\"font-awesome {{favIconClass}}\"></div>\r\n  <div *ngIf=\"materialIcons\" class=\"material-icons {{iconColour}}\">{{favIconClass}}</div>\r\n  <a (click)=\"onAnchorClick($event)\" [attr.href]=\"favouritesURL\">{{(favouritesTitle.length>35)? (favouritesTitle | slice:0:35)+'...':(favouritesTitle)}}</a>\r\n  <div class=\"flex-group flex-align-center position-absolute top-0-5 right-0-5 margin-right-0\">\r\n    <button \r\n      *ngIf=\"!isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n      >\r\n      star_outline\r\n    </button>\r\n    <button \r\n      *ngIf=\"isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n      >\r\n      star\r\n    </button>\r\n  </div>\r\n  <div class=\"hover-card animate-all\">\r\n    <div class=\"field boxed\">\r\n      <label>Tags</label>\r\n      <p>{{tagName}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Last viewed</label>\r\n      <p>{{lastViewed}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Title</label>\r\n      <p>{{favouritesTitle}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Description</label>\r\n      <p>{{favDescription}}</p>\r\n    </div>\r\n  </div>\r\n</article>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
DashboardFavouritesComponent.ctorParameters = () => [];
DashboardFavouritesComponent.propDecorators = {
    isFavourite: [{ type: Input }],
    favouritesTitle: [{ type: Input }],
    favouritesText: [{ type: Input }],
    favouritesURL: [{ type: Input }],
    favIconClass: [{ type: Input }],
    iconColour: [{ type: Input }],
    materialIcons: [{ type: Input }],
    tagName: [{ type: Input }],
    favDescription: [{ type: Input }],
    lastViewed: [{ type: Input }],
    anchorClick: [{ type: Output }],
    favClick: [{ type: Output }]
};

class DashboardFavouritesListComponent {
    constructor() {
        this.anchorClick = new EventEmitter();
        this.favClick = new EventEmitter();
    }
    onAnchorClick(e) {
        e.stopPropagation();
        this.anchorClick.emit(e);
    }
    onFavClick(e) {
        this.isFavourite = !this.isFavourite;
        e.stopPropagation();
        this.favClick.emit(this.isFavourite);
    }
    ngOnInit() {
        this.favClick.emit(this.isFavourite);
    }
}
DashboardFavouritesListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-dashboard-favourites-list',
                template: "<div class=\"accordion-favourites-list\">\r\n  <div class=\"flex-group flex-start flex-align-center\">\r\n    <button \r\n      *ngIf=\"!isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-left-0-75 margin-right-1-25\"\r\n      >\r\n      star_outline\r\n    </button>\r\n    <button \r\n      *ngIf=\"isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-left-0-75 margin-right-1-25\"\r\n      >\r\n      star\r\n    </button>\r\n\r\n    <div class=\"margin-top-1 margin-bottom-0-75 description\">\r\n      <a (click)=\"onAnchorClick($event)\" class=\"anchor-underline\" title=\"{{itemAnchorTitle}}\"\r\n         type=\"button\" [attr.href]=\"itemAnchorURL\">{{itemAnchor}}</a><br/>\r\n      <div class=\"margin-top-0-25\">{{itemDescription}}</div>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"showTags=!showTags\" class=\"icon-info\"></div>\r\n  <div *ngIf=\"showTags\">\r\n    <div class=\"more-info\">\r\n      <div class=\"field boxed\">\r\n        <label>Tags</label>\r\n        <p>{{tagName}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Last viewed</label>\r\n        <p>{{lastViewed}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Title</label>\r\n        <p>{{favouritesTitle}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Description</label>\r\n        <p>{{favDescription}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
DashboardFavouritesListComponent.ctorParameters = () => [];
DashboardFavouritesListComponent.propDecorators = {
    isFavourite: [{ type: Input }],
    showTags: [{ type: Input }],
    itemAnchorTitle: [{ type: Input }],
    itemAnchorURL: [{ type: Input }],
    itemAnchor: [{ type: Input }],
    itemTitle: [{ type: Input }],
    itemDescription: [{ type: Input }],
    showBody: [{ type: Input }],
    favouriteId: [{ type: Input }],
    iconName: [{ type: Input }],
    tagName: [{ type: Input }],
    lastViewed: [{ type: Input }],
    favouritesTitle: [{ type: Input }],
    favDescription: [{ type: Input }],
    anchorClick: [{ type: Output }],
    favClick: [{ type: Output }]
};

class FavouriteItem {
}
class FavouritesComponent {
    constructor() {
        this.isFavourite = null;
        this.anchorClick = new EventEmitter();
        this.favClick = new EventEmitter();
    }
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
    ngOnInit() {
        if (!this.favsTarget) {
            this.favsTarget = [];
        }
        if (!this.favsOrigin) {
            this.favsOrigin = [];
        }
    }
}
FavouritesComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-favourites',
                template: "<!-- LANDSCAPE -->\r\n<section class=\"aa-favs aa-favs-landscape\" *ngIf=\"showLandscapeFavs\">\r\n  <h2 *ngIf=\"favsTarget.length\" class=\"width-100 flex-group flex-start flex-align-center\">\r\n    {{favsHeading}}\r\n    <span \r\n      class=\"\r\n      flex-group \r\n      flex-center \r\n      bg-aa-light-blue-15 \r\n      border-radius-50\r\n      width-1-25\r\n      height-1-25\r\n      margin-left-0-5\r\n      font-size-xsmall\"\r\n      >\r\n      <strong class=\"flex-group flex-center\">{{favsTarget.length}}</strong>\r\n    </span>\r\n  </h2>\r\n  <section class=\"flex-group flex-start\">\r\n    <div \r\n      *ngFor=\"let item of favsTarget | orderBy:'favTitle'; let i = index\" \r\n      [class.fav-saved]=\"item.isFavourite\"\r\n      class=\"\r\n        flex-group\r\n        flex-align-center\r\n        space-between\r\n        bg-aa-white-100\r\n        margin-bottom-0-75\r\n        min-width-24\r\n        max-width-24\r\n        padding-0-75\r\n        box-shadow \r\n        bd-solid \r\n        bd-grey-10 \r\n        bd-1\"\r\n      >\r\n      <section class=\"flex-group flex-start flex-align-center\">\r\n        <div \r\n          class=\"\r\n          width-3 \r\n          height-3 \r\n          flex-center \r\n          border-radius-50 \r\n          {{item.favColour}}\"\r\n        >\r\n          <h4 class=\"margin-0\">{{(item.favLabel.length>3)? (item.favLabel | slice:0:3)+'...':(item.favLabel)}}</h4>\r\n        </div>\r\n        <div>\r\n          <a (click)=\"onAnchorClick($event)\" class=\"text-decoration-none cursor-pointer\">\r\n            <h3 class=\"margin-0\">\r\n              {{(item.favTitle.length>27)? (item.favTitle | slice:0:27)+'...':(item.favTitle)}}\r\n            </h3>\r\n          </a>\r\n          <p class=\"small padding-top-0-25 margin-0\">\r\n            {{(item.favTextLineOne.length>45)? (item.favTextLineOne | slice:0:45)+'...':(item.favTextLineOne)}}\r\n          </p>\r\n          <p class=\"small margin-0\">\r\n            {{(item.favTextLineTwo.length>45)? (item.favTextLineTwo | slice:0:45)+'...':(item.favTextLineTwo)}}\r\n          </p>\r\n        </div>\r\n      </section>\r\n      <section class=\"flex-group flex-align-center fav-controls\">\r\n        <div class=\"flag au width-1 height-1 margin-0\"></div>\r\n        <button \r\n          *ngIf=\"!disableFavsStar\"\r\n          (click)=\"onFavClick(item)\" \r\n          class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n          >\r\n        </button>\r\n      </section>\r\n    </div>\r\n  </section>\r\n\r\n  <hr *ngIf=\"favsTarget.length\" class=\"min-width-100 margin-bottom-0-75\" />\r\n\r\n  <section class=\"flex-group flex-start\">\r\n    <div \r\n      *ngFor=\"let item of favsOrigin | orderBy:'favTitle'; let i = index\" \r\n      [class.fav-saved]=\"item.isFavourite\"\r\n      class=\"\r\n        flex-group\r\n        flex-align-center\r\n        space-between\r\n        bg-aa-white-100\r\n        margin-bottom-0-75\r\n        min-width-24\r\n        max-width-24\r\n        padding-0-75\r\n        box-shadow \r\n        bd-solid \r\n        bd-grey-10 \r\n        bd-1\"\r\n      >\r\n      <section class=\"flex-group flex-start flex-align-center\">\r\n        <div \r\n          class=\"\r\n          width-3 \r\n          height-3 \r\n          flex-center \r\n          border-radius-50 \r\n          {{item.favColour}}\"\r\n        >\r\n          <h4 class=\"margin-0\">{{(item.favLabel.length>3)? (item.favLabel | slice:0:3)+'...':(item.favLabel)}}</h4>\r\n        </div>\r\n        <div>\r\n          <a (click)=\"onAnchorClick($event)\" class=\"text-decoration-none cursor-pointer\">\r\n            <h3 class=\"margin-0\">\r\n              {{(item.favTitle.length>27)? (item.favTitle | slice:0:27)+'...':(item.favTitle)}}\r\n            </h3>\r\n          </a>\r\n          <p class=\"small padding-top-0-25 margin-0\">\r\n            {{(item.favTextLineOne.length>45)? (item.favTextLineOne | slice:0:45)+'...':(item.favTextLineOne)}}\r\n          </p>\r\n          <p class=\"small margin-0\">\r\n            {{(item.favTextLineTwo.length>45)? (item.favTextLineTwo | slice:0:45)+'...':(item.favTextLineTwo)}}\r\n          </p>\r\n        </div>\r\n      </section>\r\n      <section class=\"flex-group flex-align-center fav-controls\">\r\n        <div class=\"flag au width-1 height-1 margin-0\"></div>\r\n        <button \r\n          *ngIf=\"!disableFavsStar\"\r\n          (click)=\"onFavClick(item)\" \r\n          class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n          >\r\n        </button>\r\n      </section>\r\n    </div>\r\n  </section>\r\n</section>\r\n\r\n<!-- PORTRAIT -->\r\n<section class=\"aa-favs aa-favs-portrait\" *ngIf=\"showPortraitFavs\">\r\n  <h2 *ngIf=\"favsTarget.length\" class=\"width-100 flex-group flex-start flex-align-center\">\r\n    {{favsHeading}}\r\n    <span \r\n      class=\"\r\n      flex-group \r\n      flex-center \r\n      bg-aa-light-blue-15 \r\n      border-radius-50\r\n      width-1-25\r\n      height-1-25\r\n      margin-left-0-5\r\n      font-size-xsmall\"\r\n      >\r\n      <strong class=\"flex-group flex-center\">{{favsTarget.length}}</strong>\r\n    </span>\r\n  </h2>\r\n  <section class=\"flex-group flex-start\">\r\n    <div  \r\n      *ngFor=\"let item of favsTarget | orderBy:'favTitle'; let i = index\" \r\n      [class.fav-saved]=\"item.isFavourite\"\r\n      class=\"\r\n        position-relative\r\n        flex-group\r\n        flex-center\r\n        flex-column\r\n        margin-bottom-0-75\r\n        bg-aa-white-100\r\n        min-width-12\r\n        max-width-12\r\n        min-height-14\r\n        max-height-14\r\n        padding-1\r\n        box-shadow \r\n        bd-solid \r\n        bd-grey-10 \r\n        bd-1\"\r\n      >\r\n      <section \r\n        class=\"\r\n        flex-group \r\n        flex-align-center \r\n        position-absolute \r\n        top-0-5 \r\n        right-0-5 \r\n        margin-right-0\r\n        fav-controls\"\r\n      >\r\n        <div class=\"flag au width-1 height-1 margin-0\"></div>\r\n        <button \r\n          *ngIf=\"!disableFavsStar\"\r\n          (click)=\"onFavClick(item)\" \r\n          class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n          >\r\n        </button>\r\n      </section>\r\n      <div \r\n        class=\"\r\n        flex-none \r\n        width-3 \r\n        height-3 \r\n        flex-center \r\n        border-radius-50 \r\n        margin-right-0\r\n        {{item.favColour}}\"\r\n        >\r\n        <h4 class=\"margin-0\">{{(item.favLabel.length>3)? (item.favLabel | slice:0:3)+'...':(item.favLabel)}}</h4>\r\n      </div>\r\n      <div class=\"margin-right-0 margin-top-0-75\">\r\n        <a (click)=\"onAnchorClick($event)\" class=\"text-decoration-none cursor-pointer\">\r\n          <h2 class=\"margin-0 margin-bottom-0-5 text-align-center\">\r\n            {{(item.favTitle.length>25)? (item.favTitle | slice:0:25)+'...':(item.favTitle)}}\r\n          </h2>\r\n        </a>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineOne.length>23)? (item.favTextLineOne | slice:0:23)+'...':(item.favTextLineOne)}}\r\n        </p>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineTwo.length>23)? (item.favTextLineTwo | slice:0:23)+'...':(item.favTextLineTwo)}}\r\n        </p>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineThree.length>23)? (item.favTextLineThree | slice:0:23)+'...':(item.favTextLineThree)}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n \r\n  <hr *ngIf=\"favsTarget.length\" class=\"min-width-100 margin-bottom-0-75\" />\r\n\r\n  <section class=\"flex-group flex-start\">\r\n    <div  \r\n      *ngFor=\"let item of favsOrigin | orderBy:'favTitle'; let i = index\" \r\n      [class.fav-saved]=\"item.isFavourite\"\r\n      class=\"\r\n        position-relative\r\n        flex-group\r\n        flex-center\r\n        flex-column\r\n        margin-bottom-0-75\r\n        bg-aa-white-100\r\n        min-width-12\r\n        max-width-12\r\n        min-height-14\r\n        max-height-14\r\n        padding-1\r\n        box-shadow \r\n        bd-solid \r\n        bd-grey-10 \r\n        bd-1\"\r\n      >\r\n      <section \r\n        class=\"\r\n        flex-group \r\n        flex-align-center \r\n        position-absolute \r\n        top-0-5 \r\n        right-0-5 \r\n        margin-right-0\r\n        fav-controls\"\r\n      >\r\n        <div class=\"flag au width-1 height-1 margin-0\"></div>\r\n        <button \r\n        *ngIf=\"!disableFavsStar\"\r\n          (click)=\"onFavClick(item)\" \r\n          class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n          >\r\n        </button>\r\n      </section>\r\n      <div \r\n        class=\"\r\n        flex-none \r\n        width-3 \r\n        height-3 \r\n        flex-center \r\n        border-radius-50 \r\n        margin-right-0\r\n        {{item.favColour}}\"\r\n        >\r\n        <h4 class=\"margin-0\">{{(item.favLabel.length>3)? (item.favLabel | slice:0:3)+'...':(item.favLabel)}}</h4>\r\n      </div>\r\n      <div class=\"margin-right-0 margin-top-0-75\">\r\n        <a (click)=\"onAnchorClick($event)\" class=\"text-decoration-none cursor-pointer\">\r\n          <h2 class=\"margin-0 margin-bottom-0-5 text-align-center\">\r\n            {{(item.favTitle.length>25)? (item.favTitle | slice:0:25)+'...':(item.favTitle)}}\r\n          </h2>\r\n        </a>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineOne.length>23)? (item.favTextLineOne | slice:0:23)+'...':(item.favTextLineOne)}}\r\n        </p>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineTwo.length>23)? (item.favTextLineTwo | slice:0:23)+'...':(item.favTextLineTwo)}}\r\n        </p>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineThree.length>23)? (item.favTextLineThree | slice:0:23)+'...':(item.favTextLineThree)}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
FavouritesComponent.ctorParameters = () => [];
FavouritesComponent.propDecorators = {
    showLandscapeFavs: [{ type: Input }],
    showPortraitFavs: [{ type: Input }],
    anchorIsClicked: [{ type: Input }],
    disableFavsStar: [{ type: Input }],
    toggleFavourite: [{ type: Input }],
    favsHeading: [{ type: Input }],
    clickAnchor: [{ type: Input }],
    favLabel: [{ type: Input }],
    favTitle: [{ type: Input }],
    favTextLineOne: [{ type: Input }],
    favTextLineTwo: [{ type: Input }],
    favTextLineThree: [{ type: Input }],
    favColour: [{ type: Input }],
    favsOrigin: [{ type: Input }],
    favsTarget: [{ type: Input }],
    favsPortrait: [{ type: Input }],
    isFavourite: [{ type: Input }],
    anchorClick: [{ type: Output }],
    favClick: [{ type: Output }]
};

class FavouritesListComponent {
    constructor() {
        this.text = 'Click me';
        this.favClick = new EventEmitter();
        this.anchorClick = new EventEmitter();
    }
    onFavClick(event) {
        this.favClick.emit(event);
    }
    onAnchorClick(event) {
        this.anchorClick.emit(event);
    }
    ngOnInit() {
    }
}
FavouritesListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-favourites-list',
                template: "<div class=\"flex-group width-control repeatable\">\r\n  <button (click)=\"onFavClick($event)\" class=\"button-star icon-orange one-rem\" [class.selected]=\"isFavourite\"></button>\r\n  <div><a (click)=\"onAnchorClick($event)\" title=\"{{itemAnchorTitle}}\" type=\"button\">{{itemAnchor}}</a></div>\r\n  <div>{{itemDescription}}</div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
FavouritesListComponent.ctorParameters = () => [];
FavouritesListComponent.propDecorators = {
    isFavourite: [{ type: Input }],
    itemAnchorTitle: [{ type: Input }],
    itemAnchor: [{ type: Input }],
    itemDescription: [{ type: Input }],
    text: [{ type: Input }],
    favClick: [{ type: Output }],
    anchorClick: [{ type: Output }]
};

class IconPickerComponent {
    constructor() {
        this.searchIcon = '';
        this.selectedIcon = '';
        this.selectedColor = 'aa-light-blue-100';
        this.icons = ['3d_rotation', 'ac_unit', 'access_alarm', 'access_alarms', 'access_time', 'accessibility', 'accessible', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'adb', 'add', 'add_a_photo', 'add_alarm', 'add_alert', 'add_box', 'add_circle', 'add_circle_outline', 'add_location', 'add_shopping_cart', 'add_to_photos', 'add_to_queue', 'adjust', 'airline_seat_flat', 'airline_seat_flat_angled', 'airline_seat_individual_suite', 'airline_seat_legroom_extra', 'airline_seat_legroom_normal', 'airline_seat_legroom_reduced', 'airline_seat_recline_extra', 'airline_seat_recline_normal', 'airplanemode_active', 'airplanemode_inactive', 'airplay', 'airport_shuttle', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'album', 'all_inclusive', 'all_out', 'android', 'announcement', 'apps', 'archive', 'arrow_back', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward', 'arrow_upward', 'art_track', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_return', 'assignment_returned', 'assignment_turned_in', 'assistant', 'assistant_photo', 'attach_file', 'attach_money', 'attachment', 'audiotrack', 'autorenew', 'av_timer', 'backspace', 'backup', 'battery_alert', 'battery_charging_full', 'battery_full', 'battery_std', 'battery_unknown', 'beach_access', 'beenhere', 'block', 'bluetooth', 'bluetooth_audio', 'bluetooth_connected', 'bluetooth_disabled', 'bluetooth_searching', 'blur_circular', 'blur_linear', 'blur_off', 'blur_on', 'book', 'bookmark', 'bookmark_border', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer', 'border_right', 'border_style', 'border_top', 'border_vertical', 'branding_watermark', 'brightness_1', 'brightness_2', 'brightness_3', 'brightness_4', 'brightness_5', 'brightness_6', 'brightness_7', 'brightness_auto', 'brightness_high', 'brightness_low', 'brightness_medium', 'broken_image', 'brush', 'bubble_chart', 'bug_report', 'build', 'burst_mode', 'business', 'business_center', 'cached', 'cake', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_missed_outgoing', 'call_received', 'call_split', 'call_to_action', 'camera', 'camera_alt', 'camera_enhance', 'camera_front', 'camera_rear', 'camera_roll', 'cancel', 'card_giftcard', 'card_membership', 'card_travel', 'casino', 'cast', 'cast_connected', 'center_focus_strong', 'center_focus_weak', 'change_history', 'chat', 'chat_bubble', 'chat_bubble_outline', 'check', 'check_box', 'check_box_outline_blank', 'check_circle', 'chevron_left', 'chevron_right', 'child_care', 'child_friendly', 'chrome_reader_mode', 'class', 'clear', 'clear_all', 'close', 'closed_caption', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_upload', 'code', 'collections', 'collections_bookmark', 'color_lens', 'colorize', 'comment', 'compare', 'compare_arrows', 'computer', 'confirmation_number', 'contact_mail', 'contact_phone', 'contacts', 'content_copy', 'content_cut', 'content_paste', 'control_point', 'control_point_duplicate', 'copyright', 'create', 'create_new_folder', 'credit_card', 'crop', 'crop_16_9', 'crop_3_2', 'crop_5_4', 'crop_7_5', 'crop_din', 'crop_free', 'crop_landscape', 'crop_original', 'crop_portrait', 'crop_rotate', 'crop_square', 'dashboard', 'data_usage', 'date_range', 'dehaze', 'delete', 'delete_forever', 'delete_sweep', 'description', 'desktop_mac', 'desktop_windows', 'details', 'developer_board', 'developer_mode', 'device_hub', 'devices', 'devices_other', 'dialer_sip', 'dialpad', 'directions', 'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway', 'directions_run', 'directions_subway', 'directions_transit', 'directions_walk', 'disc_full', 'dns', 'do_not_disturb', 'do_not_disturb_alt', 'do_not_disturb_off', 'do_not_disturb_on', 'dock', 'domain', 'done', 'done_all', 'donut_large', 'donut_small', 'drafts', 'drag_handle', 'drive_eta', 'dvr', 'edit', 'edit_location', 'eject', 'email', 'enhanced_encryption', 'equalizer', 'error', 'error_outline', 'euro_symbol', 'ev_station', 'event', 'event_available', 'event_busy', 'event_note', 'event_seat', 'exit_to_app', 'expand_less', 'expand_more', 'explicit', 'explore', 'exposure', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'extension', 'face', 'fast_forward', 'fast_rewind', 'favorite', 'favorite_border', 'featured_play_list', 'featured_video', 'feedback', 'fiber_dvr', 'fiber_manual_record', 'fiber_new', 'fiber_pin', 'fiber_smart_record', 'file_download', 'file_upload', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_9_plus', 'filter_b_and_w', 'filter_center_focus', 'filter_drama', 'filter_frames', 'filter_hdr', 'filter_list', 'filter_none', 'filter_tilt_shift', 'filter_vintage', 'find_in_page', 'find_replace', 'fingerprint', 'first_page', 'fitness_center', 'flag', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flight', 'flight_land', 'flight_takeoff', 'flip', 'flip_to_back', 'flip_to_front', 'folder', 'folder_open', 'folder_shared', 'folder_special', 'font_download', 'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right', 'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic', 'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_paint', 'format_quote', 'format_shapes', 'format_size', 'format_strikethrough', 'format_textdirection_l_to_r', 'format_textdirection_r_to_l', 'format_underlined', 'forum', 'forward', 'forward_10', 'forward_30', 'forward_5', 'free_breakfast', 'fullscreen', 'fullscreen_exit', 'functions', 'g_translate', 'gamepad', 'games', 'gavel', 'gesture', 'get_app', 'gif', 'golf_course', 'gps_fixed', 'gps_not_fixed', 'gps_off', 'grade', 'gradient', 'grain', 'graphic_eq', 'grid_off', 'grid_on', 'group', 'group_add', 'group_work', 'hd', 'hdr_off', 'hdr_on', 'hdr_strong', 'hdr_weak', 'headset', 'headset_mic', 'healing', 'hearing', 'help', 'help_outline', 'high_quality', 'highlight', 'highlight_off', 'history', 'home', 'hot_tub', 'hotel', 'hourglass_empty', 'hourglass_full', 'http', 'https', 'image', 'image_aspect_ratio', 'import_contacts', 'import_export', 'important_devices', 'inbox', 'indeterminate_check_box', 'info', 'info_outline', 'input', 'insert_chart', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_invitation', 'insert_link', 'insert_photo', 'invert_colors', 'invert_colors_off', 'iso', 'keyboard', 'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace', 'keyboard_capslock', 'keyboard_hide', 'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'kitchen', 'label', 'label_outline', 'landscape', 'language', 'laptop', 'laptop_chromebook', 'laptop_mac', 'laptop_windows', 'last_page', 'launch', 'layers', 'layers_clear', 'leak_add', 'leak_remove', 'lens', 'library_add', 'library_books', 'library_music', 'lightbulb_outline', 'line_style', 'line_weight', 'linear_scale', 'link', 'linked_camera', 'list', 'live_help', 'live_tv', 'local_activity', 'local_airport', 'local_atm', 'local_bar', 'local_cafe', 'local_car_wash', 'local_convenience_store', 'local_dining', 'local_drink', 'local_florist', 'local_gas_station', 'local_grocery_store', 'local_hospital', 'local_hotel', 'local_laundry_service', 'local_library', 'local_mall', 'local_movies', 'local_offer', 'local_parking', 'local_pharmacy', 'local_phone', 'local_pizza', 'local_play', 'local_post_office', 'local_printshop', 'local_see', 'local_shipping', 'local_taxi', 'location_city', 'location_disabled', 'location_off', 'location_on', 'location_searching', 'lock', 'lock_open', 'lock_outline', 'looks', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks_one', 'looks_two', 'loop', 'loupe', 'low_priority', 'loyalty', 'mail', 'mail_outline', 'map', 'markunread', 'markunread_mailbox', 'memory', 'menu', 'merge_type', 'message', 'mic', 'mic_none', 'mic_off', 'mms', 'mode_comment', 'mode_edit', 'monetization_on', 'money_off', 'monochrome_photos', 'mood', 'mood_bad', 'more', 'more_horiz', 'more_vert', 'motorcycle', 'mouse', 'move_to_inbox', 'movie', 'movie_creation', 'movie_filter', 'multiline_chart', 'music_note', 'music_video', 'my_location', 'nature', 'nature_people', 'navigate_before', 'navigate_next', 'navigation', 'near_me', 'network_cell', 'network_check', 'network_locked', 'network_wifi', 'new_releases', 'next_week', 'nfc', 'no_encryption', 'no_sim', 'not_interested', 'note', 'note_add', 'notifications', 'notifications_active', 'notifications_none', 'notifications_off', 'notifications_paused', 'offline_pin', 'ondemand_video', 'opacity', 'open_in_browser', 'open_in_new', 'open_with', 'pages', 'pageview', 'palette', 'pan_tool', 'panorama', 'panorama_fish_eye', 'panorama_horizontal', 'panorama_vertical', 'panorama_wide_angle', 'party_mode', 'pause', 'pause_circle_filled', 'pause_circle_outline', 'payment', 'people', 'people_outline', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'perm_identity', 'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'person', 'person_add', 'person_outline', 'person_pin', 'person_pin_circle', 'personal_video', 'pets', 'phone', 'phone_android', 'phone_bluetooth_speaker', 'phone_forwarded', 'phone_in_talk', 'phone_iphone', 'phone_locked', 'phone_missed', 'phone_paused', 'phonelink', 'phonelink_erase', 'phonelink_lock', 'phonelink_off', 'phonelink_ring', 'phonelink_setup', 'photo', 'photo_album', 'photo_camera', 'photo_filter', 'photo_library', 'photo_size_select_actual', 'photo_size_select_large', 'photo_size_select_small', 'picture_as_pdf', 'picture_in_picture', 'picture_in_picture_alt', 'pie_chart', 'pie_chart_outlined', 'pin_drop', 'place', 'play_arrow', 'play_circle_filled', 'play_circle_outline', 'play_for_work', 'playlist_add', 'playlist_add_check', 'playlist_play', 'plus_one', 'poll', 'polymer', 'pool', 'portable_wifi_off', 'portrait', 'power', 'power_input', 'power_settings_new', 'pregnant_woman', 'present_to_all', 'print', 'priority_high', 'public', 'publish', 'query_builder', 'question_answer', 'queue', 'queue_music', 'queue_play_next', 'radio', 'radio_button_checked', 'radio_button_unchecked', 'rate_review', 'receipt', 'recent_actors', 'record_voice_over', 'redeem', 'redo', 'refresh', 'remove', 'remove_circle', 'remove_circle_outline', 'remove_from_queue', 'remove_red_eye', 'remove_shopping_cart', 'reorder', 'repeat', 'repeat_one', 'replay', 'replay_10', 'replay_30', 'replay_5', 'reply', 'reply_all', 'report', 'report_problem', 'restaurant', 'restaurant_menu', 'restore', 'restore_page', 'ring_volume', 'room', 'room_service', 'rotate_90_degrees_ccw', 'rotate_left', 'rotate_right', 'rounded_corner', 'router', 'rowing', 'rss_feed', 'rv_hookup', 'satellite', 'save', 'scanner', 'schedule', 'school', 'screen_lock_landscape', 'screen_lock_portrait', 'screen_lock_rotation', 'screen_rotation', 'screen_share', 'sd_card', 'sd_storage', 'search', 'security', 'select_all', 'send', 'sentiment_dissatisfied', 'sentiment_neutral', 'sentiment_satisfied', 'sentiment_very_dissatisfied', 'sentiment_very_satisfied', 'settings', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet', 'settings_input_antenna', 'settings_input_component', 'settings_input_composite', 'settings_input_hdmi', 'settings_input_svideo', 'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_system_daydream', 'settings_voice', 'share', 'shop', 'shop_two', 'shopping_basket', 'shopping_cart', 'short_text', 'show_chart', 'shuffle', 'signal_cellular_4_bar', 'signal_cellular_connected_no_internet_4_bar', 'signal_cellular_no_sim', 'signal_cellular_null', 'signal_cellular_off', 'signal_wifi_4_bar', 'signal_wifi_4_bar_lock', 'signal_wifi_off', 'sim_card', 'sim_card_alert', 'skip_next', 'skip_previous', 'slideshow', 'slow_motion_video', 'smartphone', 'smoke_free', 'smoking_rooms', 'sms', 'sms_failed', 'snooze', 'sort', 'sort_by_alpha', 'spa', 'space_bar', 'speaker', 'speaker_group', 'speaker_notes', 'speaker_notes_off', 'speaker_phone', 'spellcheck', 'star', 'star_border', 'star_half', 'stars', 'stay_current_landscape', 'stay_current_portrait', 'stay_primary_landscape', 'stay_primary_portrait', 'stop', 'stop_screen_share', 'storage', 'store', 'store_mall_directory', 'straighten', 'streetview', 'strikethrough_s', 'style', 'subdirectory_arrow_left', 'subdirectory_arrow_right', 'subject', 'subscriptions', 'subtitles', 'subway', 'supervisor_account', 'surround_sound', 'swap_calls', 'swap_horiz', 'swap_vert', 'swap_vertical_circle', 'switch_camera', 'switch_video', 'sync', 'sync_disabled', 'sync_problem', 'system_update', 'system_update_alt', 'tab', 'tab_unselected', 'tablet', 'tablet_android', 'tablet_mac', 'tag_faces', 'tap_and_play', 'terrain', 'text_fields', 'text_format', 'textsms', 'texture', 'theaters', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'time_to_leave', 'timelapse', 'timeline', 'timer', 'timer_10', 'timer_3', 'timer_off', 'title', 'toc', 'today', 'toll', 'tonality', 'touch_app', 'toys', 'track_changes', 'traffic', 'train', 'tram', 'transfer_within_a_station', 'transform', 'translate', 'trending_down', 'trending_flat', 'trending_up', 'tune', 'turned_in', 'turned_in_not', 'tv', 'unarchive', 'undo', 'unfold_less', 'unfold_more', 'update', 'usb', 'verified_user', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'vibration', 'video_call', 'video_label', 'video_library', 'videocam', 'videocam_off', 'videogame_asset', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_comfy', 'view_compact', 'view_day', 'view_headline', 'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'vignette', 'visibility', 'visibility_off', 'voice_chat', 'voicemail', 'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'vpn_key', 'vpn_lock', 'wallpaper', 'warning', 'watch', 'watch_later', 'wb_auto', 'wb_cloudy', 'wb_incandescent', 'wb_iridescent', 'wb_sunny', 'wc', 'web', 'web_asset', 'weekend', 'whatshot', 'widgets', 'wifi', 'wifi_lock', 'wifi_tethering', 'work', 'wrap_text', 'youtube_searched_for', 'zoom_in', 'zoom_out', 'zoom_out_map'];
    }
    selectIcon(event) {
        this.selectedIcon = event;
    }
    selectColor(event) {
        this.selectedColor = event.target.value;
    }
    ngOnInit() {
    }
}
IconPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-icon-picker',
                template: "<section class=\"aa-icon-picker margin-bottom-1\">\r\n    <label for=\"{{selectedIcon}}\" *ngIf=\"showLabel\">{{labelName}}</label>\r\n    <article class=\"aa-ip-filter flex-group flex-start flex-align-center\">\r\n      <div class=\"material-icons margin-right-0-5 {{selectedColor}}\">{{selectedIcon}}</div>\r\n      <div class=\"field boxed\">\r\n        <input \r\n          (click)=\"showIcons=true\" \r\n          [(ngModel)]=\"searchIcon\"\r\n          placeholder=\"Search for an icon\"\r\n          type=\"text\" \r\n          class=\"use-material-icon-picker\" \r\n          value=\"{{selectedIcon}}\" \r\n          name=\"{{selectedIcon}}\"\r\n        >\r\n      </div>\r\n      <div class=\"field boxed\">\r\n        <select (change)=\"selectColor($event)\">\r\n          <option value=\"aa-light-blue-100\">Blue light</option>\r\n          <option value=\"aa-blue-100\">Blue</option>\r\n          <option value=\"aa-brown-100\">Brown</option>\r\n          <option value=\"aa-burgundy-100\">Burgundy</option>\r\n          <option value=\"aa-green-100\">Green</option>\r\n          <option value=\"aa-grey-50\">Grey 50</option>\r\n          <option value=\"aa-grey-25\">Grey 25</option>\r\n          <option value=\"aa-grey-10\">Grey 10</option>\r\n          <option value=\"aa-grey-5\">Grey 5</option>\r\n          <option value=\"aa-lime-100\">Lime</option>\r\n          <option value=\"aa-ochre-100\">Ochre</option>\r\n          <option value=\"aa-orange-100\">Orange</option>\r\n          <option value=\"aa-pink-100\">Pink</option>\r\n          <option value=\"aa-plum-100\">Plum</option>\r\n          <option value=\"aa-red-100\">Red</option>\r\n          <option value=\"aa-blue-sky-100\">Sky blue</option>\r\n        </select>\r\n      </div>\r\n    </article>\r\n    <article *ngIf=\"showIcons\" class=\"aa-ip-results\">\r\n      <div \r\n        *ngFor=\"let icon of icons | iconFilter: searchIcon\" \r\n        (click)=\"selectIcon(icon); showIcons=false\" \r\n        class=\"material-icons cursor-pointer\">\r\n        {{icon}}\r\n      </div>\r\n    </article>\r\n  </section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
IconPickerComponent.ctorParameters = () => [];
IconPickerComponent.propDecorators = {
    searchIcon: [{ type: Input }],
    selectedIcon: [{ type: Input }],
    selectedColor: [{ type: Input }],
    showIcons: [{ type: Input }],
    showLabel: [{ type: Input }],
    labelName: [{ type: Input }]
};

class InfoPanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-info-panel',
                template: "<section \r\n  class=\"info-panel {{panelStatus}}\" \r\n  [ngStyle]=\"{\r\n    'width' : panelWidth+'rem', \r\n    'height' : panelHeight+'rem'\r\n  }\"\r\n>\r\n  <div class=\"foreground\" [ngStyle]=\"preventOpacity && {'opacity':'1'}\">\r\n    <div class=\"info-panel-header padding-1\">\r\n      <ng-content select=\"[custom-header]\"></ng-content>\r\n    </div>\r\n    <div class=\"info-panel-content padding-1\">\r\n      <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n    <div class=\"info-panel-footer\">\r\n      <ng-content select=\"[custom-footer]\"></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"background\"></div>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
InfoPanelComponent.ctorParameters = () => [];
InfoPanelComponent.propDecorators = {
    panelWidth: [{ type: Input }],
    panelHeight: [{ type: Input }],
    panelStatus: [{ type: Input }],
    preventOpacity: [{ type: Input }]
};

class InfoPanelStackedComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoPanelStackedComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-info-panel-stacked',
                template: "<section \r\n  class=\"info-panel-stacked\"\r\n  [ngStyle]=\"{\r\n    'width' : wrapperWidth+'rem', \r\n    'height' : wrapperHeight+'rem'\r\n  }\"\r\n  [ngClass]=\"{\r\n    'approved-forward' : approvedForward,\r\n    'pending-forward' : pendingForward,\r\n    'rejected-forward' : rejectedForward,\r\n    'withdrawn-forward' : withdrawnForward,\r\n    'returned-forward' : returnedForward,\r\n    'abandoned-forward' : abandonedForward,\r\n    'draft-forward' : draftForward,\r\n    'withdrawn-pending-forward' : withdrawalPendingForward,\r\n    'reset-all' : resetAll,\r\n    'full-width' : fullWidth\r\n  }\"\r\n>\r\n  <ng-content></ng-content>\r\n</section>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
InfoPanelStackedComponent.ctorParameters = () => [];
InfoPanelStackedComponent.propDecorators = {
    approvedForward: [{ type: Input }],
    pendingForward: [{ type: Input }],
    rejectedForward: [{ type: Input }],
    withdrawnForward: [{ type: Input }],
    returnedForward: [{ type: Input }],
    abandonedForward: [{ type: Input }],
    draftForward: [{ type: Input }],
    withdrawalPendingForward: [{ type: Input }],
    resetAll: [{ type: Input }],
    wrapperWidth: [{ type: Input }],
    wrapperHeight: [{ type: Input }],
    fullWidth: [{ type: Input }]
};

class ModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-modal',
                template: "<article class=\"aa-modal\">\r\n  <div \r\n    class=\"aa-modal-container\" \r\n    [ngClass]=\"{'aa-green' : green, 'aa-orange' : orange, 'aa-red' : red, 'aa-blue' : blue}\"\r\n    [ngStyle]=\"{\r\n      'top' : topPos,\r\n      'right' : rightPos,\r\n      'left' : leftPos,\r\n      'min-width' : minWidth,\r\n      'max-width' : maxWidth,\r\n      'z-index' : zIndex\r\n    }\"\r\n  >\r\n    <section *ngIf=\"!hideHeader\" class=\"aa-modal-header\">\r\n      <h2 class=\"boxed align-center\">{{heading}}</h2>\r\n    </section>\r\n    <section class=\"aa-modal-content\">\r\n      {{message}}\r\n      <ng-content select=\"[content-custom]\"></ng-content>\r\n    </section>\r\n    <section class=\"aa-modal-footer flex-group flex-center\">\r\n        <ng-content></ng-content>\r\n    </section>\r\n  </div>\r\n</article>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ModalComponent.ctorParameters = () => [];
ModalComponent.propDecorators = {
    heading: [{ type: Input }],
    message: [{ type: Input }],
    topPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }],
    green: [{ type: Input }],
    orange: [{ type: Input }],
    red: [{ type: Input }],
    blue: [{ type: Input }],
    zIndex: [{ type: Input }],
    hideHeader: [{ type: Input }]
};

class ModalDialogComponent {
    constructor() {
        this.closeMeEvent = new EventEmitter();
        this.confirmEvent = new EventEmitter();
    }
    ngOnInit() {
        console.log('Modal init');
    }
    closeMe() {
        this.closeMeEvent.emit();
    }
    confirm() {
        this.confirmEvent.emit();
    }
    ngOnDestroy() {
        console.log(' Modal destroyed');
    }
}
ModalDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-modal-dialog',
                template: "<article class=\"aa-modal\">\r\n    <div \r\n      class=\"aa-modal-container\" \r\n      [ngClass]=\"{'green':green, 'orange':orange, 'red':red, 'blue':blue}\"\r\n      [ngStyle]=\"{\r\n        'top' : topPos,\r\n        'right' : rightPos,\r\n        'left' : leftPos,\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'z-index' : zIndex\r\n      }\"\r\n    >\r\n      <section class=\"aa-modal-header\">\r\n        <h2 class=\"boxed align-center\">{{heading}}</h2>\r\n      </section>\r\n      <section class=\"aa-modal-content\">\r\n        {{message}}\r\n        <ng-content></ng-content>\r\n      </section>\r\n      <section class=\"aa-modal-footer flex-group flex-center\">\r\n        <button (click)=\"closeMe()\" class=\"cancel\">Close</button>\r\n        <button (click)=\"confirm()\" class=\"primary\">Confirm</button>\r\n      </section>\r\n    </div>\r\n  </article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ModalDialogComponent.ctorParameters = () => [];
ModalDialogComponent.propDecorators = {
    heading: [{ type: Input }],
    message: [{ type: Input }],
    topPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }],
    green: [{ type: Input }],
    orange: [{ type: Input }],
    red: [{ type: Input }],
    blue: [{ type: Input }],
    zIndex: [{ type: Input }],
    closeMeEvent: [{ type: Output }],
    confirmEvent: [{ type: Output }]
};

class OverlayComponent {
    constructor() { }
    ngOnInit() {
    }
}
OverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-overlay',
                template: "<article \r\n  class=\"aa-overlay flex-center\" \r\n  *ngIf=\"showOverlay\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex\r\n  }\">\r\n  <div \r\n    class=\"aa-overlay-container\" \r\n    [ngStyle]=\"{\r\n      'min-width' : minWidth,\r\n      'max-width' : maxWidth,\r\n      'top' : topPos,\r\n      'right' : rightPos,\r\n      'bottom' : bottomPos,\r\n      'left' : leftPos\r\n    }\"\r\n    >\r\n    <ng-content select=\"[overlay-header]\"></ng-content>\r\n    <ng-content select=\"[overlay-content]\"></ng-content>\r\n  </div>\r\n</article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
OverlayComponent.ctorParameters = () => [];
OverlayComponent.propDecorators = {
    zIndex: [{ type: Input }],
    showOverlay: [{ type: Input }],
    topPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }]
};

class PopoverComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
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
}
PopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-popover',
                template: "<div \r\n  class=\"aa-popover\" \r\n  [ngClass]=\"{\r\n  'show-popover' : showPopover, \r\n  'btn-small' : btnSmall\r\n  }\"\r\n  [ngStyle]=\"{\r\n    'z-index' : showPopover ? zIndex : ''\r\n  }\"\r\n  >\r\n  <div class=\"aa-popover-header\" (click)=\"changeVisibility()\" [ngClass]=\"{'label-hidden' : hideLabel}\">\r\n    <ng-content select=\"[call-to-action]\"></ng-content>\r\n    <div\r\n      class=\"arrow\"\r\n      [ngStyle]=\"popoverTop && {\r\n        'top' : arrowPos+'rem',\r\n        'bottom' : 'unset',\r\n        'transform' : 'rotate(180deg)' \r\n      }\"\r\n    ></div>\r\n  </div>\r\n  <div \r\n    class=\"aa-popover-content feature-box\" \r\n    [ngStyle]=\"{\r\n    'top': topPos+'rem', \r\n    'right': rightPos+'rem', \r\n    'bottom': bottomPos+'rem', \r\n    'left': leftPos+'rem', \r\n    'width': width+'rem' \r\n  }\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </div>\r\n</div>",
                styles: [""]
            },] }
];
PopoverComponent.ctorParameters = () => [
    { type: ElementRef }
];
PopoverComponent.propDecorators = {
    buttonClass: [{ type: Input }],
    leftPos: [{ type: Input }],
    topPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    width: [{ type: Input }],
    hideLabel: [{ type: Input }],
    btnSmall: [{ type: Input }],
    popoverTop: [{ type: Input }],
    arrowPos: [{ type: Input }],
    zIndex: [{ type: Input }],
    popoverVisibilityChanged: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};

class SummaryTopComponent {
    constructor() { }
    ngOnInit() {
    }
}
SummaryTopComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-summary-top',
                template: "<article class=\"dl-container\" [ngClass]=\"{'display-block' : displayBlock}\">\r\n  <dl class=\"flex-align-center\" [ngClass]=\"{ 'vertical-display': verticalDisplay }\">\r\n   <ng-content></ng-content>\r\n  </dl>\r\n</article>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
SummaryTopComponent.ctorParameters = () => [];
SummaryTopComponent.propDecorators = {
    displayBlock: [{ type: Input }],
    verticalDisplay: [{ type: Input }]
};

class SummaryTopListComponent {
    constructor() { }
    ngOnInit() {
    }
}
SummaryTopListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-summary-top-list',
                template: "<div class=\"dl-repeater\" [ngClass]=\"{'highlight' : highlight, 'truncate-text' : truncate}\">\r\n  <dt title=\"{{itemTitle}}\" [ngStyle]=\"{'max-width' : maxWidth+'rem'}\">{{itemTitle}}</dt>\r\n  <dd title=\"{{itemDescription}}\" [ngStyle]=\"{'max-width' : maxWidth+'rem'}\">{{itemDescription}}</dd>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
SummaryTopListComponent.ctorParameters = () => [];
SummaryTopListComponent.propDecorators = {
    itemTitle: [{ type: Input }],
    itemDescription: [{ type: Input }],
    highlight: [{ type: Input }],
    truncate: [{ type: Input }],
    maxWidth: [{ type: Input }]
};

class ToastrComponent {
    constructor() { }
    ngOnInit() {
    }
}
ToastrComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-toastr',
                template: "<div class=\"aa-toastr\" [ngStyle]=\"{'z-index' : zIndex}\">\r\n    <ng-content></ng-content>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ToastrComponent.ctorParameters = () => [];
ToastrComponent.propDecorators = {
    zIndex: [{ type: Input }]
};

class ToastrItemComponent {
    constructor() {
        this.closeToastr = new EventEmitter();
    }
    onCloseClick(e) {
        e.stopPropagation();
        this.closeToastr.emit(e);
    }
    ngOnInit() {
    }
}
ToastrItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-toastr-item',
                template: "<article \r\n    class=\"animate-normal bg-aa-red-100 box-shadow-strong\" \r\n    [ngClass]=\"{\r\n        'show-toastr': showToastr,\r\n        'bg-aa-red-100': isError,\r\n        'bg-aa-orange-100': isWarning,\r\n        'bg-aa-green-100': isSuccess,\r\n        'bg-aa-light-blue-100': isInfo\r\n    }\"\r\n>\r\n    <button (click)=\"onCloseClick($event)\" class=\"material-icons aa-white-100\">clear</button>\r\n    <div class=\"flex-group flex-start\">\r\n        <section class=\"flex-align-center\">\r\n            <div *ngIf=\"isError\" class=\"material-icons toastr-icon aa-white-100\">local_police</div>\r\n            <div *ngIf=\"isWarning\" class=\"material-icons toastr-icon aa-white-100\">privacy_tip</div>\r\n            <div *ngIf=\"isSuccess\" class=\"material-icons toastr-icon aa-white-100\">verified_user</div>\r\n            <div *ngIf=\"isInfo\" class=\"material-icons toastr-icon aa-white-100\">security</div>\r\n        </section>\r\n        <section>\r\n            <h3 class=\"margin-0 aa-white-100 margin-bottom-0-25\">{{heading}}</h3>\r\n            <p class=\"aa-white-100 small\">{{message}}</p>\r\n        </section>\r\n    </div>\r\n</article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ToastrItemComponent.ctorParameters = () => [];
ToastrItemComponent.propDecorators = {
    showToastr: [{ type: Input }],
    isError: [{ type: Input }],
    isWarning: [{ type: Input }],
    isSuccess: [{ type: Input }],
    isInfo: [{ type: Input }],
    heading: [{ type: Input }],
    message: [{ type: Input }],
    closeToastr: [{ type: Output }]
};

class TooltipComponent {
    constructor() {
        this.buttonClick = new EventEmitter();
    }
    onButtonClick(e) {
        e.stopPropagation();
        this.buttonClick.emit(e);
    }
    ngOnInit() { }
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tooltip',
                template: "<div \r\n  class=\"flex-group\" \r\n  [ngStyle]=\"{ 'display': showAsButton ? 'block' : 'flex' }\"\r\n  [ngClass]=\"{ \r\n    'space-between' : includeLabel, \r\n    'flex-start' : includeLegend, \r\n    'show-as-button' : showAsButton,\r\n    'show-tooltip-on-hover' : showTooltipOnHover,\r\n    'show-tooltip-on-click' : showTooltipOnClick,\r\n    'tooltip-clicked' : tooltipClicked\r\n  }\">\r\n  <label for=\"{{labelFor}}\" *ngIf=\"includeLabel && !showAsButton\">{{labelName}}</label>\r\n  <legend class=\"margin-right-0-5\" *ngIf=\"includeLegend && !showAsButton\">{{labelName}}</legend>\r\n  <div \r\n    class=\"aa-tooltip icon-info\" \r\n    [ngClass]=\"{\r\n      'is-success' : isSuccess, \r\n      'is-info' : isInfo, \r\n      'is-warning' : isWarning, \r\n      'is-error' : isError,\r\n      'custom-icon' : customIcon,\r\n      'as-link': showAsAnchor\r\n    }\"\r\n    [ngStyle]=\"{'z-index' : zIndex}\"\r\n    >\r\n    \r\n    <div \r\n      *ngIf=\"customIcon && !showAsAnchor && !showAsButton\" \r\n      class=\"material-icons\"\r\n      [ngClass]=\"{\r\n        'is-success' : isSuccess, \r\n        'is-info' : isInfo, \r\n        'is-warning' : isWarning, \r\n        'is-error' : isError\r\n      }\"\r\n    >\r\n      {{iconName}}\r\n    </div>\r\n\r\n    <button \r\n      *ngIf=\"showAsButton && !showTooltipOnClick\"\r\n      class=\"show-tooltip-on-hover\"\r\n      [name]=\"buttonId\" \r\n      [id]=\"buttonId\" \r\n      [class]=\"buttonClass\" \r\n      [disabled]=\"disabled\" \r\n      (click)=\"onButtonClick($event)\"\r\n    >\r\n      <span>{{buttonText}}</span>\r\n    </button>\r\n\r\n    <button \r\n      *ngIf=\"showAsButton && showTooltipOnClick\"\r\n      class=\"show-tooltip-on-hover\"\r\n      [name]=\"buttonId\" \r\n      [id]=\"buttonId\" \r\n      [class]=\"buttonClass\" \r\n      [disabled]=\"disabled\" \r\n      (click)=\"onButtonClick($event); tooltipClicked=!tooltipClicked\"\r\n    >\r\n      <span *ngIf=\"!tooltipClicked\">{{buttonText}}</span>\r\n      <span *ngIf=\"tooltipClicked\">{{tooltipBtnText}}</span>\r\n    </button>\r\n\r\n    <a \r\n      *ngIf=\"showAsAnchor\" \r\n      class=\"cursor-pointer\"\r\n      [ngClass]=\"{'nowrap' : preventAnchorWrapping}\"\r\n      >\r\n      {{tooltipAnchor}}\r\n    </a>\r\n        \r\n    <div \r\n      class=\"feature-box {{xpos}} {{ypos}}\" \r\n      [ngStyle]=\"{\r\n        'min-width': setMinWidth+'rem', \r\n        'max-width': setMaxWidth+'rem'\r\n      }\"\r\n      >\r\n        <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TooltipComponent.ctorParameters = () => [];
TooltipComponent.propDecorators = {
    setMinWidth: [{ type: Input }],
    setMaxWidth: [{ type: Input }],
    isSuccess: [{ type: Input }],
    isInfo: [{ type: Input }],
    isWarning: [{ type: Input }],
    includeLabel: [{ type: Input }],
    includeLegend: [{ type: Input }],
    labelName: [{ type: Input }],
    isError: [{ type: Input }],
    xpos: [{ type: Input }],
    ypos: [{ type: Input }],
    customIcon: [{ type: Input }],
    iconName: [{ type: Input }],
    zIndex: [{ type: Input }],
    labelFor: [{ type: Input }],
    showAsAnchor: [{ type: Input }],
    tooltipAnchor: [{ type: Input }],
    preventAnchorWrapping: [{ type: Input }],
    showAsButton: [{ type: Input }],
    buttonText: [{ type: Input }],
    buttonId: [{ type: Input }],
    buttonClass: [{ type: Input }],
    disabled: [{ type: Input }],
    showTooltipOnClick: [{ type: Input }],
    showTooltipOnHover: [{ type: Input }],
    tooltipClicked: [{ type: Input }],
    tooltipBtnText: [{ type: Input }],
    buttonClick: [{ type: Output }]
};

class UserFeedbackComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.sendFeedback = new EventEmitter();
        this.close = new EventEmitter();
        this.startRating = true;
        this.faceClicked = false;
        this.feedbackForm = this.formBuilder.group({
            comment: [null]
        });
    }
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
    ngOnInit() {
    }
}
UserFeedbackComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-user-feedback',
                template: "<section class=\"user-feedback box-shadow margin-bottom-1 rating-{{ rating }}\" *ngIf=\"toggleUserFeedback\">\r\n  <div class=\"position-relative\">\r\n    <article class=\"flex-group padding-1\" *ngIf=\"startRating\">\r\n      <h3 class=\"text-align-center margin-top-0-5\">\r\n        <span>{{ question }} </span>\r\n        <strong class=\"italic\">{{ appName }}</strong>\r\n      </h3>\r\n      <div class=\"feature-box faces tertiary flex-group flex-align-center\">\r\n        <div>Great</div>\r\n        <button (click)=\"onFaceClick(5)\" [ngClass]=\"{ 'face-very-satisfied': rating === 5 }\" class=\"face-very-satisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(4)\" [ngClass]=\"{ 'face-satisfied': rating === 4 }\" class=\"face-satisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(3)\" [ngClass]=\"{ 'face-neutral': rating === 3 }\" class=\"face-neutral-blk\"></button>\r\n        <button (click)=\"onFaceClick(2)\" [ngClass]=\"{ 'face-dissatisfied': rating === 2 }\" class=\"face-dissatisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(1)\" [ngClass]=\"{ 'face-very-dissatisfied': rating === 1 }\" class=\"face-very-dissatisfied-blk\"></button>\r\n        <div>Poor</div>\r\n      </div>\r\n    </article>\r\n\r\n    <article *ngIf=\"faceClicked && !userClosedPanel\" class=\"user-feedback-content padding-1\">\r\n      <form name=\"sendFeedback\" [formGroup]=\"feedbackForm\">\r\n        <div>\r\n          <label for=\"feedback\">{{ label }}</label>\r\n          <div class=\"describe width-100\">{{ description }}</div>\r\n          <textarea formControlName=\"comment\" id=\"feedback\"></textarea>\r\n        </div>\r\n        <div class=\"padding-top-1 max-readable-width\">\r\n          <em>{{ footNote }}</em>\r\n        </div>\r\n        <div class=\"align-center\">\r\n          <button type=\"button\" class=\"primary\" (click)=\"sendFB()\">Send feedback</button>\r\n        </div>\r\n      </form>\r\n    </article>\r\n\r\n    <article *ngIf=\"userClosedPanel\">\r\n      <div class=\"flex-group voting-panel padding-1\">\r\n        <h3 class=\"text-align-center margin-top-0-5\">\r\n          <span>{{ question }} </span>\r\n          <strong class=\"italic\">{{ appName }}</strong>?\r\n        </h3>\r\n        <div class=\"feature-box faces tertiary flex-group flex-align-center\">\r\n          <div>Great</div>\r\n          <div [ngClass]=\"{ 'face-very-satisfied': rating === 5 }\" class=\"face-very-satisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-satisfied': rating === 4 }\" class=\"face-satisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-neutral': rating === 3 }\" class=\"face-neutral-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-dissatisfied': rating === 2 }\" class=\"face-dissatisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-very-dissatisfied': rating === 1 }\" class=\"face-very-dissatisfied-blk\"></div>\r\n          <div>Poor</div>\r\n        </div>\r\n      </div>\r\n      <article class=\"user-feedback-content padding-1\">\r\n        <p>{{ closingMessage }}</p>\r\n        <div class=\"thanks align-center\">\r\n          <div *ngIf=\"rating === 5\" class=\"face-very-satisfied\"></div>\r\n          <div *ngIf=\"rating === 4\" class=\"face-satisfied\"></div>\r\n          <div *ngIf=\"rating === 3\" class=\"face-neutral\"></div>\r\n          <div *ngIf=\"rating === 2\" class=\"face-dissatisfied\"></div>\r\n          <div *ngIf=\"rating === 1\" class=\"face-very-dissatisfied\"></div>\r\n        </div>\r\n        <div class=\"align-center\">\r\n          <button type=\"button\" class=\"tertiary\" (click)=\"onClose()\">Close</button>\r\n        </div>\r\n      </article>\r\n    </article>\r\n  </div>\r\n</section>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
UserFeedbackComponent.ctorParameters = () => [
    { type: FormBuilder }
];
UserFeedbackComponent.propDecorators = {
    panelWidth: [{ type: Input }],
    question: [{ type: Input }],
    appName: [{ type: Input }],
    label: [{ type: Input }],
    description: [{ type: Input }],
    footNote: [{ type: Input }],
    closingMessage: [{ type: Input }],
    toggleUserFeedback: [{ type: Input }],
    sendFeedback: [{ type: Output }],
    close: [{ type: Output }]
};

class ListSelectableComponent {
    ngOnInit() {
    }
}
ListSelectableComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-list-selectable',
                template: "<nav \r\n    class=\"\r\n        aa-list-selectable\r\n        flex-group\r\n    \" \r\n    [ngStyle]=\"fixedPosition && {\r\n        'position' : 'fixed', \r\n        'left' : leftPos+'rem', \r\n        'top' : topPos+'rem', \r\n        'bottom' : bottomPos+'rem', \r\n        'z-index' : zIndex\r\n    }\"\r\n    [ngClass]=\"{\r\n        'flex-start' : flexStart\r\n    }\"\r\n    >\r\n    <ul>\r\n        <ng-content></ng-content>\r\n    </ul>\r\n</nav>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ListSelectableComponent.propDecorators = {
    minWidth: [{ type: Input }],
    topPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    zIndex: [{ type: Input }],
    flexStart: [{ type: Input }],
    fixedPosition: [{ type: Input }]
};

class OrderByPipe {
    transform(array, field) {
        array.sort((a, b) => {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    }
}
OrderByPipe.decorators = [
    { type: Injectable },
    { type: Pipe, args: [{
                name: 'orderBy'
            },] }
];
// TODO
// This pipe is currently used for the favourites component
// As it stands, the sorting only works on page refresh
// Will need to find a way to fix this so that sorting
// occurs when adding items with the onFavClick() method

class WidgetsModule {
}
WidgetsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PopoverComponent,
                    AccordionComponent,
                    AccordionFancyComponent,
                    CardComponent,
                    CarouselComponent,
                    CarouselItemDirective,
                    CarouselItemElementDirective,
                    DashboardContainerComponent,
                    DashboardFavouritesComponent,
                    DashboardFavouritesListComponent,
                    FavouritesComponent,
                    FavouritesListComponent,
                    IconPickerComponent,
                    IconFilterPipe,
                    InfoPanelComponent,
                    InfoPanelStackedComponent,
                    ModalComponent,
                    ModalDialogComponent,
                    OverlayComponent,
                    SummaryTopComponent,
                    SummaryTopListComponent,
                    ToastrComponent,
                    ToastrItemComponent,
                    TooltipComponent,
                    UserFeedbackComponent,
                    ListSelectableComponent,
                    OrderByPipe
                ],
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                providers: [],
                exports: [
                    PopoverComponent,
                    AccordionComponent,
                    AccordionFancyComponent,
                    CardComponent,
                    CarouselComponent,
                    CarouselItemDirective,
                    CarouselItemElementDirective,
                    DashboardContainerComponent,
                    DashboardFavouritesComponent,
                    DashboardFavouritesListComponent,
                    FavouritesComponent,
                    FavouritesListComponent,
                    IconPickerComponent,
                    IconFilterPipe,
                    InfoPanelComponent,
                    InfoPanelStackedComponent,
                    ModalComponent,
                    ModalDialogComponent,
                    OverlayComponent,
                    SummaryTopComponent,
                    SummaryTopListComponent,
                    ToastrComponent,
                    ToastrItemComponent,
                    TooltipComponent,
                    UserFeedbackComponent,
                    ListSelectableComponent,
                    OrderByPipe
                ],
                entryComponents: []
            },] }
];

class ModalService {
    constructor(resolver) {
        this.resolver = resolver;
    }
    openModal(entry, modalHeading, modalMessage) {
        const factory = this.resolver.resolveComponentFactory(ModalDialogComponent);
        this.componentRef = entry.createComponent(factory);
        this.componentRef.instance.heading = modalHeading;
        this.componentRef.instance.message = modalMessage;
        this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
        this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
        this.componentSubscriber = new Subject();
        return this.componentSubscriber.asObservable();
    }
    closeModal() {
        this.componentSubscriber.complete();
        this.componentRef.destroy();
    }
    confirm() {
        this.componentSubscriber.next('confirm');
        this.closeModal();
    }
}
ModalService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i0.ComponentFactoryResolver)); }, token: ModalService, providedIn: "root" });
ModalService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ModalService.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionFancyComponent, ActionsSummaryComponent, AlertComponent, AlertShieldComponent, AnchorBackComponent, AnimationsModule, BladeBottomComponent, BladeComponent, BladeFooterComponent, BladeTopComponent, ButtonComponent, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, CardComponent, CarouselComponent, CarouselItemDirective, CarouselItemElementDirective, CheckboxComponent, ClickOutsideDirective, CommentsComponent, ContextMenuComponent, ContextMenuItemComponent, CounterComponent, CustomSelectComponent, CustomWrapperComponent, DashboardContainerComponent, DashboardFavouritesComponent, DashboardFavouritesListComponent, DirectivesModule, ElementsModule, FavouritesComponent, FavouritesListComponent, FieldComponent, FileUploadComponent, FooterComponent, IconPickerComponent, InfoPanelComponent, InfoPanelStackedComponent, InputTextComponent, LayoutModule, ListSelectableComponent, LoadingSpinnerComponent, LoadingSpinnerPageComponent, ModalComponent, ModalDialogComponent, ModalService, NavContextComponent, NavigationModule, OverlayComponent, PatternsModule, PopoverComponent, ProgressBarComponent, ProgressCircleComponent, ProgressIndicatorAdvancedComponent, ProgressIndicatorComponent, ProjectTourComponent, SliderComponent, StatusIndicatorComponent, StepperComponent, SummaryTopComponent, SummaryTopListComponent, TabNavigationComponent, TabNavigationContentDirective, TabNavigationHeaderContentDirective, TabNavigationItemComponent, TabNavigationSecondaryComponent, TabNavigationSecondaryContentDirective, TabNavigationSecondaryItemComponent, TextareaAutoresizeDirective, ToastrComponent, ToastrItemComponent, TooltipComponent, UiBlockComponent, UnauthorisedComponent, UserFeedbackComponent, WidgetsModule, ɵ0, DateFormatPipe as ɵa, GraphicComponent as ɵb, IconFilterPipe as ɵc, OrderByPipe as ɵd };
//# sourceMappingURL=angloamerican-components.js.map
