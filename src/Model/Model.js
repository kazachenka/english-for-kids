import { View } from '../View';
import { Statistic } from '../Statistic';
import { category } from '../View/constants';
import { burgerOff, viewStarter,playFunc, burgerOn } from './templates';
import {star_false,star_true} from '../img';

class ModelClass {
  constructor () {
    this.arr = [0,1,2,3,4,5,6,7].sort(() => Math.round(Math.random() * 100) - 50);
    this.value = 0;
  }
  init() {
    
  }
  clickStarter() {
    if(document.querySelector('.starter-scroll').classList.contains('starter-scroll-train')){
      viewStarter('starter-scroll-train','starter-scroll-play','PLAY','starter-train','starter-play');
    }
    else {
      viewStarter('starter-scroll-play','starter-scroll-train','TRAIN','starter-play','starter-train')
    }
    this.play();
  }
  play() {
    if(document.querySelector('.starter-text').textContent === 'PLAY'){
      playFunc(true,220)
      if (View.h1.textContent !== 'Start Page'){
        document.querySelector('.play-click').style.display = `block`;
      }
    }
    else{
      playFunc(false,330)
      document.querySelector('.play-click').style.display = `none`;
    }
  }
  clickBurger() {
    if (document.querySelector('.burger-menu').classList.contains('burger-menu-active')){
      burgerOff();
    }
    else{
      burgerOn();
    }
  }
  clickStartPage(id) {
    View.trainPage(View.wort[id],View.wortT[id]);
    if(document.querySelector('.starter-text').textContent === 'PLAY'){
      viewStarter('starter-scroll-play','starter-scroll-train','TRAIN','starter-play','starter-train');
    }
    this.burgerState();
  }
  burgerState() {
    document.querySelectorAll('nav p').forEach(e =>{
      e.classList.remove('burger-state')
      if(e.textContent == View.h1.textContent){
        e.classList.add('burger-state')
      }
    }) 
  }
  starCounter(){
   const starCount =  document.querySelectorAll('.star');
   starCount.length >= 10 ?
   starCount[ starCount.length - 10 ].hidden = true : false;
  }
  clickPlayPage(eventValue,target){
    if (eventValue == this.arr[this.value]) {
      this.value = this.value + 1;
      target.classList.add('test');
      this.value == 8 ? this.playEnd() : setTimeout(() => Model.clickButtonPlay() ,800);
      document.querySelector('#correct').play();
      Statistic.clickCorrect(Statistic.wort().indexOf(target.getAttribute('data-play')))
      target.removeAttribute('data-play');
      document.querySelector('.stars').innerHTML += `<img src="${star_true}" class="star star-true">`;
    }
    else {
      document.querySelector('#error').play();
      document.querySelector('#error').currentTime = 0;
      document.querySelector('.stars').innerHTML += `<img src="${star_false}" class="star star-false">`;
      Statistic.clickMistake(Statistic.wort().indexOf(target.getAttribute('data-play')))
    } 
    this.starCounter();
    Statistic.calcPercent(Statistic.wort().indexOf(target.getAttribute('data-play')))
  }
  clickButtonPlay(){
    document.querySelector(`.audio${this.arr[this.value]}`).play();
  }
  clickButtonStart(){
    document.querySelector('.play-click').style.display = 'none';
    document.querySelector('.buttonPlay').style.display = 'block';
    View.playPage(View.wort[category.indexOf(View.h1.textContent)]);
    setTimeout(() => document.querySelector(`.audio${this.arr[0]}`).play(), 1200)
  }
  playEnd(){
    document.querySelector('.buttonPlay').style.display = 'none';
    if (document.querySelectorAll('.star-false').length > 0 ){
      View.losePage();
      document.querySelector('#audioFail').play();
    }
    else {
      View.winPage();
      document.querySelector('#audioWin').play();
    }
    this.value = 0;
    setTimeout(() => document.querySelector('.stars').innerHTML = '');
    setTimeout(() => View.startPage(), 4000)
  }
  clickRoot(){
    if (event.target.getAttribute('data-start')){
      Model.clickStartPage(event.target.getAttribute('data-start'),event.target.getAttribute('data-start'));
    }
    if (event.target.getAttribute('data-game')){
      let target = event.target.getAttribute('data-game');
      let id = document.getElementById(`${target}`)
      id.play();
      id.currentTime = 0;
    }
    if (event.target.getAttribute('data-rotateClick')) {
      let blocks = document.querySelectorAll(`.rotate${event.target.getAttribute('data-rotateClick')}`);
      blocks[0].style.transform = `rotateY(180deg)`;
      blocks[1].style.transform = `rotateY(360deg)`;
      Statistic.clickViews(Statistic.wort().indexOf(blocks[0].getAttribute('data-game')))
    }
    if (event.target.getAttribute('data-play')){
       Model.clickPlayPage(event.target.getAttribute('data-num'),event.target);
    }
  }
  mouseOverRoot(){
    if (event.relatedTarget.getAttribute('data-back') && event.target.getAttribute('data-back') == null) {
      let blocks = document.querySelectorAll(`.rotate${event.relatedTarget.getAttribute('data-back')}`);
      blocks[0].style.transform = `rotateY(0deg)`;
      blocks[1].style.transform = `rotateY(180deg)`;
    }
  }
  emptinesBurger(){
    burgerOff()
  }
  burgerMenuClick(){
    if(event.target.getAttribute('data-link')){
      burgerOff()
      if (event.target.getAttribute('data-link') < 8){
        Model.clickStartPage(event.target.getAttribute('data-link'));
      }    
      if (event.target.getAttribute('data-link') == 9){
        View.startPage();
      }   
      if (event.target.getAttribute('data-link') == 8){
        View.statisticPage();
      } 
    }
  }
}


export const Model = new ModelClass();