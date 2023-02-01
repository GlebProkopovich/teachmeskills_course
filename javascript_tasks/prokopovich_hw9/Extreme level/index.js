let divContainer = document.createElement("div");
document.body.append(divContainer);
divContainer.style.width = "1000px";
divContainer.style.height = "550px";
divContainer.style.margin = "40px auto";
divContainer.style.backgroundColor = "rgba(214, 214, 214)";
divContainer.style.borderRadius = "30px";
divContainer.style.border = "3px solid #000";

let divSubcontainer = document.createElement("div");
divContainer.append(divSubcontainer);
divSubcontainer.style.width = "920px";
divSubcontainer.style.height = "500px";
divSubcontainer.style.margin = "25px auto";

let firstButtonsWrapper = document.createElement("div");
divSubcontainer.append(firstButtonsWrapper);
firstButtonsWrapper.style.height = "80px";
firstButtonsWrapper.style.display = "flex";
firstButtonsWrapper.style.justifyContent = "space-between";

let deleteAllButton = document.createElement("button");
firstButtonsWrapper.append(deleteAllButton);
deleteAllButton.className = "firstContainerButtons";

let deleteAllText = document.createTextNode("Delete All");
deleteAllButton.append(deleteAllText);

let deleteLastButton = document.createElement("button");
firstButtonsWrapper.append(deleteLastButton);
deleteLastButton.className = "firstContainerButtons";

let deleteLastText = document.createTextNode("Delete Last");
deleteLastButton.append(deleteLastText);

let inputEnterToDo = document.createElement("input");
firstButtonsWrapper.append(inputEnterToDo);
inputEnterToDo.className = "inputs";

let addButton = document.createElement("button");
firstButtonsWrapper.append(addButton);
addButton.className = "firstContainerButtons";

let addText = document.createTextNode("Add");
addButton.append(addText);

let firstWrapperButtons = document.querySelectorAll(".firstContainerButtons");
for (let el of firstWrapperButtons) {
  el.style.width = "140px";
  el.style.borderRadius = "20px";
  el.style.border = "3px solid #000";
  el.style.backgroundColor = "rgba(0, 219, 219)";
  el.style.color = "rgba(107, 107, 107)";
  el.style.fontSize = "20px";
  el.style.fontWeight = "bolder";
  el.style.cursor = "pointer";
}

let secondButtonsWrapper = document.createElement("div");
divSubcontainer.append(secondButtonsWrapper);
secondButtonsWrapper.style.height = "80px";
secondButtonsWrapper.style.display = "flex";
secondButtonsWrapper.style.justifyContent = "space-between";
secondButtonsWrapper.style.marginTop = "20px";

let divTextAll2 = document.createElement("div");
secondButtonsWrapper.append(divTextAll2);
divTextAll2.className = "secondWrapperTexts";

let textAll2 = document.createTextNode("All: 2");
divTextAll2.append(textAll2);

let divTextCompleted = document.createElement("div");
secondButtonsWrapper.append(divTextCompleted);
divTextCompleted.className = "secondWrapperTexts";

let textCompleted = document.createTextNode("Completed: 1");
divTextCompleted.append(textCompleted);

const secondContainerTexts = document.querySelectorAll(".secondWrapperTexts");
for (let el of secondContainerTexts) {
  el.style.width = "90px";
  el.style.display = "flex";
  el.style.justifyContent = "center";
  el.style.alignItems = "center";
  el.style.color = "rgba(107, 107, 107)";
  el.style.fontSize = "20px";
  el.style.fontWeight = "bolder";
}

divTextCompleted.style.width = "120px";

let showAllButton = document.createElement("button");
secondButtonsWrapper.append(showAllButton);
showAllButton.className = "showButtons";

let showAllButtonText = document.createTextNode("Show All");
showAllButton.append(showAllButtonText);

let showCompletedButton = document.createElement("button");
secondButtonsWrapper.append(showCompletedButton);
showCompletedButton.className = "showButtons";

let showCompletedButtonText = document.createTextNode("Show Completed");
showCompletedButton.append(showCompletedButtonText);

const varShowButtons = document.querySelectorAll(".showButtons");
for (let el of varShowButtons) {
  el.style.width = "190px";
  el.style.borderRadius = "20px";
  el.style.border = "3px solid #000";
  el.style.backgroundColor = "rgba(0, 219, 219)";
  el.style.color = "rgba(107, 107, 107)";
  el.style.fontSize = "20px";
  el.style.fontWeight = "bolder";
  el.style.cursor = "pointer";
}

let inputSearch = document.createElement("input");
secondButtonsWrapper.append(inputSearch);
inputSearch.className = "inputs";

const varInputs = document.querySelectorAll(".inputs");
for (let el of varInputs) {
  el.type = "text";
  el.placeholder = "Enter todo...";
  el.style.width = "450px";
  el.style.backgroundColor = "#fff";
  el.style.borderRadius = "15px";
  el.style.border = "3px solid #000";
  el.style.textAlign = "center";
}

inputSearch.placeholder = "Search...";
inputSearch.style.width = "250px";

