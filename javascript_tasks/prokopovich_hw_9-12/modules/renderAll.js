import { getData } from "./getData.js";

export function renderAll() {
  const data = getData();
  divTextAll2.innerHTML = `All: ${data.length}`
}