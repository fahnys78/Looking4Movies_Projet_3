// Afficher le result sur une autre page

let button = document.getElementById("myBtn");
    console.log(button);

    let nomDuFilm = document.getElementById("nomDuFilm");
    console.log(nomDuFilm);

    const apiKey = "apiKey=f1a4400";

    document.getElementById("affiche")

    let cinema = async () => {
        let URL2 = "http://www.omdbapi.com/?s=" + nomDuFilm.value + "&" + apiKey;
        console.log(URL2);


        fetch(URL2)
        .then(response => response.json())
        .then(data => {
            let myData = data.Search;
            console.log(data);

            document.getElementById("affiche").innerHTML = "";

                        for (let i = 0; i < myData.length; i++) {

                            let monHtml = `
                            <article class = "cartouche">
                                <div>
                                    <h1>${myData[i].Title}</h1>
                                        <p>Date de sortie : ${myData[i].Year}</p>
                                            <img src="${myData[i].Poster}" alt="Affiche du film">
                                            <br>
                                               
                                             <a href="pdd.html?id=${myData[i].imdbID }">Voir plus</a>
                                </div>
                            </article>`;

                            console.log(myData);

                        document.getElementById("affiche").innerHTML += monHtml;
        }
    })
    .catch(erreur => console.log("erreur", erreur));
};

button.addEventListener("click" , () => {
    console.log(button);
    if (nomDuFilm.value === ""){
        alert ("Le champs est vide")
    }

    else{
        cinema()
    }
})


// <p>${myData.imdbId}</p>
// <a href="pdd.html"><button>Plus de détails</button></a>