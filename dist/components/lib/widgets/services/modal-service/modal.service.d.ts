import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
export declare class ModalService {
    private resolver;
    private componentRef;
    private componentSubscriber;
    constructor(resolver: ComponentFactoryResolver);
    openModal(entry: ViewContainerRef, modalHeading: any, modalMessage: any): import("rxjs").Observable<string>;
    closeModal(): void;
    confirm(): void;
}
//# sourceMappingURL=modal.service.d.ts.map