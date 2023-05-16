import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CommentsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CommentsComponent, "aa-comments", never, { "comments": "comments"; "person": "person"; "canDelete": "canDelete"; }, { "commentsMade": "commentsMade"; }, never, never>;
}

//# sourceMappingURL=comments.component.d.ts.map