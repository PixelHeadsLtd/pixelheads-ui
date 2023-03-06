import { Injectable, Pipe, PipeTransform } from '@angular/core';
@Injectable()
@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any, field: string): any[] {
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
// TODO
// This pipe is currently used for the favourites component
// As it stands, the sorting only works on page refresh
// Will need to find a way to fix this so that sorting
// occurs when adding items with the onFavClick() method
