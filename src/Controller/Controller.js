import {Model} from '../Model';
class ControllerClass {
  constructor () {
    this.root = document.getElementById('root');
    this.startGame = document.querySelector('.starter');
    this.flagGame = document.querySelector('.starter-scroll');
    this.starterText = document.querySelector('.starter-text');
    this.burger = document.querySelector('.burger');
    this.burgerMenu = document.querySelector('.burger-menu');
    this.emptines_burger = document.querySelector('.emptines-burger');
  }
  init() {
    this.rootListener();
    this.starterListener();
    this.burgerListener();
    this.clickBurgerMenu();
    this.buttonPlay();
    this.buttonStart()
  }
  starterListener() {
    this.startGame.addEventListener('click',function () {
      Model.clickStarter()
    });
  }
  clickBurgerMenu() {
    this.burgerMenu.addEventListener('click',function() {
      Model.burgerMenuClick()
    });
    this.emptines_burger.addEventListener('click',function() {
      Model.emptinesBurger()
    });
 }
  burgerListener() {
    this.burger.addEventListener('click', function() {
      Model.clickBurger();
    });
  }
  rootListener() {
    this.root.addEventListener('click',function (){
      Model.clickRoot()
    });
    this.root.addEventListener('mouseover',function() {
      Model.mouseOverRoot()
    })
  }
  buttonPlay() {
    document.querySelector('.buttonPlay').addEventListener('click',function() {
      Model.clickButtonPlay()
    })
  }
  buttonStart() {
    document.querySelector('.play-click').addEventListener('click',function() {
      Model.clickButtonStart()
    })   
  }
}

export const Controller = new ControllerClass();
