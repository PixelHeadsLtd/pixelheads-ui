import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertShieldComponent } from './alert-shield/alert-shield.component';
import { AnchorBackComponent } from './anchor-back/anchor-back.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';
import { ActionsSummaryComponent } from './actions-summary/actions-summary.component';

@NgModule({
  declarations: [
    AlertComponent,
    AlertShieldComponent,
    AnchorBackComponent,
    ProgressBarComponent,
    ProgressCircleComponent,
    AlertShieldComponent,
    ActionsSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    AlertShieldComponent,
    AnchorBackComponent,
    ProgressBarComponent,
    ProgressCircleComponent,
    ActionsSummaryComponent
  ]
})
export class PatternsModule { }
