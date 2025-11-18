import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[phTabNavigationHeaderContent]'
})
export class TabNavigationHeaderContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
