import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item';

@Component({
  selector: 'app-AddItemForm',
  templateUrl: './AddItemForm.component.html',
  styleUrls: ['./AddItemForm.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  isNewItem: boolean;
  constructor() { }

  ngOnInit() {
    if(this.item) {
      // has value
      this.isNewItem = false;
    }

    else {
      this.isNewItem  = true;
      this.item = new BudgetItem('',null);
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
    //console.log(form);
  }

}
