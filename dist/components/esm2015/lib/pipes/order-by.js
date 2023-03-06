import { Injectable, Pipe } from '@angular/core';
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
}
OrderByPipe.decorators = [
    { type: Injectable },
    { type: Pipe, args: [{
                name: 'orderBy'
            },] }
];
// TODO
// This pipe is currently used for the favourites component
// As it stands, the sorting only works on page refresh
// Will need to find a way to fix this so that sorting
// occurs when adding items with the onFavClick() method
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItYnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcGlwZXMvb3JkZXItYnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS2hFLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsS0FBYTtRQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNYO2lCQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDOUIsT0FBTyxDQUFDLENBQUM7YUFDVjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsQ0FBQzthQUNWO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQWhCRixVQUFVO1lBQ1YsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxTQUFTO2FBQ2hCOztBQWVELE9BQU87QUFDUCwyREFBMkQ7QUFDM0QsdURBQXVEO0FBQ3ZELHNEQUFzRDtBQUN0RCx3REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBJbmplY3RhYmxlKClcclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdvcmRlckJ5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oYXJyYXk6IGFueSwgZmllbGQ6IHN0cmluZyk6IGFueVtdIHtcclxuICAgIGFycmF5LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgIGlmIChhW2ZpZWxkXSA8IGJbZmllbGRdKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICB9IGVsc2UgaWYgKGFbZmllbGRdID4gYltmaWVsZF0pIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG59XHJcbi8vIFRPRE9cclxuLy8gVGhpcyBwaXBlIGlzIGN1cnJlbnRseSB1c2VkIGZvciB0aGUgZmF2b3VyaXRlcyBjb21wb25lbnRcclxuLy8gQXMgaXQgc3RhbmRzLCB0aGUgc29ydGluZyBvbmx5IHdvcmtzIG9uIHBhZ2UgcmVmcmVzaFxyXG4vLyBXaWxsIG5lZWQgdG8gZmluZCBhIHdheSB0byBmaXggdGhpcyBzbyB0aGF0IHNvcnRpbmdcclxuLy8gb2NjdXJzIHdoZW4gYWRkaW5nIGl0ZW1zIHdpdGggdGhlIG9uRmF2Q2xpY2soKSBtZXRob2RcclxuIl19