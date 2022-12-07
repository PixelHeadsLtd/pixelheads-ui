import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertShieldComponent } from './alert-shield/alert-shield.component';
import { AnchorBackComponent } from './anchor-back/anchor-back.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';
import { ActionsSummaryComponent } from './actions-summary/actions-summary.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';
export class PatternsModule {
}
PatternsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AlertComponent,
                    AlertShieldComponent,
                    AnchorBackComponent,
                    ProgressBarComponent,
                    ProgressCircleComponent,
                    AlertShieldComponent,
                    ActionsSummaryComponent,
                    StatusIndicatorComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    AlertComponent,
                    AlertShieldComponent,
                    AnchorBackComponent,
                    ProgressBarComponent,
                    ProgressCircleComponent,
                    ActionsSummaryComponent,
                    StatusIndicatorComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BhdHRlcm5zL3BhdHRlcm5zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUEwQnpGLE1BQU0sT0FBTyxjQUFjOzs7WUF4QjFCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2Qix3QkFBd0I7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2Qix3QkFBd0I7aUJBQ3pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQvYWxlcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnRTaGllbGRDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LXNoaWVsZC9hbGVydC1zaGllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQW5jaG9yQmFja0NvbXBvbmVudCB9IGZyb20gJy4vYW5jaG9yLWJhY2svYW5jaG9yLWJhY2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzLWNpcmNsZS9wcm9ncmVzcy1jaXJjbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWN0aW9uc1N1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL2FjdGlvbnMtc3VtbWFyeS9hY3Rpb25zLXN1bW1hcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RhdHVzSW5kaWNhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9zdGF0dXMtaW5kaWNhdG9yL3N0YXR1cy1pbmRpY2F0b3IuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBbGVydENvbXBvbmVudCxcclxuICAgIEFsZXJ0U2hpZWxkQ29tcG9uZW50LFxyXG4gICAgQW5jaG9yQmFja0NvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQmFyQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQsXHJcbiAgICBBbGVydFNoaWVsZENvbXBvbmVudCxcclxuICAgIEFjdGlvbnNTdW1tYXJ5Q29tcG9uZW50LFxyXG4gICAgU3RhdHVzSW5kaWNhdG9yQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFsZXJ0Q29tcG9uZW50LFxyXG4gICAgQWxlcnRTaGllbGRDb21wb25lbnQsXHJcbiAgICBBbmNob3JCYWNrQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCxcclxuICAgIEFjdGlvbnNTdW1tYXJ5Q29tcG9uZW50LFxyXG4gICAgU3RhdHVzSW5kaWNhdG9yQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF0dGVybnNNb2R1bGUgeyB9XHJcbiJdfQ==