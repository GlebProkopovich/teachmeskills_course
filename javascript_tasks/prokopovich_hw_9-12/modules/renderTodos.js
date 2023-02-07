import { getData } from "./getData.js";
import { createEl, getEls, getEl } from "./utils.js";
import { searchByText } from "./searchByText.js";

const renderTodos = (el) => {

  let containerToDos = createEl("div");
  containerToDos.className = "containerToDos";
  el.append(containerToDos);

  const data = getData();
  if (data) {
    for (let item of data) {
      if (![...getEls(".ToDoTextContainers")].map(e => e.id).includes(String(item.id))) {

        let containerToDo = createEl("div");
        containerToDos.append(containerToDo);
        containerToDo.className = "ToDoTextContainers";
        containerToDo.id = item.id;
        containerToDo.style.backgroundColor = item.isChecked ? "rgba(0, 219, 219)" : "rgba(143, 143, 143)";
        containerToDo.isChecked = item.isChecked;
        containerToDo.text = item.text;

        let confirmButton = createEl("input");
        containerToDo.append(confirmButton);
        confirmButton.checked = item.isChecked;
        confirmButton.type = "checkbox";
        confirmButton.className = "customCheckbox";
        confirmButton.name = "checkboxer";
        confirmButton.id = "checkboxer";

        let toDoText = createEl("div");
        containerToDo.append(toDoText);
        toDoText.className = "toDoText";
        toDoText.style.textDecoration = item.isChecked ? "line-through" : "none";
        toDoText.append(item.text);

        let cancelButtons = createEl("button");
        containerToDo.append(cancelButtons);
        cancelButtons.className = "cancelButtons";
        cancelButtons.id = "cancelButton";
        cancelButtons.append("X");

        let dateContainer = createEl("div");
        containerToDo.append(dateContainer);
        dateContainer.className = "dates";

        let curDate = new Date().toLocaleDateString();
        dateContainer.append(curDate);

        confirmButton.addEventListener("change", e => {
          if (e.target.checked) {
            containerToDo.style.backgroundColor = "rgba(0, 219, 219)";
            containerToDo.isChecked = true;

            let dataFull = getData();

            localStorage.setItem("todos", JSON.stringify(dataFull.map(i => {
              if (i.id === item.id) {
                return ({ ...item, isChecked: true })
              }
              return i;
            })));
            toDoText.style.textDecoration = "line-through";

            const data = getData();
            const dataIsChecked = data.filter(i => {
              if (i.isChecked === true) {
                return i;
              }
            })
            let divTextCompleted = getEl("#secondWrapperTexts");
            divTextCompleted.innerHTML = `Completed: ${dataIsChecked.length}`;
          } else {
            containerToDo.style.backgroundColor = "rgba(143, 143, 143)";
            containerToDo.isChecked = false;

            let dataFull = getData();

            localStorage.setItem("todos", JSON.stringify(dataFull.map(i => {
              if (i.id === item.id) {
                return { ...item, isChecked: false }
              }
              return i;
            })));
            toDoText.style.textDecoration = "none";

            const data = getData();
            const dataIsChecked = data.filter(i => {
              if (i.isChecked === true) {
                return i;
              }
            })
            let divTextCompleted = getEl("#secondWrapperTexts");
            divTextCompleted.innerHTML = `Completed: ${dataIsChecked.length}`;
          }
        })

        containerToDo.addEventListener("click", e => {
          const data = getData();
          if (e.target.id === "cancelButton") {
            let divTextAll2 = getEl("#divTextAll2");
            divTextAll2.innerHTML = `All: ${data.length - 1}`
            e.currentTarget.style.display = "none";
            localStorage.setItem("todos", JSON.stringify(data.filter(i => i.id !== item.id)));


            if (containerToDo.isChecked === true) {
              const data = getData();
              const dataIsChecked = data.filter(i => {
                if (i.isChecked === true) {
                  return i;
                }
              })
              let divTextCompleted = getEl("#secondWrapperTexts");
              divTextCompleted.innerHTML = `Completed: ${dataIsChecked.length}`;
            }
          }
        })

        deleteAllButton.addEventListener("click", () => {
          const data = getData();
          let divTextAll2 = getEl("#divTextAll2");
          divTextAll2.innerHTML = `All: 0`;
          containerToDos.style.display = "none";
          localStorage.clear();
          let divTextCompleted = getEl("#secondWrapperTexts");
          divTextCompleted.innerHTML = `Completed: 0`;
        })

        searchByText();
      }
    }
  }
}

export { renderTodos };