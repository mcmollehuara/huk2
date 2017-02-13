import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(data => {
        if (data.name) {
          return data.name.search(searchText) !== -1 ||
            data.tags.search( searchText) !== -1;
        } else {
          if (data.text) {
            return data.text.search(searchText) !== -1;
          }
        }
      });
    }
  }
}
