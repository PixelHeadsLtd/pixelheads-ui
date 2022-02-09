import { ChangeDetectionStrategy, Component, Input, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'aa-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent implements OnInit {

  @Input() absolutePosition: boolean;
  @Input() leftPos: number;
  @Input() topPos: number;
  @Input() rightPos: number;
  @Input() zIndex: number;
  @Input() minWidth: number;
  @Input() showOnLeft: boolean;
  showContextMenu: boolean; // now exposed as api and not property - more flexible

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
        this.showContextMenu = false;
    }
  }

  public open() {
    this.showContextMenu = true;
  }

  public close() {
    this.showContextMenu = false;
  }

  ngOnInit() {
  }

}
