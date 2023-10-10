import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconFilterPipe } from '../pipes/icon-filter';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionFancyComponent } from './accordion-fancy/accordion-fancy.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent, CarouselItemElementDirective } from './carousel/carousel.component';
import { CarouselItemDirective } from '../directives/carousel/carousel-item.directive';
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
import { TooltipDynamicComponent } from './tooltip-dynamic/tooltip-dynamic.component';
import { TooltipDynamicDirective } from './tooltip-dynamic/tooltip-dynamic.directive';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { ListSelectableComponent } from './list-selectable/list-selectable.component';
import { OrderByPipe } from '../pipes/order-by';
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
                    CarouselItemDirective,
                    CarouselItemElementDirective,
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
                    TooltipDynamicComponent,
                    TooltipDynamicDirective,
                    UserFeedbackComponent,
                    ListSelectableComponent,
                    OrderByPipe
                ],
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                providers: [],
                exports: [
                    PopoverComponent,
                    AccordionComponent,
                    AccordionFancyComponent,
                    CardComponent,
                    CarouselComponent,
                    CarouselItemDirective,
                    CarouselItemElementDirective,
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
                    TooltipDynamicComponent,
                    TooltipDynamicDirective,
                    UserFeedbackComponent,
                    ListSelectableComponent,
                    OrderByPipe
                ],
                entryComponents: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy93aWRnZXRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQXFFaEQsTUFBTSxPQUFPLGFBQWE7OztZQW5FekIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2QixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQiw0QkFBNEI7b0JBQzVCLDJCQUEyQjtvQkFDM0IsNEJBQTRCO29CQUM1QixnQ0FBZ0M7b0JBQ2hDLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQix5QkFBeUI7b0JBQ3pCLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLFdBQVc7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztnQkFDekQsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLDRCQUE0QjtvQkFDNUIsMkJBQTJCO29CQUMzQiw0QkFBNEI7b0JBQzVCLGdDQUFnQztvQkFDaEMsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLHlCQUF5QjtvQkFDekIsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2QixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsV0FBVztpQkFDWjtnQkFDRCxlQUFlLEVBQUUsRUFBRTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJY29uRmlsdGVyUGlwZSB9IGZyb20gJy4uL3BpcGVzL2ljb24tZmlsdGVyJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjY29yZGlvbkZhbmN5Q29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tZmFuY3kvYWNjb3JkaW9uLWZhbmN5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQvY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCwgQ2Fyb3VzZWxJdGVtRWxlbWVudERpcmVjdGl2ZSB9IGZyb20gJy4vY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9jYXJvdXNlbC9jYXJvdXNlbC1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLWNvbnRhaW5lci9kYXNoYm9hcmQtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhc2hib2FyZEZhdm91cml0ZXNDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC1mYXZvdXJpdGVzL2Rhc2hib2FyZC1mYXZvdXJpdGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhc2hib2FyZEZhdm91cml0ZXNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQtZmF2b3VyaXRlcy1saXN0L2Rhc2hib2FyZC1mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmF2b3VyaXRlc0NvbXBvbmVudCB9IGZyb20gJy4vZmF2b3VyaXRlcy9mYXZvdXJpdGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhdm91cml0ZXNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9mYXZvdXJpdGVzLWxpc3QvZmF2b3VyaXRlcy1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEljb25QaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2ljb24tcGlja2VyL2ljb24tcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEluZm9QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vaW5mby1wYW5lbC9pbmZvLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEluZm9QYW5lbFN0YWNrZWRDb21wb25lbnQgfSBmcm9tICcuL2luZm8tcGFuZWwtc3RhY2tlZC9pbmZvLXBhbmVsLXN0YWNrZWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1kaWFsb2cvbW9kYWwtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXkvb3ZlcmxheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3VtbWFyeVRvcENvbXBvbmVudCB9IGZyb20gJy4vc3VtbWFyeS10b3Avc3VtbWFyeS10b3AuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3VtbWFyeVRvcExpc3RDb21wb25lbnQgfSBmcm9tICcuL3N1bW1hcnktdG9wLWxpc3Qvc3VtbWFyeS10b3AtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdHJDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0ci90b2FzdHIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9hc3RySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdG9hc3RyLWl0ZW0vdG9hc3RyLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvb2x0aXBEeW5hbWljQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLWR5bmFtaWMvdG9vbHRpcC1keW5hbWljLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvb2x0aXBEeW5hbWljRGlyZWN0aXZlIH0gZnJvbSAnLi90b29sdGlwLWR5bmFtaWMvdG9vbHRpcC1keW5hbWljLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFVzZXJGZWVkYmFja0NvbXBvbmVudCB9IGZyb20gJy4vdXNlci1mZWVkYmFjay91c2VyLWZlZWRiYWNrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3RTZWxlY3RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0LXNlbGVjdGFibGUvbGlzdC1zZWxlY3RhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9yZGVyQnlQaXBlIH0gZnJvbSAnLi4vcGlwZXMvb3JkZXItYnknO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBvcG92ZXJDb21wb25lbnQsXHJcbiAgICBBY2NvcmRpb25Db21wb25lbnQsXHJcbiAgICBBY2NvcmRpb25GYW5jeUNvbXBvbmVudCxcclxuICAgIENhcmRDb21wb25lbnQsXHJcbiAgICBDYXJvdXNlbENvbXBvbmVudCxcclxuICAgIENhcm91c2VsSXRlbURpcmVjdGl2ZSxcclxuICAgIENhcm91c2VsSXRlbUVsZW1lbnREaXJlY3RpdmUsXHJcbiAgICBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBEYXNoYm9hcmRGYXZvdXJpdGVzQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkRmF2b3VyaXRlc0xpc3RDb21wb25lbnQsXHJcbiAgICBGYXZvdXJpdGVzQ29tcG9uZW50LFxyXG4gICAgRmF2b3VyaXRlc0xpc3RDb21wb25lbnQsXHJcbiAgICBJY29uUGlja2VyQ29tcG9uZW50LFxyXG4gICAgSWNvbkZpbHRlclBpcGUsXHJcbiAgICBJbmZvUGFuZWxDb21wb25lbnQsXHJcbiAgICBJbmZvUGFuZWxTdGFja2VkQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBNb2RhbERpYWxvZ0NvbXBvbmVudCxcclxuICAgIE92ZXJsYXlDb21wb25lbnQsXHJcbiAgICBTdW1tYXJ5VG9wQ29tcG9uZW50LFxyXG4gICAgU3VtbWFyeVRvcExpc3RDb21wb25lbnQsXHJcbiAgICBUb2FzdHJDb21wb25lbnQsXHJcbiAgICBUb2FzdHJJdGVtQ29tcG9uZW50LFxyXG4gICAgVG9vbHRpcENvbXBvbmVudCxcclxuICAgIFRvb2x0aXBEeW5hbWljQ29tcG9uZW50LFxyXG4gICAgVG9vbHRpcER5bmFtaWNEaXJlY3RpdmUsXHJcbiAgICBVc2VyRmVlZGJhY2tDb21wb25lbnQsXHJcbiAgICBMaXN0U2VsZWN0YWJsZUNvbXBvbmVudCxcclxuICAgIE9yZGVyQnlQaXBlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBQb3BvdmVyQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uRmFuY3lDb21wb25lbnQsXHJcbiAgICBDYXJkQ29tcG9uZW50LFxyXG4gICAgQ2Fyb3VzZWxDb21wb25lbnQsXHJcbiAgICBDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgICBDYXJvdXNlbEl0ZW1FbGVtZW50RGlyZWN0aXZlLFxyXG4gICAgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIERhc2hib2FyZEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgSWNvblBpY2tlckNvbXBvbmVudCxcclxuICAgIEljb25GaWx0ZXJQaXBlLFxyXG4gICAgSW5mb1BhbmVsQ29tcG9uZW50LFxyXG4gICAgSW5mb1BhbmVsU3RhY2tlZENvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgTW9kYWxEaWFsb2dDb21wb25lbnQsXHJcbiAgICBPdmVybGF5Q29tcG9uZW50LFxyXG4gICAgU3VtbWFyeVRvcENvbXBvbmVudCxcclxuICAgIFN1bW1hcnlUb3BMaXN0Q29tcG9uZW50LFxyXG4gICAgVG9hc3RyQ29tcG9uZW50LFxyXG4gICAgVG9hc3RySXRlbUNvbXBvbmVudCxcclxuICAgIFRvb2x0aXBDb21wb25lbnQsXHJcbiAgICBUb29sdGlwRHluYW1pY0NvbXBvbmVudCxcclxuICAgIFRvb2x0aXBEeW5hbWljRGlyZWN0aXZlLFxyXG4gICAgVXNlckZlZWRiYWNrQ29tcG9uZW50LFxyXG4gICAgTGlzdFNlbGVjdGFibGVDb21wb25lbnQsXHJcbiAgICBPcmRlckJ5UGlwZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0c01vZHVsZSB7fVxyXG4iXX0=