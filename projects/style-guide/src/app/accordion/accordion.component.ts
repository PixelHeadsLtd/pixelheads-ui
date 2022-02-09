import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() showBodyOne: boolean;
  @Input() showBodyTwo: boolean;
  @Input() showBodyThree: boolean;
  @Input() showBodyFour: boolean;
  @Input() showBodyFive: boolean;
  @Input() showBodySix: boolean;
  @Input() showAccordion: boolean;
  @Input() showAccordionAlt: boolean;
  @Input() showJustification: boolean;
  @Input() addJustification: boolean;

  constructor() { }
  
  justification() {
    this.showJustification = true;
  }
  
  accordionHTML =
  `<aa-accordion
  [disabled]="false"
  (open)="showBodyOne = true"
  [dragable]="true"
  [showBody]="showBodyOne"
  accordionHeading="Accordion heading 1"
  accordionId="accordion01"
  sectionId="section01"
  [iconsEnabled]="true"
  iconName="account_balance"
>
  <div header-custom><div class="alert-shield small info">Custom content</div></div>
  <p>Add accordion content in here</p>
</aa-accordion>`;
  
  accordionAltHTML = 
  `<aa-accordion
  [disabled]="false"
  [accordionClean]="true"
  [iconsEnabled]="true"
  [fontAwesome]="true"
  fontClassName="fas fa-sitemap bg-aa-plum-100"
  (open)="showBodyFour=true"
  [showBody]="showBodyFour"
  [accordionHeading]="'Accordion heading 1'"
  [accordionId]="'accordion01'"
  [sectionId]="'section01'"
  [dragable]="false"
>
  <div header-custom>
    <input type="checkbox" />
  </div>
  <p>Add your description here...</p>
</aa-accordion>`;
  
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
