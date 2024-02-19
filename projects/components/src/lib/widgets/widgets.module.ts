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
import { ElementSliderComponent } from './element-slider/element-slider.component';
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

@NgModule({
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
    ElementSliderComponent,
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
    ElementSliderComponent,
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
  ]
})
export class WidgetsModule {}
