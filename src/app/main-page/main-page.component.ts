import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/repository/models/budget-item';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  @Input() totalSum: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem); 
    this.totalSum+=newItem.amount;
  }

  deleteItem(newItem: BudgetItem){
    let index = this.budgetItems.indexOf(newItem);
    this.budgetItems.splice(index,1);
    this.totalSum-=newItem.amount;
  }

}
