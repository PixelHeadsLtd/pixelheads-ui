import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
export class TabNavigationSecondaryItemComponent {
    constructor() {
        this.text = 'Click me';
        this.secondaryTabClick = new EventEmitter();
    }
    onClick(event) {
        console.log('secondary tab clicked');
        this.secondaryTabClick.emit(event);
    }
    ngOnInit() {
    }
}
TabNavigationSecondaryItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tab-navigation-secondary-item',
                template: "<li><a (click)=\"onClick($event)\" [class.active]=\"isActive\">{{secondaryTabName}}</a></li>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
TabNavigationSecondaryItemComponent.ctorParameters = () => [];
TabNavigationSecondaryItemComponent.propDecorators = {
    isActive: [{ type: Input }],
    secondaryTabName: [{ type: Input }],
    text: [{ type: Input }],
    secondaryTabClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTSxPQUFPLG1DQUFtQztJQWE5QztRQVRTLFNBQUksR0FBRyxVQUFVLENBQUM7UUFFakIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU9qQyxDQUFDO0lBTFYsT0FBTyxDQUFDLEtBQVk7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUlELFFBQVE7SUFDUixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLHdHQUE2RDtnQkFFN0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3VCQUdFLEtBQUs7K0JBQ0wsS0FBSzttQkFDTCxLQUFLO2dDQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS10YWItbmF2aWdhdGlvbi1zZWNvbmRhcnktaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnktaXRlbS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNlY29uZGFyeVRhYk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSB0ZXh0ID0gJ0NsaWNrIG1lJztcclxuXHJcbiAgQE91dHB1dCgpIHNlY29uZGFyeVRhYkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzZWNvbmRhcnkgdGFiIGNsaWNrZWQnKTtcclxuICAgIHRoaXMuc2Vjb25kYXJ5VGFiQ2xpY2suZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==