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
    const { query } = context;

    let searchQuery = "bagdad"; 

    if (query.title) {
        searchQuery = query.title;
    }

    const res = await fetch(`http://www.omdbapi.com/?apikey=e6f69885&s=${searchQuery}&y=1953`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
}

