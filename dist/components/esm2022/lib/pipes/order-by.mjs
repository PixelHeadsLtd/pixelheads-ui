import { Injectable, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class OrderByPipe {
    transform(array, field) {
        array.sort((a, b) => {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    }
    static { this.ɵfac = function OrderByPipe_Factory(t) { return new (t || OrderByPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "orderBy", type: OrderByPipe, pure: true }); }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OrderByPipe, factory: OrderByPipe.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderByPipe, [{
        type: Injectable
    }, {
        type: Pipe,
        args: [{
                name: 'orderBy'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItYnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcGlwZXMvb3JkZXItYnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQU1oRSxNQUFNLE9BQU8sV0FBVztJQUN0QixTQUFTLENBQUMsS0FBVSxFQUFFLEtBQWE7UUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDWDtpQkFBTSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLENBQUM7YUFDVjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzRFQVpVLFdBQVc7aUZBQVgsV0FBVzt1RUFBWCxXQUFXLFdBQVgsV0FBVzs7aUZBQVgsV0FBVztjQUp2QixVQUFVOztjQUNWLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsU0FBUzthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdvcmRlckJ5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oYXJyYXk6IGFueSwgZmllbGQ6IHN0cmluZyk6IGFueVtdIHtcclxuICAgIGFycmF5LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgIGlmIChhW2ZpZWxkXSA8IGJbZmllbGRdKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICB9IGVsc2UgaWYgKGFbZmllbGRdID4gYltmaWVsZF0pIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG59XHJcbi8vIFRPRE9cclxuLy8gVGhpcyBwaXBlIGlzIGN1cnJlbnRseSB1c2VkIGZvciB0aGUgZmF2b3VyaXRlcyBjb21wb25lbnRcclxuLy8gQXMgaXQgc3RhbmRzLCB0aGUgc29ydGluZyBvbmx5IHdvcmtzIG9uIHBhZ2UgcmVmcmVzaFxyXG4vLyBXaWxsIG5lZWQgdG8gZmluZCBhIHdheSB0byBmaXggdGhpcyBzbyB0aGF0IHNvcnRpbmdcclxuLy8gb2NjdXJzIHdoZW4gYWRkaW5nIGl0ZW1zIHdpdGggdGhlIG9uRmF2Q2xpY2soKSBtZXRob2RcclxuIl19