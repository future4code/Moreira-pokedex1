import React, {useContext} from "react";
import { Link } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome";
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/BASE_URL';
import GlobalStateContext from "../../Global/GlobalStateContext";

export default function Home(){

const pokemons =useContext(GlobalStateContext)
  

    return (
        <div>
            <h1>Página Home</h1>
            <HeaderHome />
            <Link to="/detalhes">Ir para Detalhes</Link>
            {pokemons.map (list =>(
             <> 
             <p>{list.name}</p>
             <img src={list.image} alt={list.name} style={{width: '10%'}}/>
             </>
            ))

            
            }
        </div>
        
    )
}
