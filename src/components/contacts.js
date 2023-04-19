import styled from "styled-components";

export default function Contacts({language}) {
    return (
        <Container>
            {!language ? <>
                    <h1>Contatos</h1>
                    <h2>GitHub</h2>
                    <h2>Linkedin</h2>
                    <h2>Currículo</h2>
                </> :
                <>
                    <h1>Contacts</h1>
                    <h2>GitHub</h2>
                    <h2>Linkedin</h2>
                    <h2>Curriculum</h2>
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
    width: 100%;
    bbackground-color: #333333;

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