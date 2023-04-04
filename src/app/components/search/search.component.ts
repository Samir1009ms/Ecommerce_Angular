import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() items: IProduct[] = [];
  search: string = '';
  searchValues: IProduct[] = [];

  onSearch() {
    const search = this.items.filter(item => {
      const values = item.name
        .toLowerCase()
        .trim()
        .replace(/\s/g, '')
        .includes(this.search.toLowerCase().trim().replace(/\s/g, ''));

      return values;
    });

    if (this.searchValues.length !== -1) {
      if (this.search.trim() === '') {
        this.searchValues = [];
        console.log('searchvaluesTrue', this.searchValues);
      } else {
        this.searchValues = search;
      }
    }
    console.log('searchvaluesfalse', this.searchValues);
    console.log('search', this.search);
    console.log('searchvalues', search);
  }
}
