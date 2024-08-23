// Função para criar e renderizar o HTML
function renderPokedexPage(main) {
  // Criando e adicionando a imagem principal do Pokémon
  const imgTag = document.createElement('img');
  imgTag.src = "#";
  imgTag.alt = "pokemon";
  imgTag.className = "pokemon__image";
  main.appendChild(imgTag);

  // Criando e adicionando o título e os spans de dados
  const h1 = document.createElement('h1');
  h1.className = "pokemon__data";
  
  const spanNumber = document.createElement('span');
  spanNumber.className = "pokemon__number";
  h1.appendChild(spanNumber);

  const spanName = document.createElement('span');
  spanName.className = "pokemon__name";
  h1.appendChild(spanName);

  main.appendChild(h1);

  // Criando e adicionando o formulário de busca
  const form = document.createElement('form');
  form.className = "form";
  
  const input = document.createElement('input');
  input.type = "search";
  input.className = "input__search";
  input.placeholder = "Name or Number";
  input.required = true;
  
  form.appendChild(input);
  main.appendChild(form);

  // Criando e adicionando os botões de navegação
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = "buttons";
  
  const buttonPrev = document.createElement('button');
  buttonPrev.className = "button btn-prev";
  buttonPrev.textContent = "Prev <";
  buttonsDiv.appendChild(buttonPrev);

  const buttonNext = document.createElement('button');
  buttonNext.className = "button btn-next";
  buttonNext.textContent = "Next >";
  buttonsDiv.appendChild(buttonNext);
  
  main.appendChild(buttonsDiv);

  // Criando e adicionando a imagem da Pokédex
  const pokedexImg = document.createElement('img');
  pokedexImg.src = "./public/images/pokedex.png";
  pokedexImg.alt = "pokedex";
  pokedexImg.className = "pokedex";
  main.appendChild(pokedexImg);

  // Adicionando tudo ao body
  document.body.appendChild(main);
}

// Exporta a função para ser usada em outros arquivos
export { renderPokedexPage };
