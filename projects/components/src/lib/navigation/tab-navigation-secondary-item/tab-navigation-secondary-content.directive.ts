import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[aaTabNavigationSecondaryContent]'
})
export class TabNavigationSecondaryContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
