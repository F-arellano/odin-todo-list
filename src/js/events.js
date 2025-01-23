function setDelBtn (todo) {
    const btn = document.getElementById(`del-btn${todo.id}`)
    btn.addEventListener("click", delTodo)
}

function delTodo () {
    const gridBox = document.querySelector(".grid-box")
    const id = this.id.substring(7)
    const todoNode = document.getElementById(`todo${id}`)
    console.log(todoNode.id)
    gridBox.removeChild(todoNode)
}

export {
    setDelBtn,
}