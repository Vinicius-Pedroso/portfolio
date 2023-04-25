import styled from "styled-components";

export default function Education({language}) {
    console.log(language)
    return (
        <Container>
            {!language ? <>
                <h1>Educação</h1>
            </> :
            <>
                <h1>Education</h1>
            </>}
            <div>
                <div>
                    <img src="/assets/poli.png" alt="Logo Poli"/>
                    {!language ? <>
                        <h1>Escola politécnica da USP</h1>
                        <h2>Bacharelado</h2>
                        <h3>Engenharia Elétrica</h3>
                    </> :
                    <>
                        <h1>Escola politécnica da USP</h1>
                        <h2>Bachelor</h2>
                        <h3>Electrical Engineering</h3>
                    </>}
                </div>
                <div>
                    <img src="/assets/driven.png" alt="Logo Driven"/>
                    {!language ? <>
                        <h1>Driven Education</h1>
                        <h2>Curso profissionalizante</h2>
                        <h3>Desenvolvedor Web Fullstack</h3>
                    </> :
                    <>
                        <h1>Driven Education</h1>
                        <h2>Certificate programs</h2>
                        <h3>Fullstack Web Developer</h3>
                    </>}
                </div>
                <div>
                    <img src="/assets/stanford.png" alt="Logo Stanford"/>
                    {!language ? <>
                        <h1>Stanford University</h1>
                        <h2>Curso online</h2>
                        <h3>Supervised Machine Learning</h3>
                    </> :
                    <>
                        <h1>Stanford University</h1>
                        <h2>Online course</h2>
                        <h3>Supervised Machine Learning</h3>
                    </>}
                </div>
            </div>
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
    background-color: #555555;

    div {
        padding-top: 3%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div{
            flex-direction: column;
        }
    }

    h1{
        margin-top: 10vh;
        margin-bottom: 5vh;
        font-size: 30px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;
        color: white;
        text-decoration: underline;
        text-decoration-color: silver;
    }

    

    h2 {
        margin-bottom: 1vh;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }

    h3{
        margin-bottom: 5vh;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }

    img {
        width: 15vw;
        height: 15vw;
    }
`