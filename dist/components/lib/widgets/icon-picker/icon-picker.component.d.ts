import * as i0 from "@angular/core";
export declare class IconPickerComponent {
    constructor();
    searchIcon: string;
    selectedIcon: string;
    selectedColor: string;
    showIcons: boolean;
    showLabel: boolean;
    labelName: string;
    icons: string[];
    selectIcon(event: any): void;
    selectColor(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconPickerComponent, "aa-icon-picker", never, { "searchIcon": { "alias": "searchIcon"; "required": false; }; "selectedIcon": { "alias": "selectedIcon"; "required": false; }; "selectedColor": { "alias": "selectedColor"; "required": false; }; "showIcons": { "alias": "showIcons"; "required": false; }; "showLabel": { "alias": "showLabel"; "required": false; }; "labelName": { "alias": "labelName"; "required": false; }; }, {}, never, never, false, never>;
}
