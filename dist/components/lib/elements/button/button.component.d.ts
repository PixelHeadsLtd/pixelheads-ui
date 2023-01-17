import { EventEmitter, OnInit, ElementRef } from '@angular/core';
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
    buttonClick: EventEmitter<Event>;
    onButtonClick(e: Event): void;
    constructor(elementRef: ElementRef);
    onClick(targetElement: any): void;
    open(): void;
    close(): void;
    ngOnInit(): void;
}
//# sourceMappingURL=button.component.d.ts.map