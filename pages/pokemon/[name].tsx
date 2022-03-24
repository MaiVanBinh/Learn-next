import { NextPage, GetServerSideProps } from 'next';
import React from 'react';
import type { Pokemon } from './index.d';
import Image from 'next/image';
import Link from 'next/link';
const pokemonDetail: React.FC<Pokemon> = ({ name, weight, image }) => {
    return (
        <>
            <h1>Pokemon detail</h1>
            <p>name: {name}</p>
            <p>weight: {weight}</p>
            <Image src={image} alt={name} width={150} height={150}/>
            <Link href="/pokemon">
                <a>Back</a>
            </Link>
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const name = context && context.params && context.params.name ? context.params.name : '';
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json();
    const pokemon = data;
    // Pass post data to the page via props
    return { props: { name: name, weight: pokemon.weight, image: pokemon.sprites.back_shiny} }
}
export default pokemonDetail;