import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TagComponent implements OnInit {
    isShaped: boolean;
    tagText: boolean;
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
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TagComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TagComponent, "aa-tag", never, { "isShaped": "isShaped"; "tagText": "tagText"; "isRed": "isRed"; "isOrange": "isOrange"; "isGreen": "isGreen"; "isPlum": "isPlum"; "isBlue": "isBlue"; "isLightBlue": "isLightBlue"; "isWhite": "isWhite"; "isOchre": "isOchre"; "isBlack": "isBlack"; "isPink": "isPink"; }, { "removeTag": "removeTag"; }, never, never>;
}

//# sourceMappingURL=tag.component.d.ts.map