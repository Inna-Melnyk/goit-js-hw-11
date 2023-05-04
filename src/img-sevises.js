import Notiflix from 'notiflix';
import axios from 'axios';

const API_KEY = '35976196-061e7a31cd62ac9d42d5b46cf';

// const axios = require('axios');

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

        // return await axios
        //   .get(BASE_URL)
        //   .then(response => {
        //     if (!response.status === 200) {
        //       throw new Error(response.message);
        //     }

        //     return response.data;
        //   })
        //   .then(data => {
        //     this.incrementPage();
        //     return data;
        //   }).catch(({ message }) => {
        //          throw new Error(message);
        //   });
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
