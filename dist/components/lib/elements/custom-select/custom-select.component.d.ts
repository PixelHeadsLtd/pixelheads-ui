import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface SelectOption {
    id: any;
    display: string;
    selected?: boolean;
    icon?: string;
    iconColor?: string;
    showIcon?: boolean;
}
export declare class CustomSelectComponent implements OnInit {
    private elementRef;
    options: SelectOption[];
    showDropdown: boolean;
    showIcon: boolean;
    setWidth: any;
    maxHeight: any;
    closeDropdown: EventEmitter<boolean>;
    optionSelected: EventEmitter<SelectOption>;
    highlightSection: EventEmitter<SelectOption>;
    selectedOption?: SelectOption;
    set selectedIndex(value: number | undefined);
    sIndex: number;
    constructor(elementRef: ElementRef);
    onClick(targetElement: any): void;
    optionIsSelected(event: any, selectOption: SelectOption): void;
    setIndex(index: any): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomSelectComponent, "aa-custom-select", never, { "options": { "alias": "options"; "required": false; }; "setWidth": { "alias": "setWidth"; "required": false; }; "maxHeight": { "alias": "maxHeight"; "required": false; }; "selectedIndex": { "alias": "selectedIndex"; "required": false; }; }, { "closeDropdown": "closeDropdown"; "optionSelected": "optionSelected"; "highlightSection": "highlightSection"; }, never, never, false, never>;
}
