import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/repository/models/budget-item';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  // Pass the values obtained from the other file directly into this html file with the array. Defining it as you
  // can't pass values from one view to another, has to traverse a model.
  @Input() budgetItems: BudgetItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
