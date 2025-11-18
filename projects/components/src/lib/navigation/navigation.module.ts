import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ContextMenuItemComponent } from './context-menu-item/context-menu-item.component';
import { NavContextComponent } from './nav-context/nav-context.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabNavigationComponent } from './tab-navigation/tab-navigation.component';
import { TabNavigationItemComponent } from './tab-navigation-item/tab-navigation-item.component';
import { TabNavigationSecondaryComponent } from './tab-navigation-secondary/tab-navigation-secondary.component';
import { TabNavigationSecondaryItemComponent } from './tab-navigation-secondary-item/tab-navigation-secondary-item.component';
import { TabNavigationContentDirective } from './tab-navigation-item/tab-navigation-content.directive';
import { TabNavigationSecondaryContentDirective } from './tab-navigation-secondary-item/tab-navigation-secondary-content.directive';
import { TabNavigationHeaderContentDirective } from './tab-navigation-item/tab-navigation-header-content.directive';

@NgModule({
  declarations: [
    ContextMenuComponent,
    ContextMenuItemComponent,
    NavContextComponent,
    StepperComponent,
    TabNavigationComponent,
    TabNavigationItemComponent,
    TabNavigationSecondaryComponent,
    TabNavigationSecondaryItemComponent,
    TabNavigationContentDirective,
    TabNavigationSecondaryContentDirective,
    TabNavigationHeaderContentDirective
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ContextMenuComponent,
    ContextMenuItemComponent,
    NavContextComponent,
    StepperComponent,
    TabNavigationComponent,
    TabNavigationItemComponent,
    TabNavigationSecondaryComponent,
    TabNavigationSecondaryItemComponent,
    TabNavigationContentDirective,
    TabNavigationSecondaryContentDirective,
    TabNavigationHeaderContentDirective
  ]
})
export class NavigationModule {}
