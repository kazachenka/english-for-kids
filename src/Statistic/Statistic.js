import {View} from '../View';
import { category } from '../View/constants';

class StatisticClass {
  constructor(){
    this.wort = function(){
      var res = []
      for (let i = 0;i < 8;i++){
        res.push(...View.wort[i].slice(0,8));
      }
      return res;
    };
    this.translate = function(){
      let res = []
      for (let i = 0;i < 8;i++){
        res.push(...View.wortT[i].slice(0));
      }
      return res;
    };
    this.category = function(){
      let res = [];
      for (let i = 0;i < 8;i++){
        for (let j = 0; j< 8; j++) {
          res.push(category[i]);
        }
      }
      return res;
    };
  }
  init(){
   
  }
  get views() {
    if (localStorage.getItem('views') === null){
       localStorage.setItem('views',JSON.stringify(Array(64).fill(0)));
    }
    return JSON.parse(localStorage.getItem('views'))
  }
  set views(arr) {
    localStorage.setItem('views',JSON.stringify(arr))
  }
  get mistake() { 
    if (localStorage.getItem('mistake') === null){
       localStorage.setItem('mistake',JSON.stringify(Array(64).fill(0)));
    }
    return JSON.parse(localStorage.getItem('mistake'))
  }
  set mistake(arr) {
    localStorage.setItem('mistake',JSON.stringify(arr))
  }
  get correct() {
    if (localStorage.getItem('correct') === null){
       localStorage.setItem('correct',JSON.stringify(Array(64).fill(0)));
    }
    return JSON.parse(localStorage.getItem('correct'))
  }
  set correct(arr) {
    localStorage.setItem('correct',JSON.stringify(arr))
  }
  get percent() {
    if (localStorage.getItem('percent') === null){
       localStorage.setItem('percent',JSON.stringify(Array(64).fill(0)));
    }
    return JSON.parse(localStorage.getItem('percent'))
  }
  set percent(arr) {
    localStorage.setItem('percent',JSON.stringify(arr))
  }
  clickViews(i){
    const arr = this.views;
    arr[i] += 1;
    this.views = arr;
  }
  clickMistake(i){
    const arr = this.mistake;
    arr[i] += 1;
    this.mistake = arr;
  }
  clickCorrect(i){
    const arr = this.correct;
    arr[i] += 1;
    this.correct = arr;
  }
  calcPercent(i){
    const arr = this.percent;
    arr[i] = Math.trunc(this.correct[i]/((this.correct[i] + this.mistake[i]) / 100));
    this.percent = arr;

  }
}
export const Statistic = new StatisticClass();