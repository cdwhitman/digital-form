import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  genders = ['male', 'female'];
  doccumentForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    id: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender: new FormControl('male'),
    branch: new FormControl('Please Select One', Validators.required),
    description: new FormControl(null, [Validators.required]),
    mishap: new FormControl(false),
    mishapDescription: new FormControl(null),
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    this.http
      .post(
        `https://angular-digital-form-default-rtdb.firebaseio.com/data.json`,
        this.doccumentForm.value
      )
      .subscribe((responseData) => {
        const jsonData = JSON.stringify(responseData);
        localStorage.setItem('id', jsonData);
        console.log(jsonData);
      });
    // this.doccumentForm.reset();
  }
}
