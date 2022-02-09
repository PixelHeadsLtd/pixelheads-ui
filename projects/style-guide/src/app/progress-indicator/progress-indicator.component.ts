import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {
  
  progressIndicator: boolean;
  progressIndicatorIcons: boolean;

  constructor() { }
  
  progressIndicatorHTML =
  `<nav role="progressbar">
  <ol>
    <aa-progress-indicator
      [asLink]="true"
      [progressClass]="'visited'"
      [progressCount]="'1'"
      [progressLink]="'#'"
      [progressLabel]="'Visited'"
    ></aa-progress-indicator>
    <aa-progress-indicator
      [asLink]="false"
      [progressClass]="'complete'"
      [progressCount]="'2'"
      [progressLink]="'#'"
      [progressLabel]="'Complete'"
    ></aa-progress-indicator>
    <aa-progress-indicator
      [asLink]="false"
      [progressClass]="'error'"
      [progressCount]="'3'"
      [progressLink]="'#'"
      [progressLabel]="'Error'"
    ></aa-progress-indicator>
    <aa-progress-indicator
      [asLink]="false"
      [progressClass]="'current'"
      [progressCount]="'4'"
      [progressLink]="'#'"
      [progressLabel]="'Current'"
    ></aa-progress-indicator>
    <aa-progress-indicator
      [asLink]="false"
      [progressClass]="'next'"
      [progressCount]="'5'"
      [progressLink]="'#'"
      [progressLabel]="'Next'"
    ></aa-progress-indicator>
  </ol>
</nav>`;
  
  progressIndicatorIconsHTML = 
  `<nav role="progressbar" class="margin-top-1">
  <ol>
    <aa-progress-indicator
      [iconsEnabled]="true"
      [iconName]="'business'"
      [progressClass]="'visited'"
      [progressCount]="'1'"
      [progressLink]="'#'"
      [progressLabel]="'Visited'"
    ></aa-progress-indicator>
    <aa-progress-indicator
      [iconsEnabled]="true"
      [iconName]="'accessibility'"
      [progressClass]="'complete'"
      [progressCount]="'2'"
      [progressLink]="'#'"
      [progressLabel]="'Complete'"
    ></aa-progress-indicator>
    <aa-progress-indicator
      [iconsEnabled]="true"
      [iconName]="'language'"
      [progressClass]="'error'"
      [progressCount]="'3'"
      [progressLink]="'#'"
      [progressLabel]="'Error'"
    ></aa-progress-indicator>
    <aa-progress-indicator
      [iconsEnabled]="true"
      [iconName]="'android'"
      [progressClass]="'current'"
      [progressCount]="'4'"
      [progressLink]="'#'"
      [progressLabel]="'Current'"
    ></aa-progress-indicator>
    <aa-progress-indicator
      [iconsEnabled]="true"
      [iconName]="'filter_vintage'"
      [progressClass]="'next'"
      [progressCount]="'5'"
      [progressLink]="'#'"
      [progressLabel]="'Next'"
    ></aa-progress-indicator>
  </ol>
</nav>`;
  
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
