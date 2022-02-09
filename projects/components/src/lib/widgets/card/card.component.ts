import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() cardName: string;
  @Input() cardRole: string;
  @Input() cardOptional: boolean;
  @Input() cardMini: boolean;
  @Input() themeColour: boolean;
  @Input() zIndex: number;
  @Input() imgPath: any;
  @Input() title: any;
  @Input() showAsIcon: boolean;
  @Input() showAsProfile: boolean;
  @Input() iconName: string;
  @Input() borderClass: string;
  @Input() topPos: number;
  @Input() rightPos: number;
  @Input() leftPos: number;

  @Output() cardClick = new EventEmitter<Event>();

  public onCardClick(e: Event) {
    this.cardClick.emit(e);
    e.stopPropagation();
  }

  constructor() { }

  ngOnInit() {
  }

}
