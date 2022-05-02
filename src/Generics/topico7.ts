// estudando Utilly Types
// -- Generics padrao TypesScript --
  // O tipo record significa ele pedi o tipo do valor
  //
//
//
const obj1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(obj1);

type PessoaProtocol = {
  nome?:      string;
  sobrenome?: string;
  idade?:     number;
}
// tipo Required em generics exige passar o valor
// Partial torna o valor como era com o ? nao obrigatorio passar o valor.
type PessoaRequired = Required<PessoaProtocol>;
type PessoaPartial = Partial<PessoaProtocol>;
type PessoaReandOnly = Readonly<PessoaProtocol>;
type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>

const objeto2: PessoaRequired = {
  nome: 'luiz',
  sobrenome: 'Miranda',
  idade: 30,
}
console.log(objeto2);

// extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

// ----
type AccontMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = {
  id: string;
  nome: string;
  idade: number;
};

const accontMongo: AccontMongo = {
  _id: 'wkdwjkksjkjekjkjskajksjas212s',
  nome: 'luiz',
  idade: 39,
};

function mapAccount(accontMongo: AccontMongo): AccountApi  {
    const {_id, ...acconData} = accontMongo;
    return { ...acconData, id: _id};
}

type AccApi = Pick<AccontMongo, Exclude<keyof AccontMongo, '_id'>> & {
  id: string;
};

const AccountApi = mapAccount(accontMongo);
console.log('API');
console.log(AccountApi);


export default 1;
