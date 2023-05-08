import styled from 'styled-components'
//import { Link } from 'react-routes'

export const Nav = styled.nav`
    align-items: center;
    background: var(--cor-gray);
    display: flex;
    height: 100px;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
    z-index: 99;
    margin-bottom: .5rem;
`
export const Container = styled.div``

export const Logo = styled.img`
    margin-left: -1rem;
    width: 150px;
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    height: auto;

    @media (max-width:840px){
        background: var(--cor-gray);
        backdrop-filter: blur(3px);
        display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
        flex-direction: column;
        height: 100%;
        justify-content: start;
        opacity: .95;
        padding: 1rem 2rem;
        position: absolute;
        right: 0;
        top: 80px;
        width: 70%;
        z-index: 99;
    }
`
export const ItemMenu = styled.li`
    margin: 0 1rem;

    @media (max-width: 840px){
        margin: 1rem auto;
    }
`
export const LinkItem = styled.a`
    color: var(--cor-yellow);
    cursor: pointer;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: capitalize;

    :hover{
        color: var(--cor-light);
        font-size: 1.2rem;
    }
`

export const ButtonMenu = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 2rem;

    @media (max-width: 840px){
        display: flex;
    }
`
export const IconMenu = styled.i`
    svg{
        color: var(--cor-yellow);
        height: 40px;
        width: 40px;
    }

    :hover{
        color: var(--cor-light);
        cursor: pointer;
    }
`

