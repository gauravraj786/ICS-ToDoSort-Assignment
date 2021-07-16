export const getTodoCountByUser = (user, todos) =>
  todos?.filter((todo) => todo.userId === user.id && todo.completed === true)
    .length;

export const getPostCountByUser = (user, posts) =>
  posts?.filter((post) => post.userId === user.id).length;

export const getFilteredUsersBasedOnDomain = (users, selectedDomain) =>
  selectedDomain === "all"
    ? users
    : users.filter((user) => user.email.endsWith(selectedDomain));
