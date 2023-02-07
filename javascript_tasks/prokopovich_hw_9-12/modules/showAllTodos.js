import { renderAll } from "./renderAll.js";
import { getEls, getEl } from "./utils.js";

export function showAllTodos() {
    let toDoTextContainers = [...getEls(".ToDoTextContainers")];
    toDoTextContainers.forEach(i => {
      if (i.isChecked === false || i.isChecked === true) {
        i.style.display = "block";
      }
    })
    renderAll();
}