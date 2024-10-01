import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlSearchComponent } from './dl-search.component';

describe('DlSearchComponent', () => {
  let component: DlSearchComponent;
  let fixture: ComponentFixture<DlSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DlSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
