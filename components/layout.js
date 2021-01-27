import React from 'react';
import Head from 'next/Head';

export default function layout({title, children}) {
    return (
        
        <div className='bg-grey-300'>
            <Head>
            <title>{title}</title>
            <link rel='icon' href='favicon.ico'/>
            </Head>
        <main className='container mx-auto max-w-xl pt-8 min-h-screen'>
            {children}
        </main>
        </div>
    );
}

export async function getStaticProps(context){
    try {
        const res =await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        const {results} = await res.json()
        const pokemon = results.map((result, index) => {
            const paddedIndex = ("00" + (index + 1)).slice(-3);
            const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
            https: return {
                ...result,
                image
            };
        })
        return{
            props: {pokemon}
        }
    } catch (error) {
        console.error(error)
    }
    
}
