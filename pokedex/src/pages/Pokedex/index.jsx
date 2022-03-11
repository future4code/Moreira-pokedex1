import React, {useContext} from "react";
import HeaderPokedex from "../../components/HeaderPokedex";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { Link, useNavigate } from "react-router-dom";

const Pokedex = () => {
    const {pokemons, pokedex, lista, setLista, setPokemons, setPokedex}
    =useContext(GlobalStateContext)


    const onClickRemover = ((RemovePoke)=>{
        const novaLista = lista.filter((poke)=>{
            return poke.name !== RemovePoke.name
        })
        setLista(novaLista)
    })

    const navigate = useNavigate()

    const onClickPokemon = (name)=>{
        verDetalhes(navigate, name)
    }

    const verDetalhes =(navigate, name) => {
        navigate(`/detalhes/${name}`)
    }


    return (
        <div>
            <h1>Página Pokedex, falta botão detalhes</h1>
            <HeaderPokedex/>
            
            {lista.map (list =>(
                <div key={list.name}> 
                    <p>{list.name}</p>
                    <img src={list.image} alt={list.name} style={{width: '10%'}}/>
                    {/* <button key={list.id} onClick={()=>onClickPokemon(list.name)}>Detalhes</button> */}
                    <button onClick={()=>onClickRemover(list)} >Remover</button>
                    <button key={list.id} onClick={()=>onClickPokemon(list.name)}>Detalhes</button>
                </div>
            ))}
        </div>
    )
}

export default Pokedex