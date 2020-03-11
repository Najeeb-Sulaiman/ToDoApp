import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-title',
  templateUrl: './form-title.component.html',
  styleUrls: ['./form-title.component.css']
})
export class FormTitleComponent implements OnInit {
@Input() formTitle;
  constructor() { }

  ngOnInit() {
  }

}
