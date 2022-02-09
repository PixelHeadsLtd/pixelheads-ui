import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() toggleModal: boolean;

  constructor() { }
  
  modalHTML = 
  `<aa-modal 
  *ngIf="toggleModal"
  [red]=""
  [orange]="true"
  [blue]=""
  [green]=""
  topPos=""
  rightPos=""
  leftPos=""
  minWidth=""
  maxWidth="20rem"
  zIndex="999"
  [heading]="'Are you sure?'"
>
  <div content-custom>Custom content</div>
  <aa-button 
    (buttonClick)="toggleModal=!toggleModal" 
    buttonClass="primary" 
    fieldClass="boxed label-hidden" 
    buttonId="buttonId" 
    buttonText="Yes">
  </aa-button>
  <aa-button 
    (buttonClick)="toggleModal=!toggleModal" 
    buttonClass="cancel" 
    fieldClass="boxed label-hidden" 
    buttonId="buttonId" 
    buttonText="No">
  </aa-button>
</aa-modal>`;
  
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
