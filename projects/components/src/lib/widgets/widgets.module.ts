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

@NgModule({
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
})
export class WidgetsModule {}
