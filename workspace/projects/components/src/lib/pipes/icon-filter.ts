import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'iconFilter' })
export class IconFilterPipe implements PipeTransform {
  transform(items: any[], searchIcon: string): any[] {
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
}
