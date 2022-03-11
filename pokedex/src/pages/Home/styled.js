import styled from 'styled-components'

export const PageHome = styled.div`
display: flex;
flex-direction: column;

width: 100%;

`

export const Div = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  justify-content: space-around;






`

export const Button = styled.div `
    border-radius: 10em;
    width: 10px;
    border: none;
    border: 1px solid transparent;
    background-color: #FFCC03;
    transition: 0.2s ease;
    align-self: center; 
    font-size: 0.8em;
    margin-left: 0.5em;
    padding: 0.5em;
    padding-left: 10em;
    padding-right: 2em;
    font-size:1em;
    font-weight: bold;
    text-align: center;
    color: #386ABB;
    cursor: pointer;
    transition: transform 0.5s;
        :hover{
        background-color: #386ABB;
        color:white;
        transform: scale(1.5);
      }
      :active{
        background-color: transparent;
      
      }
`

export const FotoPokemon = styled.img `
  width: 200px;


`

export const DivPokemon = styled.div `
 display: flex;
 flex-direction: column;
 align-items: center;
 border: 2px solid #386ABB;
  height: 300px;
  width:500px;
  border-radius: 20px;
  margin-top: 10px;

  .nome{
    font-size:20px;
    font-weight: bold;
  }
  

`
export const DivButton = styled.div `
  display: flex;
  flex-direction: row;
  width: 50px;


`

