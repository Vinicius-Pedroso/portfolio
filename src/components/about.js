import styled from "styled-components";

export default function About({language}) {
  return (
    <Container>
        <img src="/assets/chad.png" alt="Chad"></img>
        <div>
            {language ? <>
                <h1>Olá! Meu nome é Vinicius Pedroso dos Reis e tenho paixão pela área tecnológica, 
            tanto na minha vida pessoal quanto na minha construção de carreira. Próximo de
            me formar em engenharia elétrica, busco estágio e experiência em especial nas
            áreas de desenvolvimento de novas tecnologias, uso de ferramentas digitais, desenvolvedor web or
            automação de processos.</h1>
            </> :
            <>
                <h1>Hello! My name is Vinicius Pedroso dos Reis and I'm passionate about technology for both, my professional life and my personal as well.
            Graduating soon in Electrical Engineering at USP, I'm currently searching for a Job or a Intership in any technological field, but mostly
            in research & development of new technology, working with digital tools, web development or process automation</h1>
            </>}            
        </div>
    </Container>
  );
}


const Container = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 15%;
    background-color: #080808;

    img {
        padding-left: 5%;
        height: 80%;
        width: 80%;
        border: none;
        border-radius: 100%;
    }

    h1{
        padding-left: 5%;
        padding-right: 5%;
        font-size: 28px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }


    @media only screen and (max-width: 900px) {
        h1{
            font-size: 3vw;
        }

        img {
            width: 32vw;
            height: 32vw;
        }
    }
`

