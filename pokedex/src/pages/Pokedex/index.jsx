import React, {useContext} from "react";
import HeaderPokedex from "../../components/HeaderPokedex";
import { Link } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";

const Pokedex = () => {
    const {pokemons, pokedex, lista, setLista, setPokemons, setPokedex}
    =useContext(GlobalStateContext)


    const onClickRemover = ((RemovePoke)=>{
        const novaLista = lista.filter((poke)=>{
            return poke.name !== RemovePoke.name
        })
        setLista(novaLista)
    })


    return (
        <div>
            <h1>Página Pokedex</h1>
            <HeaderPokedex/>
            <Link to="/detalhes">Ir para Detalhes</Link>
            {lista.map (list =>(
                <div key={list.name}> 
                    <p>{list.name}</p>
                    <img src={list.image} alt={list.name} style={{width: '10%'}}/>
                    {/* <button key={list.id} onClick={()=>onClickPokemon(list.name)}>Detalhes</button> */}
                    <button onClick={()=>onClickRemover(list)} >Remover</button>
                </div>
            ))}
        </div>
    )
}

export default Pokedex