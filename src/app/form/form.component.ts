import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { apiService } from '../shared/api.service';
import { Data } from '../data.model';

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
    active: new FormControl(true, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    mishap: new FormControl(false),
    mishapDescription: new FormControl(null),
  });
  formSubmitted: boolean = false;

  constructor(private apiService: apiService) {}

  ngOnInit() {}

  onSubmit() {
    const newData: Data = {
      name: this.doccumentForm.value.name,
      id: this.doccumentForm.value.id,
      email: this.doccumentForm.value.email,
      gender: this.doccumentForm.value.gender,
      branch: this.doccumentForm.value.branch,
      active: this.doccumentForm.value.active,
      description: this.doccumentForm.value.description,
      mishap: this.doccumentForm.value.mishap,
      mishapDescription: this.doccumentForm.value.mishapDescription,
    };

    this.apiService.postFormData(newData).subscribe((responseData) => {
      const jsonData = JSON.stringify(responseData);
      localStorage.setItem('id', jsonData);
      console.log(jsonData);
    });
  }
  // this.doccumentForm
  // this.http
  //   .post(
  //     `https://angular-digital-form-default-rtdb.firebaseio.com/data.json`,
  //     this.doccumentForm.value
  //   )
  //   .subscribe((responseData) => {
  //     const jsonData = JSON.stringify(responseData);
  //     localStorage.setItem('id', jsonData);
  //     console.log(jsonData);
  //   });
  // this.doccumentForm.reset();
}
