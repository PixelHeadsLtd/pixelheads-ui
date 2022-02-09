import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() fileUploadValue: string;
  @Input() fileUploadId: string;
  @Input() fileUploadName: string;
  @Input() myRadios: string;

  constructor() { }
  
  sliderHTML =
`<aa-slider
  [sliderInline]="false"
  sliderChecked=""
  labelText="apples"
  fieldClass="boxed"
  sliderId=""
  sliderName=""
  sliderValue=""
  disabled=""
>
</aa-slider>`;
  
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
