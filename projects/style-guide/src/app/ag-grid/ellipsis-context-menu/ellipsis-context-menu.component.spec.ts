import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipsisContextMenuComponent } from './ellipsis-context-menu.component';

describe('EllipsisContextMenuComponent', () => {
  let component: EllipsisContextMenuComponent;
  let fixture: ComponentFixture<EllipsisContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EllipsisContextMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EllipsisContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
