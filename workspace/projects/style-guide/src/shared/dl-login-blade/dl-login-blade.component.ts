import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dl-login-blade',
  templateUrl: './dl-login-blade.component.html',
  styleUrl: './dl-login-blade.component.scss'
})
export class DlLoginBladeComponent {
  loginBlade: boolean = false;
  private loginBladeSubscription: Subscription;

  constructor(private toggleService: ToggleService) {
    this.loginBladeSubscription = this.toggleService.loginBlade$.subscribe(loginBlade => {
      this.loginBlade = loginBlade;
    });
  }

  ngOnDestroy(): void {
    this.loginBladeSubscription.unsubscribe();
  }

  closeLoginBlade(): void {
    this.toggleService.toggleLoginBlade(); // Toggle the blade state
  }
}
