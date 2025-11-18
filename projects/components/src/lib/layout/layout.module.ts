import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BladeComponent } from './blade/blade.component';
import { BladeFooterComponent } from './blade-footer/blade-footer.component';
import { BladeBottomComponent } from './blade-bottom/blade-bottom.component';
import { BladeTopComponent } from './blade-top/blade-top.component';
import { ProjectTourComponent } from './project-tour/project-tour.component';
import { UiBlockComponent } from './ui-block/ui-block.component';
import { CustomWrapperComponent } from './custom-wrapper/custom-wrapper.component';
import { FilterComponent } from './filter/filter.component';
import { ModalComponent } from './modal/modal.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [
    BladeComponent,
    BladeFooterComponent,
    BladeBottomComponent,
    BladeTopComponent,
    ProjectTourComponent,
    UiBlockComponent,
    CustomWrapperComponent,
    FilterComponent,
    ModalComponent,
    ModalDialogComponent,
    OverlayComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    BladeComponent,
    BladeFooterComponent,
    BladeBottomComponent,
    BladeTopComponent,
    ProjectTourComponent,
    UiBlockComponent,
    CustomWrapperComponent,
    FilterComponent,
    ModalComponent,
    ModalDialogComponent,
    OverlayComponent
  ],
})
export class LayoutModule {}
