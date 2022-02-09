import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

export class ButtonsComponent {

  public onClick() { console.log('You clicked the main button'); }

  selectedIcon: string = 'visibility';
  selectedColor: string = 'bg-aa-light-blue-100';
  settingsClicked: boolean;
  showBtnMenu: boolean;
  showPub: boolean;
  showPubLater: boolean;
  showCancelPub: boolean;
  buttonSplit: boolean;

  customButton: boolean;
  iconButtons: boolean;
  standardButtons: boolean;
  buttonEnriched: boolean;
  toggleBlade: boolean;
  
  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  selectIconHandler (event: any) {
    this.selectedIcon = event.target.value;
  }
  
  selectColorHandler (event: any) {
    this.selectedColor = event.target.value;
  }
  
  customButtonHTML = 
  `<aa-button
  [customIcons]="true"
  (buttonClick)="onClick()"
  buttonId="buttonId"
  buttonClass="custom-icons orange"
  fieldClass="boxed"
  buttonLabel="Custom icons"
  buttonText="Visibility"
  buttonIcon="visibility"
  disabled="">
</aa-button>`;
  
  iconButtonHTML = 
  `<div class="field">
  <label>.approve, play_arrow</label>
  <button class="approve material-icons">play_arrow</button>
</div>

<!-- Older settings and filter versions  -->
<aa-button 
  (click)="onClick()" 
  buttonClass="primary settings" 
  fieldClass="label-hidden" 
  buttonId="settings-id"
  buttonLabel="Settings" 
  buttonText="Settings" 
  disabled="">
</aa-button>

<aa-button 
  (click)="onClick()" 
  buttonClass="secondary filter" 
  fieldClass="label-hidden" 
  buttonId="buttonId11" 
  buttonLabel="Filter"
  buttonText="Filter" 
  disabled="">
</aa-button>`;
  
  standardButtonHTML =
  `<aa-button 
    (buttonClick)="onClick()" 
    fieldClass="" 
    buttonClass="primary" 
    buttonId="buttonId" 
    buttonLabel="Primary"
    buttonText=".primary" 
    disabled="">
  </aa-button>`;
  
  buttonEnrichedHTML =
  `<aa-button
  [buttonEnriched]="true"
  (buttonClick)="onClick()"
  type="button"
  buttonId="myBtnId"
  title="Your meeting is at 14:00"
  iconName="alarm"
  iconColour="aa-burgundy-100"
>
  <ng-container toolbar>
    <div class="material-icons aa-light-blue-100" (click)="onSettingsClick($event)">settings</div>
  </ng-container>
</aa-button>`;

  buttonSplitHTML =
  `<aa-button
  [buttonEnriched]="true"
  (buttonClick)="onClick()"
  type="button"
  buttonId="myBtnId"
  title="Your meeting is at 14:00"
  iconName="alarm"
  iconColour="aa-burgundy-100"
>
  <ng-container toolbar>
    <div class="material-icons aa-light-blue-100" (click)="onSettingsClick($event)">settings</div>
  </ng-container>
</aa-button>`;

  onSettingsClick(event) {
    event.stopPropagation();
    console.log("you clicked the settings icon");
  }
  
  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }
}
