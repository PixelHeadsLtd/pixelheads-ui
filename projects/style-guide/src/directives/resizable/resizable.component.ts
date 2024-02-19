import { Component, ElementRef, HostBinding } from "@angular/core";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "th[resizable]",
  templateUrl: "./resizable.component.html",
  styleUrls: ["./resizable.component.scss"],
})
export class ResizableComponent {
  @HostBinding("style.width.px")
  width: number | null | undefined = null;

  onResize(width: number | undefined) {
    this.width = width;
  }
}
