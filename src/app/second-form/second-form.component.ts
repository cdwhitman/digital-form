import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { apiService } from 'src/app/shared/api.service';
import { Data } from '../data.model';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss'],
})
export class SecondFormComponent implements OnInit {
  secondForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    dodId: new FormControl(null, Validators.required),
    satisfaction: new FormControl(null),
    unit: new FormControl(null, Validators.required),
    country: new FormControl(null, Validators.required),
  });
  data: Data = {};
  formSubmitted: boolean = false;
  error = null;

  constructor(private apiService: apiService) {}

  ngOnInit() {
    this.apiService.fetchUserData().subscribe((data) => (this.data = data));
  }

  setData() {
    this.secondForm.setValue({
      name: this.data.name,
      dodId: this.data.dodId,
      satisfaction: 5,
      unit: '',
      country: '',
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    const newData: Data = {
      name: this.secondForm.value.name,
      dodId: this.secondForm.value.dodId,
      satisfaction: this.secondForm.value.satisfaction,
      unit: this.secondForm.value.unit,
      country: this.secondForm.value.country,
    };
    this.apiService.patchSecondForm(newData).subscribe(
      (responseData) => {
        console.log(responseData);
      },
      (error) => {
        this.error = error.message;
      }
    );
    this.secondForm.reset();
    localStorage.clear();
  }
}
