import { Component, OnInit, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export interface CommentArray {
  comment: any;
}

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CommentsComponent),
    multi: true
};

@Component({
  selector: 'aa-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CommentsComponent implements ControlValueAccessor {

  @Input() comments: CommentArray[];
  @Output() commentsMade = new EventEmitter<CommentArray>();
  cmt: CommentArray;
  toggleComments: boolean;
  clicked: boolean;
  @Input() person: string;
  currentDate: any;
  makeComments: boolean;
  @Input() canDelete: boolean;
  showConfirmation: boolean;

  constructor() {
    this.currentDate = new Date().getTime();
  }

  // The internal data model
  private innerValue: any = '';

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  // get accessor
  get txtComment(): any {
      return this.innerValue;
  }

  // set accessor including call the onchange callback
  set txtComment(v: any) {
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
  writeValue(txtComment: any) {
      if (txtComment !== this.innerValue) {
          this.innerValue = txtComment;
      }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }

  addComment(_EVENT: any, _COMMENTARRAY: CommentArray) {
    if (this.txtComment) {
      const comments: CommentArray = {
        comment: this.txtComment
      };
      this.comments.push(comments);
      this.commentsMade.emit(this.txtComment);
      console.log('comment is ', this.txtComment);
      console.log('this comment ', this.comments);
      this.txtComment = '';
      } else {
        this.clicked = true;
      }
    }


  removeComment(index: number) {
    this.comments.splice(index, 1);
  }

}
