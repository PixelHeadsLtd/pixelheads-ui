import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTourComponent } from './project-tour.component';

describe('ProjectTourComponent', () => {
  let component: ProjectTourComponent;
  let fixture: ComponentFixture<ProjectTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
