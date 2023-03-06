import { EventEmitter } from '@angular/core';
export declare class AccordionComponent {
    showBody: boolean;
    disabled: boolean;
    minWidth: number;
    iconsEnabled: boolean;
    dragable: boolean;
    sectionId: string;
    accordionHeading: string;
    accordionId: string;
    iconName: string;
    accordionClean: boolean;
    fontAwesome: boolean;
    fontClassName: string;
    iconBgColor: string;
    customBgColor: string;
    clearPadding: boolean;
    verticalDisplay: boolean;
    verticalMinHeight: any;
    open: EventEmitter<void>;
    onOpen(e: {
        stopPropagation: () => void;
    }): void;
    constructor();
}
//# sourceMappingURL=accordion.component.d.ts.map