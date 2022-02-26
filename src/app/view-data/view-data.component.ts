import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/api.service';
import { Data } from '../data.model';
import { SearchFilterPipe } from '../search-filter.pipe';
// import { Subscription } from 'rxjs'

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss'],
})
export class ViewDataComponent implements OnInit {
  users: Data[] = [];
  searchText: string = '';
  // filteredUsers: Data[] = this.users.filter(function (users) {
  //   return users.branch == 'Navy';
  // });
  constructor(private apiService: apiService) {}

  ngOnInit() {
    this.apiService.fetchAll().subscribe((data) => {
      // this.isFetching = false;
      this.users = data;
      console.log(data[0].message);
    });
  }
}
