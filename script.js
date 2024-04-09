async function book_liabrary() {
  try {
    let res = await fetch(
      "https://wolnelektury.pl/api/audiobooks/?format=json"
    );
    let res_data = await res.json();
    let container = document.createElement("div");
    container.className = "container";
    let row = document.createElement("div");
    row.className = "row";
    for (let i = 0; i < res_data.length; i++) {
      let col = document.createElement("div");
      col.className = "col-sm-6 col-md-4";
      col.innerHTML = `<div class="card mt-3 w-100" style="width: 18rem;">
    <img src="${res_data[i].simple_thumb}" class="card-img-top" alt="Images">
    <div class="card-body">
      <h5 class="card-title name">${res_data[i].title}</h5>
      <p class="card-text">Author : ${res_data[0].author}</p>
      <p class="card-text">Gener : ${res_data[0].genre}</p>
      <p class="card-text">Types : ${res_data[0].kind}</p>
    </div>
  </div>`;
      row.append(col);
      container.append(row);
      document.body.append(container);
    }
  } catch (error) {
    console.log("Error While fetching data..");
  }
}

book_liabrary();
