import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ph-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input() cardName: string  = '';
  @Input() cardRole: string = '';
  @Input() cardOptional: boolean = false;
  @Input() cardMini: boolean = false;
  @Input() cardDetailed: boolean = false;
  @Input() cardWidth: any;
  @Input() themeColour: string = '';
  @Input() zIndex: number = 0;
  @Input() imgPath: any;
  @Input() title: any;
  @Input() showAsIcon: boolean = false;
  @Input() showAsProfile: boolean = false;
  @Input() iconName: string = '';
  @Input() borderClass: string = '';
  @Input() topPos: any;
  @Input() rightPos: any;
  @Input() leftPos: any;

  @Output() cardClick = new EventEmitter<Event>();

  public onCardClick(e: Event) {
    this.cardClick.emit(e);
    e.stopPropagation();
  }

  constructor() { }

}
