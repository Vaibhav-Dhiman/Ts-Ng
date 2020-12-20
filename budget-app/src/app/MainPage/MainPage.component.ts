import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-MainPage',
  templateUrl: './MainPage.component.html',
  styleUrls: ['./MainPage.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number =0;
  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItems(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.totalBudget -= item.amount;

  }

  updateItem(updateEvent: UpdateEvent) {
      this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
      this.totalBudget -= updateEvent.old.amount;
      this.totalBudget += updateEvent.new.amount;
    }
}
