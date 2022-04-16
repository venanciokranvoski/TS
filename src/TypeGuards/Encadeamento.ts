// encadeamento opcional e Operador de coalesce nula
type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
}

const doc: Documento = {
  titulo: 'O Cara legal',
  texto: 'O texto',
  //data: new Date(),
}

// --------------------------------------
// estqa expressao de ? indica o encadeamento opcional
// em sintaxe ele introduz no codigo a opcao [ai vim valor ou nao]
// --------------------------------------
// null & undefined [nao existe valor]

// a coalesce nula verifica o valor da esquer da para a direita
// para ver se existem oos valores caso nao exista ele cancela.
console.log(doc.data?.toDateString() ?? 'Os valores nao existem mais aqui!');

