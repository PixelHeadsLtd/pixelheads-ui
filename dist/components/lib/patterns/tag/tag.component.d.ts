import { OnInit, EventEmitter } from '@angular/core';
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
}
//# sourceMappingURL=tag.component.d.ts.map