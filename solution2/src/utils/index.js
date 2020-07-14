const fetchData = (pageNumber = 1) =>
  fetch(
    `https://cors-anywhere.herokuapp.com/http://ws-old.parlament.ch/councillors?format=json&pageNumber=${pageNumber}`
  );

export default { fetchData };
