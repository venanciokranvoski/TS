/*function TestaValores(id: number | string): void {
  if(typeof id ===  'string'){
    console.log("seu id e "+ id);
  }else {
    console.log('OK');
  }
}
const t = TestaValores('teste Ok');

type testeTipo = {
 x: number;
 y: number;
}

function printNumber(pt: testeTipo){
  console.log('valor de x ' + pt.x);
  console.log('valor de y ' + pt.y);
}

printNumber({x: 300, y: 800})
// =+++++++++++++++++++++++++++++=
function teste(x? : number | null){
  console.log(x!.toFixed());
}

console.log(teste(null));

function pad(padding: number | string, input: string): string {
 if(typeof padding === 'number'){
  return " oi".repeat(padding) + input
 }
  return padding + input;
}

console.log(pad(4,"calabouço"));

function print(ss: string | Array<string> | null) {
  if(ss && typeof ss === "object") {
    for(const s of ss) {
      console.log(s);
    }
  }else if (typeof ss === "string") {
    console.log(ss);

  }
}
console.log(print(['ve','idjijd','hduhuhdu','idjidjd'],));
*/




