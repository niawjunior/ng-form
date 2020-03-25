import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.css']
})
export class FormCompanyComponent implements OnInit {
  @Input() companyForm: FormGroup;
  constructor() {}

  ngOnInit() {}
}
