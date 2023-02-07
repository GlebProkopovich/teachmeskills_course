import { getEls, getEl } from "./utils.js";
import { getData } from "./getData.js";

export function searchByText() {
  const inputSearch = getEl("#inputSearch");
  const data = getData();
  let toDoTextContainers = [...getEls(".ToDoTextContainers")];

  inputSearch.oninput = function() {
    let val = this.value.trim().toLowerCase();

    if (val != "") {
      data.forEach((item, index) => {
        if (item.text.toLowerCase().search(val) == -1) {
          toDoTextContainers[index].classList.add("hide");
        } else {
          toDoTextContainers[index].classList.remove("hide");
        }
      })
    } else {
      data.forEach((item, index) => {
        toDoTextContainers[index].classList.remove("hide");
      })
    }
  }
}