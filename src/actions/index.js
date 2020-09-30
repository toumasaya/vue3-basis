import axios from 'axios';

export function fetchResources() {
  axios.get('http://localhost:3001/api/resources');
}
