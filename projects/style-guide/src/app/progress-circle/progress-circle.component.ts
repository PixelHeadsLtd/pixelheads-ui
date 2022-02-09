import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnInit {

  constructor() { }
  
  progressCircleHTML = 
  `<div class="flex-group flex-center">
  <div class="padding-2">
    <aa-progress-circle 
      [panelView]="false"
      [isSmall]="false"
      [name]="'Total team reviews'" 
      [percent]="'20'" 
      [tooltipMinWidth]="'12'" 
      [colour]="'#009fe3'"
      >
    </aa-progress-circle>
  </div>
</div>
  
// AS MENU
<ol>
  <aa-progress-circle 
    [isSmall]="true" 
    [name]="'Total team reviews'" 
    [percent]="'20'" 
    [tooltipMinWidth]="'12'" 
    [colour]="'#009fe3'"
    >
  </aa-progress-circle>
</ol>`;
  
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
