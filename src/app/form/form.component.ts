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
  genders = ['Male', 'Female'];
  doccumentForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    dodId: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender: new FormControl('Male'),
    branch: new FormControl(null, Validators.required),
    active: new FormControl(true, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    mishap: new FormControl(false),
    mishapDescription: new FormControl(null),
  });
  formSubmitted: boolean = false;

  constructor(private apiService: apiService) {}

  ngOnInit() {}

  onSubmit() {
    this.formSubmitted = true;
    const newData: Data = {
      name: this.doccumentForm.value.name,
      dodId: this.doccumentForm.value.dodId,
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
    this.doccumentForm.reset();
  }
}
