import { getEls, getEl } from "./utils.js";
import { getData } from "./getData.js";

function showCheckedBlocks() {
  let toDoTextContainers = [...getEls(".ToDoTextContainers")];
  toDoTextContainers.forEach(i => {
    if (i.isChecked === false) {
      i.style.display = "none";
    }
  })
}

export function showCompleted() {
  const dataIsChecked = getData().filter(i => {
    if (i.isChecked === true) {
      return i;
    }
  })
  if (dataIsChecked.length >= 1) {
    let toDoTextContainers = [...getEls(".ToDoTextContainers")];
    showCheckedBlocks();
    let isCheckedToDoContainers = toDoTextContainers.filter(i => {
      if (i.isChecked === true) {
        return i;
      }
    })
    let divTextAll2 = getEl("#divTextAll2");
    divTextAll2.innerHTML = `All: ${isCheckedToDoContainers.length}`;
  }
}