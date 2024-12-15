import PropTypes from 'prop-types';

const metApiUrl = "https://collectionapi.metmuseum.org/public/collection/v1";
const headers = {
  'User-Agent': 'Musing Project'
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

const getArtwork = async (objectId) => {
  return fetchData(`${metApiUrl}/objects/${objectId}`);
};

const getDepartment = async () => {
  return fetchData(`${metApiUrl}/departments`);
};

const getObjects = async () => {
  return fetchData(`${metApiUrl}/objects`);
};

const getDepartmentsObjects = async (departmentId) => {
  return fetchData(`${metApiUrl}/objects?departmentIds=${departmentId}`);
};

const searchObjects = async (searchParams) => {
  return fetchData(`${metApiUrl}/search?${searchParams}`);
};

const buildSearchParams = (params) => {
  const searchParams = new URLSearchParams();
  if (params.q) searchParams.append('q', params.q);
  if (params.isHighlight) searchParams.append('isHighlight', params.isHighlight);
  if (params.title) searchParams.append('title', params.title);
  if (params.tags) searchParams.append('tags', params.tags);
  if (params.departmentId) searchParams.append('departmentId', params.departmentId);
  if (params.isOnView) searchParams.append('isOnView', params.isOnView);
  if (params.artistOrCulture) searchParams.append('artistOrCulture', params.artistOrCulture);
  if (params.medium) searchParams.append('medium', params.medium);
  if (params.hasImages) searchParams.append('hasImages', params.hasImages);
  if (params.geoLocation) searchParams.append('geoLocation', params.geoLocation);
  if (params.dateBegin && params.dateEnd) {
    searchParams.append('dateBegin', params.dateBegin);
    searchParams.append('dateEnd', params.dateEnd);
  }
  return searchParams.toString();
};

// Define PropTypes for the params object
buildSearchParams.propTypes = {
  q: PropTypes.string,
  isHighlight: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.string,
  departmentId: PropTypes.number,
  isOnView: PropTypes.string,
  artistOrCulture: PropTypes.string,
  medium: PropTypes.string,
  hasImages: PropTypes.string,
  geoLocation: PropTypes.string,
  dateBegin: PropTypes.number,
  dateEnd: PropTypes.number
};

// Example usage:
const params = {
  q: 'sunflowers',
  isHighlight: 'true',
  title: 'true',
  tags: 'true',
  departmentId: 11,
  isOnView: 'true',
  artistOrCulture: 'true',
  medium: 'Paintings',
  hasImages: 'true',
  geoLocation: 'Europe',
  dateBegin: 1700,
  dateEnd: 1800
};

const searchParams = buildSearchParams(params);
searchObjects(searchParams).then(data => {
  console.log(data);
}).catch(error => {
  console.error('Search error:', error);
});

export { getArtwork, getDepartment, getObjects, getDepartmentsObjects, searchObjects, buildSearchParams };