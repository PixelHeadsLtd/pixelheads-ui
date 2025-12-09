import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-release-notes-components',
  templateUrl: './release-notes-components.component.html'
})
export class ReleaseNotesComponentsComponent {

  @Input() styles: boolean = false;
  @Input() components: boolean = false;

  constructor() { }

}
