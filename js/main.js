const Btn = document.querySelector('#nav-icon1');
const Header = document.querySelector('.header'); 
const body = document.querySelector('body');

const mod = document.querySelector('.mod')


  Btn.addEventListener('click', () =>{
    body.classList.toggle('hidden');
    Btn.classList.toggle('open');
    Header.classList.toggle('header-burger');
  });

  mod.addEventListener('click', ()=> {

    body.classList.toggle('light-mod');

  })


const nfts = document.querySelector('.nfts'); 
const collections = document.querySelector('.Collections'); 
const cards = document.querySelector('.marketplace__cards'); 
const cardsCol = document.querySelector('.marketplace__cards-collections'); 

nfts.addEventListener('click', ()=> {
  collections.classList.remove('activ');
  nfts.classList.add('activ');
  cards.classList.remove('none');
  cardsCol.classList.add('none');
})

collections.addEventListener('click', ()=> {
  collections.classList.add('activ');
  nfts.classList.remove('activ');

  cards.classList.add('none');
  cardsCol.classList.remove('none');
})








// console.log( parseInt('123'));
// console.log(parseFloat('3.14'));
// console.log(parseInt('0x1A') );
// console.log(parseInt('1010', 2) );
// console.log( Number.MAX_VALUE);
// console.log(Number.isInteger(4.5) );
// console.log(Number.isSafeInteger(Math.pow(2, 53)));
// console.log(parseInt(' 345 ') );
// console.log(parseInt('abc123') );
// console.log(parseInt('123', 8) );
// console.log(Number.MIN_VALUE );
// console.log(parseInt('56.78') );
// console.log(Math.round(7.5) );
// console.log(parseFloat('9.81abc') );
// console.log(isNaN('abc') );
// console.log(parseInt('0123') );
// console.log(Number.MAX_SAFE_INTEGER );
// console.log((3.4567).toFixed(2) );
// console.log(Number.MIN_SAFE_INTEGER );
// console.log(Math.floor(78.99) );








// console.log(Number('324'));
// console.log(`result = Number('324'); // 324 (string to number)`);
// console.log(Number('324e-1') );
// console.log(`result = Number('324e-1'); // 32.4 (string to number)`);
// console.log( Number(true));
// console.log(`result = Number(true); // 1 (boolean to number)`);
// console.log(Number(false));
// console.log(`result = Number(false); // 0 (boolean to number)`);
// console.log(Number(null));
// console.log(`result = Number(null); // 0 (null to number)`);
// console.log(Number(' ') );
// console.log(`result = Number(' '); // 0 (empty string to number)`);
// console.log(Number('hello'));
// console.log(`result = Number('hello'); // NaN (non-numeric string to number)`);
// console.log(Number(undefined));
// console.log(`result = Number(undefined); // NaN (undefined to number)`);
// console.log(Number(NaN));
// console.log(`result = Number(NaN); // NaN (NaN to number)`);
// console.log(parseInt('20.01'));
// console.log(`result = parseInt('20.01'); // 20 (parses integer from string)`);
// console.log(parseFloat('20.01'));
// console.log(`result = parseFloat('20.01'); // 20.01 (parses float from string)`);
// console.log(+'20.01');
// console.log(`result = +'20.01'; // 20.01 (unary plus operator converts to number)`);
// console.log(Math.floor('20.01'));
// console.log(`result = Math.floor('20.01'); // 20 (rounds down to nearest integer)`);
// console.log(String(324));
// console.log(`result = String(324); // "324" (number to string)`);
// console.log(String(2 + 4));
// console.log(`result = String(2 + 4); // "6" (expression to string)`);
// console.log(String(null));
// console.log(`result = String(null); // "null" (null to string)`);
// console.log(String(undefined));
// console.log(`result = String(undefined); // "undefined" (undefined to string)`);
// console.log(String(NaN));
// console.log(`result = String(NaN); // "NaN" (NaN to string)`);
// console.log(String(true));
// console.log(`result = String(true); // "true" (boolean to string)`);
// console.log(String(false));
// console.log(`result = String(false); // "false" (boolean to string)`);
// console.log((324).toString());
// console.log(`result = (324).toString(); // "324" (number to string using toString())`);
// console.log(true.toString());
// console.log(`result = true.toString(); // "true" (boolean to string using toString())`);
// console.log(Boolean(''));
// console.log(`result = Boolean(''); // false (empty string to boolean)`);
// console.log(Boolean(0)  );
// console.log(`result = Boolean(0); // false (0 to boolean)`);
// console.log(Boolean(undefined));
// console.log(`result = Boolean(undefined); // false (undefined to boolean)`);
// console.log(Boolean(null));
// console.log(`result = Boolean(null); // false (null to boolean)`);
// console.log(Boolean(NaN));
// console.log(`result = Boolean(NaN); // false (NaN to boolean)`);








let a = 1;
let b = 1;


for(a; a <= 10; a++  )
{
  for(b; b <= 10; b++)
  {
    console.log(a + '*' + b + '=' + a*b   );
  }
  b=1;
}










