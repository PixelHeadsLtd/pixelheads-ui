import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BladeComponent } from './blade/blade.component';
import { BladeFooterComponent } from './blade-footer/blade-footer.component';
import { BladeBottomComponent } from './blade-bottom/blade-bottom.component';
import { BladeTopComponent } from './blade-top/blade-top.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectTourComponent } from './project-tour/project-tour.component';
export class LayoutModule {
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BladeComponent,
                    FooterComponent,
                    BladeFooterComponent,
                    BladeBottomComponent,
                    BladeTopComponent,
                    ProjectTourComponent,
                ],
                imports: [CommonModule, RouterModule],
                exports: [
                    BladeComponent,
                    FooterComponent,
                    BladeFooterComponent,
                    BladeBottomComponent,
                    BladeTopComponent,
                    ProjectTourComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQW9CN0UsTUFBTSxPQUFPLFlBQVk7OztZQW5CeEIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixjQUFjO29CQUNkLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUNyQyxPQUFPLEVBQUU7b0JBQ1AsY0FBYztvQkFDZCxlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLG9CQUFvQjtpQkFDckI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJsYWRlQ29tcG9uZW50IH0gZnJvbSAnLi9ibGFkZS9ibGFkZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbGFkZUZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYmxhZGUtZm9vdGVyL2JsYWRlLWZvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbGFkZUJvdHRvbUNvbXBvbmVudCB9IGZyb20gJy4vYmxhZGUtYm90dG9tL2JsYWRlLWJvdHRvbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbGFkZVRvcENvbXBvbmVudCB9IGZyb20gJy4vYmxhZGUtdG9wL2JsYWRlLXRvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvamVjdFRvdXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2plY3QtdG91ci9wcm9qZWN0LXRvdXIuY29tcG9uZW50JztcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJsYWRlQ29tcG9uZW50LFxyXG4gICAgRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQmxhZGVGb290ZXJDb21wb25lbnQsXHJcbiAgICBCbGFkZUJvdHRvbUNvbXBvbmVudCxcclxuICAgIEJsYWRlVG9wQ29tcG9uZW50LFxyXG4gICAgUHJvamVjdFRvdXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJsYWRlQ29tcG9uZW50LFxyXG4gICAgRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQmxhZGVGb290ZXJDb21wb25lbnQsXHJcbiAgICBCbGFkZUJvdHRvbUNvbXBvbmVudCxcclxuICAgIEJsYWRlVG9wQ29tcG9uZW50LFxyXG4gICAgUHJvamVjdFRvdXJDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7fVxyXG4iXX0=