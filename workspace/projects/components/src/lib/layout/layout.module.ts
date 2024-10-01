import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BladeComponent } from './blade/blade.component';
import { BladeFooterComponent } from './blade-footer/blade-footer.component';
import { BladeBottomComponent } from './blade-bottom/blade-bottom.component';
import { BladeBottomLegacyComponent } from './blade-bottom-legacy/blade-bottom-legacy.component';
import { BladeTopComponent } from './blade-top/blade-top.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectTourComponent } from './project-tour/project-tour.component';
import { UiBlockComponent } from './ui-block/ui-block.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { GraphicComponent } from './unauthorised/graphic.component';
import { CustomWrapperComponent } from './custom-wrapper/custom-wrapper.component';
import { FilterComponent } from './filter/filter.component'

@NgModule({
  declarations: [
    BladeComponent,
    FooterComponent,
    BladeFooterComponent,
    BladeBottomComponent,
    BladeBottomLegacyComponent,
    BladeTopComponent,
    ProjectTourComponent,
    UiBlockComponent,
    UnauthorisedComponent,
    GraphicComponent,
    CustomWrapperComponent,
    FilterComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    BladeComponent,
    FooterComponent,
    BladeFooterComponent,
    BladeBottomComponent,
    BladeBottomLegacyComponent,
    BladeTopComponent,
    ProjectTourComponent,
    UiBlockComponent,
    UnauthorisedComponent,
    GraphicComponent,
    CustomWrapperComponent,
    FilterComponent
  ],
})
export class LayoutModule {}
