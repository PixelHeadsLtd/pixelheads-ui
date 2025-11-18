import {
  AnimationsModule,
  ElementsModule,
  LayoutModule,
  NavigationModule,
  PatternsModule,
  WidgetsModule,
  DirectivesModule
} from '@angloamerican/components';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QuillModule } from 'ngx-quill'
import { HighchartsChartModule } from 'highcharts-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppIconsPipe } from '../pipes/app-icons.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionFancyComponent } from './accordion-fancy/accordion-fancy.component';
import { ActionsSummaryComponent } from './actions-summary/actions-summary.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AnchorComponent } from './anchor/anchor.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BladeComponent } from './blade/blade.component';
import { BladeBottomComponent } from './blade-bottom/blade-bottom.component';
import { BladeTopComponent } from './blade-top/blade-top.component';
import { BorderComponent } from './border/border.component';
import { BorderRadiusComponent } from './border-radius/border-radius.component';
import { FeatureboxComponent } from './feature-box/feature-box.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ColoursComponent } from './colours/colours.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ElementSliderComponent } from './element-slider/element-slider.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { DateFormatPipe } from '../pipes/date-pipe';
import { NGBDateFormatPipe } from '../pipes/ngb-date-pipe';
import { EditorialComponent } from './editorial/editorial.component';
import { FieldComponent } from './field/field.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadDirective } from './file-upload/file-upload.directive';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { ColumnFilterPipe } from '../pipes/column-filter-pipe';
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
import { TabPageOneComponent } from './tab-navigation/tab-page-one/tab-page-one.component';
import { TabPageTwoComponent } from './tab-navigation/tab-page-two/tab-page-two.component';
import { TabPageThreeComponent } from './tab-navigation/tab-page-three/tab-page-three.component'
import { TabPageFourComponent } from './tab-navigation/tab-page-four/tab-page-four.component';
import { TabSubPageOneComponent } from './tab-navigation/tab-sub-page-one/tab-sub-page-one.component';
import { TabSubPageTwoComponent } from './tab-navigation/tab-sub-page-two/tab-sub-page-two.component';
import { TabSubPageThreeComponent } from './tab-navigation/tab-sub-page-three/tab-sub-page-three.component';
import { TextComponent } from './text/text.component'
import { TickerComponent } from './ticker/ticker.component'
import { PaddingComponent } from './padding/padding.component';
import { DlPopoverComponent } from './popover/popover.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';
import { ReleaseNotesComponentsComponent } from '../release-notes/release-notes-components.component';
import { ReleaseNotesStylesComponent } from '../release-notes/release-notes-styles.component';
import { SelectComponent } from './select/select.component';
import { SharedModule } from './shared/shared.module';
import { AlertShieldsComponent } from './alert-shields/alert-shields.component';
import { StepperComponent } from './stepper/stepper.component';
import { SummaryTopComponent } from './summary-top/summary-top.component';
import { TablesComponent } from './tables/tables.component';
import { TagsComponent } from './tags/tags.component';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
import { TypographyComponent } from './typography/typography.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { WidthsComponent } from './widths/widths.component';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { ValidationComponent } from './validation/validation.component';
import { IconPickerComponent } from './icon-picker/icon-picker.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { SliderComponent } from './slider/slider.component';
import { ToastrComponent } from './toastr/toastr.component';
import { TreeComponent } from './tree-menu/tree/tree.component';
import { CommentsComponent } from './comments/comments.component';
import { MiscComponent } from './misc/misc.component';
import { ListSelectableComponent } from './list-selectable/list-selectable.component';
import { UiBlockComponent } from './ui-block/ui-block.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';
import { CounterComponent } from './counter/counter.component';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { CustomWrapperComponent } from './custom-wrapper/custom-wrapper.component';
import { TooltipDynamicComponent } from './tooltip-dynamic/tooltip-dynamic.component';
import { RotatingSphereComponent } from './landing-page/rotating-sphere.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { DlHeaderComponent } from '../shared/dl-header/dl-header.component';
import { DlLeftNavComponent } from '../shared/dl-left-nav/dl-left-nav.component';
import { DlAppsBladeComponent } from '../shared/dl-apps-blade/dl-apps-blade.component';
import { DlLoginBladeComponent } from '../shared/dl-login-blade/dl-login-blade.component';
import { DlSearchComponent } from '../shared/dl-search/dl-search.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';

@NgModule({
  declarations: [
    AppComponent,
    AppIconsPipe,
    AccordionComponent,
    AccordionFancyComponent,
    ActionsSummaryComponent,
    AlertsComponent,
    AnchorComponent,
    BladeComponent,
    BladeBottomComponent,
    BladeTopComponent,
    BorderComponent,
    BorderRadiusComponent,
    ButtonsComponent,
    FeatureboxComponent,
    CardComponent,
    CarouselComponent,
    CheckboxComponent,
    ColoursComponent,
    ContextMenuComponent,
    ElementSliderComponent,
    FavouritesComponent,
    DateFormatPipe,
    NGBDateFormatPipe,
    EditorialComponent,
    FilterComponent,
    FilterPipe,
    ColumnFilterPipe,
    FieldComponent,
    ValidationComponent,
    FieldsetComponent,
    FileUploadComponent,
    FileUploadDirective,
    IconPickerComponent,
    IconsComponent,
    InputComponent,
    InputTextareaComponent,
    MarginComponent,
    MarkupComponent,
    ModalComponent,
    OverlayComponent,
    LandingPageComponent,
    LoadingSpinnerComponent,
    LoadingSpinnerPageComponent,
    TabNavigationComponent,
    TabPageOneComponent,
    TabPageTwoComponent,
    TabPageThreeComponent,
    TabPageFourComponent,
    TabSubPageOneComponent,
    TabSubPageTwoComponent,
    TabSubPageThreeComponent,
    TickerComponent,
    PaddingComponent,
    ProgressIndicatorComponent,
    DlPopoverComponent,
    ProgressBarComponent,
    ProgressCircleComponent,
    ReleaseNotesComponentsComponent,
    ReleaseNotesStylesComponent,
    AlertShieldsComponent,
    SelectComponent,
    StepperComponent,
    SummaryTopComponent,
    TablesComponent,
    TagsComponent,
    TextComponent,
    TreeMenuComponent,
    TypographyComponent,
    TooltipComponent,
    WidthsComponent,
    InputRadioComponent,
    InfoPanelComponent,
    HighlightDirective,
    SliderComponent,
    BorderRadiusComponent,
    BorderComponent,
    ToastrComponent,
    TreeComponent,
    CommentsComponent,
    TextComponent,
    CarouselComponent,
    MiscComponent,
    ListSelectableComponent,
    UiBlockComponent,
    StatusIndicatorComponent,
    CounterComponent,
    ClickOutsideDirective,
    CustomWrapperComponent,
    TooltipDynamicComponent,
    RotatingSphereComponent,
    RangeSliderComponent,
    DlHeaderComponent,
    DlLeftNavComponent,
    DlAppsBladeComponent,
    DlLoginBladeComponent,
    DlSearchComponent,
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
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
    DragDropModule,
    HighchartsChartModule,
    QuillModule.forRoot()
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
