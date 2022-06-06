import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AnchorBackComponent } from './anchor-back/anchor-back.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';


@NgModule({
  declarations: [
    AlertComponent,
    AnchorBackComponent,
    ProgressBarComponent,
    ProgressCircleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    AnchorBackComponent,
    ProgressBarComponent,
    ProgressCircleComponent
  ]
})
export class PatternsModule { }
