// estrutura de dados Enum ========
// E literalmente um objeto
enum Cores {
  VERMELHO,
  AMARELHO,
  PRETO,
  AZUL,
  CINZA,
  MARROM,
  ROSA,
  CASTANHO,
}

// enum pode ser criado tanto com strings como numeros tambem
// com enum eu posso definir um valor para ele como chave.
// ele contabiliza os indexes a partir de um iniciador assim ele continua o seu calculo.

enum Cores {
  BRANCO= 40,
  BORBOLETA=5
}
console.log(Cores)


function escolhaCor(a : Cores) : void {
  console.log(Cores[a]);
}

escolhaCor(Cores.VERMELHO);
