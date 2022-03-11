import React from "react";
import {Link} from "react-router-dom";
import { useNavigate} from "react-router-dom";
import {Div, Img, ButtonBack, Nav, ButtonCreate, Button} from './styled';
import {BiLogIn} from 'react-icons/bi';



const HeaderHome = () => {
    return (
      <Div>
        <Link to="/pokedex"><BiLogIn className="icon"/>Lista Pokedex</Link>
      </Div>
    )
}

export default HeaderHome