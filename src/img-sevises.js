import axios from 'axios';

const API_KEY = '35976196-061e7a31cd62ac9d42d5b46cf';

export default class PicturesApiServices {
  constructor() {
    this.searchName = '';
    this.page = 1;
  }

  async fetchPictures(searchName) {
    const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchName}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;

    try {
      const resp = await axios.get(BASE_URL);

      if (!resp.status === 200) {
        throw new Error(response.message);
      }

      this.incrementPage();

      return resp.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get name() {
    return this.searchName;
  }

  set name(newSearchName) {
    this.searchName = newSearchName;
  }
}
