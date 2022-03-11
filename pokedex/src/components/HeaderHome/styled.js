import styled from 'styled-components'


export const Div =styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
`

export const Nav= styled.nav`
  background: white; 
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  height:70px;
  width: 100%;

    .icon{
    font-size:1.5em;
  }
`

export const Button =styled.button`
  position: relative;

  display: flex;
  align-items: center;
  border:none;
  border-radius: 10em;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-size:0,8em;
  text-align: center;
  color: black;
  cursor: pointer;
  background-color: white;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: transform 0.9s;
    :hover {
      box-shadow: 0 0 4px 0 black inset, 0 0 4px 2px black;
    }
    :active{
      box-shadow: 0 0 4px 0 black inset, 0 0 4px 2px black;
      background-color: white;
      color: black;
    }
`


export const Img= styled.img`
 width: 10%;
 margin-right: 70%;
`

export const ButtonCreate =styled.button`
  position: relative;
  display: flex;
  right: 40px;
  align-items: center;
  border:none;
  border-radius: 10em;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-size:0,8em;
  text-align: center;
  color: black;
  cursor: pointer;
  background-color: white;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: transform 0.9s;
    :hover {
     box-shadow: 0 0 4px 0 black inset, 0 0 4px 2px black;
    }
    :active{
      background-color: white;
      color: black;
      box-shadow: 0 0 4px 0  inset, 0 0 4px 2px black;
    }
`
