import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/repository/models/budget-item'; 


@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  @Input() item: BudgetItem;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem){
    console.log(updatedItem);
  }

}
