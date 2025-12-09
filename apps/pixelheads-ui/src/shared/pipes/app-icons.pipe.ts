import { Pipe, PipeTransform } from '@angular/core';
import { AppIconsData } from '../../class/app-icons-data';

@Pipe({ name: 'filterCoreApps' })
export class AppIconsPipe implements PipeTransform {
  transform(items: AppIconsData[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    return items.filter(it => {
      return it.coreAppName.toLocaleLowerCase().includes(searchText);
    });
  }
}
