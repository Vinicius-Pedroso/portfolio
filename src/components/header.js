import styled from "styled-components";
import {Link} from 'react-scroll';
import React from 'react';

export default function Header({language, setLanguage}) {

  return (
    <Container>
        <h1>Vinicius Pedroso dos Reis</h1>
        {!language? <>
            <div>
            <h2><Link to="About" spy={true} smooth={true} offset={-80} duration={500}>Sobre mim</Link></h2>
            <h2><Link to="Education" spy={true} smooth={true} offset={-80} duration={500}>Educação</Link></h2>
            <h2><Link to="Skills" spy={true} smooth={true} offset={-80} duration={500}>Habilidades</Link></h2>
            <h2><Link to="Experience" spy={true} smooth={true} offset={-80} duration={500}>Experiências</Link></h2>
            <h2><Link to="Contacts" spy={true} smooth={true} offset={-80} duration={500}>Contatos</Link></h2>
            <img src="/assets/brasil.png" alt="brasil logo" onClick={() => setLanguage(false)}/>
            <img src="/assets/england.png" alt="england logo" onClick={() => setLanguage(true)}/>
            </div>
        </> :
        <>
            <div>
            <h2><Link to="About" spy={true} smooth={true} offset={-80} duration={500}>About</Link></h2>
            <h2><Link to="Education" spy={true} smooth={true} offset={-80} duration={500}>Education</Link></h2>
            <h2><Link to="Skills" spy={true} smooth={true} offset={-80} duration={500}>Skills</Link></h2>
            <h2><Link to="Experience" spy={true} smooth={true} offset={-80} duration={500}>Experience</Link></h2>
            <h2><Link to="Contacts" spy={true} smooth={true} offset={-80} duration={500}>Contacts</Link></h2>
            <img src="/assets/brasil.png" alt="brasil logo" onClick={() => setLanguage(false)}/>
            <img src="/assets/england.png" alt="england logo" onClick={() => setLanguage(true)}/>
            </div>
        </>}
    </Container>
  );
}

const Container = styled.div`
    height: 8vw;
    width: 100%;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    background-color: #333333;
    h1{
        padding: 35px 0px 35px 3%;
        font-size: 40px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }
    div {
        display: flex;
        padding-right: 5%;
    }
    h2 {
        width: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 10px;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
        color: white;
        
    }
    h2:hover {
        color: #f1c40f;
        cursor: pointer;
    }
    img {
        padding: 35px 0px 35px 3%;
        width: 32px;
        height: 32px;
    }
    img:hover {
        cursor: pointer;
    }
    @media only screen and (max-width: 900px) {
        height: 90px;
        img {
            width: 4vw;
            height: 4vw;
        }
        h1{
            font-size: 4vw;
        }
        h2{
            font-size: 2.2vw;
        }
    }
    @media only screen and (max-width: 700px) {
        height: 70px;
    }
    @media only screen and (max-width: 500px) {
        height: 50px;
    }
    @media only screen and (max-width: 350px) {
        height: 35px;
    }
    @media only screen and (max-width: 280px) {
        height: 28px;
    }
`