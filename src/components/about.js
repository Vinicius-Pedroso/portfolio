import styled from "styled-components";
// import chad from '../public/assets/chad.jpg';

export default function About() {
  return (
    <Container>
        <img src="/assets/chad.png" alt="Chad"></img>
        <div>
        <h1>Deuso</h1>
        <h1>Sexy</h1>
        <h1>Gostoso</h1>
        <h1>Carismático</h1>
        <h1>Pauzudo</h1>
        <h1>Cheiroso</h1>
        </div>
        
    </Container>
  );
}


const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 120px;
    background-color: #080808;

    img {
        height: 30%;
        width: 30%;
        border: none;
        border-radius: 100%;
    }

    h1{
        font-size: 40px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }
`