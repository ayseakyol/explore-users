window.onload = () => {
  document.getElementById("choose-user-button").onclick = (event) =>
    fetch(
      "https://jsonplaceholder.typicode.com/users/" +
        event.target.form.userId.value
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const newUser = new User(json);
        return newUser.populate();
      })
      .then((userInstance) => {
        console.log(userInstance);
        const view = userInstance.render();
        document.getElementById("root").innerHTML = "";
        document.getElementById("root").appendChild(view);
      })
      .catch((err) => console.error(err));
};
