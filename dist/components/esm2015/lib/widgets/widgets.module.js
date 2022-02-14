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
                ],
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
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
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy93aWRnZXRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBbURsRSxNQUFNLE9BQU8sYUFBYTs7O1lBakR6QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLGFBQWE7b0JBQ2IsMkJBQTJCO29CQUMzQiw0QkFBNEI7b0JBQzVCLGdDQUFnQztvQkFDaEMsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLHlCQUF5QjtvQkFDekIsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixxQkFBcUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3pELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2QixhQUFhO29CQUNiLDJCQUEyQjtvQkFDM0IsNEJBQTRCO29CQUM1QixnQ0FBZ0M7b0JBQ2hDLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQix5QkFBeUI7b0JBQ3pCLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIscUJBQXFCO2lCQUN0QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbkZpbHRlclBpcGUgfSBmcm9tICcuLi9waXBlcy9pY29uLWZpbHRlcic7XHJcbmltcG9ydCB7IEFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25GYW5jeUNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWZhbmN5L2FjY29yZGlvbi1mYW5jeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2NhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkRmF2b3VyaXRlc0NvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLWZhdm91cml0ZXMvZGFzaGJvYXJkLWZhdm91cml0ZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkRmF2b3VyaXRlc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC1mYXZvdXJpdGVzLWxpc3QvZGFzaGJvYXJkLWZhdm91cml0ZXMtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYXZvdXJpdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9mYXZvdXJpdGVzL2Zhdm91cml0ZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmF2b3VyaXRlc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2Zhdm91cml0ZXMtbGlzdC9mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSWNvblBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi1waWNrZXIvaWNvbi1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5mb1BhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLXBhbmVsL2luZm8tcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5mb1BhbmVsU3RhY2tlZENvbXBvbmVudCB9IGZyb20gJy4vaW5mby1wYW5lbC1zdGFja2VkL2luZm8tcGFuZWwtc3RhY2tlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdW1tYXJ5VG9wQ29tcG9uZW50IH0gZnJvbSAnLi9zdW1tYXJ5LXRvcC9zdW1tYXJ5LXRvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdW1tYXJ5VG9wTGlzdENvbXBvbmVudCB9IGZyb20gJy4vc3VtbWFyeS10b3AtbGlzdC9zdW1tYXJ5LXRvcC1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0ckNvbXBvbmVudCB9IGZyb20gJy4vdG9hc3RyL3RvYXN0ci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdHJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90b2FzdHItaXRlbS90b2FzdHItaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXNlckZlZWRiYWNrQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLWZlZWRiYWNrL3VzZXItZmVlZGJhY2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUG9wb3ZlckNvbXBvbmVudCxcclxuICAgIEFjY29yZGlvbkNvbXBvbmVudCxcclxuICAgIEFjY29yZGlvbkZhbmN5Q29tcG9uZW50LFxyXG4gICAgQ2FyZENvbXBvbmVudCxcclxuICAgIERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIERhc2hib2FyZEZhdm91cml0ZXNDb21wb25lbnQsXHJcbiAgICBEYXNoYm9hcmRGYXZvdXJpdGVzTGlzdENvbXBvbmVudCxcclxuICAgIEZhdm91cml0ZXNDb21wb25lbnQsXHJcbiAgICBGYXZvdXJpdGVzTGlzdENvbXBvbmVudCxcclxuICAgIEljb25QaWNrZXJDb21wb25lbnQsXHJcbiAgICBJY29uRmlsdGVyUGlwZSxcclxuICAgIEluZm9QYW5lbENvbXBvbmVudCxcclxuICAgIEluZm9QYW5lbFN0YWNrZWRDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIE92ZXJsYXlDb21wb25lbnQsXHJcbiAgICBTdW1tYXJ5VG9wQ29tcG9uZW50LFxyXG4gICAgU3VtbWFyeVRvcExpc3RDb21wb25lbnQsXHJcbiAgICBUb2FzdHJDb21wb25lbnQsXHJcbiAgICBUb2FzdHJJdGVtQ29tcG9uZW50LFxyXG4gICAgVG9vbHRpcENvbXBvbmVudCxcclxuICAgIFVzZXJGZWVkYmFja0NvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBQb3BvdmVyQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uRmFuY3lDb21wb25lbnQsXHJcbiAgICBDYXJkQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIERhc2hib2FyZEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgSWNvblBpY2tlckNvbXBvbmVudCxcclxuICAgIEljb25GaWx0ZXJQaXBlLFxyXG4gICAgSW5mb1BhbmVsQ29tcG9uZW50LFxyXG4gICAgSW5mb1BhbmVsU3RhY2tlZENvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgT3ZlcmxheUNvbXBvbmVudCxcclxuICAgIFN1bW1hcnlUb3BDb21wb25lbnQsXHJcbiAgICBTdW1tYXJ5VG9wTGlzdENvbXBvbmVudCxcclxuICAgIFRvYXN0ckNvbXBvbmVudCxcclxuICAgIFRvYXN0ckl0ZW1Db21wb25lbnQsXHJcbiAgICBUb29sdGlwQ29tcG9uZW50LFxyXG4gICAgVXNlckZlZWRiYWNrQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRzTW9kdWxlIHt9XHJcbiJdfQ==