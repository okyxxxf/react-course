class GotService {
    constructor() {
        this._apiBaseUrl = 'https://anapioficeandfire.com/api';
    }

    async getResource(url) {
        const result = await fetch(`${this._apiBaseUrl}${url}`);

        if (!result.ok) throw new Error('Couldn`t fetch');

        return await result.json();
    }

    getAllCharacters(page = 1, count = 10) {
        return this.getResource(`/characters?page=${page}&pageSize=${count}`);
    }

    getCharacter(id = 1) {
        return this.getResource(`/characters/${id}`);
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
}
