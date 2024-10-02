import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[aaTabNavigationHeaderContent]'
})
export class TabNavigationHeaderContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
