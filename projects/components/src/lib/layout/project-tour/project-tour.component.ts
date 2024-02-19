import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-project-tour',
  templateUrl: './project-tour.component.html',
  styleUrls: ['./project-tour.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectTourComponent  {

  @Input() tourMode: boolean  = false;
  @Input() enableHeading: boolean = false;
  @Input() tourModeHeading: string = '';
  @Input() tourModeBody: string = '';
  @Input() topPos: any;
  @Input() rightPos: any;
  @Input() bottomPos: any;
  @Input() leftPos: any;
  @Input() panelWidth: any;
  @Input() arrowPos: any;
  @Input() arrowTop: boolean = false;
  @Input() arrowRight: boolean = false;
  @Input() arrowBottom: boolean = false;
  @Input() arrowLeft: boolean = false;
  @Input() arrowClass: string = '';
  @Input() zIndex: number = 0;

  constructor() { }

}
