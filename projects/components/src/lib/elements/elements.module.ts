import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FieldComponent } from './field/field.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [ButtonComponent, CheckboxComponent, FieldComponent, InputTextComponent, FileUploadComponent, SliderComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, CheckboxComponent, FieldComponent, InputTextComponent, FileUploadComponent, SliderComponent]
})
export class ElementsModule { }
