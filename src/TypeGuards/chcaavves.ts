type Veiculo = {
  marca: string;
  ano:number;
}


type Cor = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
}

const cc: Cor = {
  brand: 'forsd',
  year:  2020,
  name:  'Nome',
}
console.log(cc);
