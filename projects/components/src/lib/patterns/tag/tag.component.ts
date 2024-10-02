import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent {

  @Input() isShaped: boolean = false;
  @Input() tagText: string = '';
  @Input() isRed: boolean = false;
  @Input() isOrange: boolean = false;
  @Input() isGreen: boolean = false;
  @Input() isPlum: boolean = false;
  @Input() isBlue: boolean = false;
  @Input() isLightBlue: boolean = false;
  @Input() isWhite: boolean = false;
  @Input() isOchre: boolean = false;
  @Input() isBlack: boolean = false;
  @Input() isPink: boolean = false;
  @Output() removeTag = new EventEmitter<Event>();

  constructor() { }

  public onRemove(e: Event) {
    e.stopPropagation();
    this.removeTag.emit(e);
  }
}
