import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlHeaderComponent } from './dl-header.component';

describe('DlHeaderComponent', () => {
  let component: DlHeaderComponent;
  let fixture: ComponentFixture<DlHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
