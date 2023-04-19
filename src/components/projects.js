import styled from "styled-components";

export default function Projects({language}) {
    return (
        <Container>
            {!language ? <>
                <h1>Projetos</h1>
                </> :
                <>
                    <h1>Projects</h1>
                </>
            }
        </Container>
    );
}

const Container = styled.div`
    height: 85vh;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    background-color: #555555;;

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