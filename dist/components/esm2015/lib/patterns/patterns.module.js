import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertShieldComponent } from './alert-shield/alert-shield.component';
import { AnchorBackComponent } from './anchor-back/anchor-back.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';
import { ActionsSummaryComponent } from './actions-summary/actions-summary.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';
import { CounterComponent } from './counter/counter.component';
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
                    ActionsSummaryComponent,
                    StatusIndicatorComponent,
                    CounterComponent
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
                    StatusIndicatorComponent,
                    CounterComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BhdHRlcm5zL3BhdHRlcm5zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUEyQi9ELE1BQU0sT0FBTyxjQUFjOzs7WUF6QjFCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4QixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLGdCQUFnQjtpQkFDakI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGVydFNoaWVsZENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtc2hpZWxkL2FsZXJ0LXNoaWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbmNob3JCYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9hbmNob3ItYmFjay9hbmNob3ItYmFjay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25zU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9ucy1zdW1tYXJ5L2FjdGlvbnMtc3VtbWFyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdGF0dXNJbmRpY2F0b3JDb21wb25lbnQgfSBmcm9tICcuL3N0YXR1cy1pbmRpY2F0b3Ivc3RhdHVzLWluZGljYXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBbGVydENvbXBvbmVudCxcclxuICAgIEFsZXJ0U2hpZWxkQ29tcG9uZW50LFxyXG4gICAgQW5jaG9yQmFja0NvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQmFyQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQsXHJcbiAgICBBY3Rpb25zU3VtbWFyeUNvbXBvbmVudCxcclxuICAgIFN0YXR1c0luZGljYXRvckNvbXBvbmVudCxcclxuICAgIENvdW50ZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQWxlcnRDb21wb25lbnQsXHJcbiAgICBBbGVydFNoaWVsZENvbXBvbmVudCxcclxuICAgIEFuY2hvckJhY2tDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0JhckNvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQ2lyY2xlQ29tcG9uZW50LFxyXG4gICAgQWN0aW9uc1N1bW1hcnlDb21wb25lbnQsXHJcbiAgICBTdGF0dXNJbmRpY2F0b3JDb21wb25lbnQsXHJcbiAgICBDb3VudGVyQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF0dGVybnNNb2R1bGUgeyB9XHJcbiJdfQ==