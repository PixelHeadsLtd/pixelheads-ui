import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  type: string;
  title: string;
  message: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];
  delay = 8000; // Default delay

  subject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.subject.asObservable();

  setDelay(delay: number) {
    this.delay = delay;
  }

  add(toast: Toast) {
    console.log('Adding toast in ToastService:', toast);
    this.toasts = [toast, ...this.toasts];
    this.subject.next(this.toasts);
  
    setTimeout(() => {
      this.toasts = this.toasts.filter(v => v !== toast);
      this.subject.next(this.toasts);
      console.log('Toast removed after timeout:', toast);
    }, this.delay);
  }

  remove(index: number) {
    this.toasts = this.toasts.filter((toast, i) => i !== index);
    this.subject.next(this.toasts);
  }
}
