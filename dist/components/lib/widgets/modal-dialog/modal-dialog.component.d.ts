import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ModalDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ModalDialogComponent, "aa-modal-dialog", never, { "heading": "heading"; "message": "message"; "topPos": "topPos"; "rightPos": "rightPos"; "leftPos": "leftPos"; "minWidth": "minWidth"; "maxWidth": "maxWidth"; "green": "green"; "orange": "orange"; "red": "red"; "blue": "blue"; "zIndex": "zIndex"; }, { "closeMeEvent": "closeMeEvent"; "confirmEvent": "confirmEvent"; }, never, ["*"]>;
}

//# sourceMappingURL=modal-dialog.component.d.ts.map