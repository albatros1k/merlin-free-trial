import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://valk-api-test-v2.cf/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export class API {
  static async registerEmail(email = '') {
    const result = await instance.post(`api/merlin/free-pro-trial`, { email });
    return result.data;
  }
}
