
export const viewStarter = ( wasScroll, becameScroll, mode, wasText, becameText ) => {
  document.querySelector('.starter-scroll').classList.remove(`${wasScroll}`)
  document.querySelector('.starter-scroll').classList.add(`${becameScroll}`)
  document.querySelector('.starter-text').textContent = `${mode}`
  document.querySelector('.starter-text').classList.remove(`${wasText}`)
  document.querySelector('.starter-text').classList.add(`${becameText}`)
}

export const playFunc = ( hidden, height ) => {
  document.querySelectorAll('.gamePage-text').forEach(e => e.hidden = hidden);
  document.querySelectorAll('.gamePage-rotate').forEach(e => e.hidden = hidden);
  document.querySelectorAll('.gamePage').forEach(e => e.style.height = `${height}px`);
}
export const burgerOff = () => {
  document.querySelector('.middle-line').classList.remove('middle-line-active');
  document.querySelector('.first-line').classList.remove('first-line-active');
  document.querySelector('.last-line').classList.remove('last-line-active');
  document.querySelector('.burger-menu').classList.remove('burger-menu-active');
  document.querySelector('.emptines-burger').classList.remove('emptines-burger-active');
}
export const burgerOn = () => {
  document.querySelector('.middle-line').classList.add('middle-line-active');
  document.querySelector('.first-line').classList.add('first-line-active');
  document.querySelector('.last-line').classList.add('last-line-active');
  document.querySelector('.burger-menu').classList.add('burger-menu-active');  
  document.querySelector('.emptines-burger').classList.add('emptines-burger-active'); 
}