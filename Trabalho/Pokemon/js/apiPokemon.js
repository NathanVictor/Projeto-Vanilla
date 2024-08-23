const fetchPokemon = async (pokemon) => {
    
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
    if (APIResponse.status === 200) {
      const data = await APIResponse.json();
      return data;
    } 
  }

  export{fetchPokemon};
