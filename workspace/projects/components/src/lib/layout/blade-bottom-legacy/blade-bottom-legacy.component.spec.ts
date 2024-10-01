import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BladeBottomLegacyComponent } from './blade-bottom-legacy.component';

describe('BladeBottomLegacyComponent', () => {
  let component: BladeBottomLegacyComponent;
  let fixture: ComponentFixture<BladeBottomLegacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BladeBottomLegacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BladeBottomLegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
