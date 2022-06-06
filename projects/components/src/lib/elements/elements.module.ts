import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CommentsComponent } from './comments/comments.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { DateFormatPipe } from '../pipes/date-pipe';
import { FieldComponent } from './field/field.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    CommentsComponent,
    CustomSelectComponent,
    DateFormatPipe,
    FieldComponent,
    InputTextComponent,
    FileUploadComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    CommentsComponent,
    CustomSelectComponent,
    FieldComponent,
    InputTextComponent,
    FileUploadComponent,
    SliderComponent
  ]
})
export class ElementsModule { }
