import { Cafes } from "./tabela/cafes";
import { Colunas } from "./tabela/colunas";

const colunas = [
    { nome: "Bebida", tipo: "string" },
    { nome: "Tipo", tipo: "string" },
    { nome: "Preço", tipo: "string" }

];

const cafes = [
    { nome: "Café Expresso", tipo: "Forte", preco: "$2" },
    { nome: "Café Latte", tipo: "Leitoso", preco: "$3" },
    { nome: "Café Americano", tipo: "Suave", preco: "$2.5" }
];

export default function Home(){

    return (
 
       <div>
 
          <h2> Bebidas </h2>

          <table border="1" width="500"> 
            <Colunas colunas = {colunas}/>
            <Cafes  bebidas = {cafes}/>

          </table>

       </div>
 
    )
 
 }