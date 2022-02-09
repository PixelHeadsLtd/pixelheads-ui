import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aa-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadComponent implements OnInit {

  @Input() fileUploadLabel: string;
  @Input() fileUploadId: string;
  @Input() fileUploadValue: string;
  @Input() fileUploadName: string;
  @Input() fileUploadExtentions: string;
  @Input() fileUploadText: string;
  @Input() fieldClass: string;

  constructor() { }

  ngOnInit() {
  }

}
