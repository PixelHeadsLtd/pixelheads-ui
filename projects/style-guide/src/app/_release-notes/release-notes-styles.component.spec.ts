import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseNotesStylesComponent } from './release-notes-styles.component';

describe('ReleaseNotesStylesComponent', () => {
  let component: ReleaseNotesStylesComponent;
  let fixture: ComponentFixture<ReleaseNotesStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseNotesStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseNotesStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
