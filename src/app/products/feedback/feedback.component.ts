import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  formData: any = {};

  contact: FormGroup;
  errors: any[] = [];
  notifyMassage = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contact = this.fb.group({
      type: [''],
      name: ['', [Validators.required,
        Validators.pattern('^([a-zA-Z]{2,}\\s[a-zA-z]{1,}\'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)')]],
      email: ['', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  isInvalidForm(fieldName): boolean {
    return this.contact.controls[fieldName].invalid &&
      (this.contact.controls[fieldName].dirty || this.contact.controls[fieldName].touched);
  }

  isRequired(fieldName): boolean {
    return this.contact.controls[fieldName].errors.required;
  }

  send() {
    console.log('success');
  }
}
