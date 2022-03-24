import type { NextPage } from 'next';
import { useAppSelector, useAppDispatch } from './../app/hooks'
import { useGetPokemonQuery } from '../features/pokemon/pokemonApis';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { setPage } from './../features/pokemon/pokemonSlice';

const Pokemon: NextPage = () => {
    const page = useAppSelector((state) => state.pokemon.page)
    const { data, error, isLoading } = useGetPokemonQuery(page);
    const [maxPage] = useState(10);
    const dipatch = useAppDispatch();

    useEffect(() => {
        console.log(page);
    }, [page]);


    const prevPageHandler = () => {
        if (page > 1) dipatch(setPage(page - 1));
    }
    const nextPageHandler = () => {
        if (page < maxPage) dipatch(setPage(page + 1));
    }
    if (isLoading) {
        return <h1>Loading</h1>;
    }
    if (error) {
        return <h1>error</h1>;
    }
    return (
        <>
        
            {data && data.results ? <ul> {data.results.map(pokemon => <li key={pokemon.name}><Link href={`pokemon/${pokemon.name}`}><a>name: {pokemon.name}</a></Link> </li>)}</ul> : null}
            <div style={{display: "flex", flexDirection: "row"}}>
            <button onClick={prevPageHandler}>Previous</button>
            <p style={{margin: "0 10px"}}>{page}</p>
            <button onClick={nextPageHandler}>Next</button>
            </div>
            <Link href="/">
                <a>Home page</a>
            </Link>
        </>
    )
}
export default Pokemon;