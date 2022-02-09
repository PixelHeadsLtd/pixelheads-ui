import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blade',
  templateUrl: './blade.component.html',
  styleUrls: ['./blade.component.scss']
})
export class BladeComponent implements OnInit {

  suppressAutoClose: boolean;
  topPosition: number;
  showBladeGist: boolean;
  bladeHalf: boolean;
  oneColWidth: boolean;
  bladeIcon: string;
  bladeHeading: string;
  showIcon: boolean;
  showCustomBladeGist: boolean;
  coreMenuBlade: boolean;
  bladeDemos: boolean;
  theBladeSize: string = "one-column-width";
  obi: boolean;
  searchText = '';
  showInfo: boolean;
  enablePin: boolean;
  selectedIndex: number = null;
  favIndex: number;

  pinBlade: boolean;
  toggleBlade: boolean;
  showBlade: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  bladeIsPinned(togglePinned: boolean) {
    this.pinBlade = togglePinned;
  }

  favClicked(index: number) {
    this.favIndex = index;
  }
  
  imgPath = "./assets/images/samples/obi-wan.png"
  
  bladeHTML = 
  `<!-- IF PINNING IS ENABLED, YOU MUST ADD [ngStyle] TO THE PAGE CONTENT CONTTAINER, THEN ADJUST THE CALC END VALUE ACCORDINGLY -->
  <section class="content-container" [ngStyle]=“{‘width’: toggleBlade && pinBlade ? ‘calc(100% - 38rem)’ : ‘ ’ }”></section>
  
  <aa-blade 
    [showModal]="false"
    [enablePinning]="enablePin"
    [toggleBlade]="toggleBlade"
    (bladeOpen)="bladeIsOpen($event)"
    (bladePinned)="bladeIsPinned($event)"
    [suppressAutoClose]="false"
    topPosition="3.5"
    zIndex="30"
    bladeSize="{{theBladeSize}}"
    bladeHeading="{{bladeHeading}}"
    [enableIcon]="showIcon"
    iconName="{{bladeIcon}}"
  >
    <article class="blade-content">
      Your blade content...
    </article>
    <article class="blade-footer">
      Your blade footer...
    </article>
  </aa-blade>`;

bladeCustomHTML =
`<aa-blade 
  [customBlade]="true"
  [showModal]="false"
  [toggleBlade]="toggleBlade5"
  suppressAutoClose="false"
  topPosition="3.5"
  zIndex="0"
  bladeSize="one-column-width"
  (close)="toggleBlade5 = false"
>
<ng-container custom-header>
  Your blade header...
</ng-container>
<ng-container custom-content>
  Your blade content...
</ng-container>
  <ng-container custom-footer>
  Your blade footer...
</ng-container>
</aa-blade>`;
  
  copyToClipboard(item: string): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }
  
  menuClicked(event: { stopPropagation: () => void; }) {
    event.stopPropagation();
  }

  ngOnInit() {
  }

}
