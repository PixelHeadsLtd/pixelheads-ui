import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export class UserFeedbackComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.sendFeedback = new EventEmitter();
        this.close = new EventEmitter();
        this.startRating = true;
        this.faceClicked = false;
        this.feedbackForm = this.formBuilder.group({
            comment: [null]
        });
    }
    onClose() {
        this.close.emit();
        this.toggleUserFeedback = !this.toggleUserFeedback;
        this.userClosedPanel = false;
        this.faceClicked = false;
        this.rating = null;
        this.startRating = true;
    }
    onFaceClick(rating) {
        this.faceClicked = true;
        this.rating = rating;
    }
    sendFB() {
        this.sendFeedback.emit({ rating: this.rating, comments: this.feedbackForm.value.comment });
        this.userClosedPanel = true;
        this.startRating = false;
    }
    ngOnInit() {
    }
}
UserFeedbackComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-user-feedback',
                template: "<section class=\"user-feedback box-shadow margin-bottom-1 rating-{{ rating }}\" *ngIf=\"toggleUserFeedback\">\r\n  <div class=\"position-relative\">\r\n    <article class=\"flex-group max-readable-width padding-1\" *ngIf=\"startRating\">\r\n      <h3 class=\"text-align-center margin-top-0-5\">\r\n        <span>{{ question }} </span>\r\n        <strong class=\"italic\">{{ appName }}</strong>\r\n      </h3>\r\n      <div class=\"feature-box faces tertiary flex-group flex-align-center\">\r\n        <div>Poor</div>\r\n        <button (click)=\"onFaceClick(1)\" [ngClass]=\"{ 'face-very-dissatisfied': rating === 1 }\" class=\"face-very-dissatisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(2)\" [ngClass]=\"{ 'face-dissatisfied': rating === 2 }\" class=\"face-dissatisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(3)\" [ngClass]=\"{ 'face-neutral': rating === 3 }\" class=\"face-neutral-blk\"></button>\r\n        <button (click)=\"onFaceClick(4)\" [ngClass]=\"{ 'face-satisfied': rating === 4 }\" class=\"face-satisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(5)\" [ngClass]=\"{ 'face-very-satisfied': rating === 5 }\" class=\"face-very-satisfied-blk\"></button>\r\n        <div>Great</div>\r\n      </div>\r\n    </article>\r\n\r\n    <article *ngIf=\"faceClicked && !userClosedPanel\" class=\"user-feedback-content padding-1\">\r\n      <form name=\"sendFeedback\" [formGroup]=\"feedbackForm\">\r\n        <div class=\"field boxed\">\r\n          <label for=\"feedback\">{{ label }}</label>\r\n          <div class=\"describe width-100\">{{ description }}</div>\r\n          <textarea formControlName=\"comment\" id=\"feedback\"></textarea>\r\n        </div>\r\n        <div class=\"padding-top-1 max-readable-width\">\r\n          <em>{{ footNote }}</em>\r\n        </div>\r\n        <div class=\"field align-center\">\r\n          <button type=\"button\" class=\"primary\" (click)=\"sendFB()\">Send feedback</button>\r\n        </div>\r\n      </form>\r\n    </article>\r\n\r\n    <article *ngIf=\"userClosedPanel\">\r\n      <div class=\"flex-group max-readable-width padding-1\">\r\n        <h3 class=\"text-align-center margin-top-0-5\">\r\n          <span>{{ question }} </span>\r\n          <strong class=\"italic\">{{ appName }}</strong>?\r\n        </h3>\r\n        <div class=\"feature-box tertiary flex-group flex-align-center\">\r\n          <div>Poor</div>\r\n          <div [ngClass]=\"{ 'face-very-dissatisfied': rating === 1 }\" class=\"face-very-dissatisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-dissatisfied': rating === 2 }\" class=\"face-dissatisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-neutral': rating === 3 }\" class=\"face-neutral-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-satisfied': rating === 4 }\" class=\"face-satisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-very-satisfied': rating === 5 }\" class=\"face-very-satisfied-blk\"></div>\r\n          <div>Great</div>\r\n        </div>\r\n      </div>\r\n      <article class=\"user-feedback-content padding-1\">\r\n        <p>{{ closingMessage }}</p>\r\n        <div class=\"thanks align-center\">\r\n          <div *ngIf=\"rating === 1\" class=\"face-very-dissatisfied\"></div>\r\n          <div *ngIf=\"rating === 2\" class=\"face-dissatisfied\"></div>\r\n          <div *ngIf=\"rating === 3\" class=\"face-neutral\"></div>\r\n          <div *ngIf=\"rating === 4\" class=\"face-satisfied\"></div>\r\n          <div *ngIf=\"rating === 5\" class=\"face-very-satisfied\"></div>\r\n        </div>\r\n        <div class=\"field align-center\">\r\n          <button type=\"button\" class=\"tertiary\" (click)=\"onClose()\">Close</button>\r\n        </div>\r\n      </article>\r\n    </article>\r\n  </div>\r\n</section>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
