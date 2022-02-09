import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-project-tour',
  templateUrl: './project-tour.component.html',
  styleUrls: ['./project-tour.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectTourComponent implements OnInit {

  @Input() tourMode: boolean;
  @Input() enableHeading: string;
  @Input() tourModeHeading: string;
  @Input() tourModeBody: string;
  @Input() topPos: any;
  @Input() rightPos: any;
  @Input() bottomPos: any;
  @Input() leftPos: any;
  @Input() panelWidth: any;
  @Input() arrowPos: any;
  @Input() arrowTop: boolean;
  @Input() arrowRight: boolean;
  @Input() arrowBottom: boolean;
  @Input() arrowLeft: boolean;
  @Input() arrowIsPlum: boolean;

  constructor() { }

  ngOnInit() {
  }
}
