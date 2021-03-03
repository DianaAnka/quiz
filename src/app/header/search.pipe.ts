import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(ids: string[], searchInput: string): any[] {
    if (!searchInput) {
      return [];
    }
    console.log(ids.filter((x) => x.startsWith(searchInput)));
    return ids.filter((x) => x.startsWith(searchInput));
  }
}
