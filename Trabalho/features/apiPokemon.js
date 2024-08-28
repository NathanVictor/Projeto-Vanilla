const fetchPokemon = async () => {
    
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  
    if (APIResponse.status === 200) {
      const data = await APIResponse.json();

      
      return data;
    }

    return {}
  }

  export{fetchPokemon};
