import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  subscribe: FormGroup;
  successModal: boolean = false;
  showModal: boolean = false;
  modalTextTitle: string;
  modalTextBody: string;
  modalSuccess: boolean = false;
  modalError: boolean = false;

  constructor(private data: FormBuilder, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.subscribe = this.data.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: '',
      country: ['', Validators.required],
      position: '',
      checkbox: false,
      captcha: false
    });
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  onSubmit() {
    console.log(this.subscribe.value);
    this.modalTextTitle = 'SUCCESS!';
    this.modalTextBody = 'Thank you for subscribing to our newsletter.';
    this.modalSuccess = true;
    this.showModal = true;
  }
  onBack() {
    this.showModal = false;
  }
}
