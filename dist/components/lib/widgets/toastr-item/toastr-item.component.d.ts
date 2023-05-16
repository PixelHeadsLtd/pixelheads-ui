import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ToastrItemComponent implements OnInit {
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
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ToastrItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ToastrItemComponent, "aa-toastr-item", never, { "showToastr": "showToastr"; "isError": "isError"; "isWarning": "isWarning"; "isSuccess": "isSuccess"; "isInfo": "isInfo"; "heading": "heading"; "message": "message"; }, { "closeToastr": "closeToastr"; }, never, never>;
}

//# sourceMappingURL=toastr-item.component.d.ts.map