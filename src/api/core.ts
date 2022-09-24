import axios from 'axios';
import { API_URL } from '@/consts/api';

export const instance = axios.create({
	baseURL: API_URL,
});
