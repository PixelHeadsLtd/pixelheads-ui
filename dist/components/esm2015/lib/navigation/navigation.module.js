import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ContextMenuItemComponent } from './context-menu-item/context-menu-item.component';
import { NavContextComponent } from './nav-context/nav-context.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabNavigationComponent } from './tab-navigation/tab-navigation.component';
import { TabNavigationItemComponent } from './tab-navigation-item/tab-navigation-item.component';
import { TabNavigationSecondaryComponent } from './tab-navigation-secondary/tab-navigation-secondary.component';
import { TabNavigationSecondaryItemComponent } from './tab-navigation-secondary-item/tab-navigation-secondary-item.component';
import { TabNavigationContentDirective } from './tab-navigation-item/tab-navigation-content.directive';
import { TabNavigationHeaderContentDirective } from './tab-navigation-item/tab-navigation-header-content.directive';
export class NavigationModule {
}
NavigationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ContextMenuComponent,
                    ContextMenuItemComponent,
                    NavContextComponent,
                    ProgressIndicatorComponent,
                    StepperComponent,
                    TabNavigationComponent,
                    TabNavigationItemComponent,
                    TabNavigationSecondaryComponent,
                    TabNavigationSecondaryItemComponent,
                    TabNavigationContentDirective,
                    TabNavigationHeaderContentDirective
                ],
                imports: [CommonModule, RouterModule],
                exports: [
                    ContextMenuComponent,
                    ContextMenuItemComponent,
                    NavContextComponent,
                    StepperComponent,
                    ProgressIndicatorComponent,
                    TabNavigationComponent,
                    TabNavigationItemComponent,
                    TabNavigationSecondaryComponent,
                    TabNavigationSecondaryItemComponent,
                    TabNavigationContentDirective,
                    TabNavigationHeaderContentDirective
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDaEgsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDOUgsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDdkcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sK0RBQStELENBQUM7QUErQnBILE1BQU0sT0FBTyxnQkFBZ0I7OztZQTdCNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQiwwQkFBMEI7b0JBQzFCLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QiwwQkFBMEI7b0JBQzFCLCtCQUErQjtvQkFDL0IsbUNBQW1DO29CQUNuQyw2QkFBNkI7b0JBQzdCLG1DQUFtQztpQkFDcEM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztnQkFDckMsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsd0JBQXdCO29CQUN4QixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLDBCQUEwQjtvQkFDMUIsK0JBQStCO29CQUMvQixtQ0FBbUM7b0JBQ25DLDZCQUE2QjtvQkFDN0IsbUNBQW1DO2lCQUNwQzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udGV4dE1lbnVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZXh0LW1lbnUtaXRlbS9jb250ZXh0LW1lbnUtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZDb250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9uYXYtY29udGV4dC9uYXYtY29udGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0luZGljYXRvckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtaW5kaWNhdG9yL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdGVwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFiTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLW5hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3RhYi1uYXZpZ2F0aW9uLWl0ZW0vdGFiLW5hdmlnYXRpb24taXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnkvdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnktaXRlbS90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnktaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJOYXZpZ2F0aW9uQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdmlnYXRpb24taXRlbS90YWItbmF2aWdhdGlvbi1jb250ZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRhYk5hdmlnYXRpb25IZWFkZXJDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi90YWItbmF2aWdhdGlvbi1pdGVtL3RhYi1uYXZpZ2F0aW9uLWhlYWRlci1jb250ZW50LmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQ29udGV4dE1lbnVDb21wb25lbnQsXHJcbiAgICBDb250ZXh0TWVudUl0ZW1Db21wb25lbnQsXHJcbiAgICBOYXZDb250ZXh0Q29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NJbmRpY2F0b3JDb21wb25lbnQsXHJcbiAgICBTdGVwcGVyQ29tcG9uZW50LFxyXG4gICAgVGFiTmF2aWdhdGlvbkNvbXBvbmVudCxcclxuICAgIFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50LFxyXG4gICAgVGFiTmF2aWdhdGlvblNlY29uZGFyeUNvbXBvbmVudCxcclxuICAgIFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50LFxyXG4gICAgVGFiTmF2aWdhdGlvbkNvbnRlbnREaXJlY3RpdmUsXHJcbiAgICBUYWJOYXZpZ2F0aW9uSGVhZGVyQ29udGVudERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb250ZXh0TWVudUNvbXBvbmVudCxcclxuICAgIENvbnRleHRNZW51SXRlbUNvbXBvbmVudCxcclxuICAgIE5hdkNvbnRleHRDb21wb25lbnQsXHJcbiAgICBTdGVwcGVyQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NJbmRpY2F0b3JDb21wb25lbnQsXHJcbiAgICBUYWJOYXZpZ2F0aW9uQ29tcG9uZW50LFxyXG4gICAgVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQsXHJcbiAgICBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5Q29tcG9uZW50LFxyXG4gICAgVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQsXHJcbiAgICBUYWJOYXZpZ2F0aW9uQ29udGVudERpcmVjdGl2ZSxcclxuICAgIFRhYk5hdmlnYXRpb25IZWFkZXJDb250ZW50RGlyZWN0aXZlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbk1vZHVsZSB7fVxyXG4iXX0=