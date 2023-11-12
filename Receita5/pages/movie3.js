import useSWR from 'swr'
import {useState} from 'react'
import Link from 'next/link';
import styles from '../style/movie3.module.css'

export default function Movies3(){

    const [url, setUrl] = useState('')

    const {data, error} = useSWR(url, theFetcher)

    const onClickHandler = (e) => {

        e.preventDefault()

        if (url === '') setUrl('http://www.omdbapi.com/?apikey=e6f69885&s=bagdad')

        else setUrl('')

    }



    return (

        <div className={styles['movies-container']}>

            <TheLink url={url} handler={onClickHandler}/>

            <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''}/>


        </div>

    )

}

async function theFetcher(url) {

    if (url === null || url === '') return {Search:''}

    const res = await fetch(url);

    const json = await res.json();

    return json;

}

export function TheMovies({data,show}){

    if (!show) return (<div></div>)    

    if (data.error) return (<div>falha na requisição</div>)

    if (data.Search === '' ) return (<div>carregando...</div>)

    return (

        <div className={styles['limits']} >

            { data.Search.map( (m) => <div className={styles['message-container']}  > 
                <p> {m.Title} </p> 
                <p> {m.Year} </p>
                <Link href={`/onimovie/${m.imdbID}`} passHref>
                  <img src={m.Poster} alt={m.Title} style={{ width: '100px' }} />
                </Link>
                </div> 

                ) 
            }            

        </div>

    )

}

export function TheLink({url, handler}){    

    return (

        <div>

            <a className={styles['botao']}  href="/movies3.js" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>

        </div>

    )

}