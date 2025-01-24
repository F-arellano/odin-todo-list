import "../css/reset.css";
import "../css/styles.css";
import "../css/dialog.css";

import { todoList } from "./todo";
import { loadTodos } from "./load";
import { setAddBtn } from "./events";

loadTodos(todoList);
setAddBtn()
