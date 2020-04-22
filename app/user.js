class User {
  id = null;
  username = null;
  name = null;
  email = null;
  website = null;
  populated = false;
  todos = [];

  constructor(postData) {
    Object.assign(this, postData);
  }

  populate() {
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${this.id}`)
      .then((response) => response.json())
      .then((json) => {
        this.todos = json.map((todo) => new Todo(todo));
        this.populated = true;
        return this;
      })
      .catch((err) => console.error(err));
  }

  render() {
    const container = document.createElement("div");
    container.id = "user-" + this.id;

    const titleEl = document.createElement("h1");
    titleEl.innerHTML = this.username;
    container.appendChild(titleEl);

    const nameEl = document.createElement("p");
    nameEl.innerHTML = `name: ${this.name}`;
    container.appendChild(nameEl);

    const emailEl = document.createElement("p");
    emailEl.innerHTML = `email: ${this.email}`;
    container.appendChild(emailEl);

    const websiteEl = document.createElement("p");
    websiteEl.innerHTML = `website: ${this.website}`;
    container.appendChild(websiteEl);

    const renderedTodos = this.todos
      .map((todo) => todo.render())
      .reduce((all, next) => {
        all.appendChild(next);
        return all;
      }, document.createElement("div"));
    renderedTodos.id = "comments";
    container.appendChild(renderedTodos);

    return container;
  }
}
