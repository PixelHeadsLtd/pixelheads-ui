import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ToggleService } from '../../services/toggle-service';

@Component({
  selector: 'app-dl-header',
  templateUrl: './dl-header.component.html',
  styleUrl: './dl-header.component.scss'
})
export class DlHeaderComponent {
  minimizeMenu: boolean = false;
  mobileMenu: boolean = false;
  appsBlade: boolean = false;
  search: boolean = false;
  loginBlade: boolean = false;
  darkTheme: boolean = false;

  appLogoColor: string = 'aa-white-100';
  appLogoBgColor: string = 'bg-aa-orange-100';
  appIconName: string = 'design_services';

  selectedIndex: number | null = null;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private toggleService: ToggleService
  ) { }

  toggleMobileMenu(): void {
    this.toggleService.toggleMobileMenu();
  }

  toggleAppsBlade(): void {
    this.toggleService.toggleAppsBlade();
    // close Login blade
    this.toggleService.closeLoginBlade();
  }

  toggleLoginBlade(): void {
    this.toggleService.toggleLoginBlade();
    // close Apps blade
    this.toggleService.closeAppsBlade();
  }

  toggleSearch() {
    // close Login blade
    this.toggleService.closeAppsBlade();
    // close Login blade
    this.toggleService.closeLoginBlade();
  }

  onHomeLinkClick(): void {
    this.toggleService.triggerHomeLinkClick();
  }

  toggleTheme() {
    const body = this.document.body;
    if (body.classList.contains('light-mode')) {
      this.renderer.removeClass(body, 'light-mode');
      this.renderer.addClass(body, 'dark-mode');
      this.darkTheme = true;
    } else {
      this.renderer.removeClass(body, 'dark-mode');
      this.renderer.addClass(body, 'light-mode');
      this.darkTheme = false;
    }
  }
}
