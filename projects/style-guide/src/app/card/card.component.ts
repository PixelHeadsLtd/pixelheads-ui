import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  cardView: boolean = true;
  cardViewLarge: boolean;
  listView: boolean;
  imgPath = "./assets/images/samples/darth.png";
  imgPath2 = "./assets/images/samples/obi-wan.png";
  imgPath3 = "./assets/images/samples/yoda.png";
  imgPath4 = "./assets/images/samples/luke.png";
  showCard: boolean;
  showCardOptional: boolean;
  showCardMini: boolean;
  showAvatar: boolean;
  showCardList: boolean;
  
  constructor() {}
  
  public onClick() { 
    console.log('Hello I was clicked'); 
  }
  
  cardHTML =
  `// If card-view
  <section class="flex-group flex-start" *ngIf="cardView">
    <aa-card
      (cardClick)="onClick()"
      cardOptional="true"
      cardName="Lord D. Vader"
      cardRole="Sith Lord, and Lead Empire Eradication Officer"
      themeColour="#0075b0"
      [imgPath]="imgPath"
    >
      <ng-container card-menu-opt>
        <div class="flex-group position-relative">
          <div class="flag sg"></div>
          <aa-context-menu class="padding-right-0-75" minWidth="7" zIndex="9999">
            <aa-context-menu-item menuItemText="Menu item 1"></aa-context-menu-item>
            <aa-context-menu-item menuItemText="Menu item 2"></aa-context-menu-item>
            <aa-context-menu-item menuItemText="Menu item 3"></aa-context-menu-item>
          </aa-context-menu>
        </div>
      </ng-container>
    </aa-card>
    <aa-card
      (cardClick)="onClick()"
      cardOptional="true"
      cardName="Obi-Wan Kenobi"
      cardRole="Jedi Master of the Republic Army"
      themeColour="#b3025c"
      [imgPath]="imgPath2"
    >
      <ng-container card-menu-opt>
        <div class="flex-group position-relative">
          <div class="flag gb"></div>
          <aa-context-menu class="padding-right-0-75" minWidth="7" zIndex="9999">
            <aa-context-menu-item menuItemText="Menu item 1"></aa-context-menu-item>
            <aa-context-menu-item menuItemText="Menu item 2"></aa-context-menu-item>
            <aa-context-menu-item menuItemText="Menu item 3"></aa-context-menu-item>
          </aa-context-menu>
        </div>
      </ng-container>
    </aa-card>
    <aa-card
      (cardClick)="onClick()"
      cardOptional="true"
      cardName="Yoda"
      cardRole="Jedi Master"
      themeColour="#e6b127"
      [imgPath]="imgPath3"
    >
      <ng-container card-menu-opt>
        <div class="flex-group position-relative">
          <div class="flag gb"></div>
          <aa-context-menu class="padding-right-0-75" minWidth="7" zIndex="9999">
            <aa-context-menu-item menuItemText="Menu item 1"></aa-context-menu-item>
            <aa-context-menu-item menuItemText="Menu item 2"></aa-context-menu-item>
            <aa-context-menu-item menuItemText="Menu item 3"></aa-context-menu-item>
          </aa-context-menu>
        </div>
      </ng-container>
    </aa-card>
    <aa-card (cardClick)="onClick()" cardOptional="true" cardName="Unknown" cardRole="Unknown" themeColour="#3CC6E2" [imgPath]="">
      <ng-container card-menu-opt>
        <div class="flex-group position-relative">
          <div class="flag gb"></div>
          <aa-context-menu class="padding-right-0-75" minWidth="7" zIndex="9999">
            <aa-context-menu-item menuItemText="Menu item 1"></aa-context-menu-item>
            <aa-context-menu-item menuItemText="Menu item 2"></aa-context-menu-item>
            <aa-context-menu-item menuItemText="Menu item 3"></aa-context-menu-item>
          </aa-context-menu>
        </div>
      </ng-container>
    </aa-card>
  </section>
  
  // If card-view-large
  <section class="flex-group flex-start card-large" *ngIf="cardViewLarge">
    <aa-card
      (cardClick)="onClick()"
      cardOptional="true"
      cardName="Lord D. Vader"
      cardRole="Sith Lord, and Lead Empire Eradication Officer"
      themeColour="#0075b0"
      [imgPath]="imgPath"
    >
      <ng-container card-menu-opt>
        <div class="flex-group position-relative">
          <div class="flag gb"></div>
          <div>
            <aa-context-menu class="padding-right-0-75" minWidth="7" zIndex="9999">
              <aa-context-menu-item menuItemText="Menu item 1"></aa-context-menu-item>
              <aa-context-menu-item menuItemText="Menu item 2"></aa-context-menu-item>
              <aa-context-menu-item menuItemText="Menu item 3"></aa-context-menu-item>
            </aa-context-menu>
          </div>
        </div>
      </ng-container>
    </aa-card>
    <aa-card
      (cardClick)="onClick()"
      cardOptional="true"
      cardName="Obi-Wan Kenobi"
      cardRole="Jedi Master of the Republic Army"
      themeColour="#b3025c"
      [imgPath]="imgPath2"
    >
      <ng-container card-menu-opt>
        <div class="flex-group position-relative">
          <div class="flag gb"></div>
          <div>
            <aa-context-menu class="padding-right-0-75" minWidth="7" zIndex="9999">
              <aa-context-menu-item menuItemText="Menu item 1"></aa-context-menu-item>
              <aa-context-menu-item menuItemText="Menu item 2"></aa-context-menu-item>
              <aa-context-menu-item menuItemText="Menu item 3"></aa-context-menu-item>
            </aa-context-menu>
          </div>
        </div>
      </ng-container>
    </aa-card>
    <aa-card
      (cardClick)="onClick()"
      cardOptional="true"
      cardName="Yoda"
      cardRole="Jedi Master"
      themeColour="#e6b127"
      [imgPath]="imgPath3"
    >
      <ng-container card-menu-opt>
        <div class="flex-group position-relative">
          <div class="flag gb"></div>
          <div>
            <aa-context-menu class="padding-right-0-75" minWidth="7" zIndex="9999">
              <aa-context-menu-item menuItemText="Menu item 1"></aa-context-menu-item>
              <aa-context-menu-item menuItemText="Menu item 2"></aa-context-menu-item>
              <aa-context-menu-item menuItemText="Menu item 3"></aa-context-menu-item>
            </aa-context-menu>
          </div>
        </div>
      </ng-container>
    </aa-card>
    <aa-card (cardClick)="onClick()" cardOptional="true" cardName="Unknown" cardRole="Unknown" themeColour="#3CC6E2" [imgPath]="">
      <ng-container card-menu-opt>
        <div class="flex-group position-relative">
          <div class="flag gb"></div>
          <div>
            <aa-context-menu class="padding-right-0-75" minWidth="7" zIndex="9999">
              <aa-context-menu-item menuItemText="Menu item 1"></aa-context-menu-item>
              <aa-context-menu-item menuItemText="Menu item 2"></aa-context-menu-item>
              <aa-context-menu-item menuItemText="Menu item 3"></aa-context-menu-item>
            </aa-context-menu>
          </div>
        </div>
      </ng-container>
    </aa-card>
  </section>
  
  // If list-view
  <table *ngIf="listView" class="margin-top-2">
    <thead>
      <tr>
        <th width="40">&nbsp;</th>
        <th>Name</th>
        <th class="align-center">Country</th>
        <th>Job title</th>
        <th>Primary job role</th>
        <th>Manager</th>
        <th>Address</th>
        <th>Email</th>
        <th>Active</th>
        <th>Marketing</th>
        <th>Compliance</th>
        <th>Modified by</th>
        <th>Modified date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <aa-card
            cardOptional="true"
            cardName="Lord D. Vader"
            cardRole="Sith Lord, and Lead Empire Eradication Officer"
            themeColour="#0075b0"
            [imgPath]="imgPath"
          ></aa-card>
        </td>
        <td datalabel="Name">Lord D. Vader</td>
        <td class="align-center"><div class="flag gb"></div></td>
        <td datalabel="Job title">Sith Lord...</td>
        <td datalabel="Primary job role">Empire Eradication Lead</td>
        <td datalabel="Manager">Tarkin</td>
        <td datalabel="Address">Death Star</td>
        <td datalabel="Email">darth@deathstarinc.com</td>
        <td datalabel="Active">Yes</td>
        <td datalabel="Marketing">No</td>
        <td datalabel="Compliance">No</td>
        <td datalabel="Modified by">Tarkin</td>
        <td datalabel="Modified date">21-dec-1961</td>
      </tr>
      <tr>
        <td>
          <aa-card
            cardOptional="true"
            cardName="Obi-Wan Kenobi"
            cardRole="Jedi Master of the Republic Army"
            themeColour="#b3025c"
            [imgPath]="imgPath2"
          ></aa-card>
        </td>
        <td datalabel="Name">Obi-Wan Kenobi</td>
        <td class="align-center"><div class="flag gb"></div></td>
        <td datalabel="Job title">Jedi Master</td>
        <td datalabel="Primary job role">Dark-Side Residence and Jedi Training</td>
        <td datalabel="Manager">Unknown</td>
        <td datalabel="Address">planet Tatooine</td>
        <td datalabel="Email">obi-wan@kenobi.com</td>
        <td datalabel="Active">Yes</td>
        <td datalabel="Marketing">No</td>
        <td datalabel="Compliance">No</td>
        <td datalabel="Modified by">Unknown</td>
        <td datalabel="Modified date">21-dec-1961</td>
      </tr>
      <tr>
        <td>
          <aa-card cardOptional="true" cardName="Yoda" cardRole="Jedi Master" themeColour="#e6b127" [imgPath]="imgPath3"></aa-card>
        </td>
        <td datalabel="Name">Yoda</td>
        <td class="align-center"><div class="flag gb"></div></td>
        <td datalabel="Job title">Jedi Master</td>
        <td datalabel="Primary job role">Senior Jedi Trainer</td>
        <td datalabel="Manager">Unknown</td>
        <td datalabel="Address">Dagobah</td>
        <td datalabel="Email">yoda@master.com</td>
        <td datalabel="Active">Yes</td>
        <td datalabel="Marketing">No</td>
        <td datalabel="Compliance">No</td>
        <td datalabel="Modified by">Unknown</td>
        <td datalabel="Modified date">21-dec-1961</td>
      </tr>
      <tr>
        <td>
          <aa-card cardOptional="true" cardName="Unknown" cardRole="Unknown" themeColour="#3CC6E2" [imgPath]=""></aa-card>
        </td>
        <td datalabel="Name">Unknown</td>
        <td class="align-center"><div class="flag gb"></div></td>
        <td datalabel="Job title">Unknown</td>
        <td datalabel="Primary job role">Unknown</td>
        <td datalabel="Manager">Unknown</td>
        <td datalabel="Address">Unknown</td>
        <td datalabel="Email">Unknown</td>
        <td datalabel="Active">No</td>
        <td datalabel="Marketing">No</td>
        <td datalabel="Compliance">No</td>
        <td datalabel="Modified by">Unknown</td>
        <td datalabel="Modified date">21-dec-1961</td>
      </tr>
    </tbody>
  </table>`;
  
  cardListHTML =
  `<ul class="aa-card-list">
    <li class="flex-group" title="Yout title">
      <div class="card-list-image fingerprint">
        <img onerror="this.style.display='none'" src="your-image-path" />
      </div>
      <div class="margin-top-0-25">
        <strong>Your text one</strong>
        <p>Your text two</p>
      </div>
    </li>
  </ul>`;
  
  avatarHTML =
  `<div 
  class="avatar"
  [ngStyle]="{
    'width':'4rem', 
    'height':'4rem'
  }"
>
  <div><img onerror="this.style.display='none'" src="./assets/images/samples/obi-wan.png" /></div>
  <aa-card 
    cardName="Person card name" 
    cardRole="Person card role" 
    [imgPath]="imgPath"
    zIndex="999"
    topPos="4"
    leftPos="3"
  >
    <ng-container card-menu>
      <div class="flex-group space-between">
        <div class="flex-group flex-start">
          <a class="icon-email margin-right-0-75 margin-top-0-5"></a>
          <a class="icon-teams margin-top-0-5"></a>
        </div>
        <div class="flex-group">
          <div class="margin-right-0-25">
            <div class="flag gb"></div>
          </div>
          <aa-context-menu class="padding-right-0-75" minWidth="7" zIndex="99999">
            <aa-context-menu-item menuItemText="Menu item 1"></aa-context-menu-item>
            <aa-context-menu-item menuItemText="Menu item 2"></aa-context-menu-item>
            <aa-context-menu-item menuItemText="Menu item 3"></aa-context-menu-item>
          </aa-context-menu>
        </div>
      </div>
    </ng-container>
  </aa-card>
</div>`;
  
  cardMiniHTML =
  `<!-- show as profile -->
  <aa-card 
    [cardMini]="true"
    [showAsProfile]="true"
    borderClass=""
    title="Obi-Wan Kenobi"  
  >
    <ng-container profile-image>
      <img onerror="this.style.display='none'" src="./assets/images/samples/obi-wan.png" />
    </ng-container>
    <ng-container content>
      <span>Jedi Master</span>
    </ng-container>
  </aa-card>
  
  <!-- show as icon -->
  <aa-card 
    [cardMini]="true"
    [showAsIcon]="true"
    iconName="mail_outline"
    title="Email"  
  >
    <ng-container content>
      <a href="obi-wan@kenobi.com">obi-wan@kenobi.com</a>
    </ng-container>
  </aa-card>`;
  
  cardOptionalHTML =
  `<!-- If card-view -->
  <section class="flex-group flex-start" *ngIf="cardView">
    <aa-card
      (cardClick)="onClick()"
      cardOptional="true"
      cardName="Lord D. Vader"
      cardRole="Sith Lord, and Lead Empire Eradication Officer"
      themeColour="#0075b0"
      [imgPath]="imgPath"
    >
      <ng-container card-menu-opt>
        <div class="flex-group position-relative">
          <div class="margin-right-0-25">
            <div class="flag sg"></div>
          </div>
          <aa-context-menu class="padding-right-0-75" minWidth="7" zIndex="9999">
            <aa-context-menu-item menuItemText="Menu item 1"></aa-context-menu-item>
          </aa-context-menu>
        </div>
      </ng-container>
    </aa-card>
  </section>
  
  <!-- If card-view-large -->
  <section class="flex-group flex-start card-large" *ngIf="cardViewLarge">
    <aa-card
      (cardClick)="onClick()"
      cardOptional="true"
      cardName="Lord D. Vader"
      cardRole="Sith Lord, and Lead Empire Eradication Officer"
      themeColour="#0075b0"
      [imgPath]="imgPath"
    >
      <ng-container card-menu-opt>
        <div class="flex-group position-relative">
          <div class="margin-right-0-25">
            <div class="flag gb"></div>
          </div>
          <div>
            <aa-context-menu class="padding-right-0-75" minWidth="7" zIndex="9999">
              <aa-context-menu-item menuItemText="Menu item 1"></aa-context-menu-item>
            </aa-context-menu>
          </div>
        </div>
      </ng-container>
    </aa-card>
  </section>
  
  <!-- If card-view-table -->
  <table *ngIf="tableView" class="margin-top-2">
    <thead>
      <tr>
        <th width="40">&nbsp;</th>
        <th>Name</th>
        <th class="align-center">Country</th>
        <th>Job title</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <aa-card
            cardOptional="true"
            cardName="Lord D. Vader"
            cardRole="Sith Lord, and Lead Empire Eradication Officer"
            themeColour="#0075b0"
            [imgPath]="imgPath"
          ></aa-card>
        </td>
        <td datalabel="Name">Lord D. Vader</td>
        <td class="align-center"><div class="flag gb"></div></td>
        <td datalabel="Job title">Sith Lord...</td>
      </tr>
    </tbody>
  </table>`;

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

  ngOnInit() {}
}
