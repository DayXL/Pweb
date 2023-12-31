
let cervejas = []

let cabecalho = [
    {
        coluna: "Nome",
        propriedade: "first_name"
    },
    {
        coluna: "Sobrenome",
        propriedade: "last_name"
    },
    {
        coluna: "Nome de Usuário",
        propriedade: "username"
    },
    {
        coluna: "E-mail",
        propriedade: "email"
    },
    {
        coluna: "Gênero",
        propriedade: "gender"
    },
    {
        coluna: "Telefone",
        propriedade: "phone_number"
    },
    {
        coluna: "Data de Nascimento",
        propriedade: "date_of_birth" 
    },
];


async function carregarCervejas(){

    try{

       let res = await fetch("https://random-data-api.com/api/v2/users?size=3")

       cervejas = await res.json()

       carregarTabela(cervejas, "cervejasTbody", "colunas", cabecalho)

    }catch(err){

       document.getElementById("colunas").innerHTML = "Ops"

    }

 }

function carregarTabela (cs, idLinha, idColuna, colunas) {
    const tbody = document.getElementById(idLinha);
    tbody.innerHTML = "";

    const thead = document.getElementById(idColuna);
    thead.innerHTML = "";

    const theadRow = document.createElement("tr");

    colunas.forEach(coluna => {
          const th = document.createElement("th");
          th.textContent = coluna.coluna;
          theadRow.appendChild(th);
    });

    thead.appendChild(theadRow);

    cs.forEach(item => {
       const row = document.createElement("tr");
       colunas.forEach(coluna => {
          const cell = document.createElement("td");
          cell.textContent = item[coluna.propriedade];
          row.appendChild(cell);
       });
       
       tbody.appendChild(row);
    });
};

let botao = document.getElementById("botaoCarregar");

botao.addEventListener("click", () => carregarCervejas());
