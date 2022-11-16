//partie cart -> petite boucle pour trier  avec sort avant le .map
let productInCart = JSON.parse(localStorage.getItem("productKanap"));
console.log(productInCart);
//fetch

function getProduct (productId) {
    fetch(`http://localhost:3000/api/products/`)
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (productCart) {
        document.getElementById('cart__items').innerHTML = productCart.map(kanap => `
        <article class="cart__item" data-id="${kanap._id}" data-color="${kanap.color}">
        <div class="cart__item__img">
          <img src="${kanap.imageUrl}" alt="${kanap.altTxt}">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>${kanap.name}</h2>
            <p>Vert</p>
            <p>${kanap.price} €</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté :${kanap.quantity} </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${kanap.quantity}">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
        </article>
           `).join('')
    }).catch(function(err) {
        console.log(err);
    })
}
getProduct();




//trier en fonction des nom -> couleur -> famille -> .sort
// function showProductCart() {
//     if (productInCart === null){
//         window.alert("Et ben non !")
//     }else {
//         document.getElementById("cart__items").innerHTML.map((article) => `
//         <article class="cart__item" data-id="${article._id}" data-color="${article.colors}">
//         <div class="cart__item__img">
//             <img src="${article.imageUrl}" alt="${article.altTxt}">
//         </div>
//         <div class="cart__item__content">
//             <div class="cart__item__content__description">
//             <h2>${article.name}</h2>
//             <p>${article.colors}</p>
//             <p>${article.price}€</p>
//             </div>
//             <div class="cart__item__content__settings">
//             <div class="cart__item__content__settings__quantity">
//                 <p>Qté :${article.quantity} </p>
//                 <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
//             </div>
//             <div class="cart__item__content__settings__delete">
//                 <p class="deleteItem">Supprimer</p>
//             </div>
//             </div>
//         </div>
//     </article>
//     `)
//     }
// }
// showProductCart();