import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome";
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/BASE_URL';
import GlobalStateContext from "../../Global/GlobalStateContext";

export default function Home(){

    const {pokemons, pokedex, lista, setLista, setPokemons, setPokedex}
    =useContext(GlobalStateContext)
    
    const navigate = useNavigate()

    const onClickPokemon = (name)=>{
        verDetalhes(navigate, name)
    }

    const verDetalhes =(navigate, name) => {
        navigate(`/detalhes/${name}`)
    }

    const onClickAdd = ((poke)=>{
        const novaLista = pokemons.filter(item=>{
            return item !== poke
        })
        setPokemons([poke, ...lista.pokemons])
        setLista(novaLista)
    })


    return (
        <div>
            <h1>Página Home</h1>
            <HeaderHome />
            
            {pokemons.map (list =>(
             <> 
             <p>{list.name}</p>
             <img src={list.image} alt={list.name} style={{width: '10%'}}/>
             <button onClick={()=>onClickAdd(list)} >Adicionar</button>
             <button key={list.id} onClick={()=>onClickPokemon(list.name)}>Detalhes</button>
             </>
            ))}
        </div>
        
    )
}
