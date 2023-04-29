import styled from "styled-components";
import React from 'react';

export default function Skills({ language }) {

    return (
        <Container id='Skills'>
            {!language ? <>
                <h1>Habilidades</h1>
                <Column>

                    <div>
                        <h4>Hard Skills</h4>
                        <h2>Fullstack</h2>
                        <h3>- CSS</h3>
                        <h3>- HTML</h3>
                        <h3>- Javascript</h3>
                        <h3>- Typescript</h3>
                        <h3>- React</h3>
                        <h2>Banco de dados</h2>
                        <h3>- MongoDB</h3>
                        <h3>- PostgreSQL</h3>
                        <h3>- Prisma</h3>
                        <h2>Técnicas com IAs</h2>
                        <h3>- Supervised Machine Learning</h3>
                        <h2>Técnicas de Engenharia</h2>
                        <h3>- Cálculo avançado</h3>
                        <h3>- Métodos com estátistica e probabilidade</h3>
                        <h3>- Várias linguagens de programação</h3>
                        <h3>- Noções de manuseio com Hardware</h3>
                        <h4>Soft Skills</h4>
                        <h3>- Trabalho em equipe</h3>
                        <h3>- Receptivo à feedbacks</h3>
                        <h3>- Solução de problemas </h3>
                        <h5>- Flexibilidade e Adaptação</h5>
                    </div>
                    <Language>
                        <div>

                            <img src="/assets/html.png" alt="Logo HTML" />


                            <img src="/assets/css.webp" alt="Logo CSS" />


                            <img src="/assets/JavaScript.png" alt="Logo Javascript" />

                        </div>
                        <div>
                            <img src="/assets/C.png" alt="Logo C++" />
                            <img src="/assets/python.png" alt="Logo Python" />
                            <img src="/assets/Typescript.png" alt="Logo Typescript" />
                        </div>
                        <div>
                            <img src="/assets/react.png" alt="Logo React" />
                            <img src="/assets/prisma.png" alt="Logo Prisma" />
                        </div>
                        <div>
                            <img src="/assets/postgres.png" alt="Logo MongoDB" />
                            <img src="/assets/mongo.jpeg" alt="Logo PostgresSQL" />
                        </div>
                    </Language>
                </Column>
            </> :
                <>
                    <h1>Skills</h1>
                    <Column>

                        <div>
                            <h4>Hard Skills</h4>
                            <h2>Fullstack</h2>
                            <h3>- CSS</h3>
                            <h3>- HTML</h3>
                            <h3>- Javascript</h3>
                            <h3>- Typescript</h3>
                            <h3>- React</h3>
                            <h2>Database</h2>
                            <h3>- MongoDB</h3>
                            <h3>- PostgreSQL</h3>
                            <h3>- Prisma</h3>
                            <h2>AI Techniques</h2>
                            <h3>- Supervised Machine Learning</h3>
                            <h2>Engineering Techniques</h2>
                            <h3>- Advanced Calculus</h3>
                            <h3>- Statistical and Probabilistic Methods</h3>
                            <h3>- Various Programming Languages</h3>
                            <h3>- Hardware Handling Notions</h3>
                            <h4>Soft Skills</h4>
                            <h3>- Teamwork</h3>
                            <h3>- Open to Feedback</h3>
                            <h3>- Problem Solving</h3>
                            <h5>- Flexibility and Adaptation</h5>
                        </div>
                        <Language>
                            <div>

                                <img src="/assets/html.png" alt="Logo HTML" />


                                <img src="/assets/css.webp" alt="Logo CSS" />


                                <img src="/assets/JavaScript.png" alt="Logo Javascript" />

                            </div>
                            <div>
                                <img src="/assets/C.png" alt="Logo C++" />
                                <img src="/assets/python.png" alt="Logo Python" />
                                <img src="/assets/Typescript.png" alt="Logo Typescript" />
                            </div>
                            <div>
                                <img src="/assets/react.png" alt="Logo React" />
                                <img src="/assets/prisma.png" alt="Logo Prisma" />
                                <img src="/assets/jest.png" alt="Logo jest" />
                            </div>
                            <div>
                                <img src="/assets/postgres.png" alt="Logo MongoDB" />
                                <img src="/assets/mongo.jpeg" alt="Logo PostgresSQL" />
                            </div>
                        </Language>
                    </Column>
                </>}
        </Container>
    );
}

const Container = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    background-color: #080808;

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
        padding-top: 14px;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }

    h5 {
        padding-top: 4px;
        padding-left: 10px;
        font-size: 14px;
        font-weight: 400;
        font-family: 'Times New Roman', Times, serif;
        color: white;
    }
`

const Column = styled.div`

        padding-top: 3%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    
`

const Language = styled.div`
    padding-right: 15%;
    display: flex;
    flex-direction: column;

    div {
        flex-direction: row;
    } 

    img {
        padding-top: 1.5vw;
        height: 7vw;
        width: 12vw;
    }
`