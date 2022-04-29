type FiltercallBack<U> = ( value: U,index?: number,
                           array?: U[],) => boolean;

export function meuFilter<T>(array: T[],callbackFn: FiltercallBack<T>,
      ): T[] {
        const newArray21 = [];

        for(let i = 0; i < array.length; i++) {
          if(callbackFn(array[i])){
            newArray21.push(array[i])
          }

        }

        return newArray21;

      }

// topico de generics
const teste = [1,2,3,4,5,6,7,8,9];
const avalia = teste.filter((value) => value < 6);
console.log(avalia);

const arrayF = meuFilter(teste, (value) => value < 7);
console.log(arrayF);


