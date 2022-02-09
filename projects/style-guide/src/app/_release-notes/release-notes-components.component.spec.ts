import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseNotesComponentsComponent } from './release-notes-components.component';

describe('ReleaseNotesComponentsComponent', () => {
  let component: ReleaseNotesComponentsComponent;
  let fixture: ComponentFixture<ReleaseNotesComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseNotesComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseNotesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
