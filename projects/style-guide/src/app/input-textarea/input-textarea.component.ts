import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent implements OnInit {

  showTextarea: boolean;
  showTextareaAutoresize: boolean;

  constructor() { }

  textareaHTML =
  `<div class="field">
  <label for="text-area">Textarea</label>
  <textarea name="text-area" id="text-area" rows="5"></textarea>
</div>`;

  textareaAutoresizeHTML =
  `<div class="field">
  <label for="text-area-2">Textarea auto-resize</label>
  <textarea class="auto-resize" aaTextareaAutoresize></textarea>
</div>

<!-- Reactive Forms Version -->
<div class="field">
  <label for="text-area-2">Textarea auto-resize</label>
  <textarea class="auto-resize" formControlName="textAreaControl" [aaTextareaAutoresize]="textAreaControl"></textarea>
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

  ngOnInit() {
  }

}
