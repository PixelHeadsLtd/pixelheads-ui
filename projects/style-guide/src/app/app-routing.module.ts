import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

// Animation
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoadingSpinnerPageComponent } from './loading-spinner-page/loading-spinner-page.component';

// Elements and Inputs
import {AnchorComponent} from './anchor/anchor.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {CommentsComponent} from './comments/comments.component';
import {SelectComponent} from './select/select.component';
import {TablesComponent} from './tables/tables.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {FieldComponent} from './field/field.component';
import {FieldsetComponent} from './fieldset/fieldset.component';
import {ValidationComponent} from './validation/validation.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {InputRadioComponent} from './input-radio/input-radio.component';
import {SliderComponent} from './slider/slider.component';
import {InputComponent} from './input/input.component';
import {InputTextareaComponent} from './input-textarea/input-textarea.component';

// Layout
import {BladeComponent} from './blade/blade.component';
import {BladeBottomComponent} from './blade-bottom/blade-bottom.component';
import {BladeTopComponent} from './blade-top/blade-top.component';
import {CustomWrapperComponent} from './custom-wrapper/custom-wrapper.component';
import {FilterComponent} from './filter/filter.component';
import {FlexComponent} from './flex/flex.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {UiBlockComponent} from './ui-block/ui-block.component';

// Navigation
import {ContextMenuComponent} from './context-menu/context-menu.component';
import {NavContextComponent} from './nav-context/nav-context.component';
import {ProgressIndicatorComponent} from './progress-indicator/progress-indicator.component';
import {ProgressIndicatorLhComponent} from './progress-indicator-lh/progress-indicator-lh.component';
import {StepperComponent} from './stepper/stepper.component'; // STEPPER NOT YET RELEASED
import {TreeMenuComponent} from './tree-menu/tree-menu.component';
import {TabNavigationComponent} from './tab-navigation/tab-navigation.component';
import {TabSubPageOneComponent} from './tab-navigation/tab-sub-page-one/tab-sub-page-one.component';
import {TabSubPageTwoComponent} from './tab-navigation/tab-sub-page-two/tab-sub-page-two.component';
import {TabSubPageThreeComponent} from './tab-navigation/tab-sub-page-three/tab-sub-page-three.component';
// Used for Tabs and Blades
import {TabPageOneComponent} from './tab-navigation/tab-page-one/tab-page-one.component';
import {TabPageTwoComponent} from './tab-navigation/tab-page-two/tab-page-two.component';
import {TabPageThreeComponent} from './tab-navigation/tab-page-three/tab-page-three.component';
import {TabPageFourComponent} from './tab-navigation/tab-page-four/tab-page-four.component';

// Patterns
import {AlertsComponent} from './alerts/alerts.component';
import {AlertShieldsComponent} from './alert-shields/alert-shields.component';
import {ActionsSummaryComponent} from './actions-summary/actions-summary.component';
import {FeatureboxComponent} from './feature-box/feature-box.component';
import {ColoursComponent} from './colours/colours.component';
import {CounterComponent} from './counter/counter.component';
import {IconsComponent} from './icons/icons.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {ProgressCircleComponent} from './progress-circle/progress-circle.component';
import {StatusIndicatorComponent} from './status-indicator/status-indicator.component';
import {TagsComponent} from './tags/tags.component';

// Widgets
import {AccordionComponent} from './accordion/accordion.component';
import {AccordionFancyComponent} from './accordion-fancy/accordion-fancy.component';
import {CardComponent} from './card/card.component';
import {CarouselComponent} from './carousel/carousel.component';
import {TooltipDynamicComponent} from './tooltip-dynamic/tooltip-dynamic.component';
import {FavouritesComponent} from './favourites/favourites.component';
import {IconPickerComponent} from './icon-picker/icon-picker.component';
import {InfoPanelComponent} from './info-panel/info-panel.component';
import {ListSelectableComponent} from './list-selectable/list-selectable.component';
import {ModalComponent} from './modal/modal.component';
import {OverlayComponent} from './overlay/overlay.component';
import {DlPopoverComponent} from './popover/popover.component';
import {SummaryTopComponent} from './summary-top/summary-top.component';
import {ToastrComponent} from './toastr/toastr.component';
import {TooltipComponent} from './tooltip/tooltip.component';
import {UserFeedbackComponent} from './user-feedback/user-feedback.component';

// Modifiers
import {BorderComponent} from './border/border.component';
import {BorderRadiusComponent} from './border-radius/border-radius.component';
import {MarginComponent} from './margin/margin.component';
import {MarkupComponent} from './markup/markup.component';
import {MiscComponent} from './misc/misc.component';
import {PaddingComponent} from './padding/padding.component';
import {TextComponent} from './text/text.component';
import {WidthsComponent} from './widths/widths.component';

