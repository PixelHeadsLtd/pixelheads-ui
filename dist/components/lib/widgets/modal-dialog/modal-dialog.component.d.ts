import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
export declare class ModalDialogComponent implements OnInit, OnDestroy {
    constructor();
    heading: string;
    message: string;
    topPos: any;
    rightPos: any;
    leftPos: any;
    minWidth: any;
    maxWidth: any;
    green: boolean;
    orange: boolean;
    red: boolean;
    blue: boolean;
    zIndex: number;
    closeMeEvent: EventEmitter<any>;
    confirmEvent: EventEmitter<any>;
    ngOnInit(): void;
    closeMe(): void;
    confirm(): void;
    ngOnDestroy(): void;
}
//# sourceMappingURL=modal-dialog.component.d.ts.map