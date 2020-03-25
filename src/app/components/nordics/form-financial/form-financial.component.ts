import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-financial',
  templateUrl: './form-financial.component.html',
  styleUrls: ['./form-financial.component.css']
})
export class FormFinancialComponent implements OnInit {
  @Input() financialForm: FormGroup;
  constructor() {}

  ngOnInit() {}
}
