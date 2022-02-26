import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/api.service';
import { Data } from '../data.model';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss'],
})
export class ViewDataComponent implements OnInit {
  users: Data[] = [];
  isFetching = false;
  searchText: string = '';
  branchSelect: string = '';

  constructor(private apiService: apiService) {}

  ngOnInit() {
    this.isFetching = true;
    this.apiService.fetchAll().subscribe((data) => {
      this.isFetching = false;
      this.users = data;
    });
  }
}
