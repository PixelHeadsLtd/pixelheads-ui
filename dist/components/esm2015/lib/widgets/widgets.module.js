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
                    UserFeedbackComponent,
                    ListSelectableComponent,
                    OrderByPipe
                ],
                entryComponents: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy93aWRnZXRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWlFaEQsTUFBTSxPQUFPLGFBQWE7OztZQS9EekIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2QixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQiw0QkFBNEI7b0JBQzVCLDJCQUEyQjtvQkFDM0IsNEJBQTRCO29CQUM1QixnQ0FBZ0M7b0JBQ2hDLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQix5QkFBeUI7b0JBQ3pCLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsV0FBVztpQkFDWjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDO2dCQUN6RCxTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixrQkFBa0I7b0JBQ2xCLHVCQUF1QjtvQkFDdkIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsNEJBQTRCO29CQUM1QiwyQkFBMkI7b0JBQzNCLDRCQUE0QjtvQkFDNUIsZ0NBQWdDO29CQUNoQyxtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIseUJBQXlCO29CQUN6QixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLFdBQVc7aUJBQ1o7Z0JBQ0QsZUFBZSxFQUFFLEVBQUU7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSWNvbkZpbHRlclBpcGUgfSBmcm9tICcuLi9waXBlcy9pY29uLWZpbHRlcic7XHJcbmltcG9ydCB7IEFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25GYW5jeUNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWZhbmN5L2FjY29yZGlvbi1mYW5jeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2NhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQsIENhcm91c2VsSXRlbUVsZW1lbnREaXJlY3RpdmUgfSBmcm9tICcuL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcm91c2VsSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvY2Fyb3VzZWwvY2Fyb3VzZWwtaXRlbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC1jb250YWluZXIvZGFzaGJvYXJkLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRGYXZvdXJpdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQtZmF2b3VyaXRlcy9kYXNoYm9hcmQtZmF2b3VyaXRlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRGYXZvdXJpdGVzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLWZhdm91cml0ZXMtbGlzdC9kYXNoYm9hcmQtZmF2b3VyaXRlcy1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhdm91cml0ZXNDb21wb25lbnQgfSBmcm9tICcuL2Zhdm91cml0ZXMvZmF2b3VyaXRlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYXZvdXJpdGVzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZmF2b3VyaXRlcy1saXN0L2Zhdm91cml0ZXMtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJY29uUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uLXBpY2tlci9pY29uLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbmZvUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2luZm8tcGFuZWwvaW5mby1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbmZvUGFuZWxTdGFja2VkQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLXBhbmVsLXN0YWNrZWQvaW5mby1wYW5lbC1zdGFja2VkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1bW1hcnlUb3BDb21wb25lbnQgfSBmcm9tICcuL3N1bW1hcnktdG9wL3N1bW1hcnktdG9wLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1bW1hcnlUb3BMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zdW1tYXJ5LXRvcC1saXN0L3N1bW1hcnktdG9wLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9hc3RyQ29tcG9uZW50IH0gZnJvbSAnLi90b2FzdHIvdG9hc3RyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0ckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3RvYXN0ci1pdGVtL3RvYXN0ci1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2VyRmVlZGJhY2tDb21wb25lbnQgfSBmcm9tICcuL3VzZXItZmVlZGJhY2svdXNlci1mZWVkYmFjay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0U2VsZWN0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1zZWxlY3RhYmxlL2xpc3Qtc2VsZWN0YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPcmRlckJ5UGlwZSB9IGZyb20gJy4uL3BpcGVzL29yZGVyLWJ5JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBQb3BvdmVyQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uRmFuY3lDb21wb25lbnQsXHJcbiAgICBDYXJkQ29tcG9uZW50LFxyXG4gICAgQ2Fyb3VzZWxDb21wb25lbnQsXHJcbiAgICBDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgICBDYXJvdXNlbEl0ZW1FbGVtZW50RGlyZWN0aXZlLFxyXG4gICAgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIERhc2hib2FyZEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgSWNvblBpY2tlckNvbXBvbmVudCxcclxuICAgIEljb25GaWx0ZXJQaXBlLFxyXG4gICAgSW5mb1BhbmVsQ29tcG9uZW50LFxyXG4gICAgSW5mb1BhbmVsU3RhY2tlZENvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgTW9kYWxEaWFsb2dDb21wb25lbnQsXHJcbiAgICBPdmVybGF5Q29tcG9uZW50LFxyXG4gICAgU3VtbWFyeVRvcENvbXBvbmVudCxcclxuICAgIFN1bW1hcnlUb3BMaXN0Q29tcG9uZW50LFxyXG4gICAgVG9hc3RyQ29tcG9uZW50LFxyXG4gICAgVG9hc3RySXRlbUNvbXBvbmVudCxcclxuICAgIFRvb2x0aXBDb21wb25lbnQsXHJcbiAgICBVc2VyRmVlZGJhY2tDb21wb25lbnQsXHJcbiAgICBMaXN0U2VsZWN0YWJsZUNvbXBvbmVudCxcclxuICAgIE9yZGVyQnlQaXBlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBQb3BvdmVyQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uRmFuY3lDb21wb25lbnQsXHJcbiAgICBDYXJkQ29tcG9uZW50LFxyXG4gICAgQ2Fyb3VzZWxDb21wb25lbnQsXHJcbiAgICBDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgICBDYXJvdXNlbEl0ZW1FbGVtZW50RGlyZWN0aXZlLFxyXG4gICAgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIERhc2hib2FyZEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgRmF2b3VyaXRlc0NvbXBvbmVudCxcclxuICAgIEZhdm91cml0ZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgSWNvblBpY2tlckNvbXBvbmVudCxcclxuICAgIEljb25GaWx0ZXJQaXBlLFxyXG4gICAgSW5mb1BhbmVsQ29tcG9uZW50LFxyXG4gICAgSW5mb1BhbmVsU3RhY2tlZENvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgTW9kYWxEaWFsb2dDb21wb25lbnQsXHJcbiAgICBPdmVybGF5Q29tcG9uZW50LFxyXG4gICAgU3VtbWFyeVRvcENvbXBvbmVudCxcclxuICAgIFN1bW1hcnlUb3BMaXN0Q29tcG9uZW50LFxyXG4gICAgVG9hc3RyQ29tcG9uZW50LFxyXG4gICAgVG9hc3RySXRlbUNvbXBvbmVudCxcclxuICAgIFRvb2x0aXBDb21wb25lbnQsXHJcbiAgICBVc2VyRmVlZGJhY2tDb21wb25lbnQsXHJcbiAgICBMaXN0U2VsZWN0YWJsZUNvbXBvbmVudCxcclxuICAgIE9yZGVyQnlQaXBlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRzTW9kdWxlIHt9XHJcbiJdfQ==