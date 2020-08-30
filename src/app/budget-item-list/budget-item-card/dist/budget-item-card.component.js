"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BudgetItemCardComponent = void 0;
var core_1 = require("@angular/core");
var BudgetItemCardComponent = /** @class */ (function () {
    function BudgetItemCardComponent() {
        this.xClick = new core_1.EventEmitter();
    }
    BudgetItemCardComponent.prototype.ngOnInit = function () {
        this.isIncome = this.item.amount > 0 ? true : false;
    };
    BudgetItemCardComponent.prototype.onXClick = function () {
        this.xClick.emit();
    };
    __decorate([
        core_1.Input()
    ], BudgetItemCardComponent.prototype, "item");
    __decorate([
        core_1.Input()
    ], BudgetItemCardComponent.prototype, "isIncome");
    __decorate([
        core_1.Output()
    ], BudgetItemCardComponent.prototype, "xClick");
    BudgetItemCardComponent = __decorate([
        core_1.Component({
            selector: 'app-budget-item-card',
            templateUrl: './budget-item-card.component.html',
            styleUrls: ['./budget-item-card.component.scss']
        })
    ], BudgetItemCardComponent);
    return BudgetItemCardComponent;
}());
exports.BudgetItemCardComponent = BudgetItemCardComponent;
