import React, {useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome";
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/BASE_URL';
import GlobalStateContext from "../../Global/GlobalStateContext";

export default function Home(){

    const {pokemons, pokedex, lista, paginacao, setPaginacao, setLista, setPokemons, setPokedex}
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
             return item.name == poke            
        })
     
        const index = lista.findIndex((i)=>{
            return i.name === poke
        })
    
        if(index === -1){
            const listaPokes = lista
            listaPokes.push(novaLista[0])
            setLista(listaPokes)
        }else {
            alert("Pokemon já adicionado a lista")
        }
    
    })



    return (
        <div>
            <h1>Página Home</h1>
            <HeaderHome />
            
            {pokemons.map (list =>(
             <> 
             <p>{list.name}</p>
             <img src={list.image} alt={list.name} style={{width: '10%'}}/>
             <button onClick={()=>onClickAdd(list.name)} >Adicionar</button>
             <button key={list.id} onClick={()=>onClickPokemon(list.name)}>Detalhes</button>
             </>
            ))}


            <button onClick={()=>setPaginacao(paginacao>5? paginacao-5 : paginacao)}>Página anterior</button>
            
            <button onClick={()=>setPaginacao(paginacao + 5)}>Próxima página</button>

        </div>
        
    )
}
