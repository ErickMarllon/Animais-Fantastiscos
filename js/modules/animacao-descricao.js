export default function initAnimacaoDescricao() {

  const sectionPar = document.querySelectorAll('.animais-descricao > *:nth-child(odd)');

  sectionPar.forEach((section) =>{
    section.dataset.anime = "show-down";
  });
  const sectionImpar = document.querySelectorAll('.animais-descricao > *:nth-child(even)');
  sectionImpar.forEach((section) =>{
    section.dataset.anime = "show-right";
  });
  };