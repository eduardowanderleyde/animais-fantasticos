export default class Modal{

  constructor(botaoAbrir, botaoFechar, containerModal){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    //bind this to callback in reference to the class object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  //open/close modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  //add toogle event to Modal
  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal();
  }

//close the modal when click outside
  cliqueForaModal(event) {
    if(event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvents(){
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init(){
    if(this.botaoAbrir && this.botaoFechar && this.containerModal){
      this.addModalEvents();
    }
    return this;
  }
}