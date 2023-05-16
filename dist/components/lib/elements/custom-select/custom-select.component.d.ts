import { OnInit, ElementRef, EventEmitter } from '@angular/core';
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
    defaultName: string;
    defaultIcon: string;
    defaultIconColor: string;
    setWidth: number;
    closeDropdown: EventEmitter<boolean>;
    optionSelected: EventEmitter<SelectOption>;
    highlightSection: EventEmitter<SelectOption>;
    selectedOption: SelectOption;
    selectedIndex: any;
    constructor(elementRef: ElementRef);
    onClick(targetElement: any): void;
    optionIsSelected(event: any, selectOption: SelectOption): void;
    setIndex(index: any): void;
    ngOnInit(): void;
}
//# sourceMappingURL=custom-select.component.d.ts.map