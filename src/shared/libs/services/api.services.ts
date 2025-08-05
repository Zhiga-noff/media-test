import axios from 'axios';
import { BASE_URL } from '../constant/api.constant';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
