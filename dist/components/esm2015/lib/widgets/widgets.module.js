import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconFilterPipe } from '../pipes/icon-filter';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionFancyComponent } from './accordion-fancy/accordion-fancy.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardFavouritesComponent } from './dashboard-favourites/dashboard-favourites.component';
import { DashboardFavouritesListComponent } from './dashboard-favourites-list/dashboard-favourites-list.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';
import { IconPickerComponent } from './icon-picker/icon-picker.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { InfoPanelStackedComponent } from './info-panel-stacked/info-panel-stacked.component';
import { ModalComponent } from './modal/modal.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PopoverComponent } from './popover/popover.component';
import { SummaryTopComponent } from './summary-top/summary-top.component';
import { SummaryTopListComponent } from './summary-top-list/summary-top-list.component';
import { ToastrComponent } from './toastr/toastr.component';
import { ToastrItemComponent } from './toastr-item/toastr-item.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { ListSelectableComponent } from './list-selectable/list-selectable.component';
export class WidgetsModule {
}
WidgetsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PopoverComponent,
                    AccordionComponent,
                    AccordionFancyComponent,
                    CardComponent,
                    CarouselComponent,
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
                    ModalDialogComponent,
                    OverlayComponent,
                    SummaryTopComponent,
                    SummaryTopListComponent,
                    ToastrComponent,
                    ToastrItemComponent,
                    TooltipComponent,
                    UserFeedbackComponent,
                    ListSelectableComponent
                ],
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                providers: [],
                exports: [
                    PopoverComponent,
                    AccordionComponent,
                    AccordionFancyComponent,
                    CardComponent,
                    CarouselComponent,
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
                    ModalDialogComponent,
                    OverlayComponent,
                    SummaryTopComponent,
                    SummaryTopListComponent,
                    ToastrComponent,
                    ToastrItemComponent,
                    TooltipComponent,
                    UserFeedbackComponent,
                    ListSelectableComponent
                ],
                entryComponents: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy93aWRnZXRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBNER0RixNQUFNLE9BQU8sYUFBYTs7O1lBekR6QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQiwyQkFBMkI7b0JBQzNCLDRCQUE0QjtvQkFDNUIsZ0NBQWdDO29CQUNoQyxtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIseUJBQXlCO29CQUN6QixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIscUJBQXFCO29CQUNyQix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3pELFNBQVMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2QixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsMkJBQTJCO29CQUMzQiw0QkFBNEI7b0JBQzVCLGdDQUFnQztvQkFDaEMsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLHlCQUF5QjtvQkFDekIsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtvQkFDckIsdUJBQXVCO2lCQUN4QjtnQkFDRCxlQUFlLEVBQUUsRUFBRTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJY29uRmlsdGVyUGlwZSB9IGZyb20gJy4uL3BpcGVzL2ljb24tZmlsdGVyJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjY29yZGlvbkZhbmN5Q29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tZmFuY3kvYWNjb3JkaW9uLWZhbmN5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQvY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkRmF2b3VyaXRlc0NvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLWZhdm91cml0ZXMvZGFzaGJvYXJkLWZhdm91cml0ZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkRmF2b3VyaXRlc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC1mYXZvdXJpdGVzLWxpc3QvZGFzaGJvYXJkLWZhdm91cml0ZXMtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYXZvdXJpdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9mYXZvdXJpdGVzL2Zhdm91cml0ZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmF2b3VyaXRlc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2Zhdm91cml0ZXMtbGlzdC9mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSWNvblBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi1waWNrZXIvaWNvbi1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5mb1BhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLXBhbmVsL2luZm8tcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5mb1BhbmVsU3RhY2tlZENvbXBvbmVudCB9IGZyb20gJy4vaW5mby1wYW5lbC1zdGFja2VkL2luZm8tcGFuZWwtc3RhY2tlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWRpYWxvZy9tb2RhbC1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdW1tYXJ5VG9wQ29tcG9uZW50IH0gZnJvbSAnLi9zdW1tYXJ5LXRvcC9zdW1tYXJ5LXRvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdW1tYXJ5VG9wTGlzdENvbXBvbmVudCB9IGZyb20gJy4vc3VtbWFyeS10b3AtbGlzdC9zdW1tYXJ5LXRvcC1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0ckNvbXBvbmVudCB9IGZyb20gJy4vdG9hc3RyL3RvYXN0ci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdHJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90b2FzdHItaXRlbS90b2FzdHItaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXNlckZlZWRiYWNrQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLWZlZWRiYWNrL3VzZXItZmVlZGJhY2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdFNlbGVjdGFibGVDb21wb25lbnQgfSBmcm9tICcuL2xpc3Qtc2VsZWN0YWJsZS9saXN0LXNlbGVjdGFibGUuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUG9wb3ZlckNvbXBvbmVudCxcclxuICAgIEFjY29yZGlvbkNvbXBvbmVudCxcclxuICAgIEFjY29yZGlvbkZhbmN5Q29tcG9uZW50LFxyXG4gICAgQ2FyZENvbXBvbmVudCxcclxuICAgIENhcm91c2VsQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIERhc2hib2FyZEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgSWNvblBpY2tlckNvbXBvbmVudCxcclxuICAgIEljb25GaWx0ZXJQaXBlLFxyXG4gICAgSW5mb1BhbmVsQ29tcG9uZW50LFxyXG4gICAgSW5mb1BhbmVsU3RhY2tlZENvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgTW9kYWxEaWFsb2dDb21wb25lbnQsXHJcbiAgICBPdmVybGF5Q29tcG9uZW50LFxyXG4gICAgU3VtbWFyeVRvcENvbXBvbmVudCxcclxuICAgIFN1bW1hcnlUb3BMaXN0Q29tcG9uZW50LFxyXG4gICAgVG9hc3RyQ29tcG9uZW50LFxyXG4gICAgVG9hc3RySXRlbUNvbXBvbmVudCxcclxuICAgIFRvb2x0aXBDb21wb25lbnQsXHJcbiAgICBVc2VyRmVlZGJhY2tDb21wb25lbnQsXHJcbiAgICBMaXN0U2VsZWN0YWJsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUG9wb3ZlckNvbXBvbmVudCxcclxuICAgIEFjY29yZGlvbkNvbXBvbmVudCxcclxuICAgIEFjY29yZGlvbkZhbmN5Q29tcG9uZW50LFxyXG4gICAgQ2FyZENvbXBvbmVudCxcclxuICAgIENhcm91c2VsQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIERhc2hib2FyZEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgSWNvblBpY2tlckNvbXBvbmVudCxcclxuICAgIEljb25GaWx0ZXJQaXBlLFxyXG4gICAgSW5mb1BhbmVsQ29tcG9uZW50LFxyXG4gICAgSW5mb1BhbmVsU3RhY2tlZENvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgTW9kYWxEaWFsb2dDb21wb25lbnQsXHJcbiAgICBPdmVybGF5Q29tcG9uZW50LFxyXG4gICAgU3VtbWFyeVRvcENvbXBvbmVudCxcclxuICAgIFN1bW1hcnlUb3BMaXN0Q29tcG9uZW50LFxyXG4gICAgVG9hc3RyQ29tcG9uZW50LFxyXG4gICAgVG9hc3RySXRlbUNvbXBvbmVudCxcclxuICAgIFRvb2x0aXBDb21wb25lbnQsXHJcbiAgICBVc2VyRmVlZGJhY2tDb21wb25lbnQsXHJcbiAgICBMaXN0U2VsZWN0YWJsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0c01vZHVsZSB7fVxyXG4iXX0=