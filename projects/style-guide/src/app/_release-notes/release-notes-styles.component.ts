import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-release-notes-styles',
  templateUrl: './release-notes-styles.component.html',
  styleUrls: ['./release-notes-styles.component.scss']
})
export class ReleaseNotesStylesComponent implements OnInit {
  
  @Input() styles: boolean;
  @Input() components: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
