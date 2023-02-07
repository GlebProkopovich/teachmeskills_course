import { getData } from "./modules/getData.js";
import { setData } from "./modules/setData.js";
import { renderTodos } from "./modules/renderTodos.js";
import { createEl, getEls, getEl } from "./modules/utils.js"
import { renderAll } from "./modules/renderAll.js";
import { deleteLastBtn } from "./modules/deleteLastBtn.js";
import { showAllTodos } from "./modules/showAllTodos.js";
import { showCompleted } from "./modules/showCompleted.js";

let divContainer = createEl("div");
document.body.append(divContainer);
divContainer.className = "divContainer";

let divSubcontainer = createEl("div");
divContainer.append(divSubcontainer);
divSubcontainer.id = "divSubcontainer";

let firstButtonsWrapper = createEl("div");
divSubcontainer.append(firstButtonsWrapper);
firstButtonsWrapper.className = "firstButtonsWrapper";

let deleteAllButton = createEl("button");
firstButtonsWrapper.append(deleteAllButton);
deleteAllButton.className = "firstContainerButtons";
deleteAllButton.id = "deleteAllButton";
deleteAllButton.append("Delete All");

let deleteLastButton = createEl("button");
firstButtonsWrapper.append(deleteLastButton);
deleteLastButton.className = "firstContainerButtons";
deleteLastButton.id = "deleteLastButton";
deleteLastButton.append("Delete Last");

let inputEnterToDo = createEl("input");
firstButtonsWrapper.append(inputEnterToDo);
inputEnterToDo.type = "text";
inputEnterToDo.placeholder = "Enter todo...";
inputEnterToDo.className = "inputs";
inputEnterToDo.id = "inputEnterToDo";

let addButton = createEl("button");
firstButtonsWrapper.append(addButton);
addButton.className = "firstContainerButtons";
addButton.id = "addButton";
addButton.append("Add");

let varFirstContainerButtons = getEls(".firstContainerButtons");
varFirstContainerButtons.className = "firstContainerButtons";

let secondButtonsWrapper = createEl("div");
divSubcontainer.append(secondButtonsWrapper);
secondButtonsWrapper.className = "secondButtonsWrapper";

let divTextAll2 = createEl("div");
divTextAll2.id = "divTextAll2";
secondButtonsWrapper.append(divTextAll2);
divTextAll2.className = "secondWrapperTexts";
divTextAll2.append("All: 0");

let divTextCompleted = createEl("div");
secondButtonsWrapper.append(divTextCompleted);
divTextCompleted.className = "secondWrapperTexts";
divTextCompleted.id = "secondWrapperTexts";
divTextCompleted.append("Completed: 0");

let showAllButton = createEl("button");
secondButtonsWrapper.append(showAllButton);
showAllButton.className = "showButtons";
showAllButton.append("Show All");

let showCompletedButton = createEl("button");
secondButtonsWrapper.append(showCompletedButton);
showCompletedButton.className = "showButtons";
showCompletedButton.append("Show Completed");

let inputSearch = createEl("input");
secondButtonsWrapper.append(inputSearch);
inputSearch.className = "inputs";
inputSearch.id = "inputSearch";

inputSearch.placeholder = "Search...";
inputSearch.style.width = "250px";

const data = getData();
if (data) {
  divTextAll2.innerHTML = `All: ${data.length}`;
  const dataIsChecked = data.filter(i => {
    if(i.isChecked === true) {
      return i;
    }
  })
  divTextCompleted.innerHTML = `Completed: ${dataIsChecked.length}`;
}

getEl("#addButton").addEventListener("click", () => {
  getData();
  setData();
  renderTodos(divContainer);
  inputEnterToDo.value = "";
  renderAll();
})

getEl("#inputEnterToDo").addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    getData();
    setData();
    renderTodos(divContainer);
    inputEnterToDo.value = "";
    renderAll();
  }
})

renderTodos(divContainer);

deleteLastButton.addEventListener("click", () => {
  deleteLastBtn();
})

showAllButton.addEventListener("click", () => {
  showAllTodos();
})

showCompletedButton.addEventListener("click", () => {
  showCompleted();
})

