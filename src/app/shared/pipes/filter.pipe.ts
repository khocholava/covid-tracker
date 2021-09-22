import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[] | undefined, searchText: string, searchTerm: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it[searchTerm].toLowerCase().includes(searchText);
    });
  }

}
