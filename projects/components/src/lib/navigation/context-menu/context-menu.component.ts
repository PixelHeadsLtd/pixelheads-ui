import { ChangeDetectionStrategy, Component, Input, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'ph-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent {

  @Input() absolutePosition: boolean = false;
  @Input() leftPos: any;
  @Input() topPos: any;
  @Input() rightPos: any;
  @Input() zIndex: number = 0;
  @Input() minWidth: any;
  @Input() showOnLeft: boolean = false;
  showContextMenu: boolean = false; // now exposed as api and not property - more flexible

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement:any) {
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

}
