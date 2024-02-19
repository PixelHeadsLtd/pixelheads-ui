import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  toggleBlade: boolean = false;
  progress: number = 0;
  i: number = 0;

  constructor() { }

  moveHeaderProgressBar() {
    if (this.i == 0) {
      this.i = 0;
      let context = this;
      let elem = document.getElementById("headerProgressBar");
      let width = 0;
      let id = setInterval(frame, 50);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          context.i = 0;
        } else {
          width++;
          if (elem) {
            elem.style.width = width + "%";
          }
        }
      }
    }
  }

  moveProgressBar() {
    if (this.i == 0) {
      this.i = 0;
      let context = this;
      let elem = document.getElementById("progressBar");
      let width = 0;
      let id = setInterval(frame, 50);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          context.i = 0;
        } else {
          width++;
          if (elem) {
            elem.style.width = width + "%";
          }
        }
      }
    }
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
