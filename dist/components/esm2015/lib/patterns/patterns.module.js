import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertShieldComponent } from './alert-shield/alert-shield.component';
import { AnchorBackComponent } from './anchor-back/anchor-back.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';
import { ActionsSummaryComponent } from './actions-summary/actions-summary.component';
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
                    ActionsSummaryComponent
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
                    ActionsSummaryComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BhdHRlcm5zL3BhdHRlcm5zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUF3QnRGLE1BQU0sT0FBTyxjQUFjOzs7WUF0QjFCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtpQkFDeEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGVydFNoaWVsZENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtc2hpZWxkL2FsZXJ0LXNoaWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbmNob3JCYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9hbmNob3ItYmFjay9hbmNob3ItYmFjay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25zU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9ucy1zdW1tYXJ5L2FjdGlvbnMtc3VtbWFyeS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFsZXJ0Q29tcG9uZW50LFxyXG4gICAgQWxlcnRTaGllbGRDb21wb25lbnQsXHJcbiAgICBBbmNob3JCYWNrQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCxcclxuICAgIEFsZXJ0U2hpZWxkQ29tcG9uZW50LFxyXG4gICAgQWN0aW9uc1N1bW1hcnlDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQWxlcnRDb21wb25lbnQsXHJcbiAgICBBbGVydFNoaWVsZENvbXBvbmVudCxcclxuICAgIEFuY2hvckJhY2tDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0JhckNvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQ2lyY2xlQ29tcG9uZW50LFxyXG4gICAgQWN0aW9uc1N1bW1hcnlDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXR0ZXJuc01vZHVsZSB7IH1cclxuIl19