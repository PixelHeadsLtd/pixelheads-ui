import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnInit {

  toggleBlade: boolean;
  showProgressCircle: boolean;
  showProgressCirclePanelView: boolean;
  showProgressCircleClean: boolean;
  showCustomProgressCircle: boolean;
  selectedIndex: number = null;
  asLink: boolean;

  constructor() { }

  setIndex(index: number) {
    this.selectedIndex = index;
  }

  progressItems = [
    {
      progressColor: 'orange', 
      progressName: 'Total team', 
      percentage: '60', 
      valueSplit: '6/10', 
      tooltipEnabled: true,
      tooltipText: 'Some other text',
      enableAlertShieldTooltip: true,
      isTopRight: true,
      tooltipMinWidth: '10',
      showTooltipHeading: true,
      myTooltipHeading: 'My tooltip heading',
      alertShieldStatus: 'warning',
      alertShieldText: 'Warning'
    },
    {
      progressColor: 'green', 
      progressName: 'Unchanged', 
      percentage: '40', 
      valueSplit: '4/10',  
      tooltipEnabled: true, 
      tooltipText: 'Some text for the tooltip'
    },
    {
      progressColor: 'blue', 
      progressName: 'Joiners', 
      percentage: '60', 
      valueSplit: '6/10',  
      tooltipEnabled: true, 
      tooltipText: 'Some text for the tooltip'
    },
    {
      progressColor: 'red', 
      progressName: 'Leavers', 
      percentage: '80', 
      valueSplit: '8/10',  
      tooltipEnabled: true, 
      tooltipText: 'Some text for the tooltip'
    },
    {
      progressColor: 'light-blue', 
      progressName: 'Movers', 
      percentage: '90', 
      valueSplit: '9/10', 
      tooltipEnabled: true, 
      tooltipText: 'Some text for the tooltip'
    }
  ];

  progressCustom = [
    {
      customProgressCircle: true,
      panelHeight: '13rem',
      customHeaderClass: 'bg-aa-red-5',
      title: 'My custom header with truncation',
      value: '200/1000',
      percent: '10',
      colour: '#c60c31',
      btnStatus: 'error',
      btnStatusText: '13 alerts',
      btnIcon: 'error_outline',
      asLink: false
    },
    {
      customProgressCircle: true,
      panelHeight: '13rem',
      customHeaderClass: 'bg-aa-green-5',
      title: 'My custom header with truncation',
      value: '200/1000',
      percent: '40',
      colour: '#008770',
      btnStatus: 'complete',
      btnStatusText: '2 complete',
      btnIcon: 'check',
      asLink: true
    },
    {
      customProgressCircle: true,
      panelHeight: '13rem',
      customHeaderClass: 'bg-aa-orange-5',
      title: 'My custom header with truncation',
      value: '200/1000',
      percent: '60',
      colour: '#e98300',
      btnStatus: 'pending',
      btnStatusText: '5 pending',
      btnIcon: 'pending',
      asLink: false
    },
    {
      customProgressCircle: true,
      panelHeight: '13rem',
      customHeaderClass: 'bg-aa-light-blue-5',
      title: 'My custom header with truncation',
      value: '200/1000',
      percent: '90',
      colour: '#0075b0',
      btnStatus: 'info',
      btnStatusText: '5 info',
      btnIcon: 'info',
      asLink: false
    }
  ];
  

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
