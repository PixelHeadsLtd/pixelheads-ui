import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavData } from '../../class/nav-data';
import { ToggleService } from '../../services/toggle-service';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dl-left-nav',
  templateUrl: './dl-left-nav.component.html',
  styleUrls: ['./dl-left-nav.component.scss']
})
export class DlLeftNavComponent implements OnInit, OnDestroy {
  minimizeMenu: boolean = false;
  mobileMenu: boolean = false;
  expandedItems: { [key: number]: boolean } = {};
  menuItemClicked: boolean = false;
  inputValue?: string;
  currentDate: number = new Date().getTime();
  selectedIndex: number | null = null;
  selectedNestedIndex: number | null = null;

  private collapseNavSubscription!: Subscription;
  private mobileMenuSubscription!: Subscription;
  private updateIndexSubscription!: Subscription;
  private homeLinkClickSubscription!: Subscription;
  private routerSubscription: Subscription | undefined;

  navDataItems: NavData[] = [
    // AMIMATIONS
    {
      color: 'red', iconName: 'motion_photos_paused', title: 'Animations', isExpandable: true, nestedItems:
        [
          { iconName: 'rotate_right', title: 'Loading spinner inline', routerLink: '/loading-spinner' },
          { iconName: 'rotate_right', title: 'Loading spinner page', routerLink: '/loading-spinner-page' }
        ]
    },
    // ELEMENTS AND INPUTS
    {
      color: 'green', iconName: 'check_box', title: 'Elements and inputs', isExpandable: true, nestedItems:
        [
          { iconName: 'insert_link', title: 'Anchor', routerLink: '/anchor' },
          { iconName: 'gamepad', title: 'Button', routerLink: '/buttons' },
          { iconName: 'check_box', title: 'Checkbox', routerLink: '/checkbox' },
          { iconName: 'chat', title: 'Comments', routerLink: '/comments' },
          { iconName: 'view_stream', title: 'Field', routerLink: '/field' },
          { iconName: 'web', title: 'Fieldset', routerLink: '/fieldset' },
          { iconName: 'backup', title: 'File upload', routerLink: '/file-upload' },
          { iconName: 'wysiwyg', title: 'Input', routerLink: '/input' },
          { iconName: 'checklist', title: 'Multi-select', routerLink: '/multi-select' },
          { iconName: 'radio_button_checked', title: 'Radio', routerLink: '/input-radio' },
          { iconName: 'hdr_strong', title: 'Range slider', routerLink: '/range-slider' },
          { iconName: 'rule', title: 'Select', routerLink: '/select' },
          { iconName: 'toggle_off', title: 'Slider', routerLink: '/slider' },
          { iconName: 'grid_on', title: 'Table', routerLink: '/tables' },
          { iconName: 'subject', title: 'Textarea', routerLink: '/input-textarea' },
          { iconName: 'text_rotation_none', title: 'Ticker', routerLink: '/ticker' },
          { iconName: 'fact_check', title: 'Validation', routerLink: '/validation' }
        ]
    },
    // LAYOUT
    {
      color: 'blue', iconName: 'dashboard', title: 'Layout', isExpandable: true, nestedItems:
        [
          { iconName: 'border_right', title: 'Blade', routerLink: '/blade' },
          { iconName: 'border_bottom', title: 'Blade bottom', routerLink: '/blade-bottom' },
          { iconName: 'border_top', title: 'Blade top', routerLink: '/blade-top' },
          { iconName: 'check_box_outline_blank', title: 'Custom wrapper', routerLink: '/custom-wrapper' },
          { iconName: 'filter_alt', title: 'Filter', routerLink: '/filter' },
          { iconName: 'view_week', title: 'Flex', routerLink: '/flex' },
          { iconName: 'call_to_action', title: 'Footer', routerLink: '/footer' },
          { customClass: 'flip-y', iconName: 'call_to_action', title: 'Header', routerLink: '/header' },
          { iconName: 'block', title: 'UI block', routerLink: '/ui-block' }
        ]
    },
    // NAVIGATION
    {
      color: 'orange', iconName: 'menu_open', title: 'Navigation', isExpandable: true, nestedItems:
        [
          { iconName: 'more_vert', title: 'Context menu', routerLink: '/context-menu' },
          { iconName: 'menu_open', title: 'Nav context', routerLink: '/nav-context' },
          { iconName: 'linear_scale', title: 'Progress indicator', routerLink: '/progress-indicator' },
          { iconName: 'format_list_numbered_rtl', title: 'Progress indicator LH', routerLink: '/progress-indicator-lh' },
          { iconName: 'start', title: 'Stepper', routerLink: '/stepper' },
          { iconName: 'pivot_table_chart', title: 'Tab navigation', routerLink: '/tab-navigation' },
          { iconName: 'account_tree', title: 'Tree menu', routerLink: '/tree-menu' }
        ]
    },
    // PATTERNS
    {
      color: 'plum', iconName: 'apps', title: 'Patterns', isExpandable: true, nestedItems:
        [
          { iconName: 'rocket_launch', title: 'Actions summary', routerLink: '/actions-summary' },
          { iconName: 'add_alert', title: 'Alert', routerLink: '/alerts' },
          { iconName: 'remove_moderator', title: 'Alert shield', routerLink: '/alert-shields' },
          { iconName: 'palette', title: 'Colour', routerLink: '/colours' },
          { iconName: 'looks_4', title: 'Counter', routerLink: '/counter' },
          { iconName: 'check_box_outline_blank', title: 'Feature box', routerLink: '/feature-box' },
          { iconName: 'insert_emoticon', title: 'Icons', routerLink: '/icons' },
          { iconName: 'history_toggle_off', title: 'Progress bar', routerLink: '/progress-bar' },
          { iconName: 'forward_10', title: 'Progress circle', routerLink: '/progress-circle' },
          { iconName: 'check_circle', title: 'Status indicator', routerLink: '/status-indicator' },
          { iconName: 'loyalty', title: 'Tags', routerLink: '/tags' }
        ]
    },
    // WIDGETS
    {
      color: 'light-blue', iconName: 'touch_app', title: 'Widgets', isExpandable: true, nestedItems:
        [
          { iconName: 'reorder', title: 'Accordion', routerLink: '/accordion' },
          { iconName: 'view_list', title: 'Accordion fancy', routerLink: '/accordion-fancy' },
          { iconName: 'account_box', title: 'Card', routerLink: '/card' },
          { iconName: 'recent_actors', title: 'Carousel', routerLink: '/carousel' },
          { customClass: 'flip-y', iconName: 'filter_list', title: 'Element slider', routerLink: '/element-slider' },
          { iconName: 'star', title: 'Favourites', routerLink: '/favourites' },
          { iconName: 'face', title: 'Icon picker', routerLink: '/icon-picker' },
          { iconName: 'fact_check', title: 'Info panel', routerLink: '/info-panel' },
          { iconName: 'checklist_rtl', title: 'List selectable', routerLink: '/list-selectable' },
          { iconName: 'border_clear', title: 'Modal', routerLink: '/modal' },
          { iconName: 'border_outer', title: 'Overlay', routerLink: '/overlay' },
          { iconName: 'sms', title: 'Popover', routerLink: '/popover' },
          { iconName: 'short_text', title: 'Summary top', routerLink: '/summary-top' },
          { iconName: 'admin_panel_settings', title: 'Toastr', routerLink: '/toastr' },
          { iconName: 'mode_comment', title: 'Tooltip', routerLink: '/tooltip' },
          { iconName: 'question_answer', title: 'Tooltip dynamic', routerLink: '/tooltip-dynamic' },
          { iconName: 'sentiment_satisfied_alt', title: 'User feedback', routerLink: '/user-feedback' }
        ]
    },
    // MODIFIERS
    {
      color: 'green reversed', iconName: 'auto_fix_off', title: 'Modifiers', isExpandable: true, nestedItems:
        [
          { iconName: 'border_style', title: 'Border', routerLink: '/border' },
          { iconName: 'rounded_corner', title: 'Border radius', routerLink: '/border-radius' },
          { iconName: 'palette', title: 'Colours', routerLink: '/colours' },
          { iconName: 'margin', title: 'Margin', routerLink: '/margin' },
          { iconName: 'code', title: 'Markup', routerLink: '/markup' },
          { iconName: 'help_outline', title: 'Miscellaneous', routerLink: '/misc' },
          { iconName: 'padding', title: 'Padding', routerLink: '/padding' },
          { iconName: 'format_color_text', title: 'Text', routerLink: '/text' },
          { iconName: 'open_with', title: 'Width', routerLink: '/widths' }
        ]
    },
    // TYPOGRAPHY
    {
      color: 'green reversed', iconName: 'text_fields', title: 'Typography', isExpandable: true, nestedItems:
        [
          { iconName: 'edit_note', title: 'Editorial content', routerLink: '/editorial-content' },
          { iconName: 'text_format', title: 'Typography', routerLink: '/typography' }
        ]
    },
    // THIRD PARTY COMPONENTS
    {
      color: 'green reversed', iconName: 'widgets', title: 'Third-party components', isExpandable: true, nestedItems:
        [
          { iconName: 'table_rows', title: 'Ag grid', routerLink: '/ag-grid' },
          { iconName: 'insights', title: 'High charts', routerLink: '/high-charts' },
          { iconName: 'edit_calendar', title: 'Ngb datepicker', routerLink: '/ngb-datepicker' },
          { iconName: 'hourglass_top', title: 'Ngb timepicker', routerLink: '/ngb-timepicker' },
          { iconName: 'checklist', title: 'Ng select', routerLink: '/ng-select' },
          { iconName: 'edit_note', title: 'Ngx quill', routerLink: '/ngx-quill' }
        ]
    },
    // PAGE TEMPLATES
    { soloItem: true, color: 'green reversed solo-menu-item', iconName: 'view_quilt', title: 'Page templates', routerLink: '/page-templates' },
    // ADDENDUM
    {
      color: 'green reversed', iconName: 'subject', title: 'Addendum', routerLink: '/page-templates', isExpandable: true, nestedItems:
        [
          { iconName: 'view_comfy', title: 'Elements alignment', routerLink: '/elements-alignment' },
          { iconName: 'block', title: 'Unauthorised', routerLink: '/unauthorised' }
        ]
    },
    // GO TO DESIGN PRINCIPLES
    { soloItem: true, color: 'burgundy solo-menu-item', iconName: 'psychology', title: 'Visit Design Principles', isHref: true, hRef: 'https://design-principles.netlify.app/designprinciples/' },
  ];

