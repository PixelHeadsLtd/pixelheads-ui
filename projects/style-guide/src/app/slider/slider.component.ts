import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  fileUploadValue: string;
  fileUploadId: string;
  fileUploadName: string;
  myRadios: string;
  toggleBlade: boolean;
  testSlider: boolean;

  constructor() { }

  setChecked(checked: boolean) {
    this.testSlider = checked;
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  onSliderCheckedChanged(event: any) {
    console.log('received ' + event);
  }

  ngOnInit() {
  }

}
