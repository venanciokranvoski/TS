// tipando as funcoes
     // valor type        argumento        retorno
type MapStringCallback = (item: string) => string


// function type
function mapStrings(array: string[], callbackfn: CallableFunction): string[] {
  const newArray: string[] = [];


  for(let i = 0; i < array.length ; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['b','k','o','h']; // array function
const letras = mapStrings(abc, (item) => item.toUpperCase());
console.log(letras);
console.log(abc);

