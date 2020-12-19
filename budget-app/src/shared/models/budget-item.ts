export class BudgetItem {
    constructor(public description: string, public amount: number ) {}
}


// the above code is equalent to the below

// constructor(public description: string, public amount: number ) {
//     this.description = description;
//     this.amount = amount;
// }