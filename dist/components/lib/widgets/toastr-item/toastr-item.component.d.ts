import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ToastrItemComponent {
    showToastr: boolean;
    isError: boolean;
    isWarning: boolean;
    isSuccess: boolean;
    isInfo: boolean;
    heading: any;
    message: any;
    closeToastr: EventEmitter<Event>;
    onCloseClick(e: Event): void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastrItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastrItemComponent, "aa-toastr-item", never, { "showToastr": { "alias": "showToastr"; "required": false; }; "isError": { "alias": "isError"; "required": false; }; "isWarning": { "alias": "isWarning"; "required": false; }; "isSuccess": { "alias": "isSuccess"; "required": false; }; "isInfo": { "alias": "isInfo"; "required": false; }; "heading": { "alias": "heading"; "required": false; }; "message": { "alias": "message"; "required": false; }; }, { "closeToastr": "closeToastr"; }, never, never, false, never>;
}
