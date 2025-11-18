import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[phTabNavigationContent]'
})
export class TabNavigationContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
