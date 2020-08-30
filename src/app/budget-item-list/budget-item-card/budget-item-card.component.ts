import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  // Pass a value to validate income css class as true if the card belongs to income.
  // Default is false, and unless changed explicitly it'll choose expense class. 
  @Input() isIncome: false;

  constructor() { }

  ngOnInit(): void {
  }

}
