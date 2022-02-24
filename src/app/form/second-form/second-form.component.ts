import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss'],
})
export class SecondFormComponent implements OnInit {
  secondForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    id: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender: new FormControl('male'),
    branch: new FormControl('Please Select One', Validators.required),
    description: new FormControl(null, [Validators.required]),
    mishap: new FormControl(false),
    mishapDescription: new FormControl(null),
  });
  constructor(public http: HttpClient) {}

  ngOnInit(): void {}

  onFetchData() {
    console.log(localStorage.getItem('id'));

    const key = JSON.parse(localStorage.getItem('id')!);
    console.log(key.name);
    this.http
      .get(
        `https://angular-digital-form-default-rtdb.firebaseio.com/data/${key.name}.json`
      )
      .subscribe((data) => {
        console.log(data);
        // const userData = JSON.parse(data);
        // console.log(userData);
      });
  }
  onSubmit() {
    this.http
      .post(
        `https://angular-digital-form-default-rtdb.firebaseio.com/data.json`,
        this.secondForm.value
      )
      .subscribe((responseData) => {
        const jsonData = JSON.stringify(responseData);
        localStorage.setItem('id', jsonData);
        console.log(jsonData);
      });
    // this.doccumentForm.reset();
  }
}
