import axios from 'axios';

export function fetchResources() {
  return axios.get('/api/resources').then((response) => response.data);
}

export function updateResourceAPI(id, resource) {
  return (
    axios
      // .patch(`/api/resources/${id}7sdskd`, resource)
      .patch(`/api/resources/${id}`, resource)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error?.response?.data))
  );
}

export function deleteResourceAPI(id) {
  return axios
    .delete(`/api/resources/${id}`)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error?.response?.data));
}
