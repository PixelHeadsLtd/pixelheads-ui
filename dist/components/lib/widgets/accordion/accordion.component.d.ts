import { OnInit, EventEmitter } from '@angular/core';
export declare class AccordionComponent implements OnInit {
    showBody: boolean;
    disabled: boolean;
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
    open: EventEmitter<void>;
    onOpen(e: {
        stopPropagation: () => void;
    }): void;
    constructor();
    ngOnInit(): void;
}
//# sourceMappingURL=accordion.component.d.ts.map