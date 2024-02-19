import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TagComponent {
    isShaped: boolean;
    tagText: string;
    isRed: boolean;
    isOrange: boolean;
    isGreen: boolean;
    isPlum: boolean;
    isBlue: boolean;
    isLightBlue: boolean;
    isWhite: boolean;
    isOchre: boolean;
    isBlack: boolean;
    isPink: boolean;
    removeTag: EventEmitter<Event>;
    constructor();
    onRemove(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TagComponent, "aa-tag", never, { "isShaped": { "alias": "isShaped"; "required": false; }; "tagText": { "alias": "tagText"; "required": false; }; "isRed": { "alias": "isRed"; "required": false; }; "isOrange": { "alias": "isOrange"; "required": false; }; "isGreen": { "alias": "isGreen"; "required": false; }; "isPlum": { "alias": "isPlum"; "required": false; }; "isBlue": { "alias": "isBlue"; "required": false; }; "isLightBlue": { "alias": "isLightBlue"; "required": false; }; "isWhite": { "alias": "isWhite"; "required": false; }; "isOchre": { "alias": "isOchre"; "required": false; }; "isBlack": { "alias": "isBlack"; "required": false; }; "isPink": { "alias": "isPink"; "required": false; }; }, { "removeTag": "removeTag"; }, never, never, false, never>;
}
