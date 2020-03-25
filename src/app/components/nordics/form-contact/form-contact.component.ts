import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {
  @Input() contactForm: FormGroup;
  constructor() {}

  ngOnInit() {}
}
