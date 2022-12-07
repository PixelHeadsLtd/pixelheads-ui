import {
  AnimationsModule,
  ElementsModule,
  LayoutModule,
  NavigationModule,
  PatternsModule,
  WidgetsModule,
  DirectivesModule
} from '@angloamerican/components';
import { QuillModule } from 'ngx-quill'
import { DragDropModule } from '@angular/cdk/drag-drop';
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
import { ActionsSummaryComponent } from './actions-summary/actions-summary.component';
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
import { CarouselComponent } from './carousel/carousel.component';
import { CustomTooltipComponent } from './ag-grid/custom-tooltip.component';
import { CustomValidationTooltipComponent } from './ag-grid/custom-validation-tooltip.component';
import { CustomCardComponent } from './ag-grid/custom-card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ColoursComponent } from './colours/colours.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { DashboardFavouritesComponent } from './dashboard-favourites/dashboard-favourites.component';
import { DateFormatPipe } from '../pipes/date-pipe';
import { EditorialComponent } from './editorial/editorial.component';
import { FieldComponent } from './field/field.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FlexComponent } from './flex/flex.component';
import { FooterComponent } from './footer/footer.component';
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
import { TabPageOneComponent } from './tab-page-one/tab-page-one.component';
import { TabPageTwoComponent } from './tab-page-two/tab-page-two.component';
import { TabPageThreeComponent } from './tab-page-three/tab-page-three.component'
import { TextComponent } from './text/text.component'
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
import { AlertShieldsComponent } from './alert-shields/alert-shields.component';
import { StepperComponent } from './stepper/stepper.component';
import { SummaryTopComponent } from './summary-top/summary-top.component';
import { TablesComponent } from './tables/tables.component';
import { TagsComponent } from './tags/tags.component';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
import { TypographyComponent } from './typography/typography.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { WidthsComponent } from './widths/widths.component';
import { NavContextComponent } from './nav-context/nav-context.component';
import { NgbDatepickerComponent } from './ngb-datepicker/ngb-datepicker.component';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { HtmlEmailComponent } from './html-email/html-email.component';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { ValidationComponent } from './validation/validation.component';
import { IconPickerComponent } from './icon-picker/icon-picker.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { ElementsAlignmentComponent } from './elements-alignment/elements-alignment.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from './ag-grid/avatar.component'
import { EllipsisContextMenuComponent } from './ag-grid/ellipsis-context-menu/ellipsis-context-menu.component';
import { ToastrComponent } from './toastr/toastr.component';
import { TreeComponent } from './tree-menu/tree/tree.component';
import { CommentsComponent } from './comments/comments.component';
//import { ModalDialogComponent } from 'projects/components/src/lib/widgets/modal-dialog/modal-dialog.component';
import { NgxQuillComponent } from './ngx-quill/ngx-quill.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { GraphicComponent } from './unauthorised/graphic.component';
import { MiscComponent } from './misc/misc.component';
import { ListSelectableComponent } from './list-selectable/list-selectable.component';
import { UiBlockComponent } from './ui-block/ui-block.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    AppIconsPipe,
    AccordionComponent,
    AccordionFancyComponent,
    ActionsSummaryComponent,
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
    CarouselComponent,
    CustomCardComponent,
    CustomTooltipComponent,
    CustomValidationTooltipComponent,
    CheckboxComponent,
    ColoursComponent,
    ContextMenuComponent,
    DashboardFavouritesComponent,
    DateFormatPipe,
    EditorialComponent,
    FilterComponent,
    FilterPipe,
    FlexComponent,
    FieldComponent,
    ValidationComponent,
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
    OverlayComponent,
    LandingPageComponent,
    LoadingSpinnerComponent,
    LoadingSpinnerPageComponent,
    TabNavigationComponent,
    TabPageOneComponent,
    TabPageTwoComponent,
    TabPageThreeComponent,
    PageLayoutExamplesComponent,
    PaddingComponent,
    ProgressIndicatorComponent,
    ProgressIndicatorLhComponent,
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
    TreeComponent,
    CommentsComponent,
    //ModalDialogComponent,
    TextComponent,
    NgxQuillComponent,
    CarouselComponent,
    QuestionsAndAnswersComponent,
    UnauthorisedComponent,
    GraphicComponent,
    MiscComponent,
    ListSelectableComponent,
    UiBlockComponent,
    StatusIndicatorComponent
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
    DragDropModule,
    QuillModule.forRoot(),
    AgGridModule.withComponents([CustomTooltipComponent, CustomValidationTooltipComponent, CustomCardComponent, AvatarComponent]),
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EllipsisContextMenuComponent, //ModalDialogComponent
  ],
})
export class AppModule {}
