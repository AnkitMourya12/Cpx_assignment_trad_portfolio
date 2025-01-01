import axios from 'axios';

// Base URL for your API
const API = axios.create({ baseURL: 'http://localhost:3001/api/stocks' });
 const ap=axios.create({ baseURLs: 'http://localhost:3001/update'});

// Define all API endpoints
export const addStock = (data) => API.post('/', data); // Add stock
export const fetchStocks = () => API.get('/'); // Fetch all stocks
 export const updateStock = (id, data) => ap.put(`/${id}`, data); // Update stock by ID
export const deleteStock = (id) => API.delete(`/${id}`); // Delete stock by ID


// const API_URL = "http://localhost:3001/api"; // Backend URL

// // Fetch all stocks
// export const fetchStocks = async () => {
//   return await axios.get(`${API_URL}/stocks`);
// };

// // Add a new stock
// export const addStock = async (stockData) => {
//   return await axios.post(`${API_URL}/stocks`, stockData);
// };

// // Update an existing stock
// export const updateStock = async (id, stockData) => {
//   return await axios.put(`${API_URL}/stocks/${id}`, stockData);
// };

// // Delete a stock
// export const deleteStock = async (id) => {
//   return await axios.delete(`${API_URL}/stocks/${id}`);
// };

//////////////////////////
  
