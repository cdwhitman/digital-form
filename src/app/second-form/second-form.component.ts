import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { apiService } from 'src/app/shared/api.service';
// import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Data } from '../data.model';

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
  data: Data = {};

  constructor(private apiService: apiService) {}

  ngOnInit() {
    this.apiService.fetchUserData().subscribe((data) => (this.data = data));
    console.log(this.data.branch);
  }

  setData() {
    this.secondForm.setValue({
      name: this.data.name,
      id: this.data.id,
      description: '',
    });
  }

  onSubmit() {
    const newData: Data = {
      name: this.secondForm.value.name,
      id: this.secondForm.value.id,
      description: this.secondForm.value.description,
    };
    this.apiService.postSecondForm(newData).subscribe((responseData) => {
      console.log(responseData);
    });
  }
  // const key = JSON.parse(localStorage.getItem('id')!);
  // this.http
  //   .get<Data>(
  //     `https://angular-digital-form-default-rtdb.firebaseio.com/data/${key.name}.json`
  //   )
  //   .subscribe((data) => {
  //     return data;
  //     // console.log(data.branch);
  //   });

  // onSubmit() {
  //   const key = JSON.parse(localStorage.getItem('id')!);
  //   this.http
  //     .post(
  //       `https://angular-digital-form-default-rtdb.firebaseio.com/data/${key.name}.json`,
  //       this.secondForm.value
  //     )
  //     .subscribe((responseData) => {
  //       const formData = responseData;
  //       console.log(formData);
  //       return formData;
  //     });
  // }
  // this.doccumentForm.reset();
}
