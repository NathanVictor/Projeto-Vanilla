/*

// 

    IMPORTANTE: Função sem retorno -> LIGAR()

    IMPORTANTE: Função com retorno -> const retornoDaFunc = ENTREGAR()

Nome, ID, Botões e imagem pokemon!

mostrar o pokemon

buscar o pokemon por nome ou id

buscar o pokemon pelos botões 

(PAGINAÇÃO -> manter o pokemon inserido (presente) e manipular o proximo pelo botão




*/

import {fetchPokemon} from './apiPokemon.js';

async function showPokemon(){
    
    const store = await fetchPokemon()

    // console.log(store)

    return store.results
}

export {showPokemon}


