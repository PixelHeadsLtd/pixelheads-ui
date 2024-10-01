import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlLeftNavComponent } from './dl-left-nav.component';

describe('DlLeftNavComponent', () => {
  let component: DlLeftNavComponent;
  let fixture: ComponentFixture<DlLeftNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlLeftNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DlLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
