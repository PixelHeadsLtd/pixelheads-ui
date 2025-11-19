import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { WidgetsModule } from '../widgets/widgets.module'; // required for Dynamic Table as it's using the tooltip widget
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertShieldComponent } from './alert-shield/alert-shield.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';
import { ActionsSummaryComponent } from './actions-summary/actions-summary.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';
import { CounterComponent } from './counter/counter.component';
import { TagComponent } from './tag/tag.component';
import { FeatureBoxComponent } from './feature-box/feature-box.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AlertComponent,
    AlertShieldComponent,
    ProgressBarComponent,
    ProgressCircleComponent,
    ActionsSummaryComponent,
    StatusIndicatorComponent,
    CounterComponent,
    TagComponent,
    FeatureBoxComponent,
    ProgressIndicatorComponent,
    DynamicTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DragDropModule,
    FormsModule,
    WidgetsModule
  ],
  exports: [
    AlertComponent,
    AlertShieldComponent,
    ProgressBarComponent,
    ProgressCircleComponent,
    ActionsSummaryComponent,
    StatusIndicatorComponent,
    CounterComponent,
    TagComponent,
    FeatureBoxComponent,
    ProgressIndicatorComponent,
    DynamicTableComponent
  ]
})
export class PatternsModule { }
