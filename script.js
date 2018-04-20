$(document).ready(function() {

  // Le code doit être ecrit içi
$('#a').on('click', function(){

  $.get("https://pokeapi.co/api/v2/pokemon/" , function (data){
         let listPok = data.results

        let pokemon = document.createElement('ul');

            for (let i = 0; i < listPok.length; i++) {

              let listElement = document.createElement('li');
              listElement.innerHTML = listPok[i].name
              pokemon.appendChild(listElement);
            };

            document.querySelector('#resultList').appendChild(pokemon)

  });
})
//quand on clique "#b" ca appel l api (type)
$('#b').on('click', function(){

  //source pour http de l api(pokemon)
  $.get("https://api.punkapi.com/v2/beers" , function (type){
//debugger;
//ceci est  une variable qui sera = a la recherche souhaite (type )
         let beer= type.results
//ceci sert a crée le ul qui sera reliee au .appendChild (le parent li)
        let al = document.createElement('ul');
// for ceci c est une variable qui sert a parcourir l array
//i< condition de l arret de la boucle pendant la recherche
//i++ listing de l  incrementation de 1 a 1
            for (let i = 0; i < typePok.length; i++) {

  //let cree la liste de li dans la balise ul
              let PlusElement = document.createElement('li');
// innerHTML relie la liste des li elemnt au html
              PlusElement.innerHTML = beer[i].name;
// ceci sert a lister les elment dans le dossier parent
              al.appendChild(PlusElement);
            };
//exxecuter le processuss de toute les commande
            document.querySelector('#resultList').appendChild(al)

  });
})
})
