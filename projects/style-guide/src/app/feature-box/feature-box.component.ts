import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-box',
  templateUrl: './feature-box.component.html',
  styleUrls: ['./feature-box.component.scss']
})
export class FeatureboxComponent {

  featureBox: boolean = false;
  featureBoxCustomBorder: boolean = false;
  featureBoxCustomContent: boolean = false;
  featureBoxApproval: boolean = false;
  toggleBlade: boolean = false;

  constructor() { }

  featureBoxArray = [
    {
      mixedContent: true,
      status: '',
      width: '16rem',
      height: '12rem',
      title: 'Capcoal lock settings',
      iconName: 'settings',
      marginTop: '0',
      marginBottom: '1rem',
      scolling: true
    },
    {
      mixedContent: true,
      status: 'complete',
      width: '16rem',
      height: '12rem',
      title: 'Capcoal lock settings',
      iconName: 'language',
      marginTop: '0',
      marginBottom: '1rem',
      scolling: true
    },
    {
      mixedContent: true,
      status: 'pending',
      width: '16rem',
      height: '12rem',
      title: 'Capcoal lock settings',
      iconName: 'assignment',
      marginTop: '0',
      marginBottom: '1rem',
      scolling: true
    },
    {
      mixedContent: true,
      status: 'error',
      width: '16rem',
      height: '12rem',
      title: 'Capcoal lock settings',
      iconName: 'touch_app',
      marginTop: '0',
      marginBottom: '1rem',
      scolling: true
    }
  ]

  fbContent = [
    {
      status: 'success',
      text: 'Success',
      name: 'Met Coal'
    },
    {
      status: 'error',
      text: 'Success',
      name: 'Clean stocks outbound'
    },
    {
      status: 'success',
      text: 'Success',
      name: 'Clean stocks outbound'
    },
    {
      status: 'pending',
      text: 'Success',
      name: 'Met Coal'
    },
    {
      status: 'success',
      text: 'Success',
      name: 'Iron Ore'
    },
    {
      status: 'error',
      text: 'Success',
      name: 'Met Coal'
    },
    {
      status: 'success',
      text: 'Success',
      name: 'Iron Ore'
    }
  ]

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
