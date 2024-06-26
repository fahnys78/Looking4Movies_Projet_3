const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get("id");
console.log(ID);

// le serach param sert a récuperer un element de l'url pour le réutilisé ensuite. ici j'ai récuperer l'id pour pouvoir le réutilisé et effectuer un second fetch
// Pour ce faire, j'ai introduit l'id dans l'url en me bassant sur celle que l'api ma envoyé et effectuer le call api 

const apiKey = "apikey=b670b179"

function magain(data) {
    // transforme l'objet js en ofmrat json avec l'option stringigy 
    const objetStringifie = JSON.stringify(data);
    console.log(objetStringifie);
    // cela permet de conct une cle a la valeur, car on ne peux pas stocker un objet sans cle ici la cle est "filmInfo" et la valeur est objectStringinfie
    localStorage.setItem("filmInfo", objetStringifie);

    // j'ai mis la fonction du l ocal storageici et je la rappel juste apres le call api, cela me permet donc d'envoyé dans le local storage les info du call api  
}

const openCard = async () => {
    let URL = "http://www.omdbapi.com/?i=" + ID + "&" + apiKey;
    console.log(URL);

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let html = `
            <article class="cartoucheOpen"> 
                <div>
                    <h1>${data.Title}</h1>
                    <p>Date de parution : ${data.Year}</p>
                    <img src="${data.Poster}" alt="Affiche du film">
                    <p> Pays: ${data.Country}</p>
                    <p> Genre: ${data.Genre}</p>
                    <p> Temps: ${data.Runtime}</p>
                    

            
                </div>
            </article>`;
        document.body.innerHTML += html;

        magain(data);
        // permet de stocket le film ddans le local storage 
    })
    .catch(erreur => console.log("erreur", erreur));
}

openCard();



//  <a href="./index3.html?id=${data.imdbID}">Ajouter au panier </a>