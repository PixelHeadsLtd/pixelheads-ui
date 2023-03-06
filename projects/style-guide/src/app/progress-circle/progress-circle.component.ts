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
  selectedIndex: number = null;

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
      tooltipText: 'Some other text'
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
  

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
