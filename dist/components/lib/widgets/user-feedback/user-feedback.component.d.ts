import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FeedbackEvent } from './feedbackEvent';
import * as ɵngcc0 from '@angular/core';
export declare class UserFeedbackComponent implements OnInit {
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
    rating: number;
    userClosedPanel: boolean;
    feedbackForm: import("@angular/forms").FormGroup;
    onClose(): void;
    onFaceClick(rating: number): void;
    sendFB(): void;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<UserFeedbackComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<UserFeedbackComponent, "aa-user-feedback", never, { "toggleUserFeedback": "toggleUserFeedback"; "panelWidth": "panelWidth"; "question": "question"; "appName": "appName"; "label": "label"; "description": "description"; "footNote": "footNote"; "closingMessage": "closingMessage"; }, { "sendFeedback": "sendFeedback"; "close": "close"; }, never, never>;
}

//# sourceMappingURL=user-feedback.component.d.ts.map