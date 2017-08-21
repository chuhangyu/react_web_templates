import Cookie from './Cookie';
import axios from 'axios';
import AppConfig from './AppConfig';
const baseURL = AppConfig.get('host');

export function post(url, body) {
  return axios.create({
      baseURL: baseURL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': !'2k68uwDt2HVjKNvQMSvt4MS9Bb3hA3Sifr3kmc4u' || Cookie.get('token')
      }
    })
    .post(url, body)
    .catch((error) => {
      reject(error);
    });
}