  constructor(private toggleService: ToggleService, private router: Router) {
    this.currentDate = new Date().getTime();
    this.updateIndexSubscription = this.toggleService.updateIndex.subscribe(index => {
      this.selectedIndex = index;
    });

    this.homeLinkClickSubscription = this.toggleService.homeLinkClick.subscribe(() => {
      this.selectedIndex = null; // Reset selected index
      this.expandedItems = {}; // Collapse all expanded items
    });

    // Handle reset action
    this.toggleService.homeLinkClick.subscribe(() => {
      this.selectedIndex = null;
      this.collapseAllItems();
    });

    this.mobileMenuSubscription = this.toggleService.mobileMenu$.subscribe(mobileMenu => {
      this.mobileMenu = mobileMenu;
    });
  }

  ngOnInit(): void {
    this.homeLinkClickSubscription = this.toggleService.homeLinkClick.subscribe(() => {
      this.resetSelection();
    });

    this.updateIndexSubscription = this.toggleService.updateIndex.subscribe(index => {
      this.selectedIndex = index;
      // Ensure the selected item is expanded
      this.expandedItems[index] = true;
    });
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.handleNavigationEnd(event.urlAfterRedirects);
      }
    });
  }

  ngOnDestroy(): void {
    this.homeLinkClickSubscription.unsubscribe();
    this.updateIndexSubscription.unsubscribe();
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  toggleExpand(index: number): void {
    // Toggle the expand state
    this.expandedItems[index] = !this.expandedItems[index];
    
    // If collapsing, clear the selected index if the item being collapsed is selected
    if (!this.expandedItems[index] && this.selectedIndex === index) {
      this.selectedIndex = null;
    } else {
      // If expanding, ensure the selectedIndex is set if it's not already
      if (this.selectedIndex !== index) {
        this.selectedIndex = index;
      }
    }
  }  

  toggleMinimizeMenu(): void {
    this.toggleService.toggleMinimizeMenu();
    this.minimizeMenu = !this.minimizeMenu;
  }

  closeMobileMenu(): void {
    this.toggleService.toggleMobileMenu();
  }

  setIndex(index: number) {
    if (index !== this.selectedIndex) {
      this.selectedIndex = index;
    } else {
      this.selectedIndex = null;
    }
  }

  setSelectedItem(nestedItem: NavData, index: number): void {
    // Logic to set selected item
    this.navDataItems.forEach(parent => {
      if (parent.nestedItems != null) {
        parent.nestedItems.forEach(child => {
          child.isSelected = (child === nestedItem);
        });
      }
    });
  
    // Ensure to handle the expandedItems and selectedIndex correctly
    this.selectedIndex = index;
    this.toggleService.toggleMobileMenu();
  }  

  checkAndUpdateParentSelection(parentIndex: number): void {
    const parentItem = this.navDataItems[parentIndex];
    const hasSelectedChild = parentItem.nestedItems?.some(item => item.isSelected) ?? false;
  
    if (!hasSelectedChild) {
      // Collapse the parent item if no children are selected
      this.expandedItems[parentIndex] = false;
      if (this.selectedIndex === parentIndex) {
        this.selectedIndex = null;  // Clear selectedIndex if it was the collapsed item
      }
    }
  }  

  hasSelectedChild(index: number): boolean {
    const item = this.navDataItems[index];
    return item.nestedItems?.some(child => child.isSelected) ?? false;
  }
  
  isExpanded(index: number): boolean {
    return !!this.expandedItems[index];
  }

  shouldHighlightItem(index: number): boolean {
    // Check if any nested items of this expandable item are selected
    return this.navDataItems[index].nestedItems?.some(item => item.isSelected) ?? false;
  }

  isParentSelected(index: number): boolean {
    return this.selectedIndex === index || (this.navDataItems[index].nestedItems?.some(item => item.isSelected) ?? false);
  }

  resetSelection(): void {
    // Clear the selected index
    this.selectedIndex = null;

    // Collapse all expanded items
    this.expandedItems = Object.keys(this.expandedItems).reduce((acc, key) => {
      acc[parseInt(key, 10)] = false;
      return acc;
    }, {} as { [key: number]: boolean });

    // Iterate through navDataItems to clear selection
    this.navDataItems.forEach((item, index) => {
      if (item.nestedItems) {
        item.nestedItems.forEach(nestedItem => nestedItem.isSelected = false);
      }
    });
  }

  onHomeLinkClick(): void {
    this.toggleService.triggerHomeLinkClick(); // Trigger home link click event
  }

  handleNavigationEnd(url: string): void {
    this.navDataItems.forEach((item, index) => {
      if (item.nestedItems) {
        item.nestedItems.forEach(nestedItem => {
          // Check if routerLink is defined and then call isActive
          if (nestedItem.routerLink && this.router.isActive(nestedItem.routerLink, true)) {
            nestedItem.isSelected = true;
            this.selectedIndex = index;
            this.expandedItems[index] = true; // Ensure the parent is expanded
          } else {
            nestedItem.isSelected = false;
          }
        });
      }
    });
  }

  getActiveRoute(url: string): NavData | null {
    for (const item of this.navDataItems) {
      if (item.routerLink === url) {
        return item;
      }
      if (item.nestedItems) {
        for (const nestedItem of item.nestedItems) {
          if (nestedItem.routerLink === url) {
            return nestedItem;
          }
        }
      }
    }
    return null;
  }

  setSelectedItemFromUrl(item: NavData): void {
    this.navDataItems.forEach(parent => {
      if (parent.nestedItems) {
        parent.nestedItems.forEach(child => {
          child.isSelected = (child === item);
        });
      }
    });
  
    // Find the index of the parent item
    this.selectedIndex = this.navDataItems.findIndex(parent => parent.nestedItems?.includes(item) ?? false);
    if (this.selectedIndex !== -1) {
      this.expandedItems[this.selectedIndex] = true; // Expand the parent item
    }
  }

  collapseAllItems(): void {
    this.expandedItems = {}; // Collapse all expanded items
    this.selectedIndex = null; // Optionally reset the selected index
  }  
}
