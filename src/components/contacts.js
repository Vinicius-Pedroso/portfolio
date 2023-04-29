import styled from "styled-components";

export default function Contacts({ language }) {
    return (
        <Container>
            {!language ? <>
                <h1>Contatos</h1>
                <h2><a href="https://github.com/Vinicius-Pedroso" target="_blank">GitHub</a></h2>
                <h2><a href="https://www.linkedin.com/in/vinicius-pedroso-dos-reis-832047230/" target="_blank">Linkedin</a></h2>
                <h3><a href="/assets/curriculo.pdf" download>Currículo</a></h3>
            </> :
                <>
                    <h1>Contacts</h1>
                    <h2><a href="https://github.com/Vinicius-Pedroso" target="_blank">GitHub</a></h2>
                    <h2><a href="https://www.linkedin.com/in/vinicius-pedroso-dos-reis-832047230/" target="_blank">Linkedin</a></h2>
                    <h3><a href="/assets/curriculo.pdf" download>Curriculum</a></h3>
                </>
            }
        </Container>
    );
}

const Container = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    height: auto;
    width: 90%;

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

    a{
        color: white;
        text-decoration: none;
    }

    a:hover {
        color: #f1c40f;
        cursor: pointer;
    }

    h2 {
        padding-top: 5vh;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
    }

    h3 {
        padding-top: 5vh;
        padding-bottom: 5vh;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
    }
`