export default class GotService {
    constructor() {
        this._apiBaseUrl = 'https://anapioficeandfire.com/api';
    }

    async getResource(url) {
        const result = await fetch(`${this._apiBaseUrl}${url}`);

        if (!result.ok) throw new Error('Couldn`t fetch');

        return await result.json();
    }

    getAllCharacters = async (page = 4, count = 10) => {
        const res = await this.getResource(`/characters?page=${page}&pageSize=${count}`);
        return res.map(this._formatterCharacter);
    }

    getCharacter = async (id = 1) => {
        const res = await this.getResource(`/characters/${id}`);
        return this._formatterCharacter(res);
    }

    getAllBooks = async (page = 1, count = 10) => {
        const res = await this.getResource(`/books?page=${page}&pageSize=${count}`);
        return res.map(this._formatterBook);
    }

    getBook = async (id = 1) => {
        const res = await this.getResource(`/books/${id}`);
        return this._formatterBook(res);
    }

    getAllHouses = async (page = 1, count = 10) => {
        const res = await this.getResource(`/houses?page=${page}&pageSize=${count}`);
        return res.map(this._formatterHouse);
    }

    getHouse = async (id = 1) => {
        const res = await this.getResource(`/houses/${id}`);
        return this._formatterHouse(res);
    }

    _formatterCharacter(char) {
        const urlArr = char.url.split('/');
        const id = urlArr[urlArr.length - 1];
        return {
            id : id,
            name : char.name,
            gender : char.gender,
            born : char.born,
            died : char.died,
            culture : char.culture,
        }
    }

    _formatterBook(book) {
        const urlArr = book.url.split('/');
        const id = urlArr[urlArr.length - 1];
        return {
            id : id,
            name : book.name,
            author : book.authors[0],
            numberOfPages : book.numberOfPages
        }
    }

    _formatterHouse(house) {
        const urlArr = house.url.split('/');
        const id = urlArr[urlArr.length - 1];
        return {
            id : id,
            name : house.name,
            region : house.region,
        }
    }
}
