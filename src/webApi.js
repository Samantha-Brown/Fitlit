export function retrieveUsersData() {
  return fetch('http://localhost:3001/api/v1/users')
  .then(response => response.json())
}

export function retrieveSleepData() {
  return fetch('http://localhost:3001/api/v1/sleep')
  .then(response => response.json())
}

export function retrieveActivityData() {
  return fetch('http://localhost:3001/api/v1/activity')
  .then(response => response.json())
}

export function retrieveHydrationData() {
  return fetch('http://localhost:3001/api/v1/hydration')
  .then(response => response.json())
};
