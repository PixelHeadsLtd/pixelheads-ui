import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor() { }
  
  alertsHTML =
  `<aa-alert alertClass="success" alertText="Success"></aa-alert>
  <aa-alert alertClass="info" alertText="Info"></aa-alert>
  <aa-alert alertClass="warning" alertText="Warning"></aa-alert>
  <aa-alert alertClass="error" alertText="Error"></aa-alert>`;
  
  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }
  
  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
