import { Injectable, ComponentRef, ViewContainerRef } from '@angular/core';
import { ModalDialogComponent } from '../widgets/modal-dialog/modal-dialog.component';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private componentRef: ComponentRef<ModalDialogComponent> | null = null;
  private resultSubject = new Subject<boolean>();
  private viewContainerRef!: ViewContainerRef;

  constructor() {}

  setViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

  openModal(
    modalHeading: string,
    modalMessage: string,
    modelSettings: IModelSettings,
    cancelText: string,
    submitText: string
  ): Observable<boolean> {
    this.resultSubject = new Subject<boolean>();
  
    if (!this.viewContainerRef) {
      throw new Error('No ViewContainerRef provided');
    }
  
    this.componentRef = this.viewContainerRef.createComponent(ModalDialogComponent);
    
    Object.assign(this.componentRef.instance, {
      heading: modalHeading,
      message: modalMessage,
      cancelBtnText: cancelText,
      submitBtnText: submitText,
      ...modelSettings
    });
  
    this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
    this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
  
    return this.resultSubject.asObservable();
  }  

  closeModal() {
    this.resultSubject.next(false);
    this.resultSubject.complete();
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
  
  confirm() {
    this.resultSubject.next(true);
    this.resultSubject.complete();
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }  
}

export interface IModelSettings {
  topPos?: string | number;
  rightPos?: string | number;
  leftPos?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  green?: boolean;
  orange?: boolean;
  red?: boolean;
  blue?: boolean;
  zIndex?: number;
  hideHeader?: boolean;
}
