import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GistComponent } from './gist/gist.component';

@NgModule({
  declarations: [GistComponent],
  imports: [
    CommonModule
  ],
  exports: [GistComponent]
})
export class SharedModule { }
