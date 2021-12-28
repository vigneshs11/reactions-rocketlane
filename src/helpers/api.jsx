
import * as axios from "axios";

const BASE_URL = 'https://artful-iudex.herokuapp.com'
const CONTENT_ID = '2'

export default class Api {
  constructor() {
    this.client = null;
  }

  init = () => {

    let headers = {
      Accept: "application/json",
    };

    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`;
    }

    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getReactionsList = (params) => {
    return this.init().get(`/reactions`);
  };

  postReaction = (params) => {
    return this.init().post(`/user_content_reactions`, params)
  }

  getUserContentReaction = () => {
    return this.init().get('/user_content_reactions');
  }

  deleteUserContentReaction = (ID) => {
    return this.init().delete(`/user_content_reactions/${ID}`)
  }
}