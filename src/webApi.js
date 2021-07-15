export function retrieveData() {
  return fetch('http://localhost:3001/api/v1/users')
  .then(response => response.json())
  .then(apiData => apiData)
  .catch(err => console.error('not working'))

export function retrieveData() {
  return fetch('http://localhost:3001/api/v1/sleep')
  .then(response => response.json())
  .then(apiData => apiData)
  .catch(err => console.error('not working'))

export function retrieveData() {
  return fetch('http://localhost:3001/api/v1/activity')
  .then(response => response.json())
  .then(apiData => apiData)
  .catch(err => console.error('not working'))

export function retrieveData() {
  return fetch('http://localhost:3001/api/v1/hydration')
  .then(response => response.json())
  .then(apiData => apiData)
  .catch(err => console.error('not working'))
};

//retrieveData('sleep');
