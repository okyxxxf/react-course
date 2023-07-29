export default class Employers {
    constructor(names){
        this.names = names.filter((employer) => employer.length > 0).map((employer) => employer.trim().toLowerCase());
    }
}