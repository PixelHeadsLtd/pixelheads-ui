import { Component } from '@angular/core';
import { ToastService, Toast } from '@pixelheads/ui';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent {
  toggleBlade: boolean = false;
  toasts: Toast[] = [];

  constructor(public toastService: ToastService) {
    this.toastService.toasts$.subscribe(toasts => this.toasts = toasts);
  }

  showSuccessToaster() {
    this.toastService.add({
      type: 'success',
      title: 'Well done',
      message: 'This is a success alert with a very long decription indeed, we may need this in certain curcumstances',
      icon: 'verified_user'
    });
  }

  showWarningToaster() {
    this.toastService.add({
      type: 'warning',
      title: 'Watch out!',
      message: 'This is a warning alert',
      icon: 'security'
    });
  }

  showErrorToaster() {
    this.toastService.add({
      type: 'error',
      title: 'Oh no!',
      message: 'This is an error alert',
      icon: 'gpp_maybe'
    });
  }

  showInfoToaster() {
    this.toastService.add({
      type: 'info',
      title: 'Check it out!',
      message: 'This is an info alert',
      icon: 'privacy_tip'
    });
  }

  handleToastAdded(toast: Toast) {
    console.log('Toast added in parent:', toast);
  }

  handleToastRemoved(index: number) {
    console.log('Toast removed in parent at index:', index);
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
