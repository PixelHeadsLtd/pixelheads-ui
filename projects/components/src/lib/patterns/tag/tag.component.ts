import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {

  @Input() isShaped: boolean;
  @Input() tagText: boolean;
  @Input() isRed: boolean;
  @Input() isOrange: boolean;
  @Input() isGreen: boolean;
  @Input() isPlum: boolean;
  @Input() isBlue: boolean;
  @Input() isLightBlue: boolean;
  @Input() isWhite: boolean;
  @Input() isOchre: boolean;
  @Input() isBlack: boolean;
  @Input() isPink: boolean;
  @Output() removeTag = new EventEmitter<Event>();

  constructor() { }

  public onRemove(e: Event) {
    e.stopPropagation();
    this.removeTag.emit(e);
  }

  ngOnInit(): void {
  }

}
