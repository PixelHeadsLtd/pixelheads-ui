import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class IconFilterPipe {
    transform(items, searchIcon) {
        if (!items) {
            return [];
        }
        if (!searchIcon) {
            return items;
        }
        return items.filter(it => {
            return it.toLocaleLowerCase().includes(searchIcon);
        });
    }
    static { this.ɵfac = function IconFilterPipe_Factory(t) { return new (t || IconFilterPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "iconFilter", type: IconFilterPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconFilterPipe, [{
        type: Pipe,
        args: [{ name: 'iconFilter' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1maWx0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcGlwZXMvaWNvbi1maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3BELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxLQUFZLEVBQUUsVUFBa0I7UUFDeEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN2QixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7K0VBWlUsY0FBYztvRkFBZCxjQUFjOztpRkFBZCxjQUFjO2NBRDFCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdpY29uRmlsdGVyJyB9KVxyXG5leHBvcnQgY2xhc3MgSWNvbkZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBzZWFyY2hJY29uOiBzdHJpbmcpOiBhbnlbXSB7XHJcbiAgICBpZiAoIWl0ZW1zKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGlmICghc2VhcmNoSWNvbikge1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdCA9PiB7XHJcbiAgICAgIHJldHVybiBpdC50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaEljb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==