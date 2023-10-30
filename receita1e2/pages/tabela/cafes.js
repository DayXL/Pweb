
export function Cafes(props){
    return (
  
       <tbody>
          { props.bebidas.map((bebida, index) => (
            <tr key={index}>
            <td>{bebida.nome}</td>
            <td>{bebida.tipo}</td>
            <td>{bebida.preco}</td>
            </tr>   
            ))}

       </tbody>
  
    )
  
  }