import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AnchorAdvancedComponent } from './anchor-advanced/anchor-advanced.component';
import { AnchorBackComponent } from './anchor-back/anchor-back.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CommentsComponent } from './comments/comments.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { DateFormatPipe } from '../pipes/date-pipe';
import { FieldComponent } from './field/field.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SliderComponent } from './slider/slider.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { TickerComponent } from './ticker/ticker.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ResizableComponent } from '../directives/resizable/resizable.component';
import { ResizableDirective } from '../directives/resizable/resizable.directive';
import { WidgetsModule } from '../widgets/widgets.module';
import { MultiSelectComponent } from './multi-select/multi-select.component'


@NgModule({
  declarations: [
    AnchorAdvancedComponent,
    AnchorBackComponent,
    ButtonComponent,
    CheckboxComponent,
    CommentsComponent,
    CustomSelectComponent,
    DateFormatPipe,
    FieldComponent,
    InputTextComponent,
    FileUploadComponent,
    SliderComponent,
    RangeSliderComponent,
    TickerComponent,
    DynamicTableComponent,
    ResizableComponent,
    ResizableDirective,
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    WidgetsModule
  ],
  exports: [
    AnchorAdvancedComponent,
    AnchorBackComponent,
    ButtonComponent,
    CheckboxComponent,
    CommentsComponent,
    CustomSelectComponent,
    FieldComponent,
    InputTextComponent,
    FileUploadComponent,
    SliderComponent,
    RangeSliderComponent,
    TickerComponent,
    DynamicTableComponent,
    ResizableComponent,
    ResizableDirective,
    MultiSelectComponent
  ]
})
export class ElementsModule { }
