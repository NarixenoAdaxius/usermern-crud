// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/', // Change the URL according to your backend API
});

export default instance;
