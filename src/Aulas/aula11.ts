//Union types
function addOrConcat(a: number | string, b: number | string) {
  if(typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10,80));
console.log(addOrConcat(10,'80'));
console.log(addOrConcat('10',80));
console.log(addOrConcat('10','80'));
console.log(addOrConcat('10',80));
console.log(addOrConcat(10,80));
console.log(addOrConcat('10',80));


