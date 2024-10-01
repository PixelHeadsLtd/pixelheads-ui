import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  updateIndex = new Subject<number>();
  homeLinkClick = new Subject<void>(); // Subject to handle home link click

  private minimizeMenuSubject = new BehaviorSubject<boolean>(false);
  minimizeMenu$ = this.minimizeMenuSubject.asObservable();

  private mobileMenuSubject = new BehaviorSubject<boolean>(false);
  mobileMenu$ = this.mobileMenuSubject.asObservable();

  private appsBladeSubject = new BehaviorSubject<boolean>(false);
  appsBlade$ = this.appsBladeSubject.asObservable();

  private loginBladeSubject = new BehaviorSubject<boolean>(false);
  loginBlade$ = this.loginBladeSubject.asObservable();

  private searchSubject = new BehaviorSubject<boolean>(false);
  search$ = this.searchSubject.asObservable();

  collapseNavItems = new Subject<void>();

  triggerCollapseNavItems(): void {
    this.collapseNavItems.next(); // Emit an event to collapse nav items
  }

  triggerHomeLinkClick(): void {
    this.homeLinkClick.next(); // Emit an event to handle home link click
  }

  toggleMinimizeMenu(): void {
    const currentValue = this.minimizeMenuSubject.value;
    this.minimizeMenuSubject.next(!currentValue);
  }

  toggleMobileMenu(): void {
    const currentValue = this.mobileMenuSubject.value;
    this.mobileMenuSubject.next(!currentValue);
  }

  toggleAppsBlade(): void {
    const currentValue = this.appsBladeSubject.value;
    this.appsBladeSubject.next(!currentValue);
  }

  toggleLoginBlade(): void {
    const currentValue = this.loginBladeSubject.value;
    this.loginBladeSubject.next(!currentValue);
  }

  toggleSearch(): void {
    const currentValue = this.searchSubject.value;
    this.searchSubject.next(!currentValue);
  }

  // Close opened blade
  closeLoginBlade(): void {
    this.loginBladeSubject.next(false);
  }

  closeAppsBlade(): void {
    this.appsBladeSubject.next(false);
  }

  closeSearch(): void {
    this.searchSubject.next(false);
  }
}
