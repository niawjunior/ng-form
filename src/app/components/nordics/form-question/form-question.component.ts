import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {
  @Input() questionForm: FormGroup;
  constructor() {}

  ngOnInit() {}
}
