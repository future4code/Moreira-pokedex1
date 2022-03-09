import React from "react";
import HeaderPokedex from "../../components/HeaderPokedex";
import { Link } from "react-router-dom";

const Pokedex = () => {
    return (
        <div>
            <h1>Página Pokedex</h1>
            <HeaderPokedex/>
            <Link to="/detalhes">Ir para Detalhes</Link>
        </div>
    )
}

export default Pokedex