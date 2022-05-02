// Predicado de Tipos
                                //Predicado se aplica aqui!
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}
//|------------------|
//|++++++++++++++++++|
//|------------------|
export function soma<T>(...args: T[]): number | null {
  const retorno = args.reduce((sum, value) => {
    if(isNumber(sum) && isNumber(value)) {
         return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(5,5));



