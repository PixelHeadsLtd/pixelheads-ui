import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BladeComponent } from './blade.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BladeComponent', () => {
  let component: BladeComponent;
  let fixture: ComponentFixture<BladeComponent>;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BladeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the blade component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default @Input() values', () => {
    expect(component.pinBlade).toBeFalse();
    expect(component.topPosition).toBeUndefined();
    expect(component.zIndex).toBe(0);
    expect(component.suppressAutoClose).toBeFalse();
    expect(component.customBlade).toBeFalse();
    expect(component.enableIcon).toBeFalse();
    expect(component.iconName).toBe('');
    expect(component.bladeTabs).toBeFalse();
    expect(component.customBladeTabs).toBeFalse();
    expect(component.headingMaxWidth).toBeUndefined();
    expect(component.blockPageUI).toBeFalse();
    expect(component.showBladeModal).toBeFalse();
    expect(component.bladeSize).toBe('');
    expect(component.bladeHeading).toBe('');
    expect(component.enablePinning).toBeFalse();
    expect(component.toggleBlade).toBeFalse();
    expect(component.isPinned).toBeFalse();
  });

  it('should emit bladeOpen event when onClose() is called', () => {
    spyOn(component.bladeOpen, 'emit');

    component.onClose();

    expect(component.bladeOpen.emit).toHaveBeenCalledWith(false);
  });

  it('should emit bladePinned event when toggleThePin() is called', () => {
    spyOn(component.bladePinned, 'emit');

    component.toggleThePin(new Event('click'));

    expect(component.bladePinned.emit).toHaveBeenCalledWith(true);
  });

  it('should call onClose when Close button is clicked', () => {
    spyOn(component, 'onClose');
    
    const closeButton = debugElement.query(By.css('.anchor-close')).nativeElement;
    closeButton.click();
    
    expect(component.onClose).toHaveBeenCalled();
  });

  it('should call toggleThePin when pin icon is clicked', () => {
    component.enablePinning = true;
    fixture.detectChanges();

    spyOn(component, 'toggleThePin');

    const pinButton = debugElement.query(By.css('.pin')).nativeElement;
    pinButton.click();

    expect(component.toggleThePin).toHaveBeenCalled();
  });

  it('should display the blade when toggleBlade is true', () => {
    component.toggleBlade = true;
    fixture.detectChanges();

    const blade = debugElement.query(By.css('#ph-blade'));
    expect(blade).toBeTruthy();
  });

  it('should display the modal when showBladeModal is true', () => {
    component.showBladeModal = true;
    fixture.detectChanges();

    const modal = debugElement.query(By.css('.blade-modal'));
    expect(modal).toBeTruthy();
  });

  it('should emit bladePinned and bladeOpen on ngOnInit', () => {
    spyOn(component.bladePinned, 'emit');
    spyOn(component.bladeOpen, 'emit');

    component.ngOnInit();

    expect(component.bladePinned.emit).toHaveBeenCalledWith(false);
    expect(component.bladeOpen.emit).toHaveBeenCalledWith(false);
  });
});
