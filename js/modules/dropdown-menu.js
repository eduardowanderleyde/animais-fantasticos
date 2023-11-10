import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events){
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    //define touchstart and click as default arguments
    if(events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  //activate dropdown menu and add the function
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      this.classList.remove('active');
    });
}

//add the events to the dropdown menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach(userEvent => {
          menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
   });
  }
   init() {
    if(this.dropdownMenus.length){
      this.addDropdownMenusEvent();
    }
    return this;
  }
}