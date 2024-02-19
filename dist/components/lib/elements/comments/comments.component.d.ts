import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export interface CommentArray {
    comment: any;
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class CommentsComponent implements ControlValueAccessor {
    comments: CommentArray[];
    commentsMade: EventEmitter<CommentArray>;
    cmt?: CommentArray;
    toggleComments: boolean;
    clicked: boolean;
    person: string;
    currentDate: any;
    makeComments: boolean;
    canDelete: boolean;
    showConfirmation: boolean;
    iconColour: any;
    buttonClass: string;
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
    addComment(_EVENT: any, _COMMENTARRAY?: CommentArray): void;
    removeComment(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommentsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CommentsComponent, "aa-comments", never, { "comments": { "alias": "comments"; "required": false; }; "person": { "alias": "person"; "required": false; }; "canDelete": { "alias": "canDelete"; "required": false; }; "iconColour": { "alias": "iconColour"; "required": false; }; "buttonClass": { "alias": "buttonClass"; "required": false; }; }, { "commentsMade": "commentsMade"; }, never, never, false, never>;
}
