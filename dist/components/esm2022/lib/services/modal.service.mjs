import { Injectable, } from '@angular/core';
import { ModalDialogComponent } from '../widgets/modal-dialog/modal-dialog.component';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ModalService {
    openModal(entry, modalHeading, modalMessage) {
        this.componentRef = entry.createComponent(ModalDialogComponent);
        this.componentRef.instance.heading = modalHeading;
        this.componentRef.instance.message = modalMessage;
        this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
        this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
        this.componentSubscriber = new Subject();
        return this.componentSubscriber.asObservable();
    }
    closeModal() {
        this.componentSubscriber.complete();
        this.componentRef.destroy();
    }
    confirm() {
        this.componentSubscriber.next('confirm');
        this.closeModal();
    }
    static { this.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFSCxVQUFVLEdBRVgsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHL0IsTUFBTSxPQUFPLFlBQVk7SUFJdkIsU0FBUyxDQUNQLEtBQXVCLEVBQ3ZCLFlBQWlCLEVBQ2pCLFlBQWlCO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7NkVBekJVLFlBQVk7dUVBQVosWUFBWSxXQUFaLFlBQVksbUJBREEsTUFBTTs7aUZBQ2xCLFlBQVk7Y0FEeEIsVUFBVTtlQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnRSZWYsXHJcbiAgICBJbmplY3RhYmxlLFxyXG4gICAgVmlld0NvbnRhaW5lclJlZixcclxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL3dpZGdldHMvbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjb21wb25lbnRSZWYhOiBDb21wb25lbnRSZWY8TW9kYWxEaWFsb2dDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgY29tcG9uZW50U3Vic2NyaWJlciE6IFN1YmplY3Q8c3RyaW5nPjtcclxuXHJcbiAgb3Blbk1vZGFsKFxyXG4gICAgZW50cnk6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBtb2RhbEhlYWRpbmc6IGFueSxcclxuICAgIG1vZGFsTWVzc2FnZTogYW55KSB7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IGVudHJ5LmNyZWF0ZUNvbXBvbmVudChNb2RhbERpYWxvZ0NvbXBvbmVudCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5oZWFkaW5nID0gbW9kYWxIZWFkaW5nO1xyXG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UubWVzc2FnZSA9IG1vZGFsTWVzc2FnZTtcclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNsb3NlTWVFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCkpO1xyXG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY29uZmlybUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLmNvbmZpcm0oKSk7XHJcbiAgICB0aGlzLmNvbXBvbmVudFN1YnNjcmliZXIgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRTdWJzY3JpYmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNb2RhbCgpIHtcclxuICAgIHRoaXMuY29tcG9uZW50U3Vic2NyaWJlci5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgY29uZmlybSgpIHtcclxuICAgIHRoaXMuY29tcG9uZW50U3Vic2NyaWJlci5uZXh0KCdjb25maXJtJyk7XHJcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICB9XHJcbn1cclxuIl19