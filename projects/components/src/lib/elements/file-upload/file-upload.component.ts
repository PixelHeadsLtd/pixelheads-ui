import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'aa-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadComponent {

  @Input() fileUploadLabel: string  = '';
  @Input() fileUploadId: string = '';
  @Input() fileUploadValue: string = '';
  @Input() fileUploadName: string = '';
  @Input() fileUploadExtentions: string = '';
  @Input() fileUploadText: string = '';
  @Input() fieldClass: string = '';
  @Input() truncateFileName: boolean = false;
  @Input() truncateWidth: any;
  @Input() customButton: boolean = false;
  @Input() iconName: string = '';
  @Input() textColor: string = '';
  @Input() bgColor: any;

  constructor() { }

}
