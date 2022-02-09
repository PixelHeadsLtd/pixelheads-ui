import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-release-notes-components',
  templateUrl: './release-notes-components.component.html',
  styleUrls: ['./release-notes-components.component.scss']
})
export class ReleaseNotesComponentsComponent implements OnInit {
  
  @Input() styles: boolean;
  @Input() components: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