// Typography
import {EditorialComponent} from './editorial/editorial.component';
import {TypographyComponent} from './typography/typography.component';

// Third party components
import {AgGridComponent} from './ag-grid/ag-grid.component';
import {NgbDatepickerComponent} from './ngb-datepicker/ngb-datepicker.component';
import {NgSelectComponent} from './ng-select/ng-select.component';
import {NgxQuillComponent} from './ngx-quill/ngx-quill.component';
import {HighChartsComponent} from './high-charts/high-charts.component';

// Email Templates
import {HtmlEmailComponent} from './html-email/html-email.component';

// Common Q&A's
import {QuestionsAndAnswersComponent} from './questions-and-answers/questions-and-answers.component';

// Addendum
import {ElementsAlignmentComponent} from './elements-alignment/elements-alignment.component';
import {PageTemplatesComponent} from './page-templates/page-templates.component';
import {UnauthorisedComponent} from './unauthorised/unauthorised.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'accordion-fancy', component: AccordionFancyComponent },
  { path: 'actions-summary', component: ActionsSummaryComponent },
  { path: 'ag-grid', component: AgGridComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'anchor', component: AnchorComponent },
  { path: 'blade', component: BladeComponent, children: [
    { path: 'tab-page-one', component: TabPageOneComponent },
    { path: 'tab-page-two', component: TabPageTwoComponent },
    { path: 'tab-page-three', component: TabPageThreeComponent },
    { path: 'tab-page-four', component: TabPageFourComponent }
  ] },
  { path: 'blade-bottom', component: BladeBottomComponent },
  { path: 'blade-top', component: BladeTopComponent },
  { path: 'border', component: BorderComponent },
  { path: 'border-radius', component: BorderRadiusComponent },
  { path: 'feature-box', component: FeatureboxComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'card', component: CardComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'colours', component: ColoursComponent },
  { path: 'context-menu', component: ContextMenuComponent },
  { path: 'custom-wrapper', component: CustomWrapperComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'editorial-content', component: EditorialComponent },
  { path: 'field', component: FieldComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'fieldset', component: FieldsetComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'flex', component: FlexComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'input', component: InputComponent },
  { path: 'input-radio', component: InputRadioComponent },
  { path: 'input-textarea', component: InputTextareaComponent },
  { path: 'list-selectable', component: ListSelectableComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'loading-spinner', component: LoadingSpinnerComponent },
  { path: 'loading-spinner-page', component: LoadingSpinnerPageComponent },
  { path: 'icon-picker', component: IconPickerComponent },
  { path: 'info-panel', component: InfoPanelComponent },
  { path: 'margin', component: MarginComponent },
  { path: 'markup', component: MarkupComponent },
  { path: 'misc', component: MiscComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'nav-context', component: NavContextComponent },
  { path: 'ngx-quill', component: NgxQuillComponent },
  { path: 'overlay', component: OverlayComponent },
  { path: 'tab-navigation', component: TabNavigationComponent, children: [
    { path: 'tab-page-one', component: TabPageOneComponent },
    { path: 'tab-page-two', component: TabPageTwoComponent },
    { path: 'tab-page-three', component: TabPageThreeComponent },
    { path: 'tab-sub-page-one', component: TabSubPageOneComponent },
    { path: 'tab-sub-page-two', component: TabSubPageTwoComponent },
    { path: 'tab-sub-page-three', component: TabSubPageThreeComponent }
  ] },
  { path: 'padding', component: PaddingComponent },
  { path: 'page-templates', component: PageTemplatesComponent },
  { path: 'widths', component: WidthsComponent },
  { path: 'progress-indicator', component: ProgressIndicatorComponent },
  { path: 'progress-indicator-lh', component: ProgressIndicatorLhComponent },
  { path: 'popover', component: DlPopoverComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'progress-circle', component: ProgressCircleComponent },
  { path: 'select', component: SelectComponent },
  { path: 'alert-shields', component: AlertShieldsComponent },
  { path: 'status-indicator', component: StatusIndicatorComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'summary-top', component: SummaryTopComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'text', component: TextComponent },
  { path: 'toastr', component: ToastrComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'tooltip-dynamic', component: TooltipDynamicComponent },
  { path: 'tree-menu', component: TreeMenuComponent },
  { path: 'ui-block', component: UiBlockComponent },
  { path: 'user-feedback', component: UserFeedbackComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'ng-select', component: NgSelectComponent },
  { path: 'ngb-datepicker', component: NgbDatepickerComponent },
  { path: 'questions-and-answers', component: QuestionsAndAnswersComponent },
  { path: 'html-email', component: HtmlEmailComponent },
  { path: 'elements-alignment', component: ElementsAlignmentComponent },
  { path: 'unauthorised', component: UnauthorisedComponent },
  { path: 'high-charts', component: HighChartsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
