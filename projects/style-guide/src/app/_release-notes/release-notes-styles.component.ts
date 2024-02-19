import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-release-notes-styles',
  templateUrl: './release-notes-styles.component.html',
  styleUrls: ['./release-notes-styles.component.scss']
})
export class ReleaseNotesStylesComponent {

  @Input() styles: boolean = false;
  @Input() components: boolean = false;

  constructor() { }

}
