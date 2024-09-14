const Btn = document.querySelector('#nav-icon1');
const Header = document.querySelector('.header'); 
const body = document.querySelector('body');

const mod = document.querySelector('.mod')


  Btn.addEventListener('click', () =>{
    body.classList.toggle('hidden')
    Btn.classList.toggle('open');
    Header.classList.toggle('header-burger')
  });

  mod.addEventListener('click', ()=> {

    body.classList.toggle('light-mod')

  })


console.log( parseInt('123'));
console.log(parseFloat('3.14'));
console.log(parseInt('0x1A') );
console.log(parseInt('1010', 2) );
console.log( Number.MAX_VALUE);
console.log(Number.isInteger(4.5) );
console.log(Number.isSafeInteger(Math.pow(2, 53)));
console.log(parseInt(' 345 ') );
console.log(parseInt('abc123') );
console.log(parseInt('123', 8) );
console.log(Number.MIN_VALUE );
console.log(parseInt('56.78') );
console.log(Math.round(7.5) );
console.log(parseFloat('9.81abc') );
console.log(isNaN('abc') );
console.log(parseInt('0123') );
console.log(Number.MAX_SAFE_INTEGER );
console.log((3.4567).toFixed(2) );
console.log(Number.MIN_SAFE_INTEGER );
console.log(Math.floor(78.99) );










