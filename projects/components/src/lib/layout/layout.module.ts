import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BladeComponent } from './blade/blade.component';
import { BladeFooterComponent } from './blade-footer/blade-footer.component';
import { BladeBottomComponent } from './blade-bottom/blade-bottom.component';
import { BladeTopComponent } from './blade-top/blade-top.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectTourComponent } from './project-tour/project-tour.component';
@NgModule({
  declarations: [
    BladeComponent,
    FooterComponent,
    BladeFooterComponent,
    BladeBottomComponent,
    BladeTopComponent,
    ProjectTourComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BladeComponent,
    FooterComponent,
    BladeFooterComponent,
    BladeBottomComponent,
    BladeTopComponent,
    ProjectTourComponent,
  ],
})
export class LayoutModule {}
