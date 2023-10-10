import {
    ComponentFactoryResolver,
    ComponentRef,
    Injectable,
    ViewContainerRef,
  } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalDialogComponent } from '../widgets/modal-dialog/modal-dialog.component';

@Injectable({providedIn: 'root'})
export class ModalService {
  private componentRef!: ComponentRef<ModalDialogComponent>;
  private componentSubscriber!: Subject<string>;
  constructor(private resolver: ComponentFactoryResolver) {}

  openModal(
    entry: ViewContainerRef,
    modalHeading: any,
    modalMessage: any) {
    const factory = this.resolver.resolveComponentFactory(ModalDialogComponent);
    this.componentRef = entry.createComponent(factory);
    this.componentRef.instance.heading = modalHeading;
    this.componentRef.instance.message = modalMessage;
    this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
    this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
    this.componentSubscriber = new Subject<string>();
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
}
