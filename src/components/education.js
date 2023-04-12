import styled from "styled-components";

export default function Education(language) {
    console.log(language)
    return (
        <Container>
            {language ? <>
                <h1>Educação</h1>
            </> :
                <>
                    <h1>Education</h1>
                </>}
            <div>
                <div>
                    <img src="/assets/poli.png" />
                    {language ? <>
                        <h1>Escola politécnica da USP</h1>
                        <h2>Engenharia Elétrica</h2>
                    </> :
                        <>
                            <h1>Escola politécnica da USP</h1>
                            <h2>Electrical Engineering</h2>
                        </>}
                </div>
                <div>
                    <img src="/assets/driven.png" />
                    {language ? <>
                        <h1>Driven Education</h1>
                        <h2>Desenvolvedor Web Fullstack</h2>
                    </> :
                        <>
                            <h1>Driven Education</h1>
                            <h2>Fullstack Web Developer</h2>
                        </>}
                </div>
                <div>
                    <img src="/assets/stanford.png" />
                    {language ? <>
                        <h1>Stanford University</h1>
                        <h2>Supervised Machine Learning</h2>
                    </> :
                        <>
                            <h1>Stanford University</h1>
                            <h2>Supervised Machine Learning</h2>
                        </>}
                </div>
            </div>
        </Container>
    );
}


const Container = styled.div`
    height: 85vh;
    margin-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    background-color: #555555;

    h1{
        margin-top: 10vh;
        font-size: 30px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;
        color: white;
        text-decoration: underline;
        text-decoration-color: silver;
    }

    div {
        padding-top: 3%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div{
            flex-direction: column;
        }
    }

    h2 {
        padding-top: 5vh;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }

    h3{
        margin-top: 10vh;
        font-size: 30px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;
        color: white;
        text-decoration: underline;
        text-decoration-color: silver;
    }

    img {
        width: 15vw;
        height: 15vw;
    }
`