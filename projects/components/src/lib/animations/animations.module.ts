import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoadingSpinnerPageComponent } from './loading-spinner-page/loading-spinner-page.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, LoadingSpinnerPageComponent],
  imports: [
    CommonModule
  ],
  exports: [LoadingSpinnerComponent, LoadingSpinnerPageComponent]
})
export class AnimationsModule { }