UserFeedbackComponent.ctorParameters = () => [
    { type: FormBuilder }
];
UserFeedbackComponent.propDecorators = {
    panelWidth: [{ type: Input }],
    question: [{ type: Input }],
    appName: [{ type: Input }],
    label: [{ type: Input }],
    description: [{ type: Input }],
    footNote: [{ type: Input }],
    closingMessage: [{ type: Input }],
    toggleUserFeedback: [{ type: Input }],
    sendFeedback: [{ type: Output }],
    close: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1mZWVkYmFjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy91c2VyLWZlZWRiYWNrL3VzZXItZmVlZGJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUzdDLE1BQU0sT0FBTyxxQkFBcUI7SUErQ2hDLFlBQTZCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBdEMzQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ2pELFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTNDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBVXBCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDcEMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ2hCLENBQUMsQ0FBQztJQXVCSCxDQUFDO0lBckJELE9BQU87UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQWM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFLRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixtdUhBQTZDO2dCQUU3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OztZQVJRLFdBQVc7Ozt5QkFVakIsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSztpQ0FDTCxLQUFLOzJCQUNMLE1BQU07b0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGZWVkYmFja0V2ZW50IH0gZnJvbSAnLi9mZWVkYmFja0V2ZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdXNlci1mZWVkYmFjaycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItZmVlZGJhY2suY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3VzZXItZmVlZGJhY2suY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyRmVlZGJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHBhbmVsV2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBxdWVzdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFwcE5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9vdE5vdGU6IHN0cmluZztcclxuICBASW5wdXQoKSBjbG9zaW5nTWVzc2FnZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRvZ2dsZVVzZXJGZWVkYmFjazogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgc2VuZEZlZWRiYWNrID0gbmV3IEV2ZW50RW1pdHRlcjxGZWVkYmFja0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgc3RhcnRSYXRpbmcgPSB0cnVlO1xyXG4gIGZhY2VDbGlja2VkID0gZmFsc2U7XHJcbiAgdGFiOiBhbnk7XHJcbiAgdmVyeURpc3NhdGlzZmllZDogYW55O1xyXG4gIGRpc3NhdGlzZmllZDogYW55O1xyXG4gIG5ldXRyYWw6IGFueTtcclxuICBzYXRpc2ZpZWQ6IGFueTtcclxuICB2ZXJ5U2F0aXNmaWVkOiBhbnk7XHJcbiAgcmF0aW5nOiBudW1iZXI7XHJcbiAgdXNlckNsb3NlZFBhbmVsOiBib29sZWFuO1xyXG5cclxuICBmZWVkYmFja0Zvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgIGNvbW1lbnQ6IFtudWxsXVxyXG4gIH0pO1xyXG5cclxuICBvbkNsb3NlKCkge1xyXG4gICAgdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICB0aGlzLnRvZ2dsZVVzZXJGZWVkYmFjayA9ICEgdGhpcy50b2dnbGVVc2VyRmVlZGJhY2s7XHJcbiAgICB0aGlzLnVzZXJDbG9zZWRQYW5lbCA9IGZhbHNlO1xyXG4gICAgdGhpcy5mYWNlQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yYXRpbmcgPSBudWxsO1xyXG4gICAgdGhpcy5zdGFydFJhdGluZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkZhY2VDbGljayhyYXRpbmc6IG51bWJlcikge1xyXG4gICAgdGhpcy5mYWNlQ2xpY2tlZCA9IHRydWU7XHJcbiAgICB0aGlzLnJhdGluZyA9IHJhdGluZztcclxuICB9XHJcblxyXG4gIHNlbmRGQigpIHtcclxuICAgIHRoaXMuc2VuZEZlZWRiYWNrLmVtaXQoe3JhdGluZzogdGhpcy5yYXRpbmcsIGNvbW1lbnRzOiB0aGlzLmZlZWRiYWNrRm9ybS52YWx1ZS5jb21tZW50fSk7XHJcbiAgICB0aGlzLnVzZXJDbG9zZWRQYW5lbCA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXJ0UmF0aW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=