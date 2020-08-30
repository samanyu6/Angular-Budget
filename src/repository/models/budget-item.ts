export class BudgetItem {

    // This function does exactly what the below statements do. Setting up a model for the form 
    // data received and setting it up via the constructor.
    constructor(public description: string, public amount: number){}

    // Description: string;
    // Amount: number;

    // constructor(desc: string, amount: number){
    //     this.Description = desc;
    //     this.Amount = amount;
    // }  
}