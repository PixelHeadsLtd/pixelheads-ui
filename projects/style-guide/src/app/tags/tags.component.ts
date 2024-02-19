import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  showTags: boolean = false;
  showTagsShaped: boolean = false;
  toggleBlade: boolean = false;

  onClick() {
    console.log("You clicked to remove this tag");
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
