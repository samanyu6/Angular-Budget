import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/repository/models/budget-item';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  // Pass a value to validate income css class as true if the card belongs to income.
  // Default is false, and unless changed explicitly it'll choose expense class. 
  @Input() item: BudgetItem;

  @Input() isIncome: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isIncome = this.item.amount>0?true:false;
  }

}
