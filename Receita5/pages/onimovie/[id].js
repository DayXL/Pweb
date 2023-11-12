import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `http://www.omdbapi.com/?apikey=e6f69885&i=${id}` : null, fetcher);

  if (error) return <div>Falha na requisição</div>;
  if (!data) return <div>Carregando...</div>;

  const { Title, Year, Poster, Runtime, Genre, Director, Plot, Language, Country, Ratings } = data;

  return (
    <div>
      <h1>{Title}</h1>
      <p>{Year}</p>
      <p>Runtime: {Runtime}</p>
      <p>Genre: {Genre}</p>
      <p>Director: {Director}</p>
      <p>Plot: {Plot}</p>
      <p>Language: {Language}</p>
      <p>Country: {Country}</p>
      {/* Exemplo de como exibir as classificações */}
      <p>Ratings:</p>
      <ul>
        {Ratings.map((rating, index) => (
          <li key={index}>
            {rating.Source}: {rating.Value}
          </li>
        ))}
      </ul>
      <img src={Poster} alt={Title} style={{ width: '100px' }} />
    </div>
  );
}

async function fetcher(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Falha na requisição.');
  }

  const json = await res.json();

  return json;
}
