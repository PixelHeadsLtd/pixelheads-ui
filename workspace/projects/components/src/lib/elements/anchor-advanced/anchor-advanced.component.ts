import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'aa-anchor-advanced',
  templateUrl: './anchor-advanced.component.html',
  styleUrl: './anchor-advanced.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnchorAdvancedComponent {
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() icon: string = '';
  @Input() contentType: string = '';
  @Input() width: number = 0;
  @Input() anchorURL: string = '';
  @Input() routerLink: string = '';

  // colours
  @Input() blue: boolean = false;
  @Input() pink: boolean = false;
  @Input() orange: boolean = false;
  @Input() lime: boolean = false;
  @Input() green: boolean = false;
  @Input() yellow: boolean = false;
}
