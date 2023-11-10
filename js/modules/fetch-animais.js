import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {


  function createAnimal(animal){
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
   return div;
  }

  //Each animal using fetch
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal); 
  }
  
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]','.numeros', 'ativo');
    animaNumeros.init();
  }

  //Fetch animals and create each animal using createAnimal function
  async function criarAnimais(){
    try {

      //fetch and wait for response, JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      //After convert to JSON, activate the function to fill and animate the numbers
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch(erro){
      console.log(erro);
    }
}
return criarAnimais();
}
