import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CommentsComponent } from './comments/comments.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { DateFormatPipe } from '../pipes/date-pipe';
import { FieldComponent } from './field/field.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SliderComponent } from './slider/slider.component';
export class ElementsModule {
}
ElementsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ButtonComponent,
                    CheckboxComponent,
                    CommentsComponent,
                    CustomSelectComponent,
                    DateFormatPipe,
                    FieldComponent,
                    InputTextComponent,
                    FileUploadComponent,
                    SliderComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                exports: [
                    ButtonComponent,
                    CheckboxComponent,
                    CommentsComponent,
                    CustomSelectComponent,
                    FieldComponent,
                    InputTextComponent,
                    FileUploadComponent,
                    SliderComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2VsZW1lbnRzL2VsZW1lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBK0I1RCxNQUFNLE9BQU8sY0FBYzs7O1lBNUIxQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsY0FBYztvQkFDZCxjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixlQUFlO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsZUFBZTtpQkFDaEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDdXN0b21TZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbS1zZWxlY3QvY3VzdG9tLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0UGlwZSB9IGZyb20gJy4uL3BpcGVzL2RhdGUtcGlwZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LXRleHQvaW5wdXQtdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci9zbGlkZXIuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICBDb21tZW50c0NvbXBvbmVudCxcclxuICAgIEN1c3RvbVNlbGVjdENvbXBvbmVudCxcclxuICAgIERhdGVGb3JtYXRQaXBlLFxyXG4gICAgRmllbGRDb21wb25lbnQsXHJcbiAgICBJbnB1dFRleHRDb21wb25lbnQsXHJcbiAgICBGaWxlVXBsb2FkQ29tcG9uZW50LFxyXG4gICAgU2xpZGVyQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIENoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgQ29tbWVudHNDb21wb25lbnQsXHJcbiAgICBDdXN0b21TZWxlY3RDb21wb25lbnQsXHJcbiAgICBGaWVsZENvbXBvbmVudCxcclxuICAgIElucHV0VGV4dENvbXBvbmVudCxcclxuICAgIEZpbGVVcGxvYWRDb21wb25lbnQsXHJcbiAgICBTbGlkZXJDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbGVtZW50c01vZHVsZSB7IH1cclxuIl19