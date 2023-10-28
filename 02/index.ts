type usuario = {
  nome: string;
  idade: number;
  status: boolean;
};

const usuarios: usuario[] = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

const filtrarNome = (listaUsuarios: usuario[], valor: string): usuario[] => {
  return listaUsuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(valor.toLowerCase())
  );
};

console.log(filtrarNome(usuarios, "gu"));
