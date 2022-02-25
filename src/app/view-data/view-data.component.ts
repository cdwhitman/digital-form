import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/api.service';
import { Data } from '../data.model';
// import { Subscription } from 'rxjs'

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss'],
})
export class ViewDataComponent implements OnInit {
  users: Data[] = [];
  constructor(private apiService: apiService) {}

  ngOnInit() {
    this.apiService.fetchAll().subscribe((data) => {
      // this.isFetching = false;
      this.users = data;
      console.log(data[0].message);
    });
  }
}
