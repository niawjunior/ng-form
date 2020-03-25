import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-nordics',
  templateUrl: './nordics.component.html',
  styleUrls: ['./nordics.component.css']
})
export class NordicsComponent implements OnInit {
  nordics: FormGroup;
  select_all_no: boolean = false;
  show_question: boolean = false;
  select_question = false;
  disable_submit_button: boolean = true;

  constructor(fBuilder: FormBuilder, private cdRef: ChangeDetectorRef) {
    this.nordics = fBuilder.group({
      policyholder: 'Yes',
      checkpoint: 'Yes',
      opt: false,
      captcha: false,
      company: fBuilder.group({
        company: ['', Validators.required],
        website: '',
        street: ['', Validators.required],
        zip: ['', Validators.required],
        city: ['', Validators.required],
        country: '',
        industry: ['', Validators.required],
        industry_details: '',
        email: ['', Validators.required],
        phone: ['', Validators.required]
      }),
      financial: fBuilder.group({
        turnover: '',
        number_of_employees: ''
      }),
      contact: fBuilder.group({
        email: '',
        phone: '',
        first_name: '',
        last_name: ''
      }),
      question: fBuilder.group({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: ''
      })
    });
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  onSubmit() {
    console.log(this.nordics.value);
  }
  ngOnInit() {
    this.nordics.valueChanges.subscribe(result => {
      if (result.policyholder !== result.checkpoint) {
        this.show_question = true;
        if (
          result.question.q1 &&
          result.question.q2 &&
          result.question.q3 &&
          result.question.q4 &&
          result.question.q5
        ) {
          this.select_question = true;
        }
      } else {
        this.show_question = false;
        if (result.policyholder === 'No' && result.checkpoint === 'No') {
          this.select_all_no = true;
        } else {
          this.select_all_no = false;
        }
      }

      if (
        this.nordics.valid &&
        result.opt &&
        result.captcha &&
        this.show_question &&
        this.select_question
      ) {
        this.disable_submit_button = false;
      } else if (
        this.nordics.valid &&
        result.opt &&
        result.captcha &&
        !this.show_question
      ) {
        this.disable_submit_button = false;
      } else {
        this.disable_submit_button = true;
      }
    });
  }
}
