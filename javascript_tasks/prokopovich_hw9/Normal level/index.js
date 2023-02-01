let divContainer = document.createElement("div");
document.body.append(divContainer);
divContainer.style.width = "700px";
divContainer.style.height = "550px";
divContainer.style.margin = "40px auto";
divContainer.style.backgroundColor = "rgba(214, 214, 214)";
divContainer.style.borderRadius = "30px";
divContainer.style.border = "3px solid #000";

let divSubcontainer = document.createElement("div");
divContainer.append(divSubcontainer);
divSubcontainer.style.width = "570px";
divSubcontainer.style.height = "430px";
divSubcontainer.style.margin = "25px auto";

let divTopButtons = document.createElement("div");
divSubcontainer.append(divTopButtons);
divTopButtons.style.height = "80px";
divTopButtons.style.display = "flex";
divTopButtons.style.justifyContent = "space-between";

let deleteAllButton = document.createElement("button");
divTopButtons.append(deleteAllButton);
deleteAllButton.className = "topButton";

let deleteTextButton = document.createTextNode("Delete All");
deleteAllButton.append(deleteTextButton);

let inputText = document.createElement("input");
divTopButtons.append(inputText);
inputText.type = "text";
inputText.placeholder = "Enter todo...";
inputText.style.width = "250px";
inputText.style.backgroundColor = "#fff";
inputText.style.borderRadius = "15px";
inputText.style.border = "3px solid #000";
inputText.style.textAlign = "center";

let addButton = document.createElement("button");
divTopButtons.append(addButton);
addButton.className = "topButton";

let addTextButton = document.createTextNode("Add");
addButton.append(addTextButton);

const topEls = document.querySelectorAll(".topButton");
for (let el of topEls) {
  el.style.width = "140px";
  el.style.borderRadius = "20px";
  el.style.border = "3px solid #000";
  el.style.backgroundColor = "rgba(0, 219, 219)";
  el.style.color = "rgba(107, 107, 107)";
  el.style.fontSize = "20px";
  el.style.fontWeight = "bolder";
  el.style.cursor = "pointer";
}

let mediumButtons = document.createElement("div");
divSubcontainer.append(mediumButtons);
mediumButtons.style.marginTop = "50px";
mediumButtons.className = "todoTextContainer";

let mediumConfirmButton = document.createElement("button");
mediumButtons.append(mediumConfirmButton);
mediumConfirmButton.className = "confirmButtons";

let divMediumImage = document.createElement("img");
divMediumImage.src = "./icons/confirm.png";
mediumConfirmButton.append(divMediumImage);
divMediumImage.className = "confirmImages";

let mediumToDoText = document.createElement("div");
mediumButtons.append(mediumToDoText);
mediumToDoText.className = "divMediumToDoText";

let mediumToDoTextContent = document.createTextNode("Todo text");
mediumToDoText.append(mediumToDoTextContent);

let mediumCancelButtons = document.createElement("button");
mediumButtons.append(mediumCancelButtons);
mediumCancelButtons.className = "cancelButtons";

let mediumCancelButtonX = document.createTextNode("X");
mediumCancelButtons.append(mediumCancelButtonX);

let mediumDate = document.createElement("div");
mediumButtons.append(mediumDate);
mediumDate.className = "dates";

let mediumDateContent = document.createTextNode("Date");
mediumDate.append(mediumDateContent);

let bottomButtons = document.createElement("div");
divSubcontainer.append(bottomButtons);
bottomButtons.style.marginTop = "30px";
bottomButtons.className = "todoTextContainer";

let bottomConfirmButton = document.createElement("button");
bottomButtons.append(bottomConfirmButton);
bottomConfirmButton.className = "confirmButtons";

let divBottomImage = document.createElement("img");
divBottomImage.src = "./icons/confirm.png";
bottomConfirmButton.append(divBottomImage);
divBottomImage.className = "confirmImages";

let bottomToDoText = document.createElement("div");
bottomButtons.append(bottomToDoText);
bottomToDoText.className = "divMediumToDoText";

let bottomToDoTextContent = document.createTextNode("Todo text");
bottomToDoText.append(bottomToDoTextContent);

let bottomCancelButtons = document.createElement("button");
bottomButtons.append(bottomCancelButtons);
bottomCancelButtons.className = "cancelButtons";

let bottomCancelButtonX = document.createTextNode("X");
bottomCancelButtons.append(bottomCancelButtonX);

let bottomDate = document.createElement("div");
bottomButtons.append(bottomDate);
bottomDate.className = "dates";

let bottomDateContent = document.createTextNode("Date");
bottomDate.append(bottomDateContent);

const vartextContainer = document.querySelectorAll(".todoTextContainer");
for (let el of vartextContainer) {
  el.style.height = "130px";
  el.style.width = "100%";
  el.style.borderRadius = "20px";
  el.style.border = "3px solid #000";
  el.style.position = "relative";
}

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

const varConfirmImages = document.querySelectorAll(".confirmImages");
for (let el of varConfirmImages) {
  el.style.width = "20px";
  el.style.height = "20px";
  el.style.opacity = "0.5";
}

const varInputsToDoText = document.querySelectorAll(".divMediumToDoText");
for (let el of varInputsToDoText) {
  el.style.backgroundColor = "#fff";
  el.style.position = "absolute";
  el.style.width = "350px";
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

const varCancelButtons = document.querySelectorAll(".cancelButtons");
for (let el of varCancelButtons) {
  el.style.position = "absolute";
  el.style.height = "40px";
  el.style.width = "60px";
  el.style.backgroundColor = "rgba(0, 219, 219)";
  el.style.borderRadius = "10px";
  el.style.border = "3px solid #000";
  el.style.cursor = "pointer";
  el.style.left = "490px";
  el.style.top = "10px";
  el.style.fontWeight = "bolder";
  el.style.color = "rgba(107, 107, 107)";
  el.style.fontSize = "20px";
}

const varDates = document.querySelectorAll(".dates");
for (let el of varDates) {
  el.style.position = "absolute";
  el.style.backgroundColor = "#fff";
  el.style.width = "100px";
  el.style.height = "35px";
  el.style.left = "450px";
  el.style.top = "80px";
  el.style.borderRadius = "5px";
  el.style.display = "flex";
  el.style.justifyContent = "center";
  el.style.alignItems = "center";
  el.style.fontWeight = "bolder";
  el.style.color = "rgba(107, 107, 107)";
  el.style.fontSize = "20px"
}














