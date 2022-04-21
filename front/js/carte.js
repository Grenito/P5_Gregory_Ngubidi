// Récupération de nos produits stockés dans le Local Storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.table(produitLocalStorage);

// constante pour méthode reduce()
const reducer = (accumulator, currentValue) => accumulator + currentValue;


// *************************************** Affichage du panier ***********************************************

// *************** Affichage des produits ajoutés ***************

function displayBasket() {
  // Si panier vide
  if (produitLocalStorage === null) {
      document.getElementById('cartAndFormContainer').innerHTML = `<h1>Votre panier est vide</h1>`;
  // Sinon
  } else {
      for (let article of produitLocalStorage) {
        document.getElementById('cart__items').innerHTML += 
        `<article class="cart__item" data-id="${article.productId}" data-color="${article.productColor}">
          <div class="cart__item__img">
            <img src="${article.productImg}" alt="${article.productAltImg}">
          </div>
          <div class="cart__item__content">
            <div class="cart__item__content__description">
              <h2>Nom du produit : ${article.productName}</h2>
              <p>Couleur : ${article.productColor}</p>
              <p>Prix : ${article.productPrice} €</p>
            </div>
            <div class="cart__item__content__settings">
              <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${article.productQty}">
              </div>
              <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
              </div>
            </div>
          </div>
        </article>`;
      }
  }
};
displayBasket();
 