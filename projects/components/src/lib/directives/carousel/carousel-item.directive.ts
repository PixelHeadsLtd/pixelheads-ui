import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[phCarouselItem]'
})
export class CarouselItemDirective {

  constructor( public tpl: TemplateRef<any> ) {}

}
