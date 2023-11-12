import { useState } from 'react';
import Movies2 from './movie2';

export default function Movies({data}){
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const clicou = (id) => {
        setSelectedMovieId(id);
    };

    return (

        <div>

            {selectedMovieId && <Movies2 id={selectedMovieId} />}

            <div>
            
            {data.Search.map( (m) => <div key={m.imdbID} >
                {m.Title} --- {m.Year} 
                <br/>

                <img src={m.Poster} alt={m.Title} 
                    style={{ width: '100px' , cursor: 'pointer'}} 
                    onClick={() => clicou(m.imdbID)}

                />
                
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

    const res = await fetch(`http://www.omdbapi.com/?apikey=e6f69885&s=${searchQuery}`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
}

