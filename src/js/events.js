function setDelBtn(todo) {
  const btn = document.getElementById(`del-btn${todo.id}`);
  btn.addEventListener("click", delTodo);
}

function setAddBtn() {
  const btn = document.getElementById("add-btn");
  btn.addEventListener("click", showPopUp);
}

function setClosePopBtn() {
  const btn = document.querySelector(".close-pop");
  btn.addEventListener("click", () => {
    const body = document.querySelector("body");
    const content = document.querySelector(".content");
    const popMenu = document.querySelector(".add-menu");

    body.removeChild(popMenu);
    content.classList.remove("blur")
  });
}

function delTodo() {
  const gridBox = document.querySelector(".grid-box");
  const id = this.id.substring(7);
  const todoNode = document.getElementById(`todo${id}`);
  console.log(todoNode.id);
  gridBox.removeChild(todoNode);
}

function showPopUp() {
  const body = document.querySelector("body");

  const content = document.querySelector(".content");
  content.classList.add("blur");

  const popDiv = document.createElement("div");
  popDiv.classList.add("add-menu");
  popDiv.innerHTML = `
    <div class="pop-header">
        <h3>Create a new...</h3>
        <button class="close-pop">⨯</button>
    </div>
    <ul class="pop-side">
        <li>To Do</li>
        <li>Project</li>
        <li>Note</li>
    </ul>
    <div class="pop-main">
        <input type="text" placeholder="Title: e.g, Pay rent" maxlength=30>
        <textarea placeholder="details..."></textarea>
    </div>
    <div class="pop-foot">
      <span>Due Date:</span>
      <input type="date">
      <span>Priority</span>
      <button value=0>Low</button>
      <button value=1>Medium</button>
      <button value=2>High</button>
      <button class="add-todo">Add To Do</button>
    </div>
  `;

  body.appendChild(popDiv);
  setClosePopBtn()
}

export { setDelBtn, setAddBtn };
