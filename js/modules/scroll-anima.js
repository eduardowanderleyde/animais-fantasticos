import debounce from "./debounce.js";

export default class ScrollAnima{

  //get all objects
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  //get distance of each object
  getDistance() {
    this.distante = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return{
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  //verify distance of each object
  checkDistance(){
    this.distante.forEach((item) => {
      if(window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if(item.element.classList.contains('ativo')){
        item.element.classList.remove('ativo');
      }
  });
}

//scroll event start
  init(){
    if(this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
  }
  return this;
}

//scroll event stop
  stop(){
    window.removeEventListener('scroll', this.checkDistance);

  }
}