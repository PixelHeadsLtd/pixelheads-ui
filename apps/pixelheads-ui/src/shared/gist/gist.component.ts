import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
declare function postscribe(element: any, html: any, options?: any): any;

@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
})
export class GistComponent implements AfterViewInit {
  @Input() src: any;
  @ViewChild('gist') gist?: { nativeElement: any; };

  constructor() { }

  ngAfterViewInit() {
    if (this.src) {
      postscribe(this.gist?.nativeElement, `<script src="https://gist.github.com/${this.src}.js"></script>`);
    }
  }
}
