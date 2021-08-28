import 'regenerator-runtime/runtime';

class Musician {
  constructor(url) {
    this.url = url;
  }

  async getAlbums() {
    return fetch(this.url).then(r => r.json());
  }
}

const musician = new Musician('https://jsonplaceholder.typicode.com/albums');

musician.getAlbums().then(albums => console.log(albums));
