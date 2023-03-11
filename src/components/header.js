import styled from "styled-components"

export default function Header({language, setLanguage}) {
  return (
    <Container>
        <h1>Vinicius Pedroso dos Reis</h1>
        {language? <>
            <div>
            <h2>Sobre mim</h2>
            <h2>Educação</h2>
            <h2>Habilidades</h2>
            <h2>Projetos</h2>
            <h2>Contatos</h2>
            <img src="/assets/england.png" alt="england logo" onClick={() => setLanguage(false)}/>
            </div>
        </> :
        <>
            <div>
            <h2>About</h2>
            <h2>Skills</h2>
            <h2>Education</h2>
            <h2>Projects</h2>
            <h2>Contacts</h2>
            <img src="/assets/brasil.png" alt="brasil logo" onClick={() => setLanguage(true)}/>
            </div>
        </>}
    </Container>
  );
}

const Container = styled.div`
    height: 15vh;
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
        display: flex;
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
`


// {language ? <>
    
// </> :
// <>

// </>}