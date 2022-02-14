(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@angloamerican/components', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.angloamerican = global.angloamerican || {}, global.angloamerican.components = {}), global.ng.core, global.ng.common, global.ng.router, global.ng.forms));
})(this, (function (exports, core, common, router, forms) { 'use strict';

    var ClickOutsideDirective = /** @class */ (function () {
        function ClickOutsideDirective(elementRef) {
            this.elementRef = elementRef;
            this.aaClickOutside = new core.EventEmitter();
        }
        ClickOutsideDirective.prototype.onClick = function (target) {
            var clickedInside = this.elementRef.nativeElement.contains(target);
            if (!clickedInside) {
                this.aaClickOutside.emit();
            }
        };
        return ClickOutsideDirective;
    }());
    ClickOutsideDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[aaClickOutside]',
                },] }
    ];
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ClickOutsideDirective.propDecorators = {
        aaClickOutside: [{ type: core.Output }],
        onClick: [{ type: core.HostListener, args: ['document:click', ['$event.target'],] }]
    };

    var TextareaAutoresizeDirective = /** @class */ (function () {
        function TextareaAutoresizeDirective(elementRef) {
            this.elementRef = elementRef;
        }
        Object.defineProperty(TextareaAutoresizeDirective.prototype, "formControlInstance", {
            set: function (control) {
                var _this = this;
                this.cleanControlSubscription();
                setTimeout(function () { return _this.resize(); });
                this.formControlSubscription = control.valueChanges.subscribe(function () {
                    _this.resize();
                });
            },
            enumerable: false,
            configurable: true
        });
        TextareaAutoresizeDirective.prototype.onInput = function () {
            var isResizedThroughFormControl = !!this.formControlSubscription;
            if (!isResizedThroughFormControl) {
                this.resize();
            }
        };
        TextareaAutoresizeDirective.prototype.ngOnInit = function () {
            var _this = this;
            if (this.elementRef.nativeElement.scrollHeight) {
                setTimeout(function () { return _this.resize(); });
            }
        };
        TextareaAutoresizeDirective.prototype.ngOnDestroy = function () {
            this.cleanControlSubscription();
        };
        TextareaAutoresizeDirective.prototype.cleanControlSubscription = function () {
            if (this.formControlSubscription) {
                this.formControlSubscription.unsubscribe();
            }
        };
        TextareaAutoresizeDirective.prototype.resize = function () {
            this.elementRef.nativeElement.style.height = '0';
            this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
        };
        return TextareaAutoresizeDirective;
    }());
    TextareaAutoresizeDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[aaTextareaAutoresize]'
                },] }
    ];
    TextareaAutoresizeDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    TextareaAutoresizeDirective.propDecorators = {
        formControlInstance: [{ type: core.Input, args: ['aaTextareaAutoresize',] }],
        onInput: [{ type: core.HostListener, args: [':input',] }]
    };

    var DirectivesModule = /** @class */ (function () {
        function DirectivesModule() {
        }
        return DirectivesModule;
    }());
    DirectivesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [ClickOutsideDirective, TextareaAutoresizeDirective],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [ClickOutsideDirective, TextareaAutoresizeDirective]
                },] }
    ];

    var LoadingSpinnerComponent = /** @class */ (function () {
        function LoadingSpinnerComponent() {
            this.loadingText = 'Loading...';
        }
        LoadingSpinnerComponent.prototype.ngOnInit = function () {
        };
        return LoadingSpinnerComponent;
    }());
    LoadingSpinnerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-loading-spinner',
                    template: "<section class=\"align-item-center\">\r\n  <div class=\"flex-group flex-start\">\r\n      <div class=\"loading-spinner-small\"></div>\r\n      <div class=\"flex-align-center text-info font-size-default text-pulsate\">{{loadingText}}</div>\r\n  </div>\r\n</section>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    LoadingSpinnerComponent.ctorParameters = function () { return []; };
    LoadingSpinnerComponent.propDecorators = {
        loadingText: [{ type: core.Input }]
    };

    var LoadingSpinnerPageComponent = /** @class */ (function () {
        function LoadingSpinnerPageComponent() {
        }
        LoadingSpinnerPageComponent.prototype.ngOnInit = function () {
        };
        return LoadingSpinnerPageComponent;
    }());
    LoadingSpinnerPageComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-loading-spinner-page',
                    template: "<section class=\"loading-spinner-page\">\r\n  <div class=\"foreground\">\r\n    <div class=\"loading-spinner-small\"></div>\r\n    <div class=\"margin-top-1 italic grey-50\">{{loadingMessage}}</div>\r\n  </div>\r\n  <div class=\"background\"></div>\r\n</section>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    LoadingSpinnerPageComponent.ctorParameters = function () { return []; };
    LoadingSpinnerPageComponent.propDecorators = {
        loadingMessage: [{ type: core.Input }]
    };

    var AnimationsModule = /** @class */ (function () {
        function AnimationsModule() {
        }
        return AnimationsModule;
    }());
    AnimationsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [LoadingSpinnerComponent, LoadingSpinnerPageComponent],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [LoadingSpinnerComponent, LoadingSpinnerPageComponent]
                },] }
    ];

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent(elementRef) {
            this.elementRef = elementRef;
            this.buttonType = 'button';
            this.buttonClick = new core.EventEmitter();
        }
        ButtonComponent.prototype.onButtonClick = function (e) {
            e.stopPropagation();
            this.buttonClick.emit(e);
        };
        ButtonComponent.prototype.onClick = function (targetElement) {
            var clickedInside = this.elementRef.nativeElement.contains(targetElement);
            if (!clickedInside) {
                this.showBtnMenu = false;
            }
        };
        ButtonComponent.prototype.open = function () {
            this.showBtnMenu = true;
        };
        ButtonComponent.prototype.close = function () {
            this.showBtnMenu = false;
        };
        ButtonComponent.prototype.ngOnInit = function () {
        };
        return ButtonComponent;
    }());
    ButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-button',
                    template: "<div *ngIf=\"!buttonEnriched && !buttonSplit\" class=\"field {{fieldClass}}\">\r\n  <label [for]=\"buttonId\">{{buttonLabel}}</label>\r\n  <button \r\n    [type]=\"buttonType\" \r\n    [name]=\"buttonId\" \r\n    [id]=\"buttonId\" \r\n    [class]=\"buttonClass\" \r\n    [disabled]=\"disabled\" \r\n    (click)=\"onButtonClick($event)\"\r\n  >\r\n    <span *ngIf=\"customIcons\" class=\"material-icons\">{{buttonIcon}}</span>\r\n    <span>{{buttonText}}</span>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"buttonEnriched\" class=\"field {{fieldClass}}\">\r\n  <button \r\n    [type]=\"buttonType\" \r\n    [name]=\"buttonId\" \r\n    [id]=\"buttonId\" \r\n    [disabled]=\"disabled\" \r\n    (click)=\"onButtonClick($event)\"\r\n    class=\"btn-enriched box-shadow gradient-v-grey\"\r\n  >\r\n    <div class=\"flex-group flex-end btn-enriched-toolbar\">\r\n      <ng-content select=\"[toolbar]\"></ng-content>\r\n    </div>\r\n    <div class=\"btn-enriched-content flex-group flex-start flex-align-center\">\r\n      <div class=\"material-icons {{iconColour}}\">{{iconName}}</div>\r\n      <h2 class=\"margin-0\">{{title}}</h2>\r\n    </div>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"buttonSplit\" class=\"field {{fieldClass}}\">\r\n  <label [for]=\"buttonId\">{{buttonLabel}}</label>\r\n  <div class=\"button-split\">\r\n    <button\r\n      (click)=\"showBtnMenu=!showBtnMenu\" \r\n      [class]=\"buttonClass\"\r\n      [type]=\"buttonType\" \r\n      [name]=\"buttonId\" \r\n      [id]=\"buttonId\"\r\n     >\r\n      {{buttonText}}\r\n    </button>\r\n    <nav (click)=\"showBtnMenu=false\" *ngIf=\"showBtnMenu\" class=\"box-shadow-strong\">\r\n      <ng-content select=\"[bs-buttons]\"></ng-content>\r\n    </nav>\r\n  </div>\r\n</div>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    ButtonComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ButtonComponent.propDecorators = {
        buttonLabel: [{ type: core.Input }],
        buttonText: [{ type: core.Input }],
        buttonId: [{ type: core.Input }],
        buttonClass: [{ type: core.Input }],
        buttonType: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        fieldClass: [{ type: core.Input }],
        buttonIcon: [{ type: core.Input }],
        customIcons: [{ type: core.Input }],
        buttonEnriched: [{ type: core.Input }],
        showBtnMenu: [{ type: core.Input }],
        buttonSplit: [{ type: core.Input }],
        iconName: [{ type: core.Input }],
        title: [{ type: core.Input }],
        iconColour: [{ type: core.Input }],
        buttonClick: [{ type: core.Output }],
        onClick: [{ type: core.HostListener, args: ['document:click', ['$event.target'],] }]
    };

    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
        }
        CheckboxComponent.prototype.ngOnInit = function () {
        };
        return CheckboxComponent;
    }());
    CheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-checkbox',
                    template: "\r\n  <div class=\"field checkbox {{fieldClass}}\">\r\n      <label for=\"{{checkboxId}}\">\r\n          <input \r\n            type=\"checkbox\" \r\n            value={{checkboxValue}} \r\n            name={{checkboxName}} \r\n            id={{checkboxId}} \r\n            checked={{checkboxChecked}}\r\n            disabled=\"{{disabled}}\"\r\n          >\r\n          <span>{{checkboxText}}</span>\r\n      </label>\r\n  </div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        checkboxId: [{ type: core.Input }],
        checkboxName: [{ type: core.Input }],
        checkboxValue: [{ type: core.Input }],
        checkboxText: [{ type: core.Input }],
        checkboxChecked: [{ type: core.Input }],
        fieldClass: [{ type: core.Input }],
        disabled: [{ type: core.Input }]
    };

    var FieldComponent = /** @class */ (function () {
        function FieldComponent() {
        }
        FieldComponent.prototype.ngOnInit = function () {
        };
        return FieldComponent;
    }());
    FieldComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-field',
                    template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{fieldId}}\">{{fieldLabel}}</label>\r\n  <input \r\n    type=\"text\" \r\n    name=\"{{fieldId}}\" \r\n    id=\"{{fieldId}}\" \r\n    readonly=\"{{readOnly}}\" \r\n    value=\"{{inputValue}}\" \r\n  >\r\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    FieldComponent.ctorParameters = function () { return []; };
    FieldComponent.propDecorators = {
        fieldId: [{ type: core.Input }],
        fieldLabel: [{ type: core.Input }],
        fieldClass: [{ type: core.Input }],
        inputValue: [{ type: core.Input }],
        buttonClass: [{ type: core.Input }],
        readOnly: [{ type: core.Input }]
    };

    var InputTextComponent = /** @class */ (function () {
        function InputTextComponent() {
        }
        InputTextComponent.prototype.ngOnInit = function () {
        };
        return InputTextComponent;
    }());
    InputTextComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-input-text',
                    template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{inputTextId}}\">\r\n    {{inputTextLabel}}\r\n    <span class=\"optional\" *ngIf=\"isOptional\">Optional</span>\r\n  </label>\r\n  <input \r\n    type=\"text\" \r\n    name=\"{{inputTextId}}\" \r\n    id=\"{{inputTextId}}\" \r\n    placeholder=\"{{inputPlaceholder}}\" \r\n    readonly=\"{{readOnly}}\"\r\n    value=\"{{inputValue}}\"\r\n    >\r\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    InputTextComponent.ctorParameters = function () { return []; };
    InputTextComponent.propDecorators = {
        isOptional: [{ type: core.Input }],
        readOnly: [{ type: core.Input }],
        inputTextLabel: [{ type: core.Input }],
        inputTextId: [{ type: core.Input }],
        inputPlaceholder: [{ type: core.Input }],
        fieldClass: [{ type: core.Input }],
        inputValue: [{ type: core.Input }]
    };

    var FileUploadComponent = /** @class */ (function () {
        function FileUploadComponent() {
        }
        FileUploadComponent.prototype.ngOnInit = function () {
        };
        return FileUploadComponent;
    }());
    FileUploadComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-file-upload',
                    template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{fileUploadId}}\">{{fileUploadLabel}}</label>\r\n  <div class=\"flex-group flex-start\">\r\n    <div class=\"file-upload\">\r\n      <input name=\"file-upload\" type=\"file\" id=\"{{fileUploadId}}\" accept=\"{{fileUploadExtentions}}\" value=\"{{fileUploadValue}}\">\r\n      <div class=\"file-upload-graphic\">\r\n        <div>{{fileUploadText}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"file-upload-name margin-top-0-5\">{{ fileUploadName }}</div>\r\n  </div>\r\n</div>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    FileUploadComponent.ctorParameters = function () { return []; };
    FileUploadComponent.propDecorators = {
        fileUploadLabel: [{ type: core.Input }],
        fileUploadId: [{ type: core.Input }],
        fileUploadValue: [{ type: core.Input }],
        fileUploadName: [{ type: core.Input }],
        fileUploadExtentions: [{ type: core.Input }],
        fileUploadText: [{ type: core.Input }],
        fieldClass: [{ type: core.Input }]
    };

    var SliderComponent = /** @class */ (function () {
        function SliderComponent() {
        }
        SliderComponent.prototype.ngOnInit = function () {
        };
        return SliderComponent;
    }());
    SliderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-slider',
                    template: "<div \r\n    class=\"{{fieldClass}} field slider\"\r\n    [ngClass]=\"{'flex-group flex-start margin-top-1-75 nowrap' : sliderInline}\"\r\n>\r\n    <label>{{labelText}}</label>\r\n    <label>\r\n        <input \r\n            type=\"checkbox\"\r\n            value={{sliderValue}} \r\n            name={{sliderName}} \r\n            id={{sliderId}} \r\n            checked={{sliderChecked}}\r\n            disabled=\"{{disabled}}\"\r\n         />\r\n        <span class=\"slider-btn\"></span>\r\n    </label>\r\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    SliderComponent.ctorParameters = function () { return []; };
    SliderComponent.propDecorators = {
        fieldClass: [{ type: core.Input }],
        labelText: [{ type: core.Input }],
        sliderInline: [{ type: core.Input }],
        sliderId: [{ type: core.Input }],
        sliderName: [{ type: core.Input }],
        sliderValue: [{ type: core.Input }],
        sliderChecked: [{ type: core.Input }],
        disabled: [{ type: core.Input }]
    };

    var ElementsModule = /** @class */ (function () {
        function ElementsModule() {
        }
        return ElementsModule;
    }());
    ElementsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [ButtonComponent, CheckboxComponent, FieldComponent, InputTextComponent, FileUploadComponent, SliderComponent],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [ButtonComponent, CheckboxComponent, FieldComponent, InputTextComponent, FileUploadComponent, SliderComponent]
                },] }
    ];

    var BladeComponent = /** @class */ (function () {
        function BladeComponent() {
            this.bladeOpen = new core.EventEmitter();
            this.bladePinned = new core.EventEmitter();
        }
        BladeComponent.prototype.onClose = function () {
            this.toggleBlade = false;
            if (!this.suppressAutoClose) {
                this.bladeOpen.emit(this.toggleBlade);
            }
        };
        BladeComponent.prototype.toggleThePin = function (e) {
            this.isPinned = !this.isPinned;
            e.stopPropagation();
            this.bladePinned.emit(this.isPinned);
        };
        BladeComponent.prototype.ngOnInit = function () {
            this.bladePinned.emit(this.isPinned); // isPinned callback
            this.bladeOpen.emit(this.toggleBlade); // isOpen callback
        };
        return BladeComponent;
    }());
    BladeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-blade',
                    template: "<!-- MODAL UI BLOCK -->\r\n<div class=\"aa-blade-modal\" *ngIf=\"toggleBlade && showModal\" [ngStyle]=\"{'z-index' : zIndex}\"></div>\r\n\r\n<!-- HEADER BAKED IN -->\r\n<aside \r\n  *ngIf=\"!customBlade\" \r\n  class=\"blade animate-all {{bladeSize}}\" \r\n  [ngClass]=\"{'show-blade' : toggleBlade}\" \r\n  [ngStyle]=\"{\r\n    'top' : topPosition + 'rem', \r\n    'z-index' : zIndex+10\r\n  }\"\r\n>\r\n  <article class=\"blade-header flex-group space-between\">\r\n    <div class=\"flex-group flex-start flex-align-center\">\r\n      <div \r\n          *ngIf=\"enablePinning\" \r\n          (click)=\"toggleThePin($event)\"\r\n          [ngClass]=\"{'pinned' : isPinned}\" \r\n          class=\"material-icons pin flex-end\"\r\n      >\r\n        push_pin\r\n      </div>\r\n      <div *ngIf=\"enableIcon\" class=\"material-icons margin-right-0-5\">{{iconName}}</div>\r\n      <h2 class=\"margin-top-0-25 margin-0 flex-align-center\">\r\n        {{bladeHeading}}\r\n      </h2>\r\n    </div>\r\n    <a class=\"anchor-close flex-align-center\" (click)=\"onClose()\">Close</a>\r\n    </article>\r\n  <ng-content></ng-content>\r\n</aside>\r\n\r\n<!-- CUSTOMISABLE HEADER, CONTENT AND FOOTER -->\r\n<aside \r\n  *ngIf=\"customBlade\" \r\n  class=\"blade animate-all {{bladeSize}}\" \r\n  [ngClass]=\"{'show-blade' : toggleBlade}\" \r\n  [ngStyle]=\"{\r\n    'top' : topPosition + 'rem', \r\n    'z-index' : zIndex\r\n  }\"\r\n>\r\n  <article class=\"blade-header\">\r\n    <ng-content select=\"[custom-header]\"></ng-content>\r\n  </article>\r\n  <article class=\"blade-content\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </article>\r\n  <article class=\"blade-footer\">\r\n    <ng-content select=\"[custom-footer]\"></ng-content>\r\n  </article>\r\n</aside>\r\n\r\n",
                    styles: [""]
                },] }
    ];
    BladeComponent.ctorParameters = function () { return []; };
    BladeComponent.propDecorators = {
        pinBlade: [{ type: core.Input }],
        topPosition: [{ type: core.Input }],
        zIndex: [{ type: core.Input }],
        suppressAutoClose: [{ type: core.Input }],
        customBlade: [{ type: core.Input }],
        enableIcon: [{ type: core.Input }],
        iconName: [{ type: core.Input }],
        showModal: [{ type: core.Input }],
        oneColWidth: [{ type: core.Input }],
        bladeSize: [{ type: core.Input }],
        bladeHeading: [{ type: core.Input }],
        enablePinning: [{ type: core.Input }],
        toggleBlade: [{ type: core.Input }],
        isPinned: [{ type: core.Input }],
        bladeOpen: [{ type: core.Output }],
        bladePinned: [{ type: core.Output }]
    };

    var BladeFooterComponent = /** @class */ (function () {
        function BladeFooterComponent() {
        }
        BladeFooterComponent.prototype.ngOnInit = function () {
        };
        return BladeFooterComponent;
    }());
    BladeFooterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-blade-footer',
                    template: "<article class=\"blade-footer flex-group flex-start\">\r\n  <ng-content></ng-content>\r\n</article>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    BladeFooterComponent.ctorParameters = function () { return []; };

    var BladeBottomComponent = /** @class */ (function () {
        function BladeBottomComponent() {
            this.bladePinned = new core.EventEmitter();
            this.bladeOpen = new core.EventEmitter();
            this.bladeFullScreen = new core.EventEmitter();
        }
        BladeBottomComponent.prototype.toggle = function () {
            this.isOpen = !this.isOpen;
            this.bladeOpen.emit(this.isOpen);
            if (this.isPinned && this.isOpen) {
                this.isPinned = true;
                this.bladePinned.emit(true);
            }
            else {
                this.bladePinned.emit(false);
            }
        };
        BladeBottomComponent.prototype.toggleThePin = function (e) {
            this.isPinned = !this.isPinned;
            e.stopPropagation();
            this.bladePinned.emit(this.isPinned);
        };
        BladeBottomComponent.prototype.toggleFullScreen = function (e) {
            this.isFullScreen = !this.isFullScreen;
            e.stopPropagation();
            this.bladeFullScreen.emit(this.isFullScreen);
        };
        BladeBottomComponent.prototype.expandedPosition = function () {
            if (!this.isOpen) {
                return this.closedPos;
            }
            else if (this.isFullScreen) {
                return this.fullScreenPos;
            }
            else if (this.isPinned || this.isOpen) {
                return this.splitScreenPos;
            }
        };
        BladeBottomComponent.prototype.ngOnInit = function () {
            if (this.innitiallyPinned) {
                this.isPinned = true;
                this.isOpen = true;
                this.isFullScreen = false;
            }
            this.bladePinned.emit(this.isPinned); // isPinned callback
            this.bladeOpen.emit(this.isOpen); // isOpen callback
            this.bladeFullScreen.emit(this.isFullScreen); // isFullScreen callback
        };
        return BladeBottomComponent;
    }());
    BladeBottomComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-blade-bottom',
                    template: "<div \r\n  class=\"blade-bottom\" \r\n  [ngClass]=\"{\r\n    'show' : isOpen, \r\n    'pinned' : isPinned, \r\n    'fullscreen' : isFullScreen\r\n  }\" \r\n  [ngStyle]=\"{\r\n    'top': expandedPosition(), \r\n    'z-index': zIndex\r\n  }\">\r\n  <section class=\"blade-bottom-header flex-group cursor-pointer {{headerBgColor}}\" (click)=\"toggle()\">\r\n      <div class=\"flex-group flex-start flex-align-center\">\r\n        <ng-content select=\"[custom-header]\"></ng-content>\r\n      </div>\r\n      <div class=\"flex-group flex-end controls {{controlsColor}}\">\r\n        <div *ngIf=\"!disablePinning\" (click)=\"toggleThePin($event)\" class=\"material-icons pin flex-end\">push_pin</div>\r\n        <div (click)=\"toggleFullScreen($event)\" class=\"material-icons flex-end\">\r\n          <span *ngIf=\"!isFullScreen\">open_in_full</span>\r\n          <span *ngIf=\"isFullScreen\">close_fullscreen</span>\r\n        </div>\r\n      </div>\r\n  </section>\r\n  <section class=\"blade-bottom-content\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </section>\r\n</div>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    BladeBottomComponent.ctorParameters = function () { return []; };
    BladeBottomComponent.propDecorators = {
        fullScreenPos: [{ type: core.Input }],
        splitScreenPos: [{ type: core.Input }],
        closedPos: [{ type: core.Input }],
        isOpen: [{ type: core.Input }],
        isPinned: [{ type: core.Input }],
        disablePinning: [{ type: core.Input }],
        isFullScreen: [{ type: core.Input }],
        innitiallyPinned: [{ type: core.Input }],
        controlsColor: [{ type: core.Input }],
        headerBgColor: [{ type: core.Input }],
        zIndex: [{ type: core.Input }],
        bladePinned: [{ type: core.Output }],
        bladeOpen: [{ type: core.Output }],
        bladeFullScreen: [{ type: core.Output }]
    };

    var BladeTopComponent = /** @class */ (function () {
        function BladeTopComponent() {
            this.bladeOpen = new core.EventEmitter();
            this.bladePinned = new core.EventEmitter();
        }
        BladeTopComponent.prototype.onClose = function () {
            this.isOpen = false;
            this.bladeOpen.emit(this.isOpen);
        };
        BladeTopComponent.prototype.toggleThePin = function (e) {
            this.isPinned = !this.isPinned;
            e.stopPropagation();
            this.bladePinned.emit(this.isPinned);
        };
        BladeTopComponent.prototype.ngOnInit = function () {
            this.bladePinned.emit(this.isPinned); // isPinned callback
            this.bladeOpen.emit(this.isOpen); // isOpen callback
        };
        return BladeTopComponent;
    }());
    BladeTopComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-blade-top',
                    template: "<section \r\n    class=\"blade-top gradient-h-blue width-control flex-group\"\r\n    [ngClass]=\"{'show-top-blade box-shadow-light' : isOpen}\"\r\n    [ngStyle]=\"{\r\n        'left' : leftPos+'rem', \r\n        'right' : rightPos+'rem',\r\n        'margin-top' : topPos+'rem',\r\n        'z-index' : zIndex,\r\n        'max-height' : maxHeight+'rem'\r\n    }\">\r\n    <div class=\"flex-group flex-start\">\r\n        <div *ngIf=\"userProfile\" class=\"position-relative margin-top-1-5\">\r\n            <div class=\"flag {{countryFlag}}\"></div>\r\n            <div class=\"user-profile fingerprint\" \r\n                [ngStyle]=\"{\r\n                    'border' : borderThickness+'rem'+' solid '+borderColour, \r\n                    'border-style' : 'solid', \r\n                    'width' : profileSize+'rem', \r\n                    'height' : profileSize+'rem'\r\n                }\">\r\n                <ng-content select=\"[user-profile]\"></ng-content>\r\n            </div>\r\n        </div>\r\n        <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n    <div class=\"blade-top-controls flex-group\">\r\n        <button (click)=\"toggleThePin($event)\" class=\"material-icons pin flex-end margin-right-0-5\" [ngStyle]=\"{'transform': isPinned ? 'rotate(0deg)' : 'rotate(90deg)'}\">push_pin</button>\r\n        <button (click)=\"onClose()\" class=\"material-icons\">close</button>\r\n    </div>\r\n</section>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    BladeTopComponent.ctorParameters = function () { return []; };
    BladeTopComponent.propDecorators = {
        rightPos: [{ type: core.Input }],
        leftPos: [{ type: core.Input }],
        topPos: [{ type: core.Input }],
        zIndex: [{ type: core.Input }],
        maxHeight: [{ type: core.Input }],
        countryFlag: [{ type: core.Input }],
        paddingTop: [{ type: core.Input }],
        paddingRight: [{ type: core.Input }],
        paddingBottom: [{ type: core.Input }],
        paddingLeft: [{ type: core.Input }],
        userProfile: [{ type: core.Input }],
        borderColour: [{ type: core.Input }],
        profileSize: [{ type: core.Input }],
        borderThickness: [{ type: core.Input }],
        isOpen: [{ type: core.Input }],
        isPinned: [{ type: core.Input }],
        bladeOpen: [{ type: core.Output }],
        bladePinned: [{ type: core.Output }]
    };

    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
        }
        FooterComponent.prototype.ngOnInit = function () {
        };
        return FooterComponent;
    }());
    FooterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-footer',
                    template: "<footer class=\"{{colorClass}}\" [ngStyle]=\"{'left':leftPos+'rem', 'z-index':zIndex}\">\r\n  <ng-content></ng-content>\r\n</footer>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent.propDecorators = {
        leftPos: [{ type: core.Input }],
        zIndex: [{ type: core.Input }],
        colorClass: [{ type: core.Input }]
    };

    var ProjectTourComponent = /** @class */ (function () {
        function ProjectTourComponent() {
        }
        ProjectTourComponent.prototype.ngOnInit = function () {
        };
        return ProjectTourComponent;
    }());
    ProjectTourComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-project-tour',
                    template: "<div class=\"position-relative\">\r\n    <div [ngClass]=\"{'tour-active' : tourMode}\" [ngStyle]=\"tourMode && {'position' : 'relative', 'z-index' : zIndex+1}\">\r\n        <ng-content select=\"[nested-component]\"></ng-content>\r\n    </div>\r\n    <div *ngIf=\"tourMode\">\r\n      <div class=\"tour-mode-info\"\r\n          [ngStyle]=\"{\r\n              'width' : panelWidth,\r\n              'top' : topPos, \r\n              'right' : rightPos, \r\n              'bottom' : bottomPos,\r\n              'left' : leftPos,\r\n              'z-index' : zIndex+1\r\n          }\">\r\n          \r\n          <div *ngIf=\"arrowTop\" class=\"arrow-top\" [ngStyle]=\"{'left' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n          <div *ngIf=\"arrowRight\" class=\"arrow-right\" [ngStyle]=\"{'top' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n          <div *ngIf=\"arrowBottom\" class=\"arrow-bottom\" [ngStyle]=\"{'left' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n          <div *ngIf=\"arrowLeft\" class=\"arrow-left\" [ngStyle]=\"{'top' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n\r\n          <div class=\"tour-content\">\r\n            <h3 *ngIf=\"enableHeading\">{{tourModeHeading}}</h3>\r\n            <p>\r\n              {{tourModeBody}}\r\n            </p>\r\n          </div>\r\n          <div class=\"tour-navigation flex-group flex-column\">\r\n            <ng-content select=\"[tour-navigation]\"></ng-content>\r\n          </div>\r\n        </div>\r\n      <div class=\"tour-mode-overlay\" [ngStyle]=\"{'z-index':zIndex}\"></div>\r\n    </div>\r\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    ProjectTourComponent.ctorParameters = function () { return []; };
    ProjectTourComponent.propDecorators = {
        tourMode: [{ type: core.Input }],
        enableHeading: [{ type: core.Input }],
        tourModeHeading: [{ type: core.Input }],
        tourModeBody: [{ type: core.Input }],
        topPos: [{ type: core.Input }],
        rightPos: [{ type: core.Input }],
        bottomPos: [{ type: core.Input }],
        leftPos: [{ type: core.Input }],
        panelWidth: [{ type: core.Input }],
        arrowPos: [{ type: core.Input }],
        arrowTop: [{ type: core.Input }],
        arrowRight: [{ type: core.Input }],
        arrowBottom: [{ type: core.Input }],
        arrowLeft: [{ type: core.Input }],
        arrowIsPlum: [{ type: core.Input }],
        zIndex: [{ type: core.Input }]
    };

    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        return LayoutModule;
    }());
    LayoutModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        BladeComponent,
                        FooterComponent,
                        BladeFooterComponent,
                        BladeBottomComponent,
                        BladeTopComponent,
                        ProjectTourComponent,
                    ],
                    imports: [common.CommonModule, router.RouterModule],
                    exports: [
                        BladeComponent,
                        FooterComponent,
                        BladeFooterComponent,
                        BladeBottomComponent,
                        BladeTopComponent,
                        ProjectTourComponent,
                    ],
                },] }
    ];

    var ContextMenuComponent = /** @class */ (function () {
        function ContextMenuComponent(elementRef) {
            this.elementRef = elementRef;
        }
        ContextMenuComponent.prototype.onClick = function (targetElement) {
            var clickedInside = this.elementRef.nativeElement.contains(targetElement);
            if (!clickedInside) {
                this.showContextMenu = false;
            }
        };
        ContextMenuComponent.prototype.open = function () {
            this.showContextMenu = true;
        };
        ContextMenuComponent.prototype.close = function () {
            this.showContextMenu = false;
        };
        ContextMenuComponent.prototype.ngOnInit = function () {
        };
        return ContextMenuComponent;
    }());
    ContextMenuComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-context-menu',
                    template: "<nav \r\n  class=\"context-menu flex-group width-control\" \r\n  [ngStyle]=\"{\r\n    'top' : topPos+'rem', \r\n    'left' : leftPos+'rem', \r\n    'right' : rightPos+'rem'\r\n  }\" \r\n  [ngClass]=\"{\r\n    'position-absolute' : absolutePosition\r\n  }\"\r\n  >\r\n  <div>\r\n    <button \r\n      (click)=\"showContextMenu=!showContextMenu\" \r\n      class=\"material-icons\">\r\n      more_vert\r\n    </button>\r\n  </div>\r\n  <ul \r\n    *ngIf=\"showContextMenu\" \r\n    class=\"strip-bullets\" \r\n    [ngClass]=\"{'show-on-left' : showOnLeft}\"\r\n    [ngStyle]=\"{'min-width' : minWidth+'rem'}\"\r\n  >\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    ContextMenuComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ContextMenuComponent.propDecorators = {
        absolutePosition: [{ type: core.Input }],
        leftPos: [{ type: core.Input }],
        topPos: [{ type: core.Input }],
        rightPos: [{ type: core.Input }],
        zIndex: [{ type: core.Input }],
        minWidth: [{ type: core.Input }],
        showOnLeft: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['document:click', ['$event.target'],] }]
    };

    var ContextMenuItemComponent = /** @class */ (function () {
        function ContextMenuItemComponent(router) {
            this.router = router;
        }
        ContextMenuItemComponent.prototype.onClick = function () {
            this.router.navigate([this.routerLink, 500]);
        };
        ContextMenuItemComponent.prototype.ngOnInit = function () {
        };
        return ContextMenuItemComponent;
    }());
    ContextMenuItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-context-menu-item',
                    template: "<li>\r\n    <a [routerLink]=\"routerLink\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">{{menuItemText}}</a>\r\n</li>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    ContextMenuItemComponent.ctorParameters = function () { return [
        { type: router.Router }
    ]; };
    ContextMenuItemComponent.propDecorators = {
        menuItemText: [{ type: core.Input }],
        routerLink: [{ type: core.Input }],
        routerLinkActive: [{ type: core.Input }],
        minWidth: [{ type: core.Input }]
    };

    var NavContextComponent = /** @class */ (function () {
        function NavContextComponent() {
        }
        NavContextComponent.prototype.toggle = function () {
            this.showMenu = !this.showMenu;
        };
        NavContextComponent.prototype.ngOnInit = function () {
        };
        return NavContextComponent;
    }());
    NavContextComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-nav-context',
                    template: "<nav class=\"nav-context\" \r\n    [ngStyle]=\"{\r\n        'width' : navWidth+'rem', \r\n        'left' : leftPos+'rem', \r\n        'top' : topPos+'rem', \r\n        'bottom' : bottomPos+'rem', \r\n        'z-index' : zIndex\r\n    }\">\r\n    <div class=\"nav-context-content\">\r\n        <button (click)=\"toggle()\" class=\"material-icons menu\">menu</button>\r\n        <ul [ngClass]=\"{'show-menu' : showMenu}\">\r\n            <ng-content></ng-content>\r\n        </ul>\r\n    </div>\r\n</nav>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    NavContextComponent.ctorParameters = function () { return []; };
    NavContextComponent.propDecorators = {
        navWidth: [{ type: core.Input }],
        topPos: [{ type: core.Input }],
        leftPos: [{ type: core.Input }],
        rightPos: [{ type: core.Input }],
        bottomPos: [{ type: core.Input }],
        zIndex: [{ type: core.Input }],
        showMenu: [{ type: core.Input }]
    };

    var ProgressIndicatorComponent = /** @class */ (function () {
        function ProgressIndicatorComponent() {
        }
        ProgressIndicatorComponent.prototype.ngOnInit = function () { };
        return ProgressIndicatorComponent;
    }());
    ProgressIndicatorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-progress-indicator',
                    template: "<li *ngIf=\"!iconsEnabled\" class=\"{{ progressClass }}\">\r\n  <div>{{ progressCount }}</div>\r\n  <a *ngIf=\"asLink\" href=\"{{ progressLink }}\">{{ progressLabel }}</a>\r\n  <span *ngIf=\"!asLink\">{{ progressLabel }}</span>\r\n</li>\r\n\r\n<li *ngIf=\"iconsEnabled\" class=\"align-center {{ progressClass }}\">\r\n  <i class=\"material-icons padding-x-0-25\">{{ iconName }}</i>\r\n  <a *ngIf=\"asLink\" href=\"{{ progressLink }}\">{{ progressLabel }}</a>\r\n  <span *ngIf=\"!asLink\">{{ progressLabel }}</span>\r\n</li>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    ProgressIndicatorComponent.ctorParameters = function () { return []; };
    ProgressIndicatorComponent.propDecorators = {
        asLink: [{ type: core.Input }],
        progressCount: [{ type: core.Input }],
        progressClass: [{ type: core.Input }],
        progressLink: [{ type: core.Input }],
        progressLabel: [{ type: core.Input }],
        iconsEnabled: [{ type: core.Input }],
        iconName: [{ type: core.Input }]
    };

    var StepperComponent = /** @class */ (function () {
        function StepperComponent() {
        }
        StepperComponent.prototype.ngOnInit = function () {
        };
        return StepperComponent;
    }());
    StepperComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-stepper',
                    template: "<div class=\"aa-stepper\">\r\n    <form formGroup=\"formName\">\r\n        <ul class=\"aa-stepper-header flex-group\">\r\n        <ng-content select=\"[steps-header]\"></ng-content>\r\n        </ul>\r\n        <section class=\"aa-stepper-content\">\r\n            <ng-content select=\"[steps-content]\"></ng-content>\r\n        </section>\r\n        <nav class=\"aa-stepper-footer\">\r\n            <ng-content select=\"[steps-footer]\"></ng-content>\r\n        </nav>\r\n    </form>\r\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    StepperComponent.ctorParameters = function () { return []; };
    StepperComponent.propDecorators = {
        formName: [{ type: core.Input }]
    };

    var TabNavigationContentDirective = /** @class */ (function () {
        function TabNavigationContentDirective(templateRef) {
            this.templateRef = templateRef;
        }
        return TabNavigationContentDirective;
    }());
    TabNavigationContentDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'ng-template[aaTabNavigationContent]'
                },] }
    ];
    TabNavigationContentDirective.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    var TabNavigationHeaderContentDirective = /** @class */ (function () {
        function TabNavigationHeaderContentDirective(templateRef) {
            this.templateRef = templateRef;
        }
        return TabNavigationHeaderContentDirective;
    }());
    TabNavigationHeaderContentDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'ng-template[aaTabNavigationHeaderContent]'
                },] }
    ];
    TabNavigationHeaderContentDirective.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    var TabNavigationItemComponent = /** @class */ (function () {
        function TabNavigationItemComponent() {
        }
        TabNavigationItemComponent.prototype.ngOnInit = function () { };
        TabNavigationItemComponent.prototype.ngAfterContentChecked = function () {
            this.templateRef = this.templateRefDirective && this.templateRefDirective.templateRef;
            this.templateRefHeader = this.templateRefHeaderDirective && this.templateRefHeaderDirective.templateRef;
        };
        Object.defineProperty(TabNavigationItemComponent.prototype, "route", {
            get: function () {
                return this.routerLink || this.tabRoute;
            },
            enumerable: false,
            configurable: true
        });
        return TabNavigationItemComponent;
    }());
    TabNavigationItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-tab-navigation-item',
                    template: "<!-- BELOW ONLY USED FOR ROUTER-OUTLET VERSION -->\r\n<ng-container *ngIf=\"!templateRef\">\r\n  <li [ngClass]=\"{'tab-disabled' : tabDisabled}\">\r\n    <a *ngIf=\"!tabDisabled\" [id]=\"tabId\" [routerLink]=\"route\">\r\n      {{ tabName }}\r\n      <span *ngIf=\"enableIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</span>\r\n    </a>\r\n    <span *ngIf=\"tabDisabled\">\r\n      {{ tabName }}\r\n      <span *ngIf=\"enableIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</span>\r\n    </span>\r\n  </li>\r\n</ng-container>\r\n",
                    styles: [""]
                },] }
    ];
    TabNavigationItemComponent.propDecorators = {
        templateRefDirective: [{ type: core.ContentChild, args: [TabNavigationContentDirective,] }],
        templateRefHeaderDirective: [{ type: core.ContentChild, args: [TabNavigationHeaderContentDirective,] }],
        tabId: [{ type: core.Input }],
        tabName: [{ type: core.Input }],
        activeColor: [{ type: core.Input }],
        enableIcons: [{ type: core.Input }],
        iconName: [{ type: core.Input }],
        iconColour: [{ type: core.Input }],
        enableCount: [{ type: core.Input }],
        tabCount: [{ type: core.Input }],
        tabRoute: [{ type: core.Input }],
        tabDisabled: [{ type: core.Input }],
        routerLink: [{ type: core.Input }],
        routerLinkActive: [{ type: core.Input }]
    };

    var TabNavigationComponent = /** @class */ (function () {
        function TabNavigationComponent() {
            this.autoChangeTabs = true;
            this.displayTabContent = true;
            this.tabClicked = new core.EventEmitter();
            this.tabChanged = new core.EventEmitter();
        }
        Object.defineProperty(TabNavigationComponent.prototype, "contentTabs", {
            get: function () {
                var _a;
                return (_a = this.tabNavigationItems) === null || _a === void 0 ? void 0 : _a.filter(function (tabNavigationItem) { return !!tabNavigationItem.templateRef; });
            },
            enumerable: false,
            configurable: true
        });
        TabNavigationComponent.prototype.ngOnInit = function () { };
        TabNavigationComponent.prototype.ngAfterContentInit = function () {
            if (this.contentTabs && this.contentTabs[0]) {
                this.changeTab(this.contentTabs[0]);
            }
        };
        TabNavigationComponent.prototype.isActive = function (tab) {
            return this.currentTab.tabName === tab.tabName;
        };
        TabNavigationComponent.prototype.onTabClicked = function (tab) {
            this.tabClicked.emit(tab);
            if (this.autoChangeTabs) {
                this.changeTab(tab);
            }
        };
        TabNavigationComponent.prototype.changeTab = function (tab) {
            this.currentTab = tab;
            this.tabChanged.emit(tab);
        };
        TabNavigationComponent.prototype.changeTabById = function (tabId) {
            var tab = this.contentTabs.find(function (x) { return x.tabId === tabId; });
            if (tab) {
                this.changeTab(tab);
            }
        };
        return TabNavigationComponent;
    }());
    TabNavigationComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-tab-navigation',
                    template: "\r\n<!-- ROUTER-OUTLET -->\r\n<nav *ngIf=\"routerOutlet\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n        <a *ngIf=\"!tab.tabDisabled\" [id]=\"tab.tabId\" [class.active]=\"isActive(tab)\" (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n          <span *ngIf=\"tab.enableIcons\" class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count\">{{tab.tabCount}}</span>\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\">\r\n          {{ tab.tabName }}\r\n          <span *ngIf=\"tab.enableIcons\" class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count\">{{tab.tabCount}}</span>\r\n        </span>\r\n      </li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- INFO-PANEL NG-TEMPLATE -->\r\n<div *ngIf=\"tabInfo\">\r\n  <nav class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n    <div class=\"float-right flex-group\">\r\n      <div class=\"flex-align-center\">\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">close_fullscreen</button>\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">open_in_full</button>\r\n      </div>\r\n    </div>\r\n    <ul class=\"flex-group flex-center\">\r\n      <ng-container *ngFor=\"let tab of contentTabs\">\r\n        <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n          <a class=\"{{tab.activeColor}}\" title=\"{{ tab.tabName }}\" *ngIf=\"!tab.tabDisabled\" [id]=\"tab.tabId\" (click)=\"onTabClicked(tab)\" [ngClass]=\"{'active': isActive(tab)}\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </a>\r\n          <span title=\"{{ tab.tabName }}\" *ngIf=\"tab.tabDisabled\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </span>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n  </nav>\r\n  \r\n  <ng-container *ngIf=\"displayTabContent && currentTab\">\r\n    <ng-template *ngTemplateOutlet=\"currentTab.templateRef\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<!-- INFO PANEL ROUTER-OUTLET -->\r\n<nav *ngIf=\"tabInfoRouterOutlet\" class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n  <div class=\"float-right flex-group\">\r\n    <div class=\"flex-align-center\">\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"material-icons\">close_fullscreen</button>\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"material-icons\">open_in_full</button>\r\n    </div>\r\n  </div>\r\n  <ul class=\"flex-group flex-center\">\r\n    <ng-content select=\"[tabs]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n",
                    styles: [""]
                },] }
    ];
    TabNavigationComponent.ctorParameters = function () { return []; };
    TabNavigationComponent.propDecorators = {
        tabNavigationItems: [{ type: core.ContentChildren, args: [TabNavigationItemComponent,] }],
        autoChangeTabs: [{ type: core.Input }],
        displayTabContent: [{ type: core.Input }],
        tabInfo: [{ type: core.Input }],
        routerOutlet: [{ type: core.Input }],
        ngTemplate: [{ type: core.Input }],
        tabInfoRouterOutlet: [{ type: core.Input }],
        enableIcons: [{ type: core.Input }],
        enableCount: [{ type: core.Input }],
        tabCount: [{ type: core.Input }],
        iconName: [{ type: core.Input }],
        iconColour: [{ type: core.Input }],
        toggleFullscreen: [{ type: core.Input }],
        activeColor: [{ type: core.Input }],
        standardTabs: [{ type: core.Input }],
        tabClicked: [{ type: core.Output }],
        tabChanged: [{ type: core.Output }]
    };

    var TabNavigationSecondaryComponent = /** @class */ (function () {
        function TabNavigationSecondaryComponent() {
        }
        TabNavigationSecondaryComponent.prototype.ngOnInit = function () {
        };
        return TabNavigationSecondaryComponent;
    }());
    TabNavigationSecondaryComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-tab-navigation-secondary',
                    template: "<nav class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    TabNavigationSecondaryComponent.ctorParameters = function () { return []; };

    var TabNavigationSecondaryItemComponent = /** @class */ (function () {
        function TabNavigationSecondaryItemComponent() {
            this.text = 'Click me';
            this.secondaryTabClick = new core.EventEmitter();
        }
        TabNavigationSecondaryItemComponent.prototype.onClick = function (event) {
            console.log('secondary tab clicked');
            this.secondaryTabClick.emit(event);
        };
        TabNavigationSecondaryItemComponent.prototype.ngOnInit = function () {
        };
        return TabNavigationSecondaryItemComponent;
    }());
    TabNavigationSecondaryItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-tab-navigation-secondary-item',
                    template: "<li><a (click)=\"onClick($event)\" [class.active]=\"isActive\">{{secondaryTabName}}</a></li>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    TabNavigationSecondaryItemComponent.ctorParameters = function () { return []; };
    TabNavigationSecondaryItemComponent.propDecorators = {
        isActive: [{ type: core.Input }],
        secondaryTabName: [{ type: core.Input }],
        text: [{ type: core.Input }],
        secondaryTabClick: [{ type: core.Output }]
    };

    var NavigationModule = /** @class */ (function () {
        function NavigationModule() {
        }
        return NavigationModule;
    }());
    NavigationModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        ContextMenuComponent,
                        ContextMenuItemComponent,
                        NavContextComponent,
                        ProgressIndicatorComponent,
                        StepperComponent,
                        TabNavigationComponent,
                        TabNavigationItemComponent,
                        TabNavigationSecondaryComponent,
                        TabNavigationSecondaryItemComponent,
                        TabNavigationContentDirective,
                        TabNavigationHeaderContentDirective
                    ],
                    imports: [common.CommonModule, router.RouterModule],
                    exports: [
                        ContextMenuComponent,
                        ContextMenuItemComponent,
                        NavContextComponent,
                        StepperComponent,
                        ProgressIndicatorComponent,
                        TabNavigationComponent,
                        TabNavigationItemComponent,
                        TabNavigationSecondaryComponent,
                        TabNavigationSecondaryItemComponent,
                        TabNavigationContentDirective,
                        TabNavigationHeaderContentDirective
                    ]
                },] }
    ];

    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
        }
        AlertComponent.prototype.ngOnInit = function () {
        };
        return AlertComponent;
    }());
    AlertComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-alert',
                    template: "<div role=\"alert\" class={{alertClass}}>{{alertText}}</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    AlertComponent.ctorParameters = function () { return []; };
    AlertComponent.propDecorators = {
        alertClass: [{ type: core.Input }],
        alertText: [{ type: core.Input }]
    };

    var AnchorBackComponent = /** @class */ (function () {
        function AnchorBackComponent() {
        }
        AnchorBackComponent.prototype.ngOnInit = function () { };
        return AnchorBackComponent;
    }());
    AnchorBackComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-anchor-back',
                    template: "<a class=\"anchor-back\" [attr.href]=\"anchorURL\">{{anchorBackText}}</a>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    AnchorBackComponent.propDecorators = {
        anchorBackText: [{ type: core.Input }],
        anchorURL: [{ type: core.Input }]
    };

    var ProgressBarComponent = /** @class */ (function () {
        function ProgressBarComponent() {
        }
        ProgressBarComponent.prototype.ngOnInit = function () {
        };
        return ProgressBarComponent;
    }());
    ProgressBarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-progress-bar',
                    template: "<div class=\"progress-bar\" [ngStyle]=\"{'width' : maxWidth+'rem'}\">\r\n    <span>\r\n        <strong>{{titleBold}} </strong>\r\n        <span>{{titleRegular}}</span>\r\n    </span>\r\n    <div class=\"progress\"><div [ngStyle]=\"{'width' : complete+'%'}\"></div></div>\r\n    <div class=\"flex-group space-between\">\r\n        <div>{{leftSideText}}</div>\r\n        <div>{{rightSideText}}</div>\r\n    </div>\r\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    ProgressBarComponent.ctorParameters = function () { return []; };
    ProgressBarComponent.propDecorators = {
        titleBold: [{ type: core.Input }],
        titleRegular: [{ type: core.Input }],
        leftSideText: [{ type: core.Input }],
        rightSideText: [{ type: core.Input }],
        complete: [{ type: core.Input }],
        maxWidth: [{ type: core.Input }]
    };

    var ProgressCircleComponent = /** @class */ (function () {
        function ProgressCircleComponent() {
        }
        ProgressCircleComponent.prototype.ngOnInit = function () {
        };
        return ProgressCircleComponent;
    }());
    ProgressCircleComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-progress-circle',
                    template: "<div *ngIf=\"!isSmall\" class=\"progress-circle\" [ngClass]=\"{'panel-view' : panelView}\">\r\n  <h3 class=\"flex-center title\" [ngClass]=\"{'padding-right-1' : enableTooltip}\">\r\n    <span title=\"{{name}}\">{{ (name.length>19)? (name | slice:0:19)+'...':(name) }}</span>\r\n    <div *ngIf=\"enableTooltip\" class=\"aa-tooltip icon-info margin-left-0-25\" [ngStyle]=\"{'position' : 'absolute', 'right' : '.75rem'}\">\r\n      <div class=\"feature-box {{xpos}} {{ypos}}\" [ngStyle]=\"{'min-width' : tooltipMinWidth+'rem'}\">\r\n        <p>{{tooltipBody}}</p>\r\n      </div>\r\n    </div>\r\n    <span *ngIf=\"panelView\" class=\"material-icons\">chevron_right</span>\r\n  </h3>\r\n  <div class=\"percent\">\r\n    <svg viewBox=\"20 0 60 100\">\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.3', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (250 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n    </svg>\r\n    <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n  </div>\r\n  <span class=\"align-center number\" *ngIf=\"panelView\">{{value}}</span>\r\n</div>\r\n\r\n<li *ngIf=\"isSmall\" class=\"flex-group flex-start\">\r\n  <div class=\"progress-circle small margin-right-0-5\">\r\n    <div class=\"percent\">\r\n      <svg>\r\n        <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.2', 'stroke': colour }\" cx=\"15\" cy=\"15\" r=\"15\"></circle>\r\n        <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (92 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"15\" cy=\"15\" r=\"15\"></circle>\r\n      </svg>\r\n      <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"margin-top-0-75\">{{name}}</div>\r\n</li>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    ProgressCircleComponent.ctorParameters = function () { return []; };
    ProgressCircleComponent.propDecorators = {
        name: [{ type: core.Input }],
        percent: [{ type: core.Input }],
        value: [{ type: core.Input }],
        colour: [{ type: core.Input }],
        isSmall: [{ type: core.Input }],
        panelView: [{ type: core.Input }],
        enableTooltip: [{ type: core.Input }],
        tooltipTitle: [{ type: core.Input }],
        tooltipBody: [{ type: core.Input }],
        xpos: [{ type: core.Input }],
        ypos: [{ type: core.Input }],
        tooltipMinWidth: [{ type: core.Input }]
    };

    var PatternsModule = /** @class */ (function () {
        function PatternsModule() {
        }
        return PatternsModule;
    }());
    PatternsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [AlertComponent, AnchorBackComponent, ProgressBarComponent, ProgressCircleComponent],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [AlertComponent, AnchorBackComponent, ProgressBarComponent, ProgressCircleComponent]
                },] }
    ];

    var IconFilterPipe = /** @class */ (function () {
        function IconFilterPipe() {
        }
        IconFilterPipe.prototype.transform = function (items, searchIcon) {
            if (!items) {
                return [];
            }
            if (!searchIcon) {
                return items;
            }
            return items.filter(function (it) {
                return it.toLocaleLowerCase().includes(searchIcon);
            });
        };
        return IconFilterPipe;
    }());
    IconFilterPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'iconFilter' },] }
    ];

    var AccordionComponent = /** @class */ (function () {
        function AccordionComponent() {
            this.open = new core.EventEmitter();
        }
        AccordionComponent.prototype.onOpen = function (e) {
            if (this.disabled !== true) {
                this.open.emit();
                this.showBody = !this.showBody;
                e.stopPropagation();
            }
        };
        AccordionComponent.prototype.ngOnInit = function () {
        };
        return AccordionComponent;
    }());
    AccordionComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-accordion',
                    template: "<article class=\"accordion-container\">\r\n  <h3 class=\"margin-0\">\r\n    <button \r\n      class=\"accordion-trigger flex-group space-between border-none\" \r\n      (click)=\"onOpen($event)\" \r\n      [attr.aria-expanded.true]=\"showBody\"\r\n      [ngClass]=\"{'expanded' : showBody, 'clean' : accordionClean, 'disabled' : disabled}\"\r\n      aria-controls=\"sectionId\" \r\n      [id]=\"accordionId\" \r\n      type=\"button\">\r\n        <span class=\"flex-align-center height-3\">\r\n            <span *ngIf=\"dragable\" class=\"accordion-icon material-icons\">drag_indicator</span>\r\n            <span *ngIf=\"iconsEnabled && !fontAwesome\" class=\"accordion-icon material-icons icon-body-text {{iconBgColor}}\">{{iconName}}</span>\r\n            <span *ngIf=\"iconsEnabled && fontAwesome\" class=\"accordion-icon {{fontClassName}}\"></span>\r\n            <span class=\"accordion-heading\">{{accordionHeading}}</span>\r\n        </span>\r\n        <div class=\"flex-group flex-end flex-align-center height-3\">\r\n          <ng-content select=\"[header-custom]\"></ng-content>\r\n          <div [class.icon-chevron-down]=\"!showBody\" [class.icon-chevron-up]=\"showBody\"\r\n                class=\"icon-body-text\"></div>\r\n        </div>\r\n    </button>\r\n  </h3>\r\n  <div *ngIf=\"showBody\" [id]=\"sectionId\" class=\"accordion-panel\" [ngClass]=\"{'clean': accordionClean}\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</article>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    AccordionComponent.ctorParameters = function () { return []; };
    AccordionComponent.propDecorators = {
        showBody: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        iconsEnabled: [{ type: core.Input }],
        dragable: [{ type: core.Input }],
        sectionId: [{ type: core.Input }],
        accordionHeading: [{ type: core.Input }],
        accordionId: [{ type: core.Input }],
        iconName: [{ type: core.Input }],
        accordionClean: [{ type: core.Input }],
        fontAwesome: [{ type: core.Input }],
        fontClassName: [{ type: core.Input }],
        iconBgColor: [{ type: core.Input }],
        open: [{ type: core.Output }]
    };

    var AccordionFancyComponent = /** @class */ (function () {
        function AccordionFancyComponent() {
        }
        AccordionFancyComponent.prototype.ngOnInit = function () {
        };
        return AccordionFancyComponent;
    }());
    AccordionFancyComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-accordion-fancy',
                    template: "<section [id]=\"accordionId\">\r\n  <h3 class=\"margin-0\">\r\n    <button class=\"accordion-fancy-trigger box flex-group flex-align-center space-between\" (click)=\"showBody=!showBody\"\r\n        [attr.aria-expanded.true]=\"showBody\" aria-controls=\"accordionId\" type=\"button\">\r\n        <div class=\"flex-align-center\">\r\n          <div *ngIf=\"materialIcons\" class=\"material-icons width-3 margin-right-0-5 {{iconColour}}\">{{iconName}}</div>\r\n          <div *ngIf=\"!materialIcons\" class=\"width-3 {{iconName}}\"></div>\r\n          <span>{{itemTitle}}</span>\r\n        </div>\r\n        <div class=\"aa-toggle flex-align-center\">\r\n          <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n          <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n        </div>\r\n    </button>\r\n  </h3>\r\n  <div *ngIf=\"showBody\" class=\"accordion-fancy-panel\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    AccordionFancyComponent.ctorParameters = function () { return []; };
    AccordionFancyComponent.propDecorators = {
        showBody: [{ type: core.Input }],
        materialIcons: [{ type: core.Input }],
        itemTitle: [{ type: core.Input }],
        accordionId: [{ type: core.Input }],
        iconName: [{ type: core.Input }],
        iconColour: [{ type: core.Input }]
    };

    var CardComponent = /** @class */ (function () {
        function CardComponent() {
            this.cardClick = new core.EventEmitter();
        }
        CardComponent.prototype.onCardClick = function (e) {
            this.cardClick.emit(e);
            e.stopPropagation();
        };
        CardComponent.prototype.ngOnInit = function () {
        };
        return CardComponent;
    }());
    CardComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-card',
                    template: "<article \r\n  *ngIf=\"!cardOptional && !cardMini\" \r\n  class=\"aa-card flex-group width-control\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex,\r\n    'top' : topPos+'rem',\r\n    'left' : leftPos+'rem',\r\n    'right' : rightPos+'rem'\r\n  }\"\r\n>\r\n  <div class=\"card-image fingerprint border-light\">\r\n    <img alt=\"{{cardName}}\" onerror=\"this.style.display='none'\" [src]=\"imgPath\">\r\n  </div>\r\n  <div>\r\n    <h3 title=\"{{cardName}}\">{{cardName}}</h3>\r\n    <p title=\"{{cardRole}}\">{{cardRole}}</p>\r\n    <div class=\"aa-toolbar\">\r\n      <ng-content select=\"[card-menu]\"></ng-content>\r\n    </div>\r\n  </div>\r\n</article>\r\n\r\n<article *ngIf=\"cardOptional && !cardMini\" class=\"aa-card-opt margin-bottom-0-75 box-shadow-light\" [ngStyle]=\"{'z-index' : zIndex}\">\r\n    <div class=\"flex-group flex-end flex-align-center\">\r\n      <ng-content select=\"[card-menu-opt]\"></ng-content>\r\n    </div>\r\n    <div class=\"cursor-pointer\" (click)=\"onCardClick($event)\">\r\n      <div class=\"card-image fingerprint\" [ngStyle]=\"{'border' : '.35rem solid ' +themeColour, 'background-color' : themeColour}\">\r\n        <img alt=\"{{cardName}}\" onerror=\"this.style.display='none'\" [src]=\"imgPath\">\r\n      </div>\r\n      <h3 title=\"{{cardName}}\" [ngStyle]=\"{'color' : themeColour }\">{{ (cardName.length>14)? (cardName | slice:0:14)+'...':(cardName) }}</h3>\r\n      <p title=\"{{cardRole}}\">{{ (cardRole.length>37)? (cardRole | slice:0:37)+'...':(cardRole) }}</p>\r\n    </div>\r\n</article>\r\n\r\n<button *ngIf=\"cardMini && !cardOptional\" class=\"card-mini flex-align-center flex-start {{borderClass}}\">\r\n  <div *ngIf=\"showAsIcon\" class=\"material-icons\">{{iconName}}</div>\r\n  <div *ngIf=\"showAsProfile\" class=\"card-image fingerprint\">\r\n    <ng-content select=\"[profile-image]\"></ng-content>\r\n  </div>\r\n  <div>\r\n    <h5>{{title}}</h5>\r\n    <ng-content select=\"[content]\"></ng-content>\r\n  </div>\r\n</button>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    CardComponent.ctorParameters = function () { return []; };
    CardComponent.propDecorators = {
        cardName: [{ type: core.Input }],
        cardRole: [{ type: core.Input }],
        cardOptional: [{ type: core.Input }],
        cardMini: [{ type: core.Input }],
        themeColour: [{ type: core.Input }],
        zIndex: [{ type: core.Input }],
        imgPath: [{ type: core.Input }],
        title: [{ type: core.Input }],
        showAsIcon: [{ type: core.Input }],
        showAsProfile: [{ type: core.Input }],
        iconName: [{ type: core.Input }],
        borderClass: [{ type: core.Input }],
        topPos: [{ type: core.Input }],
        rightPos: [{ type: core.Input }],
        leftPos: [{ type: core.Input }],
        cardClick: [{ type: core.Output }]
    };

    var DashboardContainerComponent = /** @class */ (function () {
        function DashboardContainerComponent() {
        }
        DashboardContainerComponent.prototype.ngOnInit = function () {
        };
        return DashboardContainerComponent;
    }());
    DashboardContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-dashboard-container',
                    template: "<article class=\"dashboard-container\" [id]=\"dashboardId\">\r\n  <h3 [class]=\"'dashboard-heading flex-group space-between ' + headerColor\">\r\n    <span>{{dashboardHeading}}</span>\r\n    <!-- <span class=\"icon-drag\"></span> -->\r\n  </h3>\r\n  <ng-content></ng-content>\r\n</article>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    DashboardContainerComponent.ctorParameters = function () { return []; };
    DashboardContainerComponent.propDecorators = {
        dashboardId: [{ type: core.Input }],
        dashboardHeading: [{ type: core.Input }],
        headerColor: [{ type: core.Input }]
    };

    var DashboardFavouritesComponent = /** @class */ (function () {
        function DashboardFavouritesComponent() {
            this.favClick = new core.EventEmitter();
            this.anchorClick = new core.EventEmitter();
        }
        DashboardFavouritesComponent.prototype.onFavClick = function (event) {
            this.favClick.emit(event);
        };
        DashboardFavouritesComponent.prototype.onAnchorClick = function (event) {
            event.preventDefault();
            this.anchorClick.emit(event);
        };
        DashboardFavouritesComponent.prototype.ngOnInit = function () {
        };
        return DashboardFavouritesComponent;
    }());
    DashboardFavouritesComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-dashboard-favourites',
                    template: "<article class=\"dashboard-favourite\">\r\n  <div *ngIf=\"!materialIcons\" [class]=\"favIconClass\"></div>\r\n  <div *ngIf=\"materialIcons\" class=\"material-icons {{iconColour}}\">{{favIconClass}}</div>\r\n  <a (click)=\"onAnchorClick($event)\" [attr.href]=\"favouritesURL\">{{(favouritesTitle.length>35)? (favouritesTitle | slice:0:35)+'...':(favouritesTitle)}}</a>\r\n  <button (click)=\"onFavClick($event)\" [class.selected]=\"isFavourite\" class=\"icon-star-favourites transparent\"></button>\r\n  <div class=\"hover-card animate-all\">\r\n    <div class=\"field boxed\">\r\n      <label>Tags</label>\r\n      <p>{{tagName}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Last viewed</label>\r\n      <p>{{lastViewed}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Title</label>\r\n      <p>{{favouritesTitle}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Description</label>\r\n      <p>{{favDescription}}</p>\r\n    </div>\r\n  </div>\r\n</article>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    DashboardFavouritesComponent.ctorParameters = function () { return []; };
    DashboardFavouritesComponent.propDecorators = {
        isFavourite: [{ type: core.Input }],
        favouritesTitle: [{ type: core.Input }],
        favouritesText: [{ type: core.Input }],
        favouritesURL: [{ type: core.Input }],
        favIconClass: [{ type: core.Input }],
        iconColour: [{ type: core.Input }],
        materialIcons: [{ type: core.Input }],
        tagName: [{ type: core.Input }],
        favDescription: [{ type: core.Input }],
        lastViewed: [{ type: core.Input }],
        favClick: [{ type: core.Output }],
        anchorClick: [{ type: core.Output }]
    };

    var DashboardFavouritesListComponent = /** @class */ (function () {
        function DashboardFavouritesListComponent() {
            this.text = 'Click me';
            this.favClick = new core.EventEmitter();
            this.anchorClick = new core.EventEmitter();
        }
        DashboardFavouritesListComponent.prototype.onFavClick = function (event) {
            this.favClick.emit(event);
        };
        DashboardFavouritesListComponent.prototype.onAnchorClick = function (event) {
            event.preventDefault();
            this.anchorClick.emit(event);
        };
        DashboardFavouritesListComponent.prototype.ngOnInit = function () {
        };
        return DashboardFavouritesListComponent;
    }());
    DashboardFavouritesListComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-dashboard-favourites-list',
                    template: "<div class=\"accordion-favourites-list\">\r\n  <div class=\"flex-group flex-start flex-align-center\">\r\n    <button (click)=\"onFavClick($event)\" class=\"icon-star-favourites transparent width-3 margin-right-0-5\" [class.selected]=\"isFavourite\"></button>\r\n    <div class=\"margin-top-1 margin-bottom-0-75\">\r\n      <a (click)=\"onAnchorClick($event)\" class=\"anchor-underline\" title=\"{{itemAnchorTitle}}\"\r\n         type=\"button\" [attr.href]=\"itemAnchorURL\">{{(itemAnchor.length > 50) ? (itemAnchor | slice:0:50) + '...' : (itemAnchor)}}</a><br/>\r\n      <div class=\"margin-top-0-25\">{{(itemDescription.length > 50) ? (itemDescription | slice:0:50) + '...' : (itemDescription)}}</div>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"showTags=!showTags\" class=\"icon-info\"></div>\r\n  <div *ngIf=\"showTags\" class=\"width-100\">\r\n    <div class=\"more-info\">\r\n      <div class=\"field boxed\">\r\n        <label>Tags</label>\r\n        <p>{{tagName}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Last viewed</label>\r\n        <p>{{lastViewed}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Title</label>\r\n        <p>{{favouritesTitle}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Description</label>\r\n        <p>{{favDescription}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    DashboardFavouritesListComponent.ctorParameters = function () { return []; };
    DashboardFavouritesListComponent.propDecorators = {
        isFavourite: [{ type: core.Input }],
        showTags: [{ type: core.Input }],
        itemAnchorTitle: [{ type: core.Input }],
        itemAnchorURL: [{ type: core.Input }],
        itemAnchor: [{ type: core.Input }],
        itemTitle: [{ type: core.Input }],
        itemDescription: [{ type: core.Input }],
        showBody: [{ type: core.Input }],
        favouriteId: [{ type: core.Input }],
        iconName: [{ type: core.Input }],
        tagName: [{ type: core.Input }],
        lastViewed: [{ type: core.Input }],
        favouritesTitle: [{ type: core.Input }],
        favDescription: [{ type: core.Input }],
        text: [{ type: core.Input }],
        favClick: [{ type: core.Output }],
        anchorClick: [{ type: core.Output }]
    };

    var FavouritesComponent = /** @class */ (function () {
        function FavouritesComponent() {
            this.favClick = new core.EventEmitter();
            this.anchorClick = new core.EventEmitter();
        }
        FavouritesComponent.prototype.onFavClick = function (event) {
            this.favClick.emit(event);
        };
        FavouritesComponent.prototype.onAnchorClick = function (event) {
            this.anchorClick.emit(event);
        };
        FavouritesComponent.prototype.ngOnInit = function () {
        };
        return FavouritesComponent;
    }());
    FavouritesComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-favourites',
                    template: "<article class=\"feature-box solid favourite\">\r\n  <a (click)=\"onFavClick($event)\" class=\"margin-left-2\">{{(favouritesTitle.length>40)? (favouritesTitle | slice:0:40)+'...':(favouritesTitle)}}</a>\r\n  <button (click)=\"onAnchorClick($event)\" [class.selected]=\"isFavourite\" class=\"icon-star transparent\"><span>Click to add as favourite</span></button>\r\n  <p>{{(favouritesText.length>120)? (favouritesText | slice:0:120)+'...':(favouritesText)}}</p>\r\n</article>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    FavouritesComponent.ctorParameters = function () { return []; };
    FavouritesComponent.propDecorators = {
        isFavourite: [{ type: core.Input }],
        favouritesTitle: [{ type: core.Input }],
        favouritesText: [{ type: core.Input }],
        favClick: [{ type: core.Output }],
        anchorClick: [{ type: core.Output }]
    };

    var FavouritesListComponent = /** @class */ (function () {
        function FavouritesListComponent() {
            this.text = 'Click me';
            this.favClick = new core.EventEmitter();
            this.anchorClick = new core.EventEmitter();
        }
        FavouritesListComponent.prototype.onFavClick = function (event) {
            this.favClick.emit(event);
        };
        FavouritesListComponent.prototype.onAnchorClick = function (event) {
            this.anchorClick.emit(event);
        };
        FavouritesListComponent.prototype.ngOnInit = function () {
        };
        return FavouritesListComponent;
    }());
    FavouritesListComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-favourites-list',
                    template: "<div class=\"flex-group width-control repeatable\">\r\n  <button (click)=\"onFavClick($event)\" class=\"button-star icon-orange one-rem\" [class.selected]=\"isFavourite\"></button>\r\n  <div><a (click)=\"onAnchorClick($event)\" title=\"{{itemAnchorTitle}}\" type=\"button\">{{itemAnchor}}</a></div>\r\n  <div>{{itemDescription}}</div>\r\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    FavouritesListComponent.ctorParameters = function () { return []; };
    FavouritesListComponent.propDecorators = {
        isFavourite: [{ type: core.Input }],
        itemAnchorTitle: [{ type: core.Input }],
        itemAnchor: [{ type: core.Input }],
        itemDescription: [{ type: core.Input }],
        text: [{ type: core.Input }],
        favClick: [{ type: core.Output }],
        anchorClick: [{ type: core.Output }]
    };

    var IconPickerComponent = /** @class */ (function () {
        function IconPickerComponent() {
            this.searchIcon = '';
            this.selectedIcon = '';
            this.selectedColor = 'aa-light-blue-100';
            this.icons = ['3d_rotation', 'ac_unit', 'access_alarm', 'access_alarms', 'access_time', 'accessibility', 'accessible', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'adb', 'add', 'add_a_photo', 'add_alarm', 'add_alert', 'add_box', 'add_circle', 'add_circle_outline', 'add_location', 'add_shopping_cart', 'add_to_photos', 'add_to_queue', 'adjust', 'airline_seat_flat', 'airline_seat_flat_angled', 'airline_seat_individual_suite', 'airline_seat_legroom_extra', 'airline_seat_legroom_normal', 'airline_seat_legroom_reduced', 'airline_seat_recline_extra', 'airline_seat_recline_normal', 'airplanemode_active', 'airplanemode_inactive', 'airplay', 'airport_shuttle', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'album', 'all_inclusive', 'all_out', 'android', 'announcement', 'apps', 'archive', 'arrow_back', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward', 'arrow_upward', 'art_track', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_return', 'assignment_returned', 'assignment_turned_in', 'assistant', 'assistant_photo', 'attach_file', 'attach_money', 'attachment', 'audiotrack', 'autorenew', 'av_timer', 'backspace', 'backup', 'battery_alert', 'battery_charging_full', 'battery_full', 'battery_std', 'battery_unknown', 'beach_access', 'beenhere', 'block', 'bluetooth', 'bluetooth_audio', 'bluetooth_connected', 'bluetooth_disabled', 'bluetooth_searching', 'blur_circular', 'blur_linear', 'blur_off', 'blur_on', 'book', 'bookmark', 'bookmark_border', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer', 'border_right', 'border_style', 'border_top', 'border_vertical', 'branding_watermark', 'brightness_1', 'brightness_2', 'brightness_3', 'brightness_4', 'brightness_5', 'brightness_6', 'brightness_7', 'brightness_auto', 'brightness_high', 'brightness_low', 'brightness_medium', 'broken_image', 'brush', 'bubble_chart', 'bug_report', 'build', 'burst_mode', 'business', 'business_center', 'cached', 'cake', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_missed_outgoing', 'call_received', 'call_split', 'call_to_action', 'camera', 'camera_alt', 'camera_enhance', 'camera_front', 'camera_rear', 'camera_roll', 'cancel', 'card_giftcard', 'card_membership', 'card_travel', 'casino', 'cast', 'cast_connected', 'center_focus_strong', 'center_focus_weak', 'change_history', 'chat', 'chat_bubble', 'chat_bubble_outline', 'check', 'check_box', 'check_box_outline_blank', 'check_circle', 'chevron_left', 'chevron_right', 'child_care', 'child_friendly', 'chrome_reader_mode', 'class', 'clear', 'clear_all', 'close', 'closed_caption', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_upload', 'code', 'collections', 'collections_bookmark', 'color_lens', 'colorize', 'comment', 'compare', 'compare_arrows', 'computer', 'confirmation_number', 'contact_mail', 'contact_phone', 'contacts', 'content_copy', 'content_cut', 'content_paste', 'control_point', 'control_point_duplicate', 'copyright', 'create', 'create_new_folder', 'credit_card', 'crop', 'crop_16_9', 'crop_3_2', 'crop_5_4', 'crop_7_5', 'crop_din', 'crop_free', 'crop_landscape', 'crop_original', 'crop_portrait', 'crop_rotate', 'crop_square', 'dashboard', 'data_usage', 'date_range', 'dehaze', 'delete', 'delete_forever', 'delete_sweep', 'description', 'desktop_mac', 'desktop_windows', 'details', 'developer_board', 'developer_mode', 'device_hub', 'devices', 'devices_other', 'dialer_sip', 'dialpad', 'directions', 'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway', 'directions_run', 'directions_subway', 'directions_transit', 'directions_walk', 'disc_full', 'dns', 'do_not_disturb', 'do_not_disturb_alt', 'do_not_disturb_off', 'do_not_disturb_on', 'dock', 'domain', 'done', 'done_all', 'donut_large', 'donut_small', 'drafts', 'drag_handle', 'drive_eta', 'dvr', 'edit', 'edit_location', 'eject', 'email', 'enhanced_encryption', 'equalizer', 'error', 'error_outline', 'euro_symbol', 'ev_station', 'event', 'event_available', 'event_busy', 'event_note', 'event_seat', 'exit_to_app', 'expand_less', 'expand_more', 'explicit', 'explore', 'exposure', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'extension', 'face', 'fast_forward', 'fast_rewind', 'favorite', 'favorite_border', 'featured_play_list', 'featured_video', 'feedback', 'fiber_dvr', 'fiber_manual_record', 'fiber_new', 'fiber_pin', 'fiber_smart_record', 'file_download', 'file_upload', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_9_plus', 'filter_b_and_w', 'filter_center_focus', 'filter_drama', 'filter_frames', 'filter_hdr', 'filter_list', 'filter_none', 'filter_tilt_shift', 'filter_vintage', 'find_in_page', 'find_replace', 'fingerprint', 'first_page', 'fitness_center', 'flag', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flight', 'flight_land', 'flight_takeoff', 'flip', 'flip_to_back', 'flip_to_front', 'folder', 'folder_open', 'folder_shared', 'folder_special', 'font_download', 'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right', 'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic', 'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_paint', 'format_quote', 'format_shapes', 'format_size', 'format_strikethrough', 'format_textdirection_l_to_r', 'format_textdirection_r_to_l', 'format_underlined', 'forum', 'forward', 'forward_10', 'forward_30', 'forward_5', 'free_breakfast', 'fullscreen', 'fullscreen_exit', 'functions', 'g_translate', 'gamepad', 'games', 'gavel', 'gesture', 'get_app', 'gif', 'golf_course', 'gps_fixed', 'gps_not_fixed', 'gps_off', 'grade', 'gradient', 'grain', 'graphic_eq', 'grid_off', 'grid_on', 'group', 'group_add', 'group_work', 'hd', 'hdr_off', 'hdr_on', 'hdr_strong', 'hdr_weak', 'headset', 'headset_mic', 'healing', 'hearing', 'help', 'help_outline', 'high_quality', 'highlight', 'highlight_off', 'history', 'home', 'hot_tub', 'hotel', 'hourglass_empty', 'hourglass_full', 'http', 'https', 'image', 'image_aspect_ratio', 'import_contacts', 'import_export', 'important_devices', 'inbox', 'indeterminate_check_box', 'info', 'info_outline', 'input', 'insert_chart', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_invitation', 'insert_link', 'insert_photo', 'invert_colors', 'invert_colors_off', 'iso', 'keyboard', 'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace', 'keyboard_capslock', 'keyboard_hide', 'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'kitchen', 'label', 'label_outline', 'landscape', 'language', 'laptop', 'laptop_chromebook', 'laptop_mac', 'laptop_windows', 'last_page', 'launch', 'layers', 'layers_clear', 'leak_add', 'leak_remove', 'lens', 'library_add', 'library_books', 'library_music', 'lightbulb_outline', 'line_style', 'line_weight', 'linear_scale', 'link', 'linked_camera', 'list', 'live_help', 'live_tv', 'local_activity', 'local_airport', 'local_atm', 'local_bar', 'local_cafe', 'local_car_wash', 'local_convenience_store', 'local_dining', 'local_drink', 'local_florist', 'local_gas_station', 'local_grocery_store', 'local_hospital', 'local_hotel', 'local_laundry_service', 'local_library', 'local_mall', 'local_movies', 'local_offer', 'local_parking', 'local_pharmacy', 'local_phone', 'local_pizza', 'local_play', 'local_post_office', 'local_printshop', 'local_see', 'local_shipping', 'local_taxi', 'location_city', 'location_disabled', 'location_off', 'location_on', 'location_searching', 'lock', 'lock_open', 'lock_outline', 'looks', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks_one', 'looks_two', 'loop', 'loupe', 'low_priority', 'loyalty', 'mail', 'mail_outline', 'map', 'markunread', 'markunread_mailbox', 'memory', 'menu', 'merge_type', 'message', 'mic', 'mic_none', 'mic_off', 'mms', 'mode_comment', 'mode_edit', 'monetization_on', 'money_off', 'monochrome_photos', 'mood', 'mood_bad', 'more', 'more_horiz', 'more_vert', 'motorcycle', 'mouse', 'move_to_inbox', 'movie', 'movie_creation', 'movie_filter', 'multiline_chart', 'music_note', 'music_video', 'my_location', 'nature', 'nature_people', 'navigate_before', 'navigate_next', 'navigation', 'near_me', 'network_cell', 'network_check', 'network_locked', 'network_wifi', 'new_releases', 'next_week', 'nfc', 'no_encryption', 'no_sim', 'not_interested', 'note', 'note_add', 'notifications', 'notifications_active', 'notifications_none', 'notifications_off', 'notifications_paused', 'offline_pin', 'ondemand_video', 'opacity', 'open_in_browser', 'open_in_new', 'open_with', 'pages', 'pageview', 'palette', 'pan_tool', 'panorama', 'panorama_fish_eye', 'panorama_horizontal', 'panorama_vertical', 'panorama_wide_angle', 'party_mode', 'pause', 'pause_circle_filled', 'pause_circle_outline', 'payment', 'people', 'people_outline', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'perm_identity', 'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'person', 'person_add', 'person_outline', 'person_pin', 'person_pin_circle', 'personal_video', 'pets', 'phone', 'phone_android', 'phone_bluetooth_speaker', 'phone_forwarded', 'phone_in_talk', 'phone_iphone', 'phone_locked', 'phone_missed', 'phone_paused', 'phonelink', 'phonelink_erase', 'phonelink_lock', 'phonelink_off', 'phonelink_ring', 'phonelink_setup', 'photo', 'photo_album', 'photo_camera', 'photo_filter', 'photo_library', 'photo_size_select_actual', 'photo_size_select_large', 'photo_size_select_small', 'picture_as_pdf', 'picture_in_picture', 'picture_in_picture_alt', 'pie_chart', 'pie_chart_outlined', 'pin_drop', 'place', 'play_arrow', 'play_circle_filled', 'play_circle_outline', 'play_for_work', 'playlist_add', 'playlist_add_check', 'playlist_play', 'plus_one', 'poll', 'polymer', 'pool', 'portable_wifi_off', 'portrait', 'power', 'power_input', 'power_settings_new', 'pregnant_woman', 'present_to_all', 'print', 'priority_high', 'public', 'publish', 'query_builder', 'question_answer', 'queue', 'queue_music', 'queue_play_next', 'radio', 'radio_button_checked', 'radio_button_unchecked', 'rate_review', 'receipt', 'recent_actors', 'record_voice_over', 'redeem', 'redo', 'refresh', 'remove', 'remove_circle', 'remove_circle_outline', 'remove_from_queue', 'remove_red_eye', 'remove_shopping_cart', 'reorder', 'repeat', 'repeat_one', 'replay', 'replay_10', 'replay_30', 'replay_5', 'reply', 'reply_all', 'report', 'report_problem', 'restaurant', 'restaurant_menu', 'restore', 'restore_page', 'ring_volume', 'room', 'room_service', 'rotate_90_degrees_ccw', 'rotate_left', 'rotate_right', 'rounded_corner', 'router', 'rowing', 'rss_feed', 'rv_hookup', 'satellite', 'save', 'scanner', 'schedule', 'school', 'screen_lock_landscape', 'screen_lock_portrait', 'screen_lock_rotation', 'screen_rotation', 'screen_share', 'sd_card', 'sd_storage', 'search', 'security', 'select_all', 'send', 'sentiment_dissatisfied', 'sentiment_neutral', 'sentiment_satisfied', 'sentiment_very_dissatisfied', 'sentiment_very_satisfied', 'settings', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet', 'settings_input_antenna', 'settings_input_component', 'settings_input_composite', 'settings_input_hdmi', 'settings_input_svideo', 'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_system_daydream', 'settings_voice', 'share', 'shop', 'shop_two', 'shopping_basket', 'shopping_cart', 'short_text', 'show_chart', 'shuffle', 'signal_cellular_4_bar', 'signal_cellular_connected_no_internet_4_bar', 'signal_cellular_no_sim', 'signal_cellular_null', 'signal_cellular_off', 'signal_wifi_4_bar', 'signal_wifi_4_bar_lock', 'signal_wifi_off', 'sim_card', 'sim_card_alert', 'skip_next', 'skip_previous', 'slideshow', 'slow_motion_video', 'smartphone', 'smoke_free', 'smoking_rooms', 'sms', 'sms_failed', 'snooze', 'sort', 'sort_by_alpha', 'spa', 'space_bar', 'speaker', 'speaker_group', 'speaker_notes', 'speaker_notes_off', 'speaker_phone', 'spellcheck', 'star', 'star_border', 'star_half', 'stars', 'stay_current_landscape', 'stay_current_portrait', 'stay_primary_landscape', 'stay_primary_portrait', 'stop', 'stop_screen_share', 'storage', 'store', 'store_mall_directory', 'straighten', 'streetview', 'strikethrough_s', 'style', 'subdirectory_arrow_left', 'subdirectory_arrow_right', 'subject', 'subscriptions', 'subtitles', 'subway', 'supervisor_account', 'surround_sound', 'swap_calls', 'swap_horiz', 'swap_vert', 'swap_vertical_circle', 'switch_camera', 'switch_video', 'sync', 'sync_disabled', 'sync_problem', 'system_update', 'system_update_alt', 'tab', 'tab_unselected', 'tablet', 'tablet_android', 'tablet_mac', 'tag_faces', 'tap_and_play', 'terrain', 'text_fields', 'text_format', 'textsms', 'texture', 'theaters', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'time_to_leave', 'timelapse', 'timeline', 'timer', 'timer_10', 'timer_3', 'timer_off', 'title', 'toc', 'today', 'toll', 'tonality', 'touch_app', 'toys', 'track_changes', 'traffic', 'train', 'tram', 'transfer_within_a_station', 'transform', 'translate', 'trending_down', 'trending_flat', 'trending_up', 'tune', 'turned_in', 'turned_in_not', 'tv', 'unarchive', 'undo', 'unfold_less', 'unfold_more', 'update', 'usb', 'verified_user', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'vibration', 'video_call', 'video_label', 'video_library', 'videocam', 'videocam_off', 'videogame_asset', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_comfy', 'view_compact', 'view_day', 'view_headline', 'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'vignette', 'visibility', 'visibility_off', 'voice_chat', 'voicemail', 'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'vpn_key', 'vpn_lock', 'wallpaper', 'warning', 'watch', 'watch_later', 'wb_auto', 'wb_cloudy', 'wb_incandescent', 'wb_iridescent', 'wb_sunny', 'wc', 'web', 'web_asset', 'weekend', 'whatshot', 'widgets', 'wifi', 'wifi_lock', 'wifi_tethering', 'work', 'wrap_text', 'youtube_searched_for', 'zoom_in', 'zoom_out', 'zoom_out_map'];
        }
        IconPickerComponent.prototype.selectIcon = function (event) {
            this.selectedIcon = event;
        };
        IconPickerComponent.prototype.selectColor = function (event) {
            this.selectedColor = event.target.value;
        };
        IconPickerComponent.prototype.ngOnInit = function () {
        };
        return IconPickerComponent;
    }());
    IconPickerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-icon-picker',
                    template: "<section class=\"aa-icon-picker margin-bottom-1\">\r\n    <label for=\"{{selectedIcon}}\" *ngIf=\"showLabel\">{{labelName}}</label>\r\n    <article class=\"aa-ip-filter flex-group flex-start flex-align-center\">\r\n      <div class=\"material-icons margin-right-0-5 {{selectedColor}}\">{{selectedIcon}}</div>\r\n      <div class=\"field boxed\">\r\n        <input \r\n          (click)=\"showIcons=true\" \r\n          [(ngModel)]=\"searchIcon\"\r\n          placeholder=\"Search for an icon\"\r\n          type=\"text\" \r\n          class=\"use-material-icon-picker\" \r\n          value=\"{{selectedIcon}}\" \r\n          name=\"{{selectedIcon}}\"\r\n        >\r\n      </div>\r\n      <div class=\"field boxed\">\r\n        <select (change)=\"selectColor($event)\">\r\n          <option value=\"aa-light-blue-100\">Blue light</option>\r\n          <option value=\"aa-blue-100\">Blue</option>\r\n          <option value=\"aa-brown-100\">Brown</option>\r\n          <option value=\"aa-burgundy-100\">Burgundy</option>\r\n          <option value=\"aa-green-100\">Green</option>\r\n          <option value=\"grey-50\">Grey 50</option>\r\n          <option value=\"grey-25\">Grey 25</option>\r\n          <option value=\"grey-10\">Grey 10</option>\r\n          <option value=\"grey-5\">Grey 5</option>\r\n          <option value=\"aa-lime-100\">Lime</option>\r\n          <option value=\"aa-ochre-100\">Ochre</option>\r\n          <option value=\"aa-orange-100\">Orange</option>\r\n          <option value=\"aa-pink-100\">Pink</option>\r\n          <option value=\"aa-plum-100\">Plum</option>\r\n          <option value=\"aa-red-100\">Red</option>\r\n          <option value=\"aa-blue-sky-100\">Sky blue</option>\r\n        </select>\r\n      </div>\r\n    </article>\r\n    <article *ngIf=\"showIcons\" class=\"aa-ip-results\">\r\n      <div \r\n        *ngFor=\"let icon of icons | iconFilter: searchIcon\" \r\n        (click)=\"selectIcon(icon); showIcons=false\" \r\n        class=\"material-icons cursor-pointer\">\r\n        {{icon}}\r\n      </div>\r\n    </article>\r\n  </section>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    IconPickerComponent.ctorParameters = function () { return []; };
    IconPickerComponent.propDecorators = {
        searchIcon: [{ type: core.Input }],
        selectedIcon: [{ type: core.Input }],
        selectedColor: [{ type: core.Input }],
        showIcons: [{ type: core.Input }],
        showLabel: [{ type: core.Input }],
        labelName: [{ type: core.Input }]
    };

    var InfoPanelComponent = /** @class */ (function () {
        function InfoPanelComponent() {
        }
        InfoPanelComponent.prototype.ngOnInit = function () {
        };
        return InfoPanelComponent;
    }());
    InfoPanelComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-info-panel',
                    template: "<section \r\n  class=\"info-panel {{panelStatus}}\" \r\n  [ngStyle]=\"{\r\n    'width' : panelWidth+'rem', \r\n    'height' : panelHeight+'rem'\r\n  }\"\r\n>\r\n  <div class=\"foreground\" [ngStyle]=\"preventOpacity && {'opacity':'1'}\">\r\n    <div class=\"info-panel-header padding-1\">\r\n      <ng-content select=\"[custom-header]\"></ng-content>\r\n    </div>\r\n    <div class=\"info-panel-content padding-1\">\r\n      <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n    <div class=\"info-panel-footer\">\r\n      <ng-content select=\"[custom-footer]\"></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"background\" [ngStyle]=\"{'width': panelWidth+'rem', 'height' : panelHeight+'rem'}\"></div>\r\n</section>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    InfoPanelComponent.ctorParameters = function () { return []; };
    InfoPanelComponent.propDecorators = {
        panelWidth: [{ type: core.Input }],
        panelHeight: [{ type: core.Input }],
        panelStatus: [{ type: core.Input }],
        preventOpacity: [{ type: core.Input }]
    };

    var InfoPanelStackedComponent = /** @class */ (function () {
        function InfoPanelStackedComponent() {
        }
        InfoPanelStackedComponent.prototype.ngOnInit = function () {
        };
        return InfoPanelStackedComponent;
    }());
    InfoPanelStackedComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-info-panel-stacked',
                    template: "<section \r\n  class=\"info-panel-stacked\"\r\n  [ngStyle]=\"{\r\n    'width' : wrapperWidth+'rem', \r\n    'height' : wrapperHeight+'rem'\r\n  }\"\r\n  [ngClass]=\"{\r\n    'approved-forward' : approvedForward,\r\n    'pending-forward' : pendingForward,\r\n    'rejected-forward' : rejectedForward,\r\n    'withdrawn-forward' : withdrawnForward,\r\n    'returned-forward' : returnedForward,\r\n    'abandoned-forward' : abandonedForward,\r\n    'draft-forward' : draftForward,\r\n    'withdrawn-pending-forward' : withdrawalPendingForward,\r\n    'reset-all' : resetAll,\r\n    'full-width' : fullWidth\r\n  }\"\r\n>\r\n  <ng-content></ng-content>\r\n</section>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    InfoPanelStackedComponent.ctorParameters = function () { return []; };
    InfoPanelStackedComponent.propDecorators = {
        approvedForward: [{ type: core.Input }],
        pendingForward: [{ type: core.Input }],
        rejectedForward: [{ type: core.Input }],
        withdrawnForward: [{ type: core.Input }],
        returnedForward: [{ type: core.Input }],
        abandonedForward: [{ type: core.Input }],
        draftForward: [{ type: core.Input }],
        withdrawalPendingForward: [{ type: core.Input }],
        resetAll: [{ type: core.Input }],
        wrapperWidth: [{ type: core.Input }],
        wrapperHeight: [{ type: core.Input }],
        fullWidth: [{ type: core.Input }]
    };

    var ModalComponent = /** @class */ (function () {
        function ModalComponent() {
        }
        ModalComponent.prototype.ngOnInit = function () {
        };
        return ModalComponent;
    }());
    ModalComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-modal',
                    template: "<article class=\"aa-modal\">\r\n  <div \r\n    class=\"aa-modal-container\" \r\n    [ngClass]=\"{'green':green, 'orange':orange, 'red':red, 'blue':blue}\"\r\n    [ngStyle]=\"{\r\n      'top' : topPos,\r\n      'right' : rightPos,\r\n      'left' : leftPos,\r\n      'min-width' : minWidth,\r\n      'max-width' : maxWidth,\r\n      'z-index' : zIndex\r\n    }\"\r\n  >\r\n    <section class=\"aa-modal-header\">\r\n      <h2 class=\"boxed align-center\">{{heading}}</h2>\r\n    </section>\r\n    <section class=\"aa-modal-content\">\r\n      {{message}}\r\n      <ng-content select=\"[content-custom]\"></ng-content>\r\n    </section>\r\n    <section class=\"aa-modal-footer flex-group flex-center\">\r\n        <ng-content></ng-content>\r\n    </section>\r\n  </div>\r\n</article>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    ModalComponent.ctorParameters = function () { return []; };
    ModalComponent.propDecorators = {
        heading: [{ type: core.Input }],
        message: [{ type: core.Input }],
        topPos: [{ type: core.Input }],
        rightPos: [{ type: core.Input }],
        leftPos: [{ type: core.Input }],
        minWidth: [{ type: core.Input }],
        maxWidth: [{ type: core.Input }],
        green: [{ type: core.Input }],
        orange: [{ type: core.Input }],
        red: [{ type: core.Input }],
        blue: [{ type: core.Input }],
        zIndex: [{ type: core.Input }]
    };

    var OverlayComponent = /** @class */ (function () {
        function OverlayComponent() {
        }
        OverlayComponent.prototype.ngOnInit = function () {
        };
        return OverlayComponent;
    }());
    OverlayComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-overlay',
                    template: "<article class=\"aa-overlay flex-center\" *ngIf=\"showOverlay\" [ngStyle]=\"{'z-index' : zIndex}\">\r\n  <div class=\"aa-overlay-container\">\r\n    <ng-content select=\"[overlay-header]\"></ng-content>\r\n    <ng-content select=\"[overlay-content]\"></ng-content>\r\n  </div>\r\n</article>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    OverlayComponent.ctorParameters = function () { return []; };
    OverlayComponent.propDecorators = {
        zIndex: [{ type: core.Input }],
        showOverlay: [{ type: core.Input }]
    };

    var PopoverComponent = /** @class */ (function () {
        function PopoverComponent(elementRef) {
            this.elementRef = elementRef;
        }
        PopoverComponent.prototype.onClick = function (targetElement) {
            var clickedInside = this.elementRef.nativeElement.contains(targetElement);
            if (!clickedInside) {
                this.showPopover = false;
            }
        };
        PopoverComponent.prototype.open = function () {
            this.showPopover = true;
            this.setIndex = 200;
        };
        PopoverComponent.prototype.close = function () {
            this.showPopover = false;
        };
        PopoverComponent.prototype.ngOnInit = function () { };
        return PopoverComponent;
    }());
    PopoverComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-popover',
                    template: "<div \r\n  class=\"aa-popover\" \r\n  [ngClass]=\"{\r\n  'show-popover' : showPopover, \r\n  'btn-small' : btnSmall\r\n  }\">\r\n  <div class=\"aa-popover-header\" (click)=\"showPopover=!showPopover\" [ngClass]=\"{'label-hidden' : hideLabel}\">\r\n    <ng-content select=\"[call-to-action]\"></ng-content>\r\n    <div\r\n      class=\"arrow\"\r\n      [ngStyle]=\"popoverTop && {\r\n        'top' : arrowPos+'rem',\r\n        'bottom' : 'unset',\r\n        'transform' : 'rotate(180deg)' \r\n      }\"\r\n    ></div>\r\n  </div>\r\n  <div \r\n    class=\"aa-popover-content feature-box\" \r\n    [ngStyle]=\"{\r\n    'left': leftPos+'rem', \r\n    'top': topPos+'rem', \r\n    'bottom': bottomPos+'rem', \r\n    'width': width+'rem' \r\n  }\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </div>\r\n</div>",
                    styles: [""]
                },] }
    ];
    PopoverComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    PopoverComponent.propDecorators = {
        buttonClass: [{ type: core.Input }],
        leftPos: [{ type: core.Input }],
        topPos: [{ type: core.Input }],
        bottomPos: [{ type: core.Input }],
        width: [{ type: core.Input }],
        hideLabel: [{ type: core.Input }],
        btnSmall: [{ type: core.Input }],
        popoverTop: [{ type: core.Input }],
        arrowPos: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['document:click', ['$event.target'],] }]
    };

    var SummaryTopComponent = /** @class */ (function () {
        function SummaryTopComponent() {
        }
        SummaryTopComponent.prototype.ngOnInit = function () {
        };
        return SummaryTopComponent;
    }());
    SummaryTopComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-summary-top',
                    template: "<article class=\"dl-container\">\r\n  <dl class=\"flex-align-center\">\r\n   <ng-content></ng-content>\r\n  </dl>\r\n</article>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    SummaryTopComponent.ctorParameters = function () { return []; };

    var SummaryTopListComponent = /** @class */ (function () {
        function SummaryTopListComponent() {
        }
        SummaryTopListComponent.prototype.ngOnInit = function () {
        };
        return SummaryTopListComponent;
    }());
    SummaryTopListComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-summary-top-list',
                    template: "<div class=\"dl-repeater\" [ngClass]=\"{'highlight' : highlight}\">\r\n  <dt>{{itemTitle}}</dt>\r\n  <dd>{{itemDescription}}</dd>\r\n</div>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    SummaryTopListComponent.ctorParameters = function () { return []; };
    SummaryTopListComponent.propDecorators = {
        itemTitle: [{ type: core.Input }],
        itemDescription: [{ type: core.Input }],
        highlight: [{ type: core.Input }]
    };

    var ToastrComponent = /** @class */ (function () {
        function ToastrComponent() {
        }
        ToastrComponent.prototype.ngOnInit = function () {
        };
        return ToastrComponent;
    }());
    ToastrComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-toastr',
                    template: "<div class=\"aa-toastr\">\r\n    <ng-content></ng-content>\r\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    ToastrComponent.ctorParameters = function () { return []; };

    var ToastrItemComponent = /** @class */ (function () {
        function ToastrItemComponent() {
            this.closeToastr = new core.EventEmitter();
        }
        ToastrItemComponent.prototype.onCloseClick = function (e) {
            e.stopPropagation();
            this.closeToastr.emit(e);
        };
        ToastrItemComponent.prototype.ngOnInit = function () {
        };
        return ToastrItemComponent;
    }());
    ToastrItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-toastr-item',
                    template: "<article \r\n    class=\"animate-normal bg-aa-red-100 box-shadow-strong\" \r\n    [ngClass]=\"{\r\n        'show-toastr': showToastr,\r\n        'bg-aa-red-100': isError,\r\n        'bg-aa-orange-100': isWarning,\r\n        'bg-aa-green-100': isSuccess,\r\n        'bg-aa-light-blue-100': isInfo\r\n    }\"\r\n>\r\n    <button (click)=\"onCloseClick($event)\" class=\"material-icons aa-white-100\">clear</button>\r\n    <div class=\"flex-group flex-start\">\r\n        <section class=\"flex-align-center\">\r\n            <div *ngIf=\"isError\" class=\"material-icons toastr-icon aa-white-100\">local_police</div>\r\n            <div *ngIf=\"isWarning\" class=\"material-icons toastr-icon aa-white-100\">privacy_tip</div>\r\n            <div *ngIf=\"isSuccess\" class=\"material-icons toastr-icon aa-white-100\">verified_user</div>\r\n            <div *ngIf=\"isInfo\" class=\"material-icons toastr-icon aa-white-100\">security</div>\r\n        </section>\r\n        <section>\r\n            <h3 class=\"margin-0 aa-white-100 margin-bottom-0-25\">{{heading}}</h3>\r\n            <p class=\"aa-white-100 small\">{{message}}</p>\r\n        </section>\r\n    </div>\r\n</article>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    ToastrItemComponent.ctorParameters = function () { return []; };
    ToastrItemComponent.propDecorators = {
        showToastr: [{ type: core.Input }],
        isError: [{ type: core.Input }],
        isWarning: [{ type: core.Input }],
        isSuccess: [{ type: core.Input }],
        isInfo: [{ type: core.Input }],
        heading: [{ type: core.Input }],
        message: [{ type: core.Input }],
        closeToastr: [{ type: core.Output }]
    };

    var TooltipComponent = /** @class */ (function () {
        function TooltipComponent() {
        }
        TooltipComponent.prototype.ngOnInit = function () { };
        return TooltipComponent;
    }());
    TooltipComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-tooltip',
                    template: "<div class=\"flex-group\" [ngClass]=\"{ 'space-between' : includeLabel, 'flex-start' : includeLegend }\">\r\n  <label *ngIf=\"includeLabel\">{{labelName}}</label>\r\n  <legend class=\"margin-right-0-5\" *ngIf=\"includeLegend\">{{labelName}}</legend>\r\n  <div \r\n    class=\"aa-tooltip icon-info\" \r\n    [ngClass]=\"{\r\n      'is-success': isSuccess, \r\n      'is-info': isInfo, \r\n      'is-warning': isWarning, \r\n      'is-error': isError,\r\n      'custom-icon': customIcon\r\n    }\"\r\n    [ngStyle]=\"{'z-index' : zIndex}\"\r\n    >\r\n    \r\n    <div \r\n      *ngIf=\"customIcon\" \r\n      class=\"material-icons\"\r\n      [ngClass]=\"{\r\n        'is-success': isSuccess, \r\n        'is-info': isInfo, \r\n        'is-warning': isWarning, \r\n        'is-error': isError,\r\n        'custom-icon': customIcon\r\n      }\">{{iconName}}</div>\r\n      \r\n    \r\n    <div class=\"feature-box {{xpos}} {{ypos}}\" [ngStyle]=\"{'min-width': setMinWidth+'rem'}\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    TooltipComponent.ctorParameters = function () { return []; };
    TooltipComponent.propDecorators = {
        setMinWidth: [{ type: core.Input }],
        isSuccess: [{ type: core.Input }],
        isInfo: [{ type: core.Input }],
        isWarning: [{ type: core.Input }],
        includeLabel: [{ type: core.Input }],
        includeLegend: [{ type: core.Input }],
        labelName: [{ type: core.Input }],
        isError: [{ type: core.Input }],
        xpos: [{ type: core.Input }],
        ypos: [{ type: core.Input }],
        customIcon: [{ type: core.Input }],
        iconName: [{ type: core.Input }],
        zIndex: [{ type: core.Input }]
    };

    var UserFeedbackComponent = /** @class */ (function () {
        function UserFeedbackComponent(formBuilder) {
            this.formBuilder = formBuilder;
            this.sendFeedback = new core.EventEmitter();
            this.close = new core.EventEmitter();
            this.startRating = true;
            this.faceClicked = false;
            this.feedbackForm = this.formBuilder.group({
                comment: [null]
            });
        }
        UserFeedbackComponent.prototype.onClose = function () {
            this.close.emit();
            this.toggleUserFeedback = !this.toggleUserFeedback;
            this.userClosedPanel = false;
            this.faceClicked = false;
            this.rating = null;
            this.startRating = true;
        };
        UserFeedbackComponent.prototype.onFaceClick = function (rating) {
            this.faceClicked = true;
            this.rating = rating;
        };
        UserFeedbackComponent.prototype.sendFB = function () {
            this.sendFeedback.emit({ rating: this.rating, comments: this.feedbackForm.value.comment });
            this.userClosedPanel = true;
            this.startRating = false;
        };
        UserFeedbackComponent.prototype.ngOnInit = function () {
        };
        return UserFeedbackComponent;
    }());
    UserFeedbackComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'aa-user-feedback',
                    template: "<section class=\"user-feedback box-shadow margin-bottom-1 rating-{{ rating }}\" *ngIf=\"toggleUserFeedback\">\r\n  <div class=\"position-relative\">\r\n    <article class=\"flex-group max-readable-width padding-1\" *ngIf=\"startRating\">\r\n      <h3 class=\"text-align-center margin-top-0-5\">\r\n        <span>{{ question }} </span>\r\n        <strong class=\"italic\">{{ appName }}</strong>\r\n      </h3>\r\n      <div class=\"feature-box faces tertiary flex-group flex-align-center\">\r\n        <div>Poor</div>\r\n        <button (click)=\"onFaceClick(1)\" [ngClass]=\"{ 'face-very-dissatisfied': rating === 1 }\" class=\"face-very-dissatisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(2)\" [ngClass]=\"{ 'face-dissatisfied': rating === 2 }\" class=\"face-dissatisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(3)\" [ngClass]=\"{ 'face-neutral': rating === 3 }\" class=\"face-neutral-blk\"></button>\r\n        <button (click)=\"onFaceClick(4)\" [ngClass]=\"{ 'face-satisfied': rating === 4 }\" class=\"face-satisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(5)\" [ngClass]=\"{ 'face-very-satisfied': rating === 5 }\" class=\"face-very-satisfied-blk\"></button>\r\n        <div>Great</div>\r\n      </div>\r\n    </article>\r\n\r\n    <article *ngIf=\"faceClicked && !userClosedPanel\" class=\"user-feedback-content padding-1\">\r\n      <form name=\"sendFeedback\" [formGroup]=\"feedbackForm\">\r\n        <div class=\"field boxed\">\r\n          <label for=\"feedback\">{{ label }}</label>\r\n          <div class=\"describe width-100\">{{ description }}</div>\r\n          <textarea formControlName=\"comment\" id=\"feedback\"></textarea>\r\n        </div>\r\n        <div class=\"padding-top-1 max-readable-width\">\r\n          <em>{{ footNote }}</em>\r\n        </div>\r\n        <div class=\"field align-center\">\r\n          <button type=\"button\" class=\"primary\" (click)=\"sendFB()\">Send feedback</button>\r\n        </div>\r\n      </form>\r\n    </article>\r\n\r\n    <article *ngIf=\"userClosedPanel\">\r\n      <div class=\"flex-group max-readable-width padding-1\">\r\n        <h3 class=\"text-align-center margin-top-0-5\">\r\n          <span>{{ question }} </span>\r\n          <strong class=\"italic\">{{ appName }}</strong>?\r\n        </h3>\r\n        <div class=\"feature-box tertiary flex-group flex-align-center\">\r\n          <div>Poor</div>\r\n          <div [ngClass]=\"{ 'face-very-dissatisfied': rating === 1 }\" class=\"face-very-dissatisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-dissatisfied': rating === 2 }\" class=\"face-dissatisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-neutral': rating === 3 }\" class=\"face-neutral-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-satisfied': rating === 4 }\" class=\"face-satisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-very-satisfied': rating === 5 }\" class=\"face-very-satisfied-blk\"></div>\r\n          <div>Great</div>\r\n        </div>\r\n      </div>\r\n      <article class=\"user-feedback-content padding-1\">\r\n        <p>{{ closingMessage }}</p>\r\n        <div class=\"thanks align-center\">\r\n          <div *ngIf=\"rating === 1\" class=\"face-very-dissatisfied\"></div>\r\n          <div *ngIf=\"rating === 2\" class=\"face-dissatisfied\"></div>\r\n          <div *ngIf=\"rating === 3\" class=\"face-neutral\"></div>\r\n          <div *ngIf=\"rating === 4\" class=\"face-satisfied\"></div>\r\n          <div *ngIf=\"rating === 5\" class=\"face-very-satisfied\"></div>\r\n        </div>\r\n        <div class=\"field align-center\">\r\n          <button type=\"button\" class=\"tertiary\" (click)=\"onClose()\">Close</button>\r\n        </div>\r\n      </article>\r\n    </article>\r\n  </div>\r\n</section>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    UserFeedbackComponent.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    UserFeedbackComponent.propDecorators = {
        panelWidth: [{ type: core.Input }],
        question: [{ type: core.Input }],
        appName: [{ type: core.Input }],
        label: [{ type: core.Input }],
        description: [{ type: core.Input }],
        footNote: [{ type: core.Input }],
        closingMessage: [{ type: core.Input }],
        toggleUserFeedback: [{ type: core.Input }],
        sendFeedback: [{ type: core.Output }],
        close: [{ type: core.Output }]
    };

    var WidgetsModule = /** @class */ (function () {
        function WidgetsModule() {
        }
        return WidgetsModule;
    }());
    WidgetsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        PopoverComponent,
                        AccordionComponent,
                        AccordionFancyComponent,
                        CardComponent,
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
                        OverlayComponent,
                        SummaryTopComponent,
                        SummaryTopListComponent,
                        ToastrComponent,
                        ToastrItemComponent,
                        TooltipComponent,
                        UserFeedbackComponent,
                    ],
                    imports: [common.CommonModule, forms.FormsModule, forms.ReactiveFormsModule],
                    exports: [
                        PopoverComponent,
                        AccordionComponent,
                        AccordionFancyComponent,
                        CardComponent,
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
                        OverlayComponent,
                        SummaryTopComponent,
                        SummaryTopListComponent,
                        ToastrComponent,
                        ToastrItemComponent,
                        TooltipComponent,
                        UserFeedbackComponent,
                    ],
                },] }
    ];

    /*
     * Public API Surface of components
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AccordionComponent = AccordionComponent;
    exports.AccordionFancyComponent = AccordionFancyComponent;
    exports.AlertComponent = AlertComponent;
    exports.AnchorBackComponent = AnchorBackComponent;
    exports.AnimationsModule = AnimationsModule;
    exports.BladeBottomComponent = BladeBottomComponent;
    exports.BladeComponent = BladeComponent;
    exports.BladeFooterComponent = BladeFooterComponent;
    exports.BladeTopComponent = BladeTopComponent;
    exports.ButtonComponent = ButtonComponent;
    exports.CardComponent = CardComponent;
    exports.CheckboxComponent = CheckboxComponent;
    exports.ClickOutsideDirective = ClickOutsideDirective;
    exports.ContextMenuComponent = ContextMenuComponent;
    exports.ContextMenuItemComponent = ContextMenuItemComponent;
    exports.DashboardContainerComponent = DashboardContainerComponent;
    exports.DashboardFavouritesComponent = DashboardFavouritesComponent;
    exports.DashboardFavouritesListComponent = DashboardFavouritesListComponent;
    exports.DirectivesModule = DirectivesModule;
    exports.ElementsModule = ElementsModule;
    exports.FavouritesComponent = FavouritesComponent;
    exports.FavouritesListComponent = FavouritesListComponent;
    exports.FieldComponent = FieldComponent;
    exports.FileUploadComponent = FileUploadComponent;
    exports.FooterComponent = FooterComponent;
    exports.IconPickerComponent = IconPickerComponent;
    exports.InfoPanelComponent = InfoPanelComponent;
    exports.InfoPanelStackedComponent = InfoPanelStackedComponent;
    exports.InputTextComponent = InputTextComponent;
    exports.LayoutModule = LayoutModule;
    exports.LoadingSpinnerComponent = LoadingSpinnerComponent;
    exports.LoadingSpinnerPageComponent = LoadingSpinnerPageComponent;
    exports.ModalComponent = ModalComponent;
    exports.NavContextComponent = NavContextComponent;
    exports.NavigationModule = NavigationModule;
    exports.OverlayComponent = OverlayComponent;
    exports.PatternsModule = PatternsModule;
    exports.PopoverComponent = PopoverComponent;
    exports.ProgressBarComponent = ProgressBarComponent;
    exports.ProgressCircleComponent = ProgressCircleComponent;
    exports.ProgressIndicatorComponent = ProgressIndicatorComponent;
    exports.ProjectTourComponent = ProjectTourComponent;
    exports.SliderComponent = SliderComponent;
    exports.StepperComponent = StepperComponent;
    exports.SummaryTopComponent = SummaryTopComponent;
    exports.SummaryTopListComponent = SummaryTopListComponent;
    exports.TabNavigationComponent = TabNavigationComponent;
    exports.TabNavigationContentDirective = TabNavigationContentDirective;
    exports.TabNavigationHeaderContentDirective = TabNavigationHeaderContentDirective;
    exports.TabNavigationItemComponent = TabNavigationItemComponent;
    exports.TabNavigationSecondaryComponent = TabNavigationSecondaryComponent;
    exports.TabNavigationSecondaryItemComponent = TabNavigationSecondaryItemComponent;
    exports.TextareaAutoresizeDirective = TextareaAutoresizeDirective;
    exports.ToastrComponent = ToastrComponent;
    exports.ToastrItemComponent = ToastrItemComponent;
    exports.TooltipComponent = TooltipComponent;
    exports.UserFeedbackComponent = UserFeedbackComponent;
    exports.WidgetsModule = WidgetsModule;
    exports["ɵa"] = IconFilterPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angloamerican-components.umd.js.map
