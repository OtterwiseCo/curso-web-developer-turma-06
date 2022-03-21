//Levando em consideração o array [“joao”, “pedro”, “Gabriel”, “Mari”], \
//retorne um novo array com o seguinte padrão: [{id: 0, name: “joao”},
//{id: 1: name: “pedro”}, ...]

const users = ["joao", "pedro", "Gabriel", "Mari"];

const newUser = users.map((elem, index) => {
  return {
    id: index,
    name: elem,
  };
});

console.log(newUser);
