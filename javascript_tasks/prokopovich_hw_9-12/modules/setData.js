const setData = (name = "todos") => {
    let todo = {
      id: new Date().getTime(),
      date: new Date().toLocaleDateString,
      text: inputEnterToDo.value,
      isChecked: false,
    }
    const data = JSON.parse(localStorage.getItem(name));
    localStorage.setItem(name, !!data ? JSON.stringify([...data, todo]) : JSON.stringify([todo]));
  }

export { setData };