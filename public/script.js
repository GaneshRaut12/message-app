fetch(`http://localhost:3000/get-messages`)
  .then((data) => data.json())
  .then((data) => displayMessageDetails(data));

function displayMessageDetails(datas) {
  let list = document.getElementById("list");
  list.innerHTML = "";
  for (let i = 0; i < datas.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${datas[i].username}</td> <td>${datas[i].message}</td>  <td>${datas[i].date}</td>`;
    list.appendChild(row)
  }
}
