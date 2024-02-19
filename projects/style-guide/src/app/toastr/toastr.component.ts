import { Component } from '@angular/core';
import { ToastService } from '../_services/toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent {
  toggleBlade: boolean = false;

  constructor(public toastService: ToastService) {}

  showSuccessToaster() {
    this.toastService.add({
      type: 'success',
      title: 'Well done!',
      message: 'This is a success alert with a very long decription indeed, we may need this in certain curcumstances',
      icon: 'verified_user'
    });
  }
  showWarningToaster() {
    this.toastService.add({
      type: 'warning',
      title: 'Check it out!',
      message: 'This is a warning alert',
      icon: 'security'
    });
  }
  showErrorToaster() {
    this.toastService.add({
      type: 'error',
      title: 'Check it out!',
      message: 'This is a error alert',
      icon: 'gpp_maybe'
    });
  }
  showInfoToaster() {
    this.toastService.add({
      type: 'info',
      title: 'Check it out!',
      message: 'This is a info alert',
      icon: 'privacy_tip'
    });
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
