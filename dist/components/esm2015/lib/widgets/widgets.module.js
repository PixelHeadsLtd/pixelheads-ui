import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconFilterPipe } from '../pipes/icon-filter';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionFancyComponent } from './accordion-fancy/accordion-fancy.component';
import { CardComponent } from './card/card.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardFavouritesComponent } from './dashboard-favourites/dashboard-favourites.component';
import { DashboardFavouritesListComponent } from './dashboard-favourites-list/dashboard-favourites-list.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';
import { IconPickerComponent } from './icon-picker/icon-picker.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { InfoPanelStackedComponent } from './info-panel-stacked/info-panel-stacked.component';
import { ModalComponent } from './modal/modal.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PopoverComponent } from './popover/popover.component';
import { SummaryTopComponent } from './summary-top/summary-top.component';
import { SummaryTopListComponent } from './summary-top-list/summary-top-list.component';
import { ToastrComponent } from './toastr/toastr.component';
import { ToastrItemComponent } from './toastr-item/toastr-item.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from './services/modal-service/modal.service';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
export class WidgetsModule {
}
WidgetsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PopoverComponent,
                    AccordionComponent,
                    AccordionFancyComponent,
                    CardComponent,
                    DashboardContainerComponent,
                    DashboardFavouritesComponent,
                    DashboardFavouritesListComponent,
                    FavouritesComponent,
                    FavouritesListComponent,
                    IconPickerComponent,
                    IconFilterPipe,
                    InfoPanelComponent,
                    InfoPanelStackedComponent,
                    ModalComponent,
                    OverlayComponent,
                    SummaryTopComponent,
                    SummaryTopListComponent,
                    ToastrComponent,
                    ToastrItemComponent,
                    TooltipComponent,
                    UserFeedbackComponent,
                    ModalDialogComponent,
                ],
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                providers: [ModalService],
                exports: [
                    PopoverComponent,
                    AccordionComponent,
                    AccordionFancyComponent,
                    CardComponent,
                    DashboardContainerComponent,
                    DashboardFavouritesComponent,
                    DashboardFavouritesListComponent,
                    FavouritesComponent,
                    FavouritesListComponent,
                    IconPickerComponent,
                    IconFilterPipe,
                    InfoPanelComponent,
                    InfoPanelStackedComponent,
                    ModalComponent,
                    OverlayComponent,
                    SummaryTopComponent,
                    SummaryTopListComponent,
                    ToastrComponent,
                    ToastrItemComponent,
                    TooltipComponent,
                    UserFeedbackComponent,
                    ModalDialogComponent,
                ],
                entryComponents: [ModalDialogComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy93aWRnZXRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXdEN0UsTUFBTSxPQUFPLGFBQWE7OztZQXJEekIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2QixhQUFhO29CQUNiLDJCQUEyQjtvQkFDM0IsNEJBQTRCO29CQUM1QixnQ0FBZ0M7b0JBQ2hDLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQix5QkFBeUI7b0JBQ3pCLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIscUJBQXFCO29CQUNyQixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDekIsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLGFBQWE7b0JBQ2IsMkJBQTJCO29CQUMzQiw0QkFBNEI7b0JBQzVCLGdDQUFnQztvQkFDaEMsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLHlCQUF5QjtvQkFDekIsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uRmlsdGVyUGlwZSB9IGZyb20gJy4uL3BpcGVzL2ljb24tZmlsdGVyJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjY29yZGlvbkZhbmN5Q29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tZmFuY3kvYWNjb3JkaW9uLWZhbmN5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQvY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC1jb250YWluZXIvZGFzaGJvYXJkLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRGYXZvdXJpdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQtZmF2b3VyaXRlcy9kYXNoYm9hcmQtZmF2b3VyaXRlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRGYXZvdXJpdGVzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLWZhdm91cml0ZXMtbGlzdC9kYXNoYm9hcmQtZmF2b3VyaXRlcy1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhdm91cml0ZXNDb21wb25lbnQgfSBmcm9tICcuL2Zhdm91cml0ZXMvZmF2b3VyaXRlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYXZvdXJpdGVzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZmF2b3VyaXRlcy1saXN0L2Zhdm91cml0ZXMtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJY29uUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uLXBpY2tlci9pY29uLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbmZvUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2luZm8tcGFuZWwvaW5mby1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbmZvUGFuZWxTdGFja2VkQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLXBhbmVsLXN0YWNrZWQvaW5mby1wYW5lbC1zdGFja2VkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1bW1hcnlUb3BDb21wb25lbnQgfSBmcm9tICcuL3N1bW1hcnktdG9wL3N1bW1hcnktdG9wLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1bW1hcnlUb3BMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zdW1tYXJ5LXRvcC1saXN0L3N1bW1hcnktdG9wLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9hc3RyQ29tcG9uZW50IH0gZnJvbSAnLi90b2FzdHIvdG9hc3RyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0ckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3RvYXN0ci1pdGVtL3RvYXN0ci1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2VyRmVlZGJhY2tDb21wb25lbnQgfSBmcm9tICcuL3VzZXItZmVlZGJhY2svdXNlci1mZWVkYmFjay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tb2RhbC1zZXJ2aWNlL21vZGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBQb3BvdmVyQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uRmFuY3lDb21wb25lbnQsXHJcbiAgICBDYXJkQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIERhc2hib2FyZEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgSWNvblBpY2tlckNvbXBvbmVudCxcclxuICAgIEljb25GaWx0ZXJQaXBlLFxyXG4gICAgSW5mb1BhbmVsQ29tcG9uZW50LFxyXG4gICAgSW5mb1BhbmVsU3RhY2tlZENvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgT3ZlcmxheUNvbXBvbmVudCxcclxuICAgIFN1bW1hcnlUb3BDb21wb25lbnQsXHJcbiAgICBTdW1tYXJ5VG9wTGlzdENvbXBvbmVudCxcclxuICAgIFRvYXN0ckNvbXBvbmVudCxcclxuICAgIFRvYXN0ckl0ZW1Db21wb25lbnQsXHJcbiAgICBUb29sdGlwQ29tcG9uZW50LFxyXG4gICAgVXNlckZlZWRiYWNrQ29tcG9uZW50LFxyXG4gICAgTW9kYWxEaWFsb2dDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbTW9kYWxTZXJ2aWNlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBQb3BvdmVyQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uRmFuY3lDb21wb25lbnQsXHJcbiAgICBDYXJkQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIERhc2hib2FyZEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgSWNvblBpY2tlckNvbXBvbmVudCxcclxuICAgIEljb25GaWx0ZXJQaXBlLFxyXG4gICAgSW5mb1BhbmVsQ29tcG9uZW50LFxyXG4gICAgSW5mb1BhbmVsU3RhY2tlZENvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgT3ZlcmxheUNvbXBvbmVudCxcclxuICAgIFN1bW1hcnlUb3BDb21wb25lbnQsXHJcbiAgICBTdW1tYXJ5VG9wTGlzdENvbXBvbmVudCxcclxuICAgIFRvYXN0ckNvbXBvbmVudCxcclxuICAgIFRvYXN0ckl0ZW1Db21wb25lbnQsXHJcbiAgICBUb29sdGlwQ29tcG9uZW50LFxyXG4gICAgVXNlckZlZWRiYWNrQ29tcG9uZW50LFxyXG4gICAgTW9kYWxEaWFsb2dDb21wb25lbnQsXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbERpYWxvZ0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldHNNb2R1bGUge31cclxuIl19