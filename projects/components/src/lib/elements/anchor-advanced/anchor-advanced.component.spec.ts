import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorAdvancedComponent } from './anchor-advanced.component';

describe('AnchorAdvancedComponent', () => {
  let component: AnchorAdvancedComponent;
  let fixture: ComponentFixture<AnchorAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorAdvancedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnchorAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
