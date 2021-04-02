import { Api } from '../Api';
import { Model } from '../Model';
import { animalA, animalB, actions, clothes, wheater, houm, family, body, animalAT, animalBT, actionsT, clothesT, wheaterT, houmT, familyT, bodyT } from './constants';
import { losePageFunc, statisticsRow, winPageFunc, statisticsHead, playPageFunc, startPageFunc, trainPageFunc } from './templates';
import { github } from '../img';

class ViewClass {

  constructor(wordEng, wordRu) {
    this.root = document.getElementById('root')
    this.buttonStart = document.querySelector('.play-click');
    this.h1 = document.querySelector('.h1-root');
    this.wort = wordEng;
    this.wortT = wordRu;
  }

  init() {
    document.querySelector('.footer-right').innerHTML += `
    <img src="${github}" class="github">
    <a href="https://github.com/kazachenka" target="_blank">kazachenka</a>
    `
     this.startPage()
  } 
  startPage() {
    this.h1.innerHTML = `Start Page`;
    this.root.innerHTML = ``;
    for(let i = 0;i < 8; i++) {
      this.root.innerHTML += startPageFunc(i);
    }
    Model.burgerState();
  }

  trainPage(category, categoryT){
    this.root.innerHTML = ``;
    this.h1.innerHTML = `${category[8]}`;
    for(let i = 0; i < 8; i++) {
      Api.getAudio(category[i]).then(data => {
      this.root.innerHTML += trainPageFunc(category,categoryT,data,i);
    });
    }
  }
  playPage(category){
    this.root.innerHTML = ``;
    this.h1.innerHTML = ``;
    for(let i = 0; i < 8; i++) {
      Api.getAudio(category[i]).then(data => {
      this.root.innerHTML += playPageFunc(category,data,i)
    });
    }
  }
  winPage() {
    this.h1.innerHTML = ``;
    this.root.innerHTML = winPageFunc();
  }
  losePage() {
    this.h1.innerHTML = `Mistakes:<span class='mistakes-count'>${document.querySelectorAll('.star-false').length}</span>`;
    this.root.innerHTML = losePageFunc();
  }
  statisticPage() {
    this.h1.innerHTML = `Statistic`;
    let result = statisticsHead();
    for (let i = 0; i < 64; i++) {
      result += statisticsRow(i);
    }
    result += `</table>`
    this.root.innerHTML = result;
  }
}

export const View = new ViewClass(
  [animalA, animalB, actions, clothes, wheater, houm, family, body],
  [animalAT, animalBT, actionsT, clothesT, wheaterT, houmT, familyT, bodyT]
);