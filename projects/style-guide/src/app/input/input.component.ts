import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  isOptional = true;
  showInput: boolean;
  showInputSmall: boolean;
  showTwoCol: boolean;

  constructor() { }
  
  inputHTML = 
  `<aa-input-text 
  inputTextId="input-text-01"
  inputValue=""
  inputTextLabel="Input text"
  fieldClass="" 
  inputPlaceholder="Text">
</aa-input-text>

<aa-input-text 
  inputTextId="input-text-01"
  inputValue=""
  inputTextLabel="Input text small"
  fieldClass="small" 
  inputPlaceholder="Text small">
</aa-input-text>
<aa-input-text 
  inputTextId="input-text-02"
  inputValue=""
  inputTextLabel="Input text optional"
  [isOptional]="true" 
  fieldClass=""
  inputPlaceholder="Text small optional">
</aa-input-text>
              
<aa-input-text 
  [readOnly]="true"
  inputTextId="input-text-03"
  inputValue=""
  inputTextLabel="Input text readonly"
  fieldClass="" 
  inputPlaceholder="Readonly">
</aa-input-text>`;
  
  inputSmallHTML = 
  `<aa-input-text 
  inputTextId="input-text-01" 
  inputValue = ""
  inputTextLabel="Input text" 
  fieldClass="child"
  inputPlaceholder="Child">
</aa-input-text>`;
  
  twoColHTML =
  `<article class="max-width-50">
  <div class="flex-group">
    <aa-input-text [inputTextId]="'input-text-03'" [inputTextLabel]="'Input text'"></aa-input-text>
    <aa-input-text [inputTextId]="'input-text-04'" [inputTextLabel]="'Input text'"></aa-input-text>
    <div class="flex-align-end"><a class="anchor-blue anchor-underline padding-bottom-0-5">Remove</a></div>
  </div>
  <div class="flex-group">
    <aa-input-text [inputTextId]="'input-text-05'" [inputTextLabel]="'Input text'"></aa-input-text>
    <aa-input-text [inputTextId]="'input-text-06'" [inputTextLabel]="'Input text'"></aa-input-text>
    <div class="flex-align-end"><a class="anchor-blue anchor-underline padding-bottom-0-5">Remove</a></div>
  </div>
</article>`;
  
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
