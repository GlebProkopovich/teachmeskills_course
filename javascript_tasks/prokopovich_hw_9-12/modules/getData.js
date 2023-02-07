const getData = (name = "todos") => {
    const data = JSON.parse(localStorage.getItem(name));
    return data;
  }

export { getData };