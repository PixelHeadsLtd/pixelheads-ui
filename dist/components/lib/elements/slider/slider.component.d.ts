import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SliderComponent {
    fieldClass: string;
    labelText: any;
    sliderInline: boolean;
    sliderId: any;
    sliderName: any;
    disabled: any;
    labelMinWidth: any;
    sliderCheckedValue: any;
    set sliderChecked(value: any);
    sliderCheckedChanged: EventEmitter<boolean>;
    constructor();
    onChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderComponent, "aa-slider", never, { "fieldClass": { "alias": "fieldClass"; "required": false; }; "labelText": { "alias": "labelText"; "required": false; }; "sliderInline": { "alias": "sliderInline"; "required": false; }; "sliderId": { "alias": "sliderId"; "required": false; }; "sliderName": { "alias": "sliderName"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "labelMinWidth": { "alias": "labelMinWidth"; "required": false; }; "sliderChecked": { "alias": "sliderChecked"; "required": false; }; }, { "sliderCheckedChanged": "sliderCheckedChanged"; }, never, never, false, never>;
}
