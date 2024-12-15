const axios = require('axios');
const { get, set } = require('./cache');

const fetchData = async (key) => {

    // Step 1: Cache Check
    const cacheData = get(key);
  // API Endpoints
const API_BASE = "https://collectionapi.metmuseum.org/public/collection/v1";
const ENDPOINTS = {
    departments: `${API_BASE}/departments`,
    objects: `${API_BASE}/objects`,
    search: `${API_BASE}/search`,
    objectDetail: (id) => `${API_BASE}/objects/${id}`,
};

};

module.exports = { fetchData };