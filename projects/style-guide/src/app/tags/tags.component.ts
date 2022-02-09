import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tagHTML = 
  `<div class="flex-group flex-start">
  <section class="aa-tag bg-aa-light-blue-100">
    <div class="material-icons aa-white-100">loyalty</div>
    <span class="aa-white-100">bg-aa-light-blue-100</span>
    <a class="anchor-close aa-white-100"></a>
  </section>
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

  ngOnInit(): void {
  }

}
