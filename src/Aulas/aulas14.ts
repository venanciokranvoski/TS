// ==================
// Intersection types
// &  A ideia e criar tipos enchutos que eu possa reutilizar
// & ----------------
// ==================
type TemNome       = { nome:  string };
type TemSobrenome  = { sobrenome:  string };
type TemIdade      = { idade: number };
type Pessoa        =  TemNome & TemIdade & TemSobrenome;

const P: Pessoa = {
    nome: 'augusto Cury',
    idade: 51,
    sobrenome: 'alves'
}

console.log(P);

export
{ Pessoa}
