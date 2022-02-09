import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  constructor() {}
  
  tooltipHTML =
  `<!-- Stand-alone version -->
  <aa-tooltip 
    class="margin-top-1"
    [includeLabel]="false"
    [includeLegend]="false"
    [isInfo]="true" 
    setMinWidth="12" 
    ypos="bottom" 
    xpos="right"
    zIndex="1"
  >
    <h4>Ahoy there</h4>
    <p>Mr Beaver had begun telling them that the White Witch wasn’t really human at all </p>
  </aa-tooltip>
  
  <!-- Replace form label version -->
  <div class="field">
    <aa-tooltip 
      [includeLabel]="true"
      [includeLegend]="false"
      labelName="Popup panel position - bottom right"
      class="margin-top-1"
      [isInfo]="true" 
      setMinWidth="12" 
      ypos="bottom" 
      xpos="right"
      zIndex="1"
    >
      <h4>Ahoy there</h4>
      <p>Mr Beaver had begun telling them that the White Witch wasn’t really human at all </p>
    </aa-tooltip>
    <input type="text" value="The above label is replaced by the tooltip" />
  </div>`;
  
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
