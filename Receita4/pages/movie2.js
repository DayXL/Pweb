import useSWR from 'swr';

export default function Movies2({ id }) {
  const { data, error } = useSWR(`http://www.omdbapi.com/?apikey=e6f69885&i=${id}`, fetcher);

  if (error) return <div>Falha na requisição. Tente novamente mais tarde.</div>;

  if (!data) return <div>Carregando...</div>;

  return (
    <div style={{ border: '2px solid black', padding: '10px'}}>
      <h2>{data.Title}</h2>

      {montar("Year", data.Year)}
      {montar("Rated", data.Rated)}
      {montar("Released", data.Released)}
      {montar("Runtime", data.Runtime)}
      {<img src={data.Poster} alt={data.Title} style={{ width: '100px' }} />}

    </div>
  );
}

function montar(label, value) {
  return value ? <p>{`${label}: ${value}`}</p> : null;
}

async function fetcher(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Falha na requisição.');
  }

  const json = await res.json();

  return json;
}