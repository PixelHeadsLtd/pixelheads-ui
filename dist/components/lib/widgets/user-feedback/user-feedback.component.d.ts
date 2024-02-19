import { EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FeedbackEvent } from './feedbackEvent';
import * as i0 from "@angular/core";
export declare class UserFeedbackComponent {
    private readonly formBuilder;
    panelWidth: number;
    question: string;
    appName: string;
    label: string;
    description: string;
    footNote: string;
    closingMessage: string;
    toggleUserFeedback: boolean;
    sendFeedback: EventEmitter<FeedbackEvent>;
    close: EventEmitter<void>;
    startRating: boolean;
    faceClicked: boolean;
    tab: any;
    veryDissatisfied: any;
    dissatisfied: any;
    neutral: any;
    satisfied: any;
    verySatisfied: any;
    rating: number | null;
    userClosedPanel: boolean;
    feedbackForm: import("@angular/forms").FormGroup<{
        comment: import("@angular/forms").FormControl<null>;
    }>;
    onClose(): void;
    onFaceClick(rating: number): void;
    sendFB(): void;
    constructor(formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<UserFeedbackComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserFeedbackComponent, "aa-user-feedback", never, { "panelWidth": { "alias": "panelWidth"; "required": false; }; "question": { "alias": "question"; "required": false; }; "appName": { "alias": "appName"; "required": false; }; "label": { "alias": "label"; "required": false; }; "description": { "alias": "description"; "required": false; }; "footNote": { "alias": "footNote"; "required": false; }; "closingMessage": { "alias": "closingMessage"; "required": false; }; "toggleUserFeedback": { "alias": "toggleUserFeedback"; "required": false; }; }, { "sendFeedback": "sendFeedback"; "close": "close"; }, never, never, false, never>;
}
