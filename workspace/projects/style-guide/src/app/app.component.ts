import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ToggleService } from '../services/toggle-service';
import { Subscription } from 'rxjs';
import { ModalService } from '@angloamerican/components';

export interface Toast {
  type: string;
  title: string;
  message: string;
  icon: string
}

/* eslint-disable @angular-eslint/component-selector */
@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'style-guide';
  hideMe: boolean = false;
  minimizeMenu: boolean = false;
  private minimizeMenuSubscription: Subscription;
  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;

  constructor(private toggleService: ToggleService, private modalService: ModalService) {
    this.minimizeMenuSubscription = this.toggleService.minimizeMenu$.subscribe(minimizeMenu => {
      this.minimizeMenu = minimizeMenu;
    });
  }

  ngAfterViewInit() {
    console.log('ViewContainerRef setup');
    this.modalService.setViewContainerRef(this.modalContainer);
  }

  ngOnDestroy(): void {
    this.minimizeMenuSubscription.unsubscribe();
  }
}
