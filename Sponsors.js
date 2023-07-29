export default class Sponsors{
    constructor(cash, eu, rus){
        this.cash = cash;
        this.eu = eu;
        this.rus = rus;
    }

    calcCash(own = 0){
        let total = own;

        this.cash.forEach(item => { total += item });
        return total;
    }

    getRiskSponsor(){
        return this.eu[0];
    }
}