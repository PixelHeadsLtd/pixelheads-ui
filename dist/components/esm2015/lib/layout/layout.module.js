import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BladeComponent } from './blade/blade.component';
import { BladeFooterComponent } from './blade-footer/blade-footer.component';
import { BladeBottomComponent } from './blade-bottom/blade-bottom.component';
import { BladeTopComponent } from './blade-top/blade-top.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectTourComponent } from './project-tour/project-tour.component';
import { UiBlockComponent } from './ui-block/ui-block.component';
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
                    UiBlockComponent
                ],
                imports: [CommonModule, RouterModule],
                exports: [
                    BladeComponent,
                    FooterComponent,
                    BladeFooterComponent,
                    BladeBottomComponent,
                    BladeTopComponent,
                    ProjectTourComponent,
                    UiBlockComponent
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQXNCakUsTUFBTSxPQUFPLFlBQVk7OztZQXJCeEIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixjQUFjO29CQUNkLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixnQkFBZ0I7aUJBQ2pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCbGFkZUNvbXBvbmVudCB9IGZyb20gJy4vYmxhZGUvYmxhZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmxhZGVGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2JsYWRlLWZvb3Rlci9ibGFkZS1mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmxhZGVCb3R0b21Db21wb25lbnQgfSBmcm9tICcuL2JsYWRlLWJvdHRvbS9ibGFkZS1ib3R0b20uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmxhZGVUb3BDb21wb25lbnQgfSBmcm9tICcuL2JsYWRlLXRvcC9ibGFkZS10b3AuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2plY3RUb3VyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9qZWN0LXRvdXIvcHJvamVjdC10b3VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVpQmxvY2tDb21wb25lbnQgfSBmcm9tICcuL3VpLWJsb2NrL3VpLWJsb2NrLmNvbXBvbmVudCc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCbGFkZUNvbXBvbmVudCxcclxuICAgIEZvb3RlckNvbXBvbmVudCxcclxuICAgIEJsYWRlRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQmxhZGVCb3R0b21Db21wb25lbnQsXHJcbiAgICBCbGFkZVRvcENvbXBvbmVudCxcclxuICAgIFByb2plY3RUb3VyQ29tcG9uZW50LFxyXG4gICAgVWlCbG9ja0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBCbGFkZUNvbXBvbmVudCxcclxuICAgIEZvb3RlckNvbXBvbmVudCxcclxuICAgIEJsYWRlRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQmxhZGVCb3R0b21Db21wb25lbnQsXHJcbiAgICBCbGFkZVRvcENvbXBvbmVudCxcclxuICAgIFByb2plY3RUb3VyQ29tcG9uZW50LFxyXG4gICAgVWlCbG9ja0NvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge31cclxuIl19