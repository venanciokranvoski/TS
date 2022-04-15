// Cores chave

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
}

function tra(cor: CoresChaves,
   cores:  CoresObj ){
   return cores[cor]
}
