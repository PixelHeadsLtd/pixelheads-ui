import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ph-ticker',
  templateUrl: './ticker.component.html',
  styleUrl: './ticker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TickerComponent {
  @Input() tickerSpeed: any;
  @Input() tickerWidth: any;
}
