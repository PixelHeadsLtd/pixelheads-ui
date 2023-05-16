import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TooltipComponent implements OnInit {
    setMinWidth: number;
    setMaxWidth: number;
    isSuccess: boolean;
    isInfo: boolean;
    isWarning: boolean;
    includeLabel: boolean;
    includeLegend: boolean;
    labelName: string;
    isError: boolean;
    xpos: string;
    ypos: string;
    customIcon: boolean;
    iconName: string;
    zIndex: number;
    labelFor: string;
    showAsAnchor: boolean;
    tooltipAnchor: any;
    preventAnchorWrapping: boolean;
    showAsButton: boolean;
    buttonText: string;
    buttonId: string;
    buttonClass: string;
    disabled: boolean;
    showTooltipOnClick: boolean;
    showTooltipOnHover: boolean;
    tooltipClicked: boolean;
    tooltipBtnText: boolean;
    buttonClick: EventEmitter<Event>;
    onButtonClick(e: Event): void;
    constructor();
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TooltipComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TooltipComponent, "aa-tooltip", never, { "setMinWidth": "setMinWidth"; "setMaxWidth": "setMaxWidth"; "isSuccess": "isSuccess"; "isInfo": "isInfo"; "isWarning": "isWarning"; "includeLabel": "includeLabel"; "includeLegend": "includeLegend"; "labelName": "labelName"; "isError": "isError"; "xpos": "xpos"; "ypos": "ypos"; "customIcon": "customIcon"; "iconName": "iconName"; "zIndex": "zIndex"; "labelFor": "labelFor"; "showAsAnchor": "showAsAnchor"; "tooltipAnchor": "tooltipAnchor"; "preventAnchorWrapping": "preventAnchorWrapping"; "showAsButton": "showAsButton"; "buttonText": "buttonText"; "buttonId": "buttonId"; "buttonClass": "buttonClass"; "disabled": "disabled"; "showTooltipOnClick": "showTooltipOnClick"; "showTooltipOnHover": "showTooltipOnHover"; "tooltipClicked": "tooltipClicked"; "tooltipBtnText": "tooltipBtnText"; }, { "buttonClick": "buttonClick"; }, never, ["*"]>;
}

//# sourceMappingURL=tooltip.component.d.ts.map