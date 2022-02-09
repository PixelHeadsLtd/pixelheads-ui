import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Input() fileUploadValue: string;
  @Input() fileUploadId: string;
  @Input() fileUploadName: string;

  constructor() { }
  
  fileUploadHTML =
`<aa-file-upload 
  fileUploadLabel="Please upload your passport" 
  fileUploadId="fileUploadId" 
  fileUploadName="fileUploadName.pdf"
  fileUploadExtentions=".csv,.xlsx,.xls,.pdf"
  fileUploadText="Choose file..."
  fieldClass="boxed">
</aa-file-upload>`;
  
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
