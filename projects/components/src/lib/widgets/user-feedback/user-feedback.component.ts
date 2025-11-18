import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FeedbackEvent } from './feedbackEvent';

@Component({
  selector: 'ph-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFeedbackComponent {
  @Input() panelWidth: number = 0;
  @Input() question: string = '';
  @Input() appName: string = '';
  @Input() label: string = '';
  @Input() description: string = '';
  @Input() footNote: string = '';
  @Input() closingMessage: string = '';
  @Input() toggleUserFeedback: boolean = false;
  @Output() sendFeedback = new EventEmitter<FeedbackEvent>();
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() close = new EventEmitter<void>();

  startRating = true;
  faceClicked = false;
  tab: any;
  veryDissatisfied: any;
  dissatisfied: any;
  neutral: any;
  satisfied: any;
  verySatisfied: any;
  rating: number | null = 0;
  userClosedPanel: boolean = false;

  feedbackForm = this.formBuilder.group({
    comment: [null]
  });

  onClose() {
    this.close.emit();
    this.toggleUserFeedback = ! this.toggleUserFeedback;
    this.userClosedPanel = false;
    this.faceClicked = false;
    this.rating = null;
    this.startRating = true;
  }

  onFaceClick(rating: number) {
    this.faceClicked = true;
    this.rating = rating;
  }

  sendFB() {
    this.sendFeedback.emit({rating: this.rating, comments: this.feedbackForm.value.comment});
    this.userClosedPanel = true;
    this.startRating = false;
  }

  constructor(private readonly formBuilder: FormBuilder) {
  }

}
