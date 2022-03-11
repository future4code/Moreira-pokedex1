import React, {useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome";
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/BASE_URL';
import GlobalStateContext from "../../Global/GlobalStateContext";
import {PageHome, DivButton, Div, Button, DivPokemon, FotoPokemon} from './styled';

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
    
        const index = lista.findIndex((i)=>{
            return i.name === poke. name
        })
    
        if(index === -1){
            const listaPokes = lista
            listaPokes.push(poke)
            setLista(listaPokes)

            const novaLista = pokemons.filter((removePoke)=>{ //removendo da home
              return removePoke.name !== poke.name
          })
          setPokemons(novaLista)
        }
    
    })



    return (
      <div>
        <HeaderHome />
        <Div>
               {pokemons.map (list =>(
               <DivPokemon key={list.name}> 
                    <p className="nome">{list.name}</p>
                    <FotoPokemon src={list.image} alt={list.name}/>
                    <DivButton>
                      <Button onClick={()=>onClickAdd(list)} >Adicionar</Button>
                      <Button key={list.id} onClick={()=>onClickPokemon(list.name)}>Detalhes</Button>
                    </DivButton>
              </DivPokemon>
            ))}
            


            <Button onClick={()=>setPaginacao(paginacao>=20? paginacao-20 : paginacao)}>Página anterior</Button>
            
            <Button onClick={()=>setPaginacao(paginacao + 20)}>Próxima página</Button>
          
        </Div>
      </div>
        
    )
}
