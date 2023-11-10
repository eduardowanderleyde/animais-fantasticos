export default class AnimaNumeros {

  //receives a selector with numbers in it
  constructor(numeros, observerTarget, observerClass){
    this.numeros = document.querySelector(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  //Receive a element from DOM with number in it
  //increment from 0 to the number
  static incrementarNumero(numero){
    const total = +numero.innerText;
    const incremento = Math.floor(total/100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if(start > total) {
        numero.innerText = total;
        clearInterval(timer)
      }
    }, 25 * Math.random());
  }

  //activate incrementarNumero for each number selected from DOM
  animaNumeros() {
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
  }

  //function that occurs when the mutation occurs
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  //add MutationObserver to check when the class is added to the element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, {attributes: true});
  }

  //init function that starts everything
  init() {
    if(this.numeros.length && this.observerTarget){
      this.addMutationObserver();
    }
    this.addMutationObserver();
    return this;
  }
}