import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  locations: string[] = ['Downtown', 'S. County', 'Lakeside'];
  volunteerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.volunteerForm = this.fb.group({
      name: 'Name here',
      phoneNumber: '',
      perferredLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false,
      }),
      references: this.fb.array([this.fb.control('')]),
    });
  }

  selectLocation(event): void {
    this.volunteerForm.patchValue({
      perferredLocation: event.target.value,
    });
  }

  onSubmit(): void {
    console.log(this.volunteerForm);
  }

  addEmail(): void {
    this.references.push(this.fb.control(''));
  }

  removeEmail(index: number): void {
    this.references.removeAt(index);
  }

  get references(): FormArray {
    return this.volunteerForm.get('references') as FormArray;
  }
}
