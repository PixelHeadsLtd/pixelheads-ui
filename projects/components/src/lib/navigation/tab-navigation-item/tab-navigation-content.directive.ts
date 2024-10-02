import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[aaTabNavigationContent]'
})
export class TabNavigationContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
