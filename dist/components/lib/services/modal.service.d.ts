import { ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ModalService {
    private componentRef;
    private componentSubscriber;
    openModal(entry: ViewContainerRef, modalHeading: any, modalMessage: any): import("rxjs").Observable<string>;
    closeModal(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalService>;
}
