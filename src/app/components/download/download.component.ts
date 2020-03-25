import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  show_popup: boolean = false;
  download: FormGroup;
  constructor(fBuilder: FormBuilder, private cdRef: ChangeDetectorRef) {
    this.download = fBuilder.group({
      firstName: ['', Validators.required],
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      country: ['', Validators.required],
      company: ['', Validators.required],
      checkbox: false
    });
  }

  ngOnInit() {}

  popup() {
    this.show_popup = true;
  }
  onBack() {
    this.show_popup = false;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  onSubmit() {
    console.log(this.download.value);
  }
}
