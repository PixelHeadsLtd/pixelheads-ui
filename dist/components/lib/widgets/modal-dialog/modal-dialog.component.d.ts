import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalDialogComponent, "aa-modal-dialog", never, { "heading": { "alias": "heading"; "required": false; }; "message": { "alias": "message"; "required": false; }; "topPos": { "alias": "topPos"; "required": false; }; "rightPos": { "alias": "rightPos"; "required": false; }; "leftPos": { "alias": "leftPos"; "required": false; }; "minWidth": { "alias": "minWidth"; "required": false; }; "maxWidth": { "alias": "maxWidth"; "required": false; }; "green": { "alias": "green"; "required": false; }; "orange": { "alias": "orange"; "required": false; }; "red": { "alias": "red"; "required": false; }; "blue": { "alias": "blue"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, { "closeMeEvent": "closeMeEvent"; "confirmEvent": "confirmEvent"; }, never, ["*"], false, never>;
}
