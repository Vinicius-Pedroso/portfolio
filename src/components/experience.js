import styled from "styled-components";

export default function Experience({ language }) {
    return (
        <Container>
            {!language ? <>
                <h1>Experiências</h1>
                <div>
                    <div>
                        <img src="/assets/CEE.png" alt="Logo CEE" />
                        <h5>Diretor Acadêmico do CEE</h5>
                        <h2>Organização de Eventos</h2>
                        <h3>- Protecs</h3>
                        <h3>- SEnEC</h3>
                        <h3>Divulgação de eventos e Informações</h3>
                        <h3>Representação dos interesses dos alunos diante o corpo acadêmico da faculdade</h3>
                        <h5>Projetos</h5>
                        <h2>Front-End</h2>
                        <h3>- Cineflex</h3>
                        <h3>- E-commerce</h3>
                        <h2>Back-End</h2>
                        <h3>- Drivencare</h3>
                        <h2>Fullstack</h2>
                        <h4>- Linkr</h4>
                    </div>
                </div>
            </> :
                <>
                    <h1>Experience</h1>
                    <div>
                        <div>
                            <img src="/assets/CEE.png" alt="CEE Logo" />
                            <h5>CEE Academic Director</h5>
                            <h2>Events organization</h2>
                            <h3>- Protecs</h3>
                            <h3>- SEnEC</h3>
                            <h3>Event promotion and information dissemination</h3>
                            <h3>Representation of student interests to the academic body of the college</h3>
                            <h5>Projects</h5>
                            <h2>Front-End</h2>
                            <h3>- Cineflex</h3>
                            <h3>- E-commerce</h3>
                            <h2>Back-End</h2>
                            <h3>- Drivencare</h3>
                            <h2>Fullstack</h2>
                            <h4>- Linkr</h4>
                        </div>
                    </div>

                </>
            }
        </Container>
    );
}

const Container = styled.div`
    height: auto;
    margin-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    background-color: #555555;;

    div {
        padding-top: 3%;
        padding-right: 5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div{
            flex-direction: column;
        }
    }

    h1{
        padding-top: 10vh;
        font-size: 40px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }

    h2 {
        padding-top: 9px;
        font-size: 16px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }

    h3 {
        padding-top: 4px;
        padding-left: 10px;
        font-size: 14px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }

    h4 {
        padding-top: 4px;
        padding-left: 10px;
        padding-bottom: 10%;
        font-size: 14px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }

    h5{
        padding-top: 10vh;
        font-size: 28px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }

    img {
        max-width: 10vw;
        max-height: 10vw;
    }
`