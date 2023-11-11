export default function Movies({data}){

    return (

        <div>

            <div>

            {data.Search.map( (m) => <div>{m.Title} --- {m.Year} 
                <br/>
                <img src={m.Poster} alt={m.Title} style={{ width: '100px' }} />
                
            </div>  )}               

            </div>

        </div>

    )

}

export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=e6f69885&s=bagdad&y=1953`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
}

