import React from "react";
import { Link } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome";
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/BASE_URL';

export default function Home(){

  const pokemon = useRequestData([{}], `${BASE_URL}/pokemon`);
    console.log(pokemon)
  
    
    const listaPokemon = pokemon.map((item) =>{
    return(
      <div key={item.id}> 
      <p>{item.name}</p>
      <img src={item.url}/>
      
      </div>
    );
  })

    return (
        <div>
            <h1>Página Home</h1>
            <HeaderHome />
            <Link to="/detalhes">Ir para Detalhes</Link>
            {listaPokemon}
        </div>
        
    )
}
