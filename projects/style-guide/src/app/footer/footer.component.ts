import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  standardFooter: boolean;
  toggleBlade: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  footerHTML = 
  `<aa-footer leftPos="16" zIndex="0">
  <div *ngIf="!standardFooter" class="flex-group flex-start padding-y-0-5">
    <div class="field boxed">
      <button class="custom-icons green">
        <span class="material-icons">check</span>
        <span>Approve</span>
      </button>
    </div>
    <div class="field boxed">
      <button class="custom-icons orange">
        <span class="material-icons">reply</span>
        <span>Return</span>
      </button>
    </div>
    <div class="field boxed">
      <button class="custom-icons red">
        <span class="material-icons">clear</span>
        <span>Reject</span>
      </button>
    </div>
  </div>
  <ul *ngIf="standardFooter">
    <li><a href="https://www.angloamerican.com/site-services/privacy-policy" target="_blank">Privacy policy</a></li>
    <li><a href="https://www.angloamerican.com/site-services/accessibility" target="_blank">Accessibility</a></li>
    <li><a href="https://www.angloamerican.com/site-services/terms-and-conditions" target="_blank">Terms and conditions</a></li>
    <li><a href="https://www.angloamerican.com/site-services/cookie-policy" target="_blank">Cookie policy</a></li>
    <li><a href="http://www.yourvoice.angloamerican.com/" target="_blank">YourVoice</a></li>
    <li><a href="https://www.angloamerican.com/~/media/Files/A/Anglo-American-Group/PLC/documents/anglo-american-modern-slavery-act-report-2019.pdf" target="_blank">UK Modern Slavery Act</a></li>
    <li>Copyright &#xa9; 2020</li>
  </ul>
</aa-footer>`;
  
  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

  ngOnInit() {
  }

}
