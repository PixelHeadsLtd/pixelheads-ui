import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService, IModelSettings } from '@angloamerican/components';
import { Subscription, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  toggleBlade: boolean = false;
  toggleModal: boolean = false;
  
  private modalSubscription: Subscription = new Subscription();

  constructor(private modalService: ModalService) {}

  ngOnInit() {
  }

  openModal() {
    const modalHeading = 'Are you sure?';
    const modalMessage = 'Message here...';
    const cancelText = 'Cancel';
    const submitText = 'Submit';
    const modelSettings: IModelSettings = {
      topPos: '50%',
      zIndex: 999,
      red: true,
      hideHeader: false
    };
  
    this.modalSubscription.add(
      this.modalService.openModal(
        modalHeading,
        modalMessage,
        modelSettings,
        cancelText,
        submitText
      ).subscribe((confirmed) => {
        console.log('Modal result:', confirmed);  // <-- Add this log
        if (confirmed) {
          console.log('Form was confirmed');
        } else {
          console.log('Form was cancelled');
        }
      })
    );
  }
  
  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
