import axios from 'axios';

export function fetchResources() {
  return axios.get('/api/resources').then((response) => response.data);
}

export function updateResource(id, resource) {
  return axios
    .patch(`/api/resources/${id}7sdskd`, resource)
    .then((response) => response.data);
}
