class Todo {
  userId = null;
  id = null;
  title = "";
  completed = null;

  constructor(commentData) {
    Object.assign(this, commentData);
  }

  render() {
    const container = document.createElement("div");
    container.id = "todo-" + this.id;
    container.style.borderTop = "solid black 1px";

    const inputEl = document.createElement("input");
    inputEl.type = "checkbox";
    inputEl.checked = this.completed;
    container.appendChild(inputEl);

    const todoEl = document.createElement("code");
    todoEl.innerHTML = this.title;
    container.appendChild(todoEl);

    return container;
  }
}
