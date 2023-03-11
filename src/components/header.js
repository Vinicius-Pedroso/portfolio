import styled from "styled-components"

export default function Header() {
  return (
    <Container>
        <h1>Vinicius Pedroso dos Reis</h1>
        <div>
            <h2>About me</h2>
            <h2>Goals</h2>
            <h2>Skills</h2>
            <h2>Education</h2>
            <h2>Projects</h2>
            <h2>Contacts</h2>
        </div>
    </Container>
  );
}

const Container = styled.div`
    height: 80px;
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
    }

    h2 {
        padding: 35px 10px 35px 0px;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }
`