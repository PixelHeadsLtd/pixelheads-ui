import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blade-top',
  templateUrl: './blade-top.component.html',
  styleUrls: ['./blade-top.component.scss']
})
export class BladeTopComponent implements OnInit {

  public isPinned: boolean;
  public isOpen: boolean;
  public showBlade: boolean;
  public toggleBlade: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.isOpen = open;
  }

  bladeIsPinned(togglePinned: boolean) {
    this.isPinned = togglePinned;
  }

  sideBladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  topBladeHTML = 
  `<aa-blade-top 
  [isOpen]="isOpen"
  (bladeOpen)="bladeIsOpen($event)"
  (bladePinned)="bladeIsPinned($event)"
  topPos="3.5"
  leftPos="0" 
  rightPos="0" 
  zIndex="100"
  userProfile="true"
  profileSize="15"
  maxHeight="16.5"
  borderColour="#0075b0"
  borderThickness=".75"
  countryFlag="tl"
  >

  <ng-container user-profile>
      <img onerror="this.style.display='none'" src="your image path" />
  </ng-container>

  <ng-container custom-content>
      <article class="border-right-dashed-light padding-left-1 margin-top-1-5">
          <h2>Title</h2>
          <div class="scroll-panel padding-top-0">
              <div class="scroll-panel-content margin-top-0">
                  <dl>
                      Your dl content
                  </dl>
              </div>
          </div>
      </article>
      <article class="margin-top-1-5">
          <h2 class="padding-left-0-75">Subordinates</h2>
          <div class="scroll-panel">
              <div class="scroll-panel-content with-table">
                  <table class="table-condensed">
                      your table content...
                  </table>
              </div>
          </div>
      </article>
  </ng-container>
</aa-blade-top>`;
  
  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

  ngOnInit(): void {
  }

}
