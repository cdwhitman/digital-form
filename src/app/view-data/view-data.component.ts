import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/api.service';
import { Data } from '../data.model';
import { catchError } from 'rxjs';
import { Subject, throwError } from 'rxjs';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss'],
})
export class ViewDataComponent implements OnInit {
  users: Data[] = [];
  isFetching = false;
  error = null;
  searchText: string = '';
  branchSelect: string = '';

  constructor(private apiService: apiService) {}

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.isFetching = true;
    this.apiService.fetchAll().subscribe(
      (data) => {
        this.isFetching = false;
        this.users = data;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }
}
