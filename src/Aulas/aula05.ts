//Duas formas de criar arrays com TS (generics array<T> | T[]).
export function multi(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaStrings(...args: string[]) {
 return args.reduce((ac, valor) => ac + valor)
}

export function upper(...args: string[]){
  return args.map((valor) => valor.toUpperCase());
}

const maior = upper('v', 'd', 's', 's')
const resul = multi(50,50,50);
const conca = concatenaStrings('a','v','d');


console.log(resul);
console.log(maior);
console.log(conca);



