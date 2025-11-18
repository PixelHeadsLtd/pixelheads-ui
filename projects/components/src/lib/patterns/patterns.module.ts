import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
    ProgressIndicatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
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
    ProgressIndicatorComponent
  ]
})
export class PatternsModule { }
