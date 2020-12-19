import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-AddItemForm',
  templateUrl: './AddItemForm.component.html',
  styleUrls: ['./AddItemForm.component.scss']
})
export class AddItemFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
