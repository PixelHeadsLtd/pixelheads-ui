import {
  AnimationsModule,
  ElementsModule,
  LayoutModule,
  NavigationModule,
  PatternsModule,
  WidgetsModule,
  DirectivesModule,
} from '@angloamerican/components';

import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppIconsPipe } from '../pipes/app-icons.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionFancyComponent } from './accordion-fancy/accordion-fancy.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AnchorComponent } from './anchor/anchor.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BladeComponent } from './blade/blade.component';
import { BladeBottomComponent } from './blade-bottom/blade-bottom.component';
import { BladeTopComponent } from './blade-top/blade-top.component';
import { BorderComponent } from './border/border.component';
import { BorderRadiusComponent } from './border-radius/border-radius.component';
import { BoxComponent } from './box/box.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardComponent } from './card/card.component';
import { CustomTooltipComponent } from './ag-grid/custom-tooltip.component';
import { CustomCardComponent } from './ag-grid/custom-card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ColoursComponent } from './colours/colours.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { DashboardFavouritesComponent } from './dashboard-favourites/dashboard-favourites.component';
import { EditorialComponent } from './editorial/editorial.component';
import { FieldComponent } from './field/field.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FlexComponent } from './flex/flex.component';
import { FooterComponent } from './footer/footer.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { IconsComponent } from './icons/icons.component';
import { InputComponent } from './input/input.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoadingSpinnerPageComponent } from './loading-spinner-page/loading-spinner-page.component';
import { MarginComponent } from './margin/margin.component';
import { MarkupComponent } from './markup/markup.component';
import { ModalComponent } from './modal/modal.component';
import { OverlayComponent } from './overlay/overlay.component';
import { TabNavigationComponent } from './tab-navigation/tab-navigation.component';
import { PaddingComponent } from './padding/padding.component';
import { DlPopoverComponent } from './popover/popover.component';
import { PageLayoutExamplesComponent } from './page-layout-examples/page-layout-examples.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { ProgressIndicatorLhComponent } from './progress-indicator-lh/progress-indicator-lh.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';
import { ReleaseNotesComponentsComponent } from './_release-notes/release-notes-components.component';
import { ReleaseNotesStylesComponent } from './_release-notes/release-notes-styles.component';
import { SelectComponent } from './select/select.component';
import { SharedModule } from './shared/shared.module';
import { ShieldsComponent } from './shields/shields.component';
import { StepperComponent } from './stepper/stepper.component';
import { SummaryTopComponent } from './summary-top/summary-top.component';
import { TablesComponent } from './tables/tables.component';
import { TagsComponent } from './tags/tags.component';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
import { TypographyComponent } from './typography/typography.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { WidthsComponent } from './widths/widths.component';
import { NavContextComponent } from './nav-context/nav-context.component';
import { NgbDatepickerComponent } from './ngb-datepicker/ngb-datepicker.component';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { HtmlEmailComponent } from './html-email/html-email.component';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { FieldValidationComponent } from './field-validation/field-validation.component';
import { IconPickerComponent } from './icon-picker/icon-picker.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { ElementsAlignmentComponent } from './elements-alignment/elements-alignment.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { SliderComponent } from './slider/slider.component';
import { NavCoreComponent } from './nav-core/nav-core.component';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from './ag-grid/avatar.component'
import { EllipsisContextMenuComponent } from './ag-grid/ellipsis-context-menu/ellipsis-context-menu.component';
import { ToastrComponent } from './toastr/toastr.component'

@NgModule({
  declarations: [
    AppComponent,
    AppIconsPipe,
    AccordionComponent,
    AccordionFancyComponent,
    AgGridComponent,
    AlertsComponent,
    AnchorComponent,
    BladeComponent,
    BladeBottomComponent,
    BladeTopComponent,
    BorderComponent,
    BorderRadiusComponent,
    ButtonsComponent,
    BoxComponent,
    CardComponent,
    CustomCardComponent,
    CustomTooltipComponent,
    CheckboxComponent,
    ColoursComponent,
    ContextMenuComponent,
    DashboardFavouritesComponent,
    EditorialComponent,
    FilterComponent,
    FilterPipe,
    FormElementsComponent,
    FlexComponent,
    FieldComponent,
    FieldValidationComponent,
    FieldsetComponent,
    FileUploadComponent,
    FooterComponent,
    IconPickerComponent,
    IconsComponent,
    InputComponent,
    InputTextareaComponent,
    MarginComponent,
    MarkupComponent,
    ModalComponent,
    NavCoreComponent,
    OverlayComponent,
    LandingPageComponent,
    LoadingSpinnerComponent,
    LoadingSpinnerPageComponent,
    TabNavigationComponent,
    PageLayoutExamplesComponent,
    PaddingComponent,
    ProgressIndicatorComponent,
    ProgressIndicatorLhComponent,
    DlPopoverComponent,
    ProgressBarComponent,
    ProgressCircleComponent,
    ReleaseNotesComponentsComponent,
    ReleaseNotesStylesComponent,
    ShieldsComponent,
    SelectComponent,
    StepperComponent,
    SummaryTopComponent,
    TablesComponent,
    TagsComponent,
    TreeMenuComponent,
    TypographyComponent,
    TooltipComponent,
    ButtonIconComponent,
    WidthsComponent,
    NavContextComponent,
    NgbDatepickerComponent,
    NgSelectComponent,
    HtmlEmailComponent,
    InputRadioComponent,
    InfoPanelComponent,
    ElementsAlignmentComponent,
    UserFeedbackComponent,
    HighlightDirective,
    OverlayComponent,
    SliderComponent,
    HeaderComponent,
    BorderRadiusComponent,
    BorderComponent,
    AvatarComponent,
    EllipsisContextMenuComponent,
    ToastrComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AnimationsModule,
    NgSelectModule,
    DirectivesModule,
    ElementsModule,
    LayoutModule,
    NavigationModule,
    PatternsModule,
    WidgetsModule,
    AgGridModule.withComponents([CustomTooltipComponent, CustomCardComponent, AvatarComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EllipsisContextMenuComponent
  ]
})
export class AppModule {}
