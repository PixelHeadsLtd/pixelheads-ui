import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ToastService, Toast } from '../../services/toastr.service';

@Component({
  selector: 'ph-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {
  @Input() zIndex: number = 0;
  @Input() useLegacyToastr: boolean = false;
  @Input() toastDelay: number = 8000; // Default delay, can be overridden by parent
  @Output() toastAdded: EventEmitter<Toast> = new EventEmitter<Toast>();
  @Output() toastRemoved: EventEmitter<number> = new EventEmitter<number>();

  toasts: Toast[] = [];

  constructor(public toastService: ToastService) {}

  ngOnInit() {
    this.toastService.setDelay(this.toastDelay);
    this.toastService.toasts$.subscribe(toasts => {
      this.toasts = toasts;
    });
  }

  addToast(type: string, title: string, message: string, icon: string) {
    const toast: Toast = {
      type: type,
      title: title,
      message: message,
      icon: icon
    };
    this.toastService.add(toast);
    this.toastAdded.emit(toast);
  }

  removeToast(index: number) {
    this.toastService.remove(index);
    this.toastRemoved.emit(index); // Emit event to parent component
  }
}
