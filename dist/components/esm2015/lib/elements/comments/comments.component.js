import { Component, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => {
};
const ɵ0 = noop;
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CommentsComponent),
    multi: true
};
export class CommentsComponent {
    constructor() {
        this.commentsMade = new EventEmitter();
        // The internal data model
        this.innerValue = '';
        // Placeholders for the callbacks which are later provided
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.currentDate = new Date().getTime();
    }
    // get accessor
    get txtComment() {
        return this.innerValue;
    }
    // set accessor including call the onchange callback
    set txtComment(v) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }
    // Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }
    // From ControlValueAccessor interface
    writeValue(txtComment) {
        if (txtComment !== this.innerValue) {
            this.innerValue = txtComment;
        }
    }
    // From ControlValueAccessor interface
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    addComment(_EVENT, _COMMENTARRAY) {
        if (this.txtComment) {
            const comments = {
                comment: this.txtComment
            };
            this.comments.push(comments);
            this.commentsMade.emit(this.txtComment);
            console.log('comment is ', this.txtComment);
            console.log('this comment ', this.comments);
            this.txtComment = '';
        }
        else {
            this.clicked = true;
        }
    }
    removeComment(index) {
        this.comments.splice(index, 1);
    }
}
CommentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comments',
                template: "<div class=\"aa-comments\">\r\n  <div \r\n    (click)=\"\r\n    makeComments=!makeComments; \r\n    toggleComments=false; \r\n    clicked=false\" \r\n    class=\"\r\n    comments-trigger \r\n    cursor-pointer \r\n    flex-group \r\n    flex-start \r\n    margin-bottom-0-5\"\r\n  >\r\n    <div class=\"material-icons aa-orange-100 margin-top-0-25 margin-right-0-5\">comment</div>\r\n    <h3 class=\"margin-top-0-25\">\r\n      <span *ngIf=\"comments.length===0\">Click to add a comment</span>\r\n      <span *ngIf=\"comments.length===1\">There is ({{comments.length}}) comment</span>\r\n      <span *ngIf=\"comments.length>1\">There are ({{comments.length}}) comments</span>\r\n    </h3>\r\n  </div>\r\n  <div \r\n    class=\"\r\n    comments-panel \r\n    box-shadow-strong\r\n    border-radius-0-25 \r\n    bg-aa-white-100 \r\n    padding-1\" \r\n    [class.show-comments]=\"makeComments\"\r\n  >\r\n    <p \r\n      class=\"margin-top-0 italic aa-blue-100\" \r\n      *ngIf=\"!comments.length && !makeComments\"\r\n    >There are currently no comments\r\n    </p>\r\n    <div *ngIf=\"makeComments\" class=\"field boxed\">\r\n      <label>Comment</label>\r\n      <textarea [(ngModel)]=\"txtComment\" placeholder=\"Your Comment\" (change)=\"clicked=false\"></textarea>\r\n      <div class=\"flex-group flex-start\">\r\n        <button class=\"secondary margin-top-1\" (click)=\"addComment($event, cmt)\">Add comment</button>\r\n        <button \r\n          class=\"cancel margin-top-1\" \r\n          (click)=\"makeComments=false; toggleComments=false\"\r\n          >Close\r\n        </button>\r\n        <div>\r\n          <div \r\n            *ngIf=\"clicked && !txtComment\" \r\n            role=\"alert\"\r\n            class=\"error margin-top-1\" \r\n            >You need to add a comment\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"field boxed\" *ngIf=\"comments.length\">\r\n      <h3 *ngIf=\"makeComments\">Comments ({{comments.length}})</h3>\r\n      <div *ngIf=\"!toggleComments\" class=\"scroll-panel\">\r\n          <div class=\"scroll-panel-content\" [ngStyle]=\"{'max-height':'8rem'}\">\r\n            <table class=\"table-comments\">\r\n              <thead>\r\n                <tr>\r\n                  <th width=\"62%\"><div><span>Comment</span></div></th>\r\n                  <th width=\"20%\"><div><span>Added by</span></div></th>\r\n                  <th width=\"16%\"><div><span>Date added</span></div></th>\r\n                  <th width=\"2\" *ngIf=\"canDelete\"><div><span>&nbsp;</span></div></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                  <tr *ngFor=\"let cmt of comments; let i = index\"> \r\n                      <td title=\"{{ cmt.comment }}\">{{ cmt.comment }}</td>\r\n                      <td title=\"{{ person }}\">{{ person }}</td>\r\n                      <td title=\"{{ currentDate | DateFormatPipe }}\">{{ currentDate | DateFormatPipe }}</td>\r\n                      <td *ngIf=\"canDelete\">\r\n                        <button \r\n                          class=\"material-icons aa-red-100 transparent\" \r\n                          (click)=\"removeComment(i)\"\r\n                          >delete_forever</button>\r\n                      </td>\r\n                  </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>",
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                styles: [""]
            },] }
];
CommentsComponent.ctorParameters = () => [];
CommentsComponent.propDecorators = {
    comments: [{ type: Input }],
    commentsMade: [{ type: Output }],
    person: [{ type: Input }],
    canDelete: [{ type: Input }]
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2VsZW1lbnRzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQ2xCLENBQUMsQ0FBQzs7QUFNRixNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FBUTtJQUNwRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7SUFDaEQsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBUUYsTUFBTSxPQUFPLGlCQUFpQjtJQWE1QjtRQVZVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFjMUQsMEJBQTBCO1FBQ2xCLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFFN0IsMERBQTBEO1FBQzFELGdDQUFnQztRQUN4QixzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztRQVRoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQVVELGVBQWU7SUFDZixJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELG9EQUFvRDtJQUNwRCxJQUFJLFVBQVUsQ0FBQyxDQUFNO1FBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVELHNCQUFzQjtJQUN0QixNQUFNO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHNDQUFzQztJQUN0QyxVQUFVLENBQUMsVUFBZTtRQUN0QixJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELHNDQUFzQztJQUN0QyxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHNDQUFzQztJQUN0QyxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFXLEVBQUUsYUFBMkI7UUFDakQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE1BQU0sUUFBUSxHQUFpQjtnQkFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQ3pCLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUNwQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBR0gsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQXBGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHM0R0FBd0M7Z0JBRXhDLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDOzthQUNqRDs7Ozt1QkFHRSxLQUFLOzJCQUNMLE1BQU07cUJBSU4sS0FBSzt3QkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5jb25zdCBub29wID0gKCkgPT4ge1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21tZW50QXJyYXkge1xyXG4gIGNvbW1lbnQ6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbW1lbnRzQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWNvbW1lbnRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tbWVudHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgQElucHV0KCkgY29tbWVudHM6IENvbW1lbnRBcnJheVtdO1xyXG4gIEBPdXRwdXQoKSBjb21tZW50c01hZGUgPSBuZXcgRXZlbnRFbWl0dGVyPENvbW1lbnRBcnJheT4oKTtcclxuICBjbXQ6IENvbW1lbnRBcnJheTtcclxuICB0b2dnbGVDb21tZW50czogYm9vbGVhbjtcclxuICBjbGlja2VkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBlcnNvbjogc3RyaW5nO1xyXG4gIGN1cnJlbnREYXRlOiBhbnk7XHJcbiAgbWFrZUNvbW1lbnRzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNhbkRlbGV0ZTogYm9vbGVhbjtcclxuICBzaG93Q29uZmlybWF0aW9uOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICB9XHJcblxyXG4gIC8vIFRoZSBpbnRlcm5hbCBkYXRhIG1vZGVsXHJcbiAgcHJpdmF0ZSBpbm5lclZhbHVlOiBhbnkgPSAnJztcclxuXHJcbiAgLy8gUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzIHdoaWNoIGFyZSBsYXRlciBwcm92aWRlZFxyXG4gIC8vIGJ5IHRoZSBDb250cm9sIFZhbHVlIEFjY2Vzc29yXHJcbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcclxuXHJcbiAgLy8gZ2V0IGFjY2Vzc29yXHJcbiAgZ2V0IHR4dENvbW1lbnQoKTogYW55IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5uZXJWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIHNldCBhY2Nlc3NvciBpbmNsdWRpbmcgY2FsbCB0aGUgb25jaGFuZ2UgY2FsbGJhY2tcclxuICBzZXQgdHh0Q29tbWVudCh2OiBhbnkpIHtcclxuICAgICAgaWYgKHYgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gdjtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh2KTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxyXG4gIG9uQmx1cigpIHtcclxuICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgLy8gRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICB3cml0ZVZhbHVlKHR4dENvbW1lbnQ6IGFueSkge1xyXG4gICAgICBpZiAodHh0Q29tbWVudCAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSB0eHRDb21tZW50O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xyXG4gICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XHJcbiAgfVxyXG5cclxuICBhZGRDb21tZW50KF9FVkVOVDogYW55LCBfQ09NTUVOVEFSUkFZOiBDb21tZW50QXJyYXkpIHtcclxuICAgIGlmICh0aGlzLnR4dENvbW1lbnQpIHtcclxuICAgICAgY29uc3QgY29tbWVudHM6IENvbW1lbnRBcnJheSA9IHtcclxuICAgICAgICBjb21tZW50OiB0aGlzLnR4dENvbW1lbnRcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnRzKTtcclxuICAgICAgdGhpcy5jb21tZW50c01hZGUuZW1pdCh0aGlzLnR4dENvbW1lbnQpO1xyXG4gICAgICBjb25zb2xlLmxvZygnY29tbWVudCBpcyAnLCB0aGlzLnR4dENvbW1lbnQpO1xyXG4gICAgICBjb25zb2xlLmxvZygndGhpcyBjb21tZW50ICcsIHRoaXMuY29tbWVudHMpO1xyXG4gICAgICB0aGlzLnR4dENvbW1lbnQgPSAnJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICByZW1vdmVDb21tZW50KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29tbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==