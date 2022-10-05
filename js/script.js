function getAllProduct() {
  fetch("http://localhost:3000/api/products")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (kanaps) {
      document.getElementById("items").innerHTML = kanaps
        .map(
          (article) => `
        <a href="./product.html?_id=${article.id}">
          <article>
            <img src="${article.imageUrl}" alt="${article.altTxt}">
            <h3 class="productName">${article.name}</h3>
            <p class="productDescription">${article.description}</p>
          </article>
        </a>
    `
        )
        .join("");
    })
    .catch(function (err) {
      console.log(err);
    });
}

getAllProduct();
