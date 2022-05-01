// gerics prontos
// array e promisse
type Meutipo = number;
// ========================================|
const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayNumeros);
// ========================================|
async function promiseAsync() {
  return 12;
}
function minhaPromise(): Promise<Meutipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    },1000)
  })
}
// |)))))))))))))))))))))))))))))))))))|
// |-----------------------------------|
// |+++++++++++++++++++++++++++++++++++|
promiseAsync().then((resultado) => console.log(resultado + 1));
minhaPromise().then((resultado) => console.log(resultado + 1));
