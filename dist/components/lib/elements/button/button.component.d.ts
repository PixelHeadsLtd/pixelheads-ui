import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ButtonComponent implements OnInit {
    private elementRef;
    buttonLabel: string;
    buttonText: string;
    buttonId: string;
    buttonClass: string;
    buttonType: string;
    disabled: boolean;
    fieldClass: string;
    buttonIcon: string;
    customIcons: boolean;
    buttonEnriched: boolean;
    showBtnMenu: boolean;
    buttonSplit: boolean;
    iconName: string;
    title: string;
    iconColour: string;
    buttonLarge: boolean;
    buttonSummary: boolean;
    showDescription: boolean;
    status: string;
    level: number;
    desc: any;
    showCount: boolean;
    count: number;
    countColor: any;
    maxHeight: any;
    showLabel: boolean;
    customIconsRound: boolean;
    navLeftside: boolean;
    buttonClick: EventEmitter<Event>;
    onButtonClick(e: Event): void;
    constructor(elementRef: ElementRef);
    onClick(targetElement: any): void;
    open(): void;
    close(): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ButtonComponent, "aa-button", never, { "buttonType": "buttonType"; "showBtnMenu": "showBtnMenu"; "buttonLabel": "buttonLabel"; "buttonText": "buttonText"; "buttonId": "buttonId"; "buttonClass": "buttonClass"; "disabled": "disabled"; "fieldClass": "fieldClass"; "buttonIcon": "buttonIcon"; "customIcons": "customIcons"; "buttonEnriched": "buttonEnriched"; "buttonSplit": "buttonSplit"; "iconName": "iconName"; "title": "title"; "iconColour": "iconColour"; "buttonLarge": "buttonLarge"; "buttonSummary": "buttonSummary"; "showDescription": "showDescription"; "status": "status"; "level": "level"; "desc": "desc"; "showCount": "showCount"; "count": "count"; "countColor": "countColor"; "maxHeight": "maxHeight"; "showLabel": "showLabel"; "customIconsRound": "customIconsRound"; "navLeftside": "navLeftside"; }, { "buttonClick": "buttonClick"; }, never, ["[toolbar]", "[bs-buttons]"]>;
}

//# sourceMappingURL=button.component.d.ts.map