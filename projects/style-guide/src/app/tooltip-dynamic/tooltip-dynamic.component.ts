import { TooltipDynamicPosition } from '@angloamerican/components';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip-dynamic.component.html',
  styleUrls: ['./tooltip-dynamic.component.scss']
})
export class TooltipDynamicComponent {
  TooltipDynamicPosition = TooltipDynamicPosition;
  showDefault: boolean = false;
  showNested: boolean = false;
  toggleBlade: boolean = false;

  public onClick() { console.log('You clicked the button'); }

  constructor() {}

  // tooltips = [
  //   {
  //     tooltipTitle: 'Info',
  //     tooltipColor: 'ph-light-blue-100',
  //     tooltipIconName: 'info',
  //     tooltipPosition: TooltipDynamicPosition.ABOVE,
  //     tooltipContent: `<section>
  //                       <h3 class='ph-light-blue-100'>Info</h3>
  //                       <p>This is a tooltip to display general information</p>
  //                     </section>`
  //   },
  //   {
  //     tooltipTitle: 'Error',
  //     tooltipColor: 'ph-red-100',
  //     tooltipIconName: 'error_outline',
  //     tooltipPosition: TooltipDynamicPosition.RIGHT,
  //     tooltipContent: `<section>
  //                       <h3 class='ph-red-100'>Error</h3>
  //                       <p>This is a tooltip to display an error</p>
  //                     </section>`
  //   },
  //   {
  //     tooltipTitle: 'Pending',
  //     tooltipColor: 'ph-orange-100',
  //     tooltipIconName: 'pending',
  //     tooltipPosition: TooltipDynamicPosition.BELOW,
  //     tooltipContent: `<section>
  //                       <h3 class='ph-orange-100'>Pending</h3>
  //                       <p>This is a tooltip to display pending or in-progress status</p>
  //                     </section>`
  //   },
  //   {
  //     tooltipTitle: 'Complete',
  //     tooltipColor: 'ph-green-100',
  //     tooltipIconName: 'check_circle',
  //     tooltipPosition: TooltipDynamicPosition.LEFT,
  //     tooltipContent: `<section>
  //                       <h3 class='ph-green-100'>Complete</h3>
  //                       <p>This is a tooltip to display completed or success status</p>
  //                     </section>`
  //   }
  // ];

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
