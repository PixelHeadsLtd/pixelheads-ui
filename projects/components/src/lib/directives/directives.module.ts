import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './click-outside/click-outside.directive';
import { TextareaAutoresizeDirective } from './textarea-autoresize/textarea-autoresize.directive';

@NgModule({
  declarations: [ClickOutsideDirective, TextareaAutoresizeDirective],
  imports: [
    CommonModule
  ],
  exports: [ClickOutsideDirective, TextareaAutoresizeDirective]
})
export class DirectivesModule { }

