import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  type: string;
  title: string;
  message: string;
  icon: string
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];
  delay = 8000;

  subject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.subject.asObservable();

  add(toast: Toast) {
    this.toasts = [toast, ...this.toasts];
    this.subject.next(this.toasts);

    setTimeout(() => {
      this.toasts = this.toasts.filter(v => v !== toast);
      this.subject.next(this.toasts);
    }, this.delay);
  }

  remove(index: number) {
    this.toasts = this.toasts.filter((toast, i) => i !== index);
    this.subject.next(this.toasts);
  }
}
