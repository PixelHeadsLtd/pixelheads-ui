import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent {

  @Input() toggleUserFeedback: boolean = false;

  constructor() { }

  userFeedbackHTML =
  `<aa-user-feedback
  (close)="toggleUserFeedback = false"
  [toggleUserFeedback]="toggleUserFeedback"
  [panelWidth]="41"
  [question]="'How would you rate your experience of this app?'"
  [description]="'We would really like to hear more about your experience. Your feedback will go direct to our product design team to help us build better software.'"
  [footNote]="'Please do not use this tool to raise support issues, which must be sent via the normal channels.'"
  [closingMessage]="'Thank you for your feedback.'">
</aa-user-feedback>`;

  copyToClipboard(item: any): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData?.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

  toggleBlade: boolean = false;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
