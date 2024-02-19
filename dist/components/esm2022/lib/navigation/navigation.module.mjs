import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ContextMenuItemComponent } from './context-menu-item/context-menu-item.component';
import { NavContextComponent } from './nav-context/nav-context.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { ProgressIndicatorAdvancedComponent } from './progress-indicator-advanced/progress-indicator-advanced.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabNavigationComponent } from './tab-navigation/tab-navigation.component';
import { TabNavigationItemComponent } from './tab-navigation-item/tab-navigation-item.component';
import { TabNavigationSecondaryComponent } from './tab-navigation-secondary/tab-navigation-secondary.component';
import { TabNavigationSecondaryItemComponent } from './tab-navigation-secondary-item/tab-navigation-secondary-item.component';
import { TabNavigationContentDirective } from './tab-navigation-item/tab-navigation-content.directive';
import { TabNavigationSecondaryContentDirective } from './tab-navigation-secondary-item/tab-navigation-secondary-content.directive';
import { TabNavigationHeaderContentDirective } from './tab-navigation-item/tab-navigation-header-content.directive';
import * as i0 from "@angular/core";
export class NavigationModule {
    static { this.ɵfac = function NavigationModule_Factory(t) { return new (t || NavigationModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NavigationModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ContextMenuComponent,
                    ContextMenuItemComponent,
                    NavContextComponent,
                    ProgressIndicatorComponent,
                    ProgressIndicatorAdvancedComponent,
                    StepperComponent,
                    TabNavigationComponent,
                    TabNavigationItemComponent,
                    TabNavigationSecondaryComponent,
                    TabNavigationSecondaryItemComponent,
                    TabNavigationContentDirective,
                    TabNavigationSecondaryContentDirective,
                    TabNavigationHeaderContentDirective
                ],
                imports: [CommonModule, RouterModule],
                exports: [
                    ContextMenuComponent,
                    ContextMenuItemComponent,
                    NavContextComponent,
                    StepperComponent,
                    ProgressIndicatorComponent,
                    ProgressIndicatorAdvancedComponent,
                    TabNavigationComponent,
                    TabNavigationItemComponent,
                    TabNavigationSecondaryComponent,
                    TabNavigationSecondaryItemComponent,
                    TabNavigationContentDirective,
                    TabNavigationSecondaryContentDirective,
                    TabNavigationHeaderContentDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NavigationModule, { declarations: [ContextMenuComponent,
        ContextMenuItemComponent,
        NavContextComponent,
        ProgressIndicatorComponent,
        ProgressIndicatorAdvancedComponent,
        StepperComponent,
        TabNavigationComponent,
        TabNavigationItemComponent,
        TabNavigationSecondaryComponent,
        TabNavigationSecondaryItemComponent,
        TabNavigationContentDirective,
        TabNavigationSecondaryContentDirective,
        TabNavigationHeaderContentDirective], imports: [CommonModule, RouterModule], exports: [ContextMenuComponent,
        ContextMenuItemComponent,
        NavContextComponent,
        StepperComponent,
        ProgressIndicatorComponent,
        ProgressIndicatorAdvancedComponent,
        TabNavigationComponent,
        TabNavigationItemComponent,
        TabNavigationSecondaryComponent,
        TabNavigationSecondaryItemComponent,
        TabNavigationContentDirective,
        TabNavigationSecondaryContentDirective,
        TabNavigationHeaderContentDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDekgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDaEgsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDOUgsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDdkcsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDcEksT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sK0RBQStELENBQUM7O0FBbUNwSCxNQUFNLE9BQU8sZ0JBQWdCO2lGQUFoQixnQkFBZ0I7bUVBQWhCLGdCQUFnQjt1RUFqQmpCLFlBQVksRUFBRSxZQUFZOztpRkFpQnpCLGdCQUFnQjtjQWpDNUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQiwwQkFBMEI7b0JBQzFCLGtDQUFrQztvQkFDbEMsZ0JBQWdCO29CQUNoQixzQkFBc0I7b0JBQ3RCLDBCQUEwQjtvQkFDMUIsK0JBQStCO29CQUMvQixtQ0FBbUM7b0JBQ25DLDZCQUE2QjtvQkFDN0Isc0NBQXNDO29CQUN0QyxtQ0FBbUM7aUJBQ3BDO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLDBCQUEwQjtvQkFDMUIsa0NBQWtDO29CQUNsQyxzQkFBc0I7b0JBQ3RCLDBCQUEwQjtvQkFDMUIsK0JBQStCO29CQUMvQixtQ0FBbUM7b0JBQ25DLDZCQUE2QjtvQkFDN0Isc0NBQXNDO29CQUN0QyxtQ0FBbUM7aUJBQ3BDO2FBQ0Y7O3dGQUNZLGdCQUFnQixtQkEvQnpCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQixrQ0FBa0M7UUFDbEMsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsK0JBQStCO1FBQy9CLG1DQUFtQztRQUNuQyw2QkFBNkI7UUFDN0Isc0NBQXNDO1FBQ3RDLG1DQUFtQyxhQUUzQixZQUFZLEVBQUUsWUFBWSxhQUVsQyxvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsMEJBQTBCO1FBQzFCLGtDQUFrQztRQUNsQyxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLCtCQUErQjtRQUMvQixtQ0FBbUM7UUFDbkMsNkJBQTZCO1FBQzdCLHNDQUFzQztRQUN0QyxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29udGV4dC1tZW51L2NvbnRleHQtbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250ZXh0TWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbnRleHQtbWVudS1pdGVtL2NvbnRleHQtbWVudS1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL25hdi1jb250ZXh0L25hdi1jb250ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy1pbmRpY2F0b3IvcHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzSW5kaWNhdG9yQWR2YW5jZWRDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzLWluZGljYXRvci1hZHZhbmNlZC9wcm9ncmVzcy1pbmRpY2F0b3ItYWR2YW5jZWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RlcHBlckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYk5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3RhYi1uYXZpZ2F0aW9uL3RhYi1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90YWItbmF2aWdhdGlvbi1pdGVtL3RhYi1uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFiTmF2aWdhdGlvblNlY29uZGFyeUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5L3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFiTmF2aWdhdGlvbkNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1uYXZpZ2F0aW9uLWl0ZW0vdGFiLW5hdmlnYXRpb24tY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5Q29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGFiTmF2aWdhdGlvbkhlYWRlckNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1uYXZpZ2F0aW9uLWl0ZW0vdGFiLW5hdmlnYXRpb24taGVhZGVyLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDb250ZXh0TWVudUNvbXBvbmVudCxcclxuICAgIENvbnRleHRNZW51SXRlbUNvbXBvbmVudCxcclxuICAgIE5hdkNvbnRleHRDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0luZGljYXRvckNvbXBvbmVudCxcclxuICAgIFByb2dyZXNzSW5kaWNhdG9yQWR2YW5jZWRDb21wb25lbnQsXHJcbiAgICBTdGVwcGVyQ29tcG9uZW50LFxyXG4gICAgVGFiTmF2aWdhdGlvbkNvbXBvbmVudCxcclxuICAgIFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50LFxyXG4gICAgVGFiTmF2aWdhdGlvblNlY29uZGFyeUNvbXBvbmVudCxcclxuICAgIFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50LFxyXG4gICAgVGFiTmF2aWdhdGlvbkNvbnRlbnREaXJlY3RpdmUsXHJcbiAgICBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5Q29udGVudERpcmVjdGl2ZSxcclxuICAgIFRhYk5hdmlnYXRpb25IZWFkZXJDb250ZW50RGlyZWN0aXZlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxyXG4gICAgQ29udGV4dE1lbnVJdGVtQ29tcG9uZW50LFxyXG4gICAgTmF2Q29udGV4dENvbXBvbmVudCxcclxuICAgIFN0ZXBwZXJDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0luZGljYXRvckNvbXBvbmVudCxcclxuICAgIFByb2dyZXNzSW5kaWNhdG9yQWR2YW5jZWRDb21wb25lbnQsXHJcbiAgICBUYWJOYXZpZ2F0aW9uQ29tcG9uZW50LFxyXG4gICAgVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQsXHJcbiAgICBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5Q29tcG9uZW50LFxyXG4gICAgVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQsXHJcbiAgICBUYWJOYXZpZ2F0aW9uQ29udGVudERpcmVjdGl2ZSxcclxuICAgIFRhYk5hdmlnYXRpb25TZWNvbmRhcnlDb250ZW50RGlyZWN0aXZlLFxyXG4gICAgVGFiTmF2aWdhdGlvbkhlYWRlckNvbnRlbnREaXJlY3RpdmVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uTW9kdWxlIHt9XHJcbiJdfQ==