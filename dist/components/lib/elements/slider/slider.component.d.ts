import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class SliderComponent implements OnInit {
    fieldClass: string;
    labelText: any;
    sliderInline: boolean;
    sliderId: any;
    sliderName: any;
    disabled: any;
    sliderCheckedValue: any;
    set sliderChecked(value: any);
    sliderCheckedChanged: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
    onChange(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SliderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<SliderComponent, "aa-slider", never, { "sliderChecked": "sliderChecked"; "fieldClass": "fieldClass"; "labelText": "labelText"; "sliderInline": "sliderInline"; "sliderId": "sliderId"; "sliderName": "sliderName"; "disabled": "disabled"; }, { "sliderCheckedChanged": "sliderCheckedChanged"; }, never, never>;
}

//# sourceMappingURL=slider.component.d.ts.map