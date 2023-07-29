import Employers from "./Employers";
import Sponsors from "./Sponsors";

class Business{
    constructor(owner, director = 'Victor', cash, emp){
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
    }

    makeBusiness(eu, rus, riskSponsor){
        const sumSponsors = [...eu, ...rus, 'unexpected sponsor'].join(', ');

        console.log(
            `We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}
    And we have a sponsors: 
    ${sumSponsors}.
    Note. Be careful with ${riskSponsor}. It's a huge risk.`);
    }
}

const workers = new Employers(['Vilka', 'Igor', "", '', 'Ochmuan'])

const sponsorMicrosoft = new Sponsors(
    [100, 10000, 2000],
    ['rbk', 'mojang'],
    ['лукойй', 'беларуснефть']
);

let BusnessMicrosoft = new Business('Michael', 'Victor', sponsorMicrosoft.calcCash(), workers.names);

BusnessMicrosoft.makeBusiness(sponsorMicrosoft.eu, sponsorMicrosoft.rus, sponsorMicrosoft.riskSponsor);