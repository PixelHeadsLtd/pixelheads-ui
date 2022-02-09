import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  headerHTML = 
  `<header class="page-header flex-group space-between flex-align-center">

  <!--LEFT SECTION -->
  <nav class="flex-align-center app-name">
    <div 
      class="
      material-icons 
      aa-white-100
      bg-aa-orange-100
      bd-aa-orange-100
      border-orange
      margin-right-0-5
      "
      >
      design_services
    </div>
    <div>
        <a title="Design Language homepage" routerLink="/">Design Language</a>
    </div>
  </nav>
  
  <!-- MIDDLE SECTION - LOGO -->
  <div class="aa-logo" title="Anglo American"><span>Anglo American</span></div>
  
  <!-- MOBILE MENU - HIDDEN FOR DESKTOP -->
  <div class="mobile-menu flex-group">
    <div *ngIf="mobileMenu" class="aa-blade-modal"></div>
    <button (click)="toggleTheme()" class="material-icons">brightness_2</button>
    <button (click)="mobileMenu=!mobileMenu" class="material-icons">menu</button>
  </div>
  
  <!-- RIGHT SECTION NAV-->
  <nav class="flex-group flex-end flex-align-center">
    <ul>
      <!-- apps blade -->
      <li class="cursor-pointer" (click)="toggleAppsBlade=!toggleAppsBlade; toggleLoginBlade=false; showSearch=false">
        <div class="apps">
          <div class="material-icons">apps</div>
        </div>
      </li>
      <!-- login blade -->
      <li class="cursor-pointer" (click)="toggleLoginBlade=!toggleLoginBlade; toggleAppsBlade=false; showSearch=false">
        <div class="avatar">
          <div>
            <img onerror="this.style.display='none'" src="./assets/images/samples/obi-wan.png" />
          </div>
        </div>
      </li>
    </ul>
  </nav>
</header>`;

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

  ngOnInit(): void {
  }

}
