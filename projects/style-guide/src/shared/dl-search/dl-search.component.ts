import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dl-search',
  templateUrl: './dl-search.component.html',
  styleUrl: './dl-search.component.scss'
})
export class DlSearchComponent {

  search: boolean = false;
  private searchSubscription: Subscription;
  showSearch: boolean = false;
  searchText = '';

  constructor(private toggleService: ToggleService) {
    this.searchSubscription = this.toggleService.search$.subscribe(search => {
      this.search = search;
    });
  }

  toggleSearch() {
    document.getElementById('search-text')?.focus();
    this.showSearch = !this.showSearch;
    // close Login blade
    this.toggleService.closeAppsBlade();
    // close Login blade
    this.toggleService.closeLoginBlade();
  }
  
  searchAnimations = [
    {
      id: 'Animations',
      heading: 'Animations',
      icon: 'motion_photos_paused',
      iconColour: 'bg-ph-red-100',
      link: 'loading-spinner',
    },
    {
      id: 'Animations',
      heading: 'Animations',
      icon: 'motion_photos_paused',
      iconColour: 'bg-ph-red-100',
      link: 'loading-spinner-page',
    }
  ]

  searchElements = [
    {
      id: 'ElementAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'anchor',
    },
    {
      id: 'ElementAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'buttons',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'checkbox',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'comments',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'field',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'fieldset',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'file-upload',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'input',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'checklist',
      iconColour: 'bg-ph-green-80',
      link: 'multi-select',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'input-radio',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'hdr_strong',
      iconColour: 'bg-ph-green-80',
      link: 'range-slider',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'select',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'slider',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'tables',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'input-textarea',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'text_rotation_none',
      iconColour: 'bg-ph-green-80',
      link: 'ticker',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-ph-green-80',
      link: 'validation',
    }
  ]

  searchLayout = [
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-ph-blue-100',
      borderColour: 'bd-ph-light-blue-100',
      link: 'blade',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-ph-blue-100',
      borderColour: 'bd-ph-light-blue-100',
      link: 'blade-bottom',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-ph-blue-100',
      borderColour: 'bd-ph-light-blue-100',
      link: 'blade-top',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-ph-blue-100',
      borderColour: 'bd-ph-light-blue-100',
      link: 'custom-wrapper',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-ph-blue-100',
      borderColour: 'bd-ph-light-blue-100',
      link: 'filter',
    },
        {
      id: 'Layout',
      heading: 'Layout',
      icon: 'touch_app',
      iconColour: 'bg-ph-blue-100',
      link: 'modal',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-ph-blue-100',
      borderColour: 'bd-ph-light-blue-100',
      link: 'ui-block',
    }
  ]

  searchNavigation = [
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-ph-orange-100',
      link: 'context-menu',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-ph-orange-100',
      link: 'stepper',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-ph-orange-100',
      link: 'tab-navigation',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-ph-orange-100',
      link: 'tree-menu',
    }
  ]

  searchPatterns = [
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-ph-plum-100',
      link: 'actions-summary',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-ph-plum-100',
      link: 'alerts',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-ph-plum-100',
      link: 'alert-shields',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-ph-plum-100',
      link: 'feature-box',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-ph-plum-100',
      link: 'colours',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-ph-plum-100',
      link: 'counter',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-ph-plum-100',
      link: 'icons',
    },
        {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'touch_app',
      iconColour: 'bg-ph-blue-100',
      link: 'overlay',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-ph-plum-100',
      link: 'progress-bar',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-ph-plum-100',
      link: 'progress-circle',
    },
        {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'menu_open',
      iconColour: 'bg-ph-plum-100',
      link: 'progress-indicator',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-ph-plum-100',
      link: 'status-indicator',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-ph-plum-100',
      link: 'tags',
    }
  ]

  searchWidgets = [
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'accordion',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'accordion-fancy',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'card',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'carousel',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'element-slider',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'tooltip-dynamic',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'favourites',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'icon-picker',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'info-panel',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'list-selectable',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'popover',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'summary-top',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'toastr',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-ph-light-blue-100',
      link: 'tooltip',
    }
  ]

  searchModifiers = [
    {
      id: 'Modifiers',
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'ph-green-50',
      link: 'border',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'ph-green-50',
      link: 'border-radius',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'ph-green-50',
      link: 'colours',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'ph-green-50',
      link: 'margin',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'ph-green-50',
      link: 'markup',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'ph-green-50',
      link: 'misc',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'ph-green-50',
      link: 'padding',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'ph-green-50',
      link: 'text',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'ph-green-50',
      link: 'widths',
    }
  ]

  searchTypography = [
    {
      id: 'Typography',
      heading: 'Typography',
      icon: 'text_fields',
      iconColour: 'ph-green-50',
      link: 'editorial-content',
    },
    {
      heading: 'Typography',
      icon: 'text_fields',
      iconColour: 'ph-green-50',
      link: 'typography',
    }
  ]

  openAnimationsNav() {
    this.showSearch = !this.showSearch;
    this.toggleService.updateIndex.next(0);
    console.log("Well something happened so....");
  }

  openElementsNav() {
    this.showSearch = !this.showSearch;
    this.toggleService.updateIndex.next(1);
  }

  openLayoutNav() {
    this.showSearch = !this.showSearch;
    this.toggleService.updateIndex.next(2);
  }

  openNavigationNav() {
    this.showSearch = !this.showSearch;
    this.toggleService.updateIndex.next(3);
  }

  openPatternsNav() {
    this.showSearch = !this.showSearch;
    this.toggleService.updateIndex.next(4);
  }

  openWidgetsNav() {
    this.showSearch = !this.showSearch;
    this.toggleService.updateIndex.next(5);
  }

  openModifiersNav() {
    this.showSearch = !this.showSearch;
    this.toggleService.updateIndex.next(6);
  }

  openTypographyNav() {
    this.showSearch = false;
    this.toggleService.updateIndex.next(7);
  }

  closeAppsBlade(): void {
    this.toggleService.toggleSearch();
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
