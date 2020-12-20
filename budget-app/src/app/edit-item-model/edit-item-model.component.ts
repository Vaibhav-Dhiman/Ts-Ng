import { Component, Input, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  @Input() item: BudgetItem | undefined;
  constructor() { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: BudgetItem) {
    
  }

}
