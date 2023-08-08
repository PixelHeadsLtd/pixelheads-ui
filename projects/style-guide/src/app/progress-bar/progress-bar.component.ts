import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  toggleBlade: boolean;
  progress: number;
  
  constructor() { }

  i:number = 0;

   moveHeaderProgressBar() {
    if (this.i == 0) {
      this.i = 0;
      let elem = document.getElementById("headerProgressBar");
      let width = 0;
      let id = setInterval(frame, 50);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          this.i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }

   moveProgressBar() {
    if (this.i == 0) {
      this.i = 0;
      let elem = document.getElementById("progressBar");
      let width = 0;
      let id = setInterval(frame, 50);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          this.i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit(): void {
  }

}