let firstContainerToDo = document.createElement("div");
divSubcontainer.append(firstContainerToDo);
firstContainerToDo.className = "ToDoTextContainers";

let secondContainerToDo = document.createElement("div");
divSubcontainer.append(secondContainerToDo);
secondContainerToDo.className = "ToDoTextContainers";

let varToDoTextContainers = document.querySelectorAll(".ToDoTextContainers");
for (let el of varToDoTextContainers) {
  el.style.height = "140px";
  el.style.width = "600px";
  el.style.margin = "15px auto";
  el.style.borderRadius = "20px";
  el.style.border = "3px solid #000";
  el.style.position = "relative";
  el.style.backgroundColor = "rgba(143, 143, 143)";
}

firstContainerToDo.style.marginTop = "30px";

secondContainerToDo.style.background = "none";

let firstConfirmButton = document.createElement("button");
firstContainerToDo.append(firstConfirmButton);
firstConfirmButton.className = "confirmButtons";

let firstConfirmImage = document.createElement("img");
firstConfirmImage.src = "./icons/confirm.png";
firstConfirmButton.append(firstConfirmImage);

firstConfirmImage.style.width = "20px";
firstConfirmImage.style.height = "20px";
firstConfirmImage.style.opacity = "0.5";

let secondConfirmButton = document.createElement("button");
secondContainerToDo.append(secondConfirmButton);
secondConfirmButton.className = "confirmButtons";

const varConfirmButtons = document.querySelectorAll(".confirmButtons");
for (let el of varConfirmButtons) {
  el.style.position = "absolute";
  el.style.top = "45px";
  el.style.left = "10px";
  el.style.height = "40px";
  el.style.width = "60px";
  el.style.backgroundColor = "rgba(0, 219, 219)";
  el.style.borderRadius = "10px";
  el.style.border = "3px solid #000";
  el.style.cursor = "pointer";
}

let firstToDoText = document.createElement("div");
firstContainerToDo.append(firstToDoText);
firstToDoText.className = "toDoText";

let firstToDoTextContent = document.createTextNode("Todo text");
firstToDoText.append(firstToDoTextContent);

let secondToDoText = document.createElement("div");
secondContainerToDo.append(secondToDoText);
secondToDoText.className = "toDoText";

let secondToDoTextContent = document.createTextNode("Todo text");
secondToDoText.append(secondToDoTextContent);

const varToDoText = document.querySelectorAll(".toDoText");
for (let el of varToDoText) {
  el.style.backgroundColor = "#fff";
  el.style.position = "absolute";
  el.style.width = "380px";
  el.style.height = "70px";
  el.style.left = "90px";
  el.style.top = "30px";
  el.style.borderRadius = "10px";
  el.style.display = "flex";
  el.style.justifyContent = "center";
  el.style.alignItems = "center";
  el.style.fontSize = "20px";
  el.style.color = "rgba(107, 107, 107)";
  el.style.fontWeight = "bolder";
}

let firstCancelButtons = document.createElement("button");
firstContainerToDo.append(firstCancelButtons);
firstCancelButtons.className = "cancelButtons";

let firstCancelButtonX = document.createTextNode("X");
firstCancelButtons.append(firstCancelButtonX);

let secondCancelButtons = document.createElement("button");
secondContainerToDo.append(secondCancelButtons);
secondCancelButtons.className = "cancelButtons";

let secondCancelButtonX = document.createTextNode("X");
secondCancelButtons.append(secondCancelButtonX);

const varCancelButtons = document.querySelectorAll(".cancelButtons");
for (let el of varCancelButtons) {
  el.style.position = "absolute";
  el.style.height = "40px";
  el.style.width = "60px";
  el.style.backgroundColor = "rgba(0, 219, 219)";
  el.style.borderRadius = "10px";
  el.style.border = "3px solid #000";
  el.style.cursor = "pointer";
  el.style.left = "520px"
  el.style.top = "10px"
  el.style.fontWeight = "bolder";
  el.style.color = "rgba(107, 107, 107)";
  el.style.fontSize = "20px"
}

let firstDate = document.createElement("div");
firstContainerToDo.append(firstDate);
firstDate.className = "dates";

let firstDateContent = document.createTextNode("Date");
firstDate.append(firstDateContent);

let secondDate = document.createElement("div");
secondContainerToDo.append(secondDate);
secondDate.className = "dates";

let secondDateContent = document.createTextNode("Date");
secondDate.append(secondDateContent);

const varDates = document.querySelectorAll(".dates");
for (let el of varDates) {
  el.style.position = "absolute";
  el.style.backgroundColor = "#fff";
  el.style.width = "100px";
  el.style.height = "35px";
  el.style.left = "480px";
  el.style.top = "80px";
  el.style.borderRadius = "5px";
  el.style.display = "flex";
  el.style.justifyContent = "center";
  el.style.alignItems = "center";
  el.style.fontWeight = "bolder";
  el.style.color = "rgba(107, 107, 107)";
  el.style.fontSize = "20px"
}





