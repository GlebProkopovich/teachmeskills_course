import { getEls, getEl } from "./utils.js";
import { getData } from "./getData.js";

export function deleteLastBtn() {
  const data = getData();
  if (data && data.length > 1) {
    data.pop();
    localStorage.setItem("todos", JSON.stringify(data));
    let toDoTextContainers = [...getEls(".ToDoTextContainers")];
    toDoTextContainers[data.length].style.display = "none";
    let divTextAll2 = getEl("#divTextAll2");
    divTextAll2.innerHTML = `All: ${data.length}`;

    if (toDoTextContainers[data.length].isChecked === true) {
      let divTextCompleted = getEl("#secondWrapperTexts");
      const dataIsChecked = getData().filter(i => {
        if (i.isChecked === true) {
          return i;
        }
      })
      divTextCompleted.innerHTML = `Completed: ${dataIsChecked.length}`
    }
  }
}
