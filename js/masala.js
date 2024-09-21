
// 1masala
javob = []
for(let x=1 ; x <= 50; x++)
{
  let z = 0;
  for(let y = 2 ; y < x ; y++)
  {
    if (x%y == 0)
    {  
      z++
    }
  }
  if(z == 0)
  {
    javob +=x+',';
  }
}  
console.log('1masala:',javob);






// 2masala


 let numbers = "1122334"
 let asds = []
 let asdf = []
 let asd = new Set();
 let numsum = 0;

 for( let x = 0; x < numbers.length;x++)
 {
  asds.push(numbers[x]) 
 }

 for(let x = 0 ; x < asds.length; x++)
 {
  if(!asd.has(asds[x]))
  {
    asd.add(asds[x]);
    asdf.push(asds[x])
  }
 }
 
 for(let x = 0 ; x < asdf.length; x++)
 {
  let z = 0
  for(let y = 0 ; y < asds.length; y++)
    {
      if (asdf[x] == asds[y]) {
        z++  
      }
    }
  if (z>1) {
    numsum += asdf[x]*1
  }
 }

 console.log('2masala:',numsum);
 






//  3masala


let n = 8;
javob3 = ''

if ( n%2 == 0) {
  for(let x = n-1 ; x>0; x-=2 )
  {
    javob3 += x + ',';
    
  }
}
else if ( n%2 == 1) {
  for(let x = n ; x>0; x-=2 )
  {
    javob3 += x + ',';
    
  }
}
else
{
  javob3 = 'one available value';
}

console.log('3masala:',javob3);







//  4masala

let kub = ''
for(let x = 1; x<=10;x++)
{
  kub +=x+'^3 = ' + Math.pow(x,3) + ';  ';
}

console.log('4masala',kub);




//  5masala


let num = 155
let numch = ''
  num = num.toString();

for(let x = num.length-1; x >= 0; x--)
{
  numch += num[x] 
}

console.log("5masala",numch);




