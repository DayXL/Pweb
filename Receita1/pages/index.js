export default function Home(){

    return (
 
       <div>
 
          <h1>
 
            Viva Santana!
 
          </h1>

          <Cat/>

          <Botao/>
 
       </div>
 
    )
 
}

export function Cat(){

    return (
 
 
        <h2>
 
            Viva Gatos!
 
        </h2>
 
 
    )
 
}

export function Botao(){ 

    return (
 
 
        <button> Aperte </button>
 
 
    )
 
}