"use strict";
exports.__esModule = true;
exports.BudgetItem = void 0;
var BudgetItem = /** @class */ (function () {
    // This function does exactly what the below statements do. Setting up a model for the form 
    // data received and setting it up via the constructor.
    function BudgetItem(description, amount) {
        this.description = description;
        this.amount = amount;
    }
    return BudgetItem;
}());
exports.BudgetItem = BudgetItem;
