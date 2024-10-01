import { ElementRef } from '@angular/core';
import { ClickOutsideDirective } from './click-outside.directive';

describe('ClickOutsideDirective', () => {
	it('should create an instance', () => {
		const div  = document.createElement('div');
		const directive = new ClickOutsideDirective(new ElementRef(div));
		expect(directive).toBeTruthy();
	  });
});
