import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export interface CommentArray {
    comment: any;
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class CommentsComponent implements ControlValueAccessor {
    comments: CommentArray[];
    commentsMade: EventEmitter<CommentArray>;
    cmt: CommentArray;
    toggleComments: boolean;
    clicked: boolean;
    person: string;
    currentDate: any;
    makeComments: boolean;
    canDelete: boolean;
    showConfirmation: boolean;
    iconColour: any;
    constructor();
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    get txtComment(): any;
    set txtComment(v: any);
    onBlur(): void;
    writeValue(txtComment: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    addComment(_EVENT: any, _COMMENTARRAY: CommentArray): void;
    removeComment(index: number): void;
}
//# sourceMappingURL=comments.component.d.ts.map