import React, { PureComponent } from "react";
import { getTodos, getUsers, getPosts } from "../../utils/service";
import * as Util from "../../utils/util";

export default class App extends PureComponent {
  defaultDomainIndex = 0;
  domains = [
    "all",
    ".biz",
    ".tv",
    ".net",
    ".org",
    ".ca",
    ".info",
    ".me",
    ".io",
  ];
  todos = null;
  posts = null;
  state = {
    users: [],
    selectedDomain: "all",
    filter: this.domains[this.defaultDomainIndex],
    loader: false,
  };

  async componentDidMount() {
    this.setState({
      loader: true,
    });
    const users = await getUsers();
    this.todos = await getTodos();
    this.posts = await getPosts();
    this.setState({ users, loader: false });
  }

  listUsers(users) {
    const usersToShow = Util.getFilteredUsersBasedOnDomain(
      users,
      this.state.selectedDomain
    );
    return (
      <ul>
        {usersToShow.map((user) => {
          return (
            <li key={user.name}>
              {user.name} has completed{" "}
              {Util.getTodoCountByUser(user, this.todos)} todos and has{" "}
              {Util.getPostCountByUser(user, this.posts)} posts
            </li>
          );
        })}
      </ul>
    );
  }

  handleChange = (event) => {
    this.setState({
      selectedDomain: event.target.value,
    });
  };

  renderDropDown() {
    return (
      <select onChange={this.handleChange}>
        {this.domains.map((domain) => (
          <option key={domain} value={domain}>
            {domain}
          </option>
        ))}
      </select>
    );
  }

  render() {
    const { users, loader } = this.state;
    return (
      <div className="appContainer">
        {this.renderDropDown()}
        {loader ? <div>Loading...</div> : this.listUsers(users)}
      </div>
    );
  }
}
