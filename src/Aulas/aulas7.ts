// tipos null e Undefined
let x; // colocanod o valor
if(typeof x === 'undefined') x = 20; // testo se o variavel e undefined
console.log(x * 1);

export function createPerson(
  firstName: string,
  LastName: string,
): {
  firstName: string;
  LastName: string;
} {
  return {
    firstName,
    LastName
  };
}

export function squareOF(x: any) {
  if(typeof x === 'number') return x * x;
  return null;
}

const l = squareOF(2);
const m = squareOF('2');

if( l === null){
  console.log('Conta Invalida');
}else {
  console.log(m * 100);

}






