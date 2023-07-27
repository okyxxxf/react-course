const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((employer) => {
    return employer.length > 0
});

employersNames = employersNames.map((employer) => employer.trim().toLowerCase());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0, {cash} = {}) {
    let total = own;

    cash.forEach(item => { total += item });
    return total;
}

const money = calcCash(null, sponsors);

function makeBusiness(owner, director = 'Victor', cash, emp) {
    const {
        eu : [riskSponsor],
        eu,
        rus
        } = sponsors;

    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'].join(', ');

    console.log(
        `We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors: 
${sumSponsors}.
Note. Be careful with ${riskSponsor}. It's a huge risk.`);

}

makeBusiness(...['Sam', null, money, employersNames]);