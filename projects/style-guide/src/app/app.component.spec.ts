import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DateFormatPipe } from '../pipes/date-pipe';
import { AppIconsPipe } from '../pipes/app-icons.pipe';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, DateFormatPipe, AppIconsPipe],
      imports: [
        RouterTestingModule.withRoutes([{ path: '', component: LandingPageComponent }]),
        FormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'style-guide'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('style-guide');
  });

  it('should render title in a h1 tag', fakeAsync(() => {
    router.navigate(['']);
    tick();
    const html = fixture.nativeElement as HTMLElement;
    expect(html.querySelector('h1')?.textContent).toContain('Welcome to Design Language');
  }));
});
