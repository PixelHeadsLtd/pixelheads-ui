import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import postscribe from 'postscribe';

@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
})
export class GistComponent implements AfterViewInit {
  @Input() src;
  @ViewChild('gist') gist;

  constructor() { }

  ngAfterViewInit() {
    if (this.src) {
      postscribe(this.gist.nativeElement, `<script src="https://gist.github.com/${this.src}.js"></script>`);
    }
  }
}

// import { Component, OnChanges,ElementRef, AfterViewInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'app-gist',
//   template:`
//     <div #gist></div>
//   `
// })

// export class GistComponent implements AfterViewInit {
//   @ViewChild('gist') div:ElementRef;
//   @Input() src;

//   ngAfterViewInit() {
//     let doc = this.div.nativeElement;
//     let content = `<script src="https://gist.github.com/${this.src}.js"></script>`;
//     doc.open();
//     doc.write(content);
//     doc.close();
//   }
// }
