

export function Colunas(props){
   return (
 
      <thead>
         {
            props.colunas.map((coluna, index) => (
               <th key={index} width="10%">{coluna.nome}</th>
            ))
         }
      </thead>
 
   )
 
}