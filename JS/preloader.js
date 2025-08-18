// // ==================== ELEMENTOS ====================
// const areaPopups = document.querySelector('.popup-area');
// const mensagemFinal = document.getElementById('final-message');
// const conteudoSite = document.querySelector('main');
// const preloader = document.getElementById('preloader');

// // ==================== TECNOLOGIAS ====================
// const tecnologias = [
//   { nome: "HTML", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//   { nome: "CSS", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
//   { nome: "JavaScript", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//   { nome: "React", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//   { nome: "Node.js", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
//   { nome: "Git", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
// ];

// // ==================== FUNÇÃO PARA CRIAR POPUPS ====================
// function criarPopup() {
//   const tecnologia = tecnologias[Math.floor(Math.random() * tecnologias.length)];
//   const popup = document.createElement('div');
//   popup.classList.add('popup');

//   if (tecnologia.icone) {
//     const imagem = document.createElement('img');
//     imagem.src = tecnologia.icone;
//     popup.appendChild(imagem);
//   }

//   popup.appendChild(document.createTextNode(tecnologia.nome));

//   // Posição aleatória
//   popup.style.top = Math.random() * 90 + "%";
//   popup.style.left = Math.random() * 90 + "%";

//   areaPopups.appendChild(popup);

//   // Animação de entrada
//   setTimeout(() => {
//     popup.style.opacity = 1;
//     popup.style.transform = "scale(1.5)";
//   }, 50);

//   // Animação de saída
//   setTimeout(() => {
//     popup.style.opacity = 0;
//     popup.style.transform = "scale(3)";
//     setTimeout(() => popup.remove(), 500);
//   }, 1000);
// }

// // ==================== EXECUÇÃO DOS POPUPS ====================
// let intervaloPopups = setInterval(criarPopup, 200);

// // ==================== FINALIZAÇÃO DO PRELOADER ====================

// // Mostrar mensagem final após 4s
// setTimeout(() => {
//   clearInterval(intervaloPopups);
//   mensagemFinal.style.opacity = 1;
// }, 4000);

// // Esconder preloader e mostrar conteúdo após 5.5s
// setTimeout(() => {
//   mensagemFinal.style.opacity = 0;
//   preloader.style.transition = "opacity 1s ease";
//   preloader.style.opacity = 0;

//   setTimeout(() => {
//     preloader.remove();
//     conteudoSite.style.display = 'block';

//     // ==================== INICIALIZAÇÃO DO AOS ====================
//     if (typeof AOS !== 'undefined') {
//       AOS.init({
//         duration: 1000,
//         once: true,
//         offset: 120
//       });
//     }

//   }, 1000);
// }, 5500);
