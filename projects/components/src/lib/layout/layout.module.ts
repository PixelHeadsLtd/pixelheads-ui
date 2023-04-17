import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BladeComponent } from './blade/blade.component';
import { BladeFooterComponent } from './blade-footer/blade-footer.component';
import { BladeBottomComponent } from './blade-bottom/blade-bottom.component';
import { BladeTopComponent } from './blade-top/blade-top.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectTourComponent } from './project-tour/project-tour.component';
import { UiBlockComponent } from './ui-block/ui-block.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { GraphicComponent } from './unauthorised/graphic.component';
import { CustomWrapperComponent } from './custom-wrapper/custom-wrapper.component';

@NgModule({
  declarations: [
    BladeComponent,
    FooterComponent,
    BladeFooterComponent,
    BladeBottomComponent,
    BladeTopComponent,
    ProjectTourComponent,
    UiBlockComponent,
    UnauthorisedComponent,
    GraphicComponent,
    CustomWrapperComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BladeComponent,
    FooterComponent,
    BladeFooterComponent,
    BladeBottomComponent,
    BladeTopComponent,
    ProjectTourComponent,
    UiBlockComponent,
    UnauthorisedComponent,
    GraphicComponent,
    CustomWrapperComponent
  ],
})
export class LayoutModule {}
