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
                template: "<div class=\"aa-comments\">\n  <div \n    (click)=\"\n    makeComments=!makeComments; \n    toggleComments=false; \n    clicked=false\" \n    class=\"\n    comments-trigger \n    cursor-pointer \n    flex-group \n    flex-start \n    margin-bottom-0-5\"\n  >\n    <div class=\"material-icons aa-orange-100 margin-right-0-5\">comment</div>\n    <h3 class=\"margin-top-0-25 anchor-underline\">\n      <span *ngIf=\"comments.length===0\">Click to add a comment</span>\n      <span *ngIf=\"comments.length===1\">There is ({{comments.length}}) comment</span>\n      <span *ngIf=\"comments.length>1\">There are ({{comments.length}}) comments</span>\n    </h3>\n  </div>\n  <div \n    class=\"\n    comments-panel \n    box-shadow-strong\n    border-radius-0-25 \n    bg-aa-white-100 \n    padding-1\" \n    [class.show-comments]=\"makeComments\"\n  >\n    <p \n      class=\"margin-top-0 italic aa-blue-100\" \n      *ngIf=\"!comments.length && !makeComments\"\n    >There are currently no comments\n    </p>\n    <div *ngIf=\"makeComments\" class=\"field boxed\">\n      <label>Comment</label>\n      <textarea [(ngModel)]=\"txtComment\" placeholder=\"Your Comment\" (change)=\"clicked=false\"></textarea>\n      <div class=\"flex-group flex-start\">\n        <button class=\"secondary margin-top-1\" (click)=\"addComment($event, cmt)\">Add comment</button>\n        <button \n          class=\"cancel margin-top-1\" \n          (click)=\"makeComments=false; toggleComments=false\"\n          >Close\n        </button>\n        <div>\n          <div \n            *ngIf=\"clicked && !txtComment\" \n            role=\"alert\"\n            class=\"error margin-top-1\" \n            >You need to add a comment\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"field boxed\" *ngIf=\"comments.length\">\n      <h3 *ngIf=\"makeComments\">Comments ({{comments.length}})</h3>\n      <div *ngIf=\"!toggleComments\" class=\"scroll-panel\">\n          <div class=\"scroll-panel-content\" [ngStyle]=\"{'max-height':'8rem'}\">\n            <table class=\"table-comments\">\n              <thead>\n                <tr>\n                  <th width=\"62%\"><div><span>Comment</span></div></th>\n                  <th width=\"20%\"><div><span>Added by</span></div></th>\n                  <th width=\"16%\"><div><span>Date added</span></div></th>\n                  <th width=\"2\" *ngIf=\"canDelete\"><div><span>&nbsp;</span></div></th>\n                </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let cmt of comments; let i = index\"> \n                      <td title=\"{{ cmt.comment }}\">{{ cmt.comment }}</td>\n                      <td title=\"{{ person }}\">{{ person }}</td>\n                      <td title=\"{{ currentDate | DateFormatPipe }}\">{{ currentDate | DateFormatPipe }}</td>\n                      <td *ngIf=\"canDelete\">\n                        <button \n                          class=\"material-icons aa-red-100 transparent\" \n                          (click)=\"removeComment(i)\"\n                          >delete_forever</button>\n                      </td>\n                  </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2VsZW1lbnRzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQ2xCLENBQUMsQ0FBQzs7QUFNRixNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FBUTtJQUNwRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7SUFDaEQsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBUUYsTUFBTSxPQUFPLGlCQUFpQjtJQWE1QjtRQVZVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFjMUQsMEJBQTBCO1FBQ2xCLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFFN0IsMERBQTBEO1FBQzFELGdDQUFnQztRQUN4QixzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztRQVRoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQVVELGVBQWU7SUFDZixJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELG9EQUFvRDtJQUNwRCxJQUFJLFVBQVUsQ0FBQyxDQUFNO1FBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVELHNCQUFzQjtJQUN0QixNQUFNO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHNDQUFzQztJQUN0QyxVQUFVLENBQUMsVUFBZTtRQUN0QixJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELHNDQUFzQztJQUN0QyxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHNDQUFzQztJQUN0QyxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFXLEVBQUUsYUFBMkI7UUFDakQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE1BQU0sUUFBUSxHQUFpQjtnQkFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQ3pCLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUNwQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBR0gsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQXBGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDJ0R0FBd0M7Z0JBRXhDLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDOzthQUNqRDs7Ozt1QkFHRSxLQUFLOzJCQUNMLE1BQU07cUJBSU4sS0FBSzt3QkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBub29wID0gKCkgPT4ge1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDb21tZW50QXJyYXkge1xuICBjb21tZW50OiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbW1lbnRzQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tbWVudHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tbWVudHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21tZW50cy5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ29tbWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KCkgY29tbWVudHM6IENvbW1lbnRBcnJheVtdO1xuICBAT3V0cHV0KCkgY29tbWVudHNNYWRlID0gbmV3IEV2ZW50RW1pdHRlcjxDb21tZW50QXJyYXk+KCk7XG4gIGNtdDogQ29tbWVudEFycmF5O1xuICB0b2dnbGVDb21tZW50czogYm9vbGVhbjtcbiAgY2xpY2tlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcGVyc29uOiBzdHJpbmc7XG4gIGN1cnJlbnREYXRlOiBhbnk7XG4gIG1ha2VDb21tZW50czogYm9vbGVhbjtcbiAgQElucHV0KCkgY2FuRGVsZXRlOiBib29sZWFuO1xuICBzaG93Q29uZmlybWF0aW9uOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG4gIC8vIFRoZSBpbnRlcm5hbCBkYXRhIG1vZGVsXG4gIHByaXZhdGUgaW5uZXJWYWx1ZTogYW55ID0gJyc7XG5cbiAgLy8gUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzIHdoaWNoIGFyZSBsYXRlciBwcm92aWRlZFxuICAvLyBieSB0aGUgQ29udHJvbCBWYWx1ZSBBY2Nlc3NvclxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICAvLyBnZXQgYWNjZXNzb3JcbiAgZ2V0IHR4dENvbW1lbnQoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmlubmVyVmFsdWU7XG4gIH1cblxuICAvLyBzZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXG4gIHNldCB0eHRDb21tZW50KHY6IGFueSkge1xuICAgICAgaWYgKHYgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xuICAgICAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHY7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHYpO1xuICAgICAgfVxuICB9XG5cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBvbkJsdXIoKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKCk7XG4gIH1cblxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICB3cml0ZVZhbHVlKHR4dENvbW1lbnQ6IGFueSkge1xuICAgICAgaWYgKHR4dENvbW1lbnQgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xuICAgICAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHR4dENvbW1lbnQ7XG4gICAgICB9XG4gIH1cblxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgLy8gRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgYWRkQ29tbWVudChfRVZFTlQ6IGFueSwgX0NPTU1FTlRBUlJBWTogQ29tbWVudEFycmF5KSB7XG4gICAgaWYgKHRoaXMudHh0Q29tbWVudCkge1xuICAgICAgY29uc3QgY29tbWVudHM6IENvbW1lbnRBcnJheSA9IHtcbiAgICAgICAgY29tbWVudDogdGhpcy50eHRDb21tZW50XG4gICAgICB9O1xuICAgICAgdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnRzKTtcbiAgICAgIHRoaXMuY29tbWVudHNNYWRlLmVtaXQodGhpcy50eHRDb21tZW50KTtcbiAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IGlzICcsIHRoaXMudHh0Q29tbWVudCk7XG4gICAgICBjb25zb2xlLmxvZygndGhpcyBjb21tZW50ICcsIHRoaXMuY29tbWVudHMpO1xuICAgICAgdGhpcy50eHRDb21tZW50ID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuXG4gIHJlbW92ZUNvbW1lbnQoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuY29tbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG59XG4iXX0=