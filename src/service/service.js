export default class GotService {
    constructor() {
        this._apiBaseUrl = 'https://anapioficeandfire.com/api';
    }

    async getResource(url) {
        const result = await fetch(`${this._apiBaseUrl}${url}`);

        if (!result.ok) throw new Error('Couldn`t fetch');

        return await result.json();
    }

    async getAllCharacters(page = 1, count = 10) {
        const res = await this.getResource(`/characters?page=${page}&pageSize=${count}`);
        return res.map(this._formatterCharacter);
    }

    async getCharacter(id = 1) {
        const res = await this.getResource(`/characters/${id}`);
        return this._formatterCharacter(res);
    }

    getAllBooks(page = 1, count = 10) {
        return this.getResource(`/books?page=${page}&pageSize=${count}`);
    }

    getBook(id = 1) {
        return this.getResource(`/books/${id}`);
    }

    getAllHouses(page = 1, count = 10) {
        return this.getResource(`/houses?page=${page}&pageSize=${count}`);
    }

    getHouse(id = 1) {
        return this.getResource(`/houses/${id}`);
    }

    _formatterCharacter(char) {
        const id = char.url.split('/');
        return {
            id : id[id.length - 1],
            name : char.name,
            gender : char.gender,
            born : char.born,
            died : char.died,
            culture : char.culture,
        }
    }
}
