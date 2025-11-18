import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[phTabNavigationSecondaryContent]'
})
export class TabNavigationSecondaryContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
