import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(users: any[], searchText: string, name: string): any[] {
    if (!users) return [];
    if (!searchText) return users;

    searchText = searchText.toLowerCase();

    return users.filter((user) => {
      if (user && user[name]) {
        return user[name].toLowerCase().includes(searchText);
      }
      return false;
    });
  }
}
