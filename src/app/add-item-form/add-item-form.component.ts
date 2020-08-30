import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/repository/models/budget-item';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  // Input into view for the input to ngModel it.
  @Input() item: BudgetItem = new BudgetItem('', null); 

  // Emiting event from one component to a higher component , sending them the form we have retrieved.
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  // Get form
  onSubmit(form: NgForm){
    
    // sending the form value to the listening component.
    this.formSubmit.emit(form.value);
  }

}
