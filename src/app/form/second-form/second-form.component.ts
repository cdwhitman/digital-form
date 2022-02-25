import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Data } from '../../data.model';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss'],
})
export class SecondFormComponent implements OnInit {
  secondForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    id: new FormControl(null, Validators.required),
    description: new FormControl(null, [Validators.required]),
  });

  constructor(public http: HttpClient) {}

  ngOnInit(): void {}

  onFetchData() {
    const key = JSON.parse(localStorage.getItem('id')!);
    this.http
      .get<Data>(
        `https://angular-digital-form-default-rtdb.firebaseio.com/data/${key.name}.json`
      )
      .subscribe((data) => {
        return data;
        // console.log(data.branch);
      });
  }
  onSubmit() {
    const key = JSON.parse(localStorage.getItem('id')!);
    this.http
      .post(
        `https://angular-digital-form-default-rtdb.firebaseio.com/data/${key.name}.json`,
        this.secondForm.value
      )
      .subscribe((responseData) => {
        const formData = responseData;
        console.log(formData);
        return formData;
      });
  }
  // this.doccumentForm.reset();
}
