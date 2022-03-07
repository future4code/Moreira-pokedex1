import React from "react";
import { Link } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome";


const Home = () => {
    return (
        <div>
            <h1>Página Home</h1>
            <HeaderHome />
            <Link to="/detalhes">Ir para Detalhes</Link>
        </div>
    )
}

export default Home