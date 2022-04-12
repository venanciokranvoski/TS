// ============== never ==================
 export function criaErro(): never {
   throw new Error("Erro qualquer");

 }
// funcao que nao retorna nada Never.
criaErro();
