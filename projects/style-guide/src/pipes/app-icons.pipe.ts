import { Pipe, PipeTransform } from '@angular/core';
import { AppIconsData } from '../app/class/app-icons-data';

@Pipe({ name: 'appIcons' })
export class AppIconsPipe implements PipeTransform {
  transform(items: AppIconsData[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    return items.filter(it => {
      return it.appIconName.toLocaleLowerCase().includes(searchText);
    });
  }
}
