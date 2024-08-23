import { renderPokedexPage } from "./pokedex-page.js";

document.addEventListener('DOMContentLoaded', () => {
  // Cria os elementos principais
  const main = document.createElement('main');

  const wrapperSection = document.createElement('section');
  wrapperSection.className = 'wrapper';

  // Seção de login
  const loginSection = document.createElement('section');
  loginSection.className = 'login';

  // Wrapper principal formulario
  const wrapperForm = document.createElement('div');
  wrapperForm.className = 'wrapper';

  // Logo
  const logo = document.createElement('img');
  logo.src = './public/images/logo.png';
  logo.className = 'login__logo';
  wrapperForm.appendChild(logo);

  // Título
  const title = document.createElement('h1');
  title.className = 'login__title';
  title.textContent = 'Fazer login';
  wrapperForm.appendChild(title);

  // Label para nome de usuário
  const usernameLabel = document.createElement('label');
  usernameLabel.className = 'login__label';

  const usernameSpan = document.createElement('span');
  usernameSpan.textContent = 'nome de usuário';
  usernameLabel.appendChild(usernameSpan);

  const usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.name = 'username';
  usernameInput.className = 'input';
  usernameLabel.appendChild(usernameInput);
  wrapperForm.appendChild(usernameLabel);

  // Label para senha
  const passwordLabel = document.createElement('label');
  passwordLabel.className = 'login__label';

  const passwordSpan = document.createElement('span');
  passwordSpan.textContent = 'senha';
  passwordLabel.appendChild(passwordSpan);

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.name = 'password';
  passwordInput.className = 'input';
  passwordLabel.appendChild(passwordInput);
  wrapperForm.appendChild(passwordLabel);

  // Ícones de login
  const iconsDiv = document.createElement('div');
  iconsDiv.className = 'login__icons';

  const icons = [
      { src: './public/images/facebook-icon.png', alt: 'facebook', bg: 'var(--blue)' },
      { src: './public/images/google-icon.png', alt: 'google', bg: 'var(--light-grey)' },
      { src: './public/images/apple-icon.png', alt: 'apple', bg: 'var(--black)' },
  ];

  icons.forEach(icon => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'icons__button';
      button.style.backgroundColor = icon.bg;

      const img = document.createElement('img');
      img.src = icon.src;
      img.alt = icon.alt;
      button.appendChild(img);

      iconsDiv.appendChild(button);
  });

  wrapperForm.appendChild(iconsDiv);

  // Checkbox "Manter login"
  const checkboxLabel = document.createElement('label');
  checkboxLabel.className = 'login__label--checkbox';

  const checkboxInput = document.createElement('input');
  checkboxInput.type = 'checkbox';
  checkboxInput.className = 'input--checkbox';
  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(document.createTextNode(' Manter login'));
  wrapperForm.appendChild(checkboxLabel);

  // Wrapper secundário Button
  const wrapperButton = document.createElement('div');
  wrapperButton.className = 'wrapper';

  // Botão de login (desabilitado)
  const loginButton = document.createElement('button');
  loginButton.type = 'button';
  loginButton.className = 'login__button';
  loginButton.disabled = false;

  loginButton.addEventListener('click', () => {
    if (!loginButton.disabled) {
      
      // O acontece?

      /**
       Levar para outra pagina, qual?
       Pokedex.

       Como? Sem href.

       Como a pagina é criada? render.


       1. Apagar o conteudo.

       2. Escrever.
       */

       main.innerHTML = ''

       renderPokedexPage(main)

      
      










    }
  });

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('viewBox', '0 0 448 512');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z');
  svg.appendChild(path);
  loginButton.appendChild(svg);

  wrapperButton.appendChild(loginButton);

  // Links
  const link1 = document.createElement('a');
  link1.href = '#';
  link1.className = 'login__link';
  link1.textContent = 'não consegue iniciar sessão?';
  wrapperButton.appendChild(link1);

  const link2 = document.createElement('a');
  link2.href = '#';
  link2.className = 'login__link';
  link2.textContent = 'criar conta';
  wrapperButton.appendChild(link2);

  // Adiciona os wrappers à seção de login
  loginSection.appendChild(wrapperForm);
  loginSection.appendChild(wrapperButton);

  // Seção de papel de parede
  const wallpaperSection = document.createElement('section');
  wallpaperSection.className = 'wallpaper';

  // Adiciona as seções ao main
  main.appendChild(loginSection);
  main.appendChild(wallpaperSection);

  // Adiciona o main ao corpo do documento
  document.body.appendChild(main);

  // Adiciona os event listeners
  const inputs = document.querySelectorAll('.input');
  const button = document.querySelector('.login__button');

  const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
  };

  const handleFocusOut = ({ target }) => {
    if (target.value === '') {
      const span = target.previousElementSibling;
      span.classList.remove('span-active');
    }
  };

  const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', '');
    }
  };

  inputs.forEach((input) => input.addEventListener('focus', handleFocus));
  inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
  inputs.forEach((input) => input.addEventListener('input', handleChange));
});