import styled from "styled-components";

export default function Contacts() {
  return (
    <Container>
        <h1>Contacts</h1>
        <h2>Ganhar dinheiro, tomar café e jogar smash</h2>
        
    </Container>
  );
}


const Container = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #080808;

    h1{
        padding-top: 10vh;
        font-size: 40px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }

    div {
        display: flex;
    }

    h2 {
        padding-top: 5vh;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }
`