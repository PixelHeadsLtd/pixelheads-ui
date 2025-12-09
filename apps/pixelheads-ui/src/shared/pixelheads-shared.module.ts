import {
  AnimationsModule,
  ElementsModule,
  LayoutModule,
  NavigationModule,
  PatternsModule,
  WidgetsModule,
  DirectivesModule
} from '@pixelheads/ui';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GistComponent } from './gist/gist.component';

// move these imports here:
import { DlHeaderComponent } from './dl-header/dl-header.component';
import { DlLeftNavComponent } from './dl-left-nav/dl-left-nav.component';
import { DlAppsBladeComponent } from './dl-apps-blade/dl-apps-blade.component';
import { DlLoginBladeComponent } from './dl-login-blade/dl-login-blade.component';
import { DlSearchComponent } from './dl-search/dl-search.component';

import { AppIconsPipe } from './pipes/app-icons.pipe';
import { DateFormatPipe } from './pipes/date-pipe';
import { NGBDateFormatPipe } from './pipes/ngb-date-pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ColumnFilterPipe } from './pipes/column-filter-pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    GistComponent,
    DlHeaderComponent,
    DlLeftNavComponent,
    DlAppsBladeComponent,
    DlLoginBladeComponent,
    DlSearchComponent,
    AppIconsPipe,
    DateFormatPipe,
    NGBDateFormatPipe,
    FilterPipe,
    ColumnFilterPipe,
    HighlightDirective,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AnimationsModule,
    ElementsModule,
    LayoutModule, 
    NavigationModule,
    PatternsModule,
    WidgetsModule,
    DirectivesModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GistComponent,
    DlHeaderComponent,
    DlLeftNavComponent,
    DlAppsBladeComponent,
    DlLoginBladeComponent,
    DlSearchComponent,
    AppIconsPipe,
    DateFormatPipe,
    NGBDateFormatPipe,
    FilterPipe,
    ColumnFilterPipe,
    HighlightDirective,
    ClickOutsideDirective
  ]
})
export class PixelheadsSharedModule {}
