import { Statistic } from '../Statistic';
import { category } from './constants';
import { category_img , category_array, win, lose, rotate} from '../img';
export const statisticsRow = i => (
  `<tr>
    <td class="line-categoty">${Statistic.category()[i]}</td>
    <td class="line-wort">${Statistic.wort()[i]}</td>
    <td class="line-translate">${Statistic.translate()[i]}</td>
    <td class="line-views">${Statistic.views[i]}</td>
    <td class="line-mistake">${Statistic.mistake[i]}</td>
    <td class="line-interest">${Statistic.percent[i]}%</td>
  </tr>`
)

export const statisticsHead = () => (
  `<table class="statistic">
    <tr class="tr-head">
      <td class="line-categoty">Category</td>
      <td class="line-wort">Wort</td>
      <td class="line-translate">Translate</td>
      <td class="line-views">Views</td>
      <td class="line-mistake">Mistake</td>
      <td class="line-interest">%</td>
    </tr>`
)

export const losePageFunc = () => (
  `<div class="wrapper-win">
      <img src="${lose}" class="img-win" style="pointer-events: none;" >
    </div>`
)

export const winPageFunc = () => (
  `<div class="wrapper-win">
      <img src="${win}" class="img-win" style="pointer-events: none;" >
    </div>`
)

export const playPageFunc = (cat,data,i) => (
  `<div class="playPage" data-play="${cat[i]}" data-num="${i}">
    <div class="playPage-img-wrapper" data-play="${cat[i]}" data-num="${i}">
      <img class="playPage-img" src="${category_array[category.indexOf(cat[8])][i]}" style="pointer-events: none;">
      <audio id="${cat[i]}" src="${data}" class="audio${i}"></audio>
    </div>
  </div>`
)

export const trainPageFunc = (cat,categoryT,data,i) => (
  `<div class="gamePage" data-game="${cat[i]}" data-back='${i}'>
    <div class="front rotate${i}"  data-game="${cat[i]}" data-back='${i}'>
      <div class="gamePage-img-wrapper" data-game="${cat[i]}" data-back='${i}'>
        <img class="gamePage-img" src="${category_array[category.indexOf(cat[8])][i]}" style="pointer-events: none;">
      </div>
      <div class="gamePage-text" data-game="${cat[i]}" data-back='${i}'>
        <p data-game="${cat[i]}" data-back='${i}'>${cat[i]}</p>
      </div>
      <div class="gamePage-rotate" data-back='${i}'>
        <img class="gamePage-rotate-img" data-rotateClick="${i}" src="${rotate}" data-back='${i}'>
      </div>
      <audio id="${cat[i]}" src="${data}"></audio>
    </div>
    <div class="back rotate${i}" data-back='${i}'>
      <div class="gamePage-img-wrapper" data-back='${i}'>
        <img class="gamePage-img" src="${category_array[category.indexOf(cat[8])][i]}" style="pointer-events: none;" data-back='${i}'>
      </div>
      <div class="gamePage-text" data-back='${i}'>
        <p data-back='${i}'>${categoryT[i]}</p>
      </div>
    </div>
  </div>`
)

export const startPageFunc = i => (
  `<div class="startPage" data-start="${i}">
    <div class="startPage-img-wrapper" data-start="${i}">
      <img class="startPage-img" src="${category_img[i]}" style="pointer-events: none;">
    </div>
    <div class="startPage-text" data-start="${i}">
      <p data-start="${i}">${category[i]}</p>
    </div>
  </div>`
)