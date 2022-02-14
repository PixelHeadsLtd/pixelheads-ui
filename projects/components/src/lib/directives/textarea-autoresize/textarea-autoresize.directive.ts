import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[aaTextareaAutoresize]'
})
export class TextareaAutoresizeDirective implements OnInit, OnDestroy {
  private formControlSubscription: Subscription;

  @Input('aaTextareaAutoresize') set formControlInstance(control: AbstractControl) {
    this.cleanControlSubscription();

    setTimeout(() => this.resize());
    this.formControlSubscription = control.valueChanges.subscribe(() => {
      this.resize();
    });
  }

  constructor(private elementRef: ElementRef) {}

  @HostListener(':input')
  onInput() {
    const isResizedThroughFormControl = !!this.formControlSubscription;
    if (!isResizedThroughFormControl) {
      this.resize();
    }
  }

  ngOnInit() {
    if (this.elementRef.nativeElement.scrollHeight) {
      setTimeout(() => this.resize());
    }
  }

  ngOnDestroy(): void {
    this.cleanControlSubscription();
  }

  private cleanControlSubscription(): void {
    if (this.formControlSubscription) {
      this.formControlSubscription.unsubscribe();
    }
  }

  private resize() {
    this.elementRef.nativeElement.style.height = '0';
    this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
  }
}
