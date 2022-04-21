// URL de l'API
const URL_API = 'http://localhost:3000/api/products/';

// Récupération de la chaîne de requête dans l'url


// Extraction de l'id

// //

// Récupération de nos éléments en fonction de l'ID
function displayProduct() {
    fetch(URL_API )
        .then ( res => res.json())
        .then ( function (data) {
            let model = document.querySelector('#items > a');
            
            // boucle for pour les huit cartes //
            for(let kanap of data){
                console.log(kanap);
                let clone = model.cloneNode(true); 
                clone.querySelector('.productName').innerHTML= kanap.name;
                // Mettre à jour le clone avant de le retacher //
                document.querySelector('#items').appendChild(clone);
                
            }
            // //            // Récupération de l'image

            // document.querySelector('.item__img').innerHTML = `<img id="item__img" src="${data.imageUrl}" alt="${data.altTxt}">`;
            // // Récupération du nom du produit
            // document.getElementById('title').innerHTML = `${data.name}`;
            // // Récupération du prix
            // document.getElementById('price').innerHTML = `${data.price}`;
            // // Récupération de la description
            // document.getElementById('description').innerHTML = `${data.description}`;
            // // Choix de la couleur
            // let color = data.colors;
            // for (let i in color) {
            //     document.getElementById('colors').innerHTML += `<option value="${color[i]}">${color[i]}</option>`
            // };
        })
        .catch ( error => alert(error))
};
displayProduct();


// ******************************************* PANIER **********************************************************

