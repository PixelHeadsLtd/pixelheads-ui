import { Component, Input, forwardRef, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export interface CommentArray {
  comment: any;
  currentDate: any;
  userName: string;
}

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CommentsComponent),
  multi: true
};

@Component({
  selector: 'ph-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CommentsComponent implements ControlValueAccessor {

  @Input() comments: CommentArray[] = [];
  @Output() commentsMade = new EventEmitter<CommentArray>();
  @Output() commentRemoved = new EventEmitter<number>();
  cmt?: CommentArray;
  toggleComments: boolean = false;
  clicked: boolean = false;
  @Input() userName: string = '';
  currentDate: Date;
  @Input() scrollHeight: any;
  @Input() panelWidth: any;
  makeComments: boolean = false;
  @Input() canDelete: boolean = false;
  showConfirmation: boolean = false;
  @Input() iconColour: any;
  @Input() buttonClass: string = '';
  @Input() positionRight: boolean = false;
  @Input() buttonText: string = '';

  constructor(private elementRef: ElementRef) {
    this.currentDate = new Date();
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement:any) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
        this.makeComments = false;
    }
  }

  // The internal data model
  private innerValue: any;

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

  addComment(_EVENT: any, _COMMENTARRAY?: CommentArray) {
    if (this.txtComment) {
      const comment: CommentArray = {
        comment: this.txtComment,
        currentDate: new Date(),
        userName: this.userName
      };
  
      this.comments.push(comment);
      this.commentsMade.emit(comment);
  
      console.log('comment is ', this.txtComment);
      console.log('this comment ', this.comments);
      this.txtComment = '';
    } else {
      this.clicked = true;
    }
  }

  removeComment(event: Event, index: number) {
    event.stopPropagation();
    this.comments.splice(index, 1);
    this.commentRemoved.emit(index);
  }

}
