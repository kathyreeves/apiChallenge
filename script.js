/* Pokemon outline

   The User can browse a set of 20 Pokemon and see the height of the Pokemon and the image of the Pokemon
   
   */

const baseURL = 'https://pokeapi.co/api/v2/';


let listElement = document.getElementById('pokemon-list'); 



function displayPokemon(pokemon) {

    
    let pName = pokemon.name
    let pUrl = pokemon.url

    // create a list element for 
    let pokemonCard = document.createElement('li');
    let pokemonName = document.createElement('h1');
    let pokemonHeight = document.createElement('p');
    let pokemonImage = document.createElement('img');

    fetch(pUrl)
        .then(response => response.json())
        .then(jsonData => {
        //    fetch the height of the pokemon
            console.log(jsonData);
            let pHeight = jsonData.height;
            //console.log(pHeight);
            pokemonHeight.innerText ="Height " + pHeight
            // fetche the image of the pokemon
            let pImage = jsonData.sprites.front_default;
            pokemonImage.src = pImage;

        })

    // set text title to the name of the pokemon
    pokemonName.innerText = pName;

    // handle css formatting
    pokemonCard.classList.add('pokemon-card');


    // add the name, height, and image to the card list
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonHeight);
    pokemonCard.appendChild(pokemonImage);

    // add the card to the list of pokemon
    listElement.appendChild(pokemonCard);
}

// async function fetchPokemon() {
//     const response = await fetch (`${ baseURL }pokemon`)
// }


fetch(`${ baseURL }pokemon`)
.then(response => response.json())
.then(jsonData => {

    //console.log(jsonData);
    //console.log(jsonData.results[0].name);

    let pokemonArray = jsonData.results

    //console.log(pokemonArray[15])

    for (let i = 0; i<pokemonArray.length; i++){

        let pokemon = pokemonArray[i];

        //console.log(pokemon);
        
        displayPokemon(pokemon);
    }
})