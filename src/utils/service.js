export function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.json()
  );
}

// implement a getTodos function
export function getTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
  response.json()
);
}
export function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
  response.json()
);
}