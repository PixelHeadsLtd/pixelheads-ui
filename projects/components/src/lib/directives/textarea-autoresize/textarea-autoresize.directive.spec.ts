import { ElementRef } from '@angular/core';
import { TextareaAutoresizeDirective } from './textarea-autoresize.directive';

describe('TextareaAutoresizeDirective', () => {
  it('should create an instance', () => {
	const div  = document.createElement('div');
    const directive = new TextareaAutoresizeDirective(new ElementRef(div));
    expect(directive).toBeTruthy();
  });
});
