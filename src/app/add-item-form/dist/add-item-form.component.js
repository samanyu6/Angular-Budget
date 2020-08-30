"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddItemFormComponent = void 0;
var core_1 = require("@angular/core");
var budget_item_1 = require("src/repository/models/budget-item");
var AddItemFormComponent = /** @class */ (function () {
    function AddItemFormComponent() {
        // Input into view for the input to ngModel it.
        this.item = new budget_item_1.BudgetItem('', null);
        // Emiting event from one component to a higher component , sending them the form we have retrieved.
        this.formSubmit = new core_1.EventEmitter();
    }
    AddItemFormComponent.prototype.ngOnInit = function () {
    };
    // Get form
    AddItemFormComponent.prototype.onSubmit = function (form) {
        // sending the form value to the listening component.
        this.formSubmit.emit(form.value);
    };
    __decorate([
        core_1.Input()
    ], AddItemFormComponent.prototype, "item");
    __decorate([
        core_1.Output()
    ], AddItemFormComponent.prototype, "formSubmit");
    AddItemFormComponent = __decorate([
        core_1.Component({
            selector: 'app-add-item-form',
            templateUrl: './add-item-form.component.html',
            styleUrls: ['./add-item-form.component.scss']
        })
    ], AddItemFormComponent);
    return AddItemFormComponent;
}());
exports.AddItemFormComponent = AddItemFormComponent;
