import { createGlobalStyle } from "styled-components";
import About from "./components/about";
import Skills from "./components/skills";
import Header from "./components/header";
import Projects from "./components/projects";
import Education from "./components/education";
import Contacts from "./components/contacts";
import {useState } from "react";

export default function App() {

  const [languageEnglish, setLanguageEnglish] = useState(true)

  return (
    <>
      <GlobalStyle/>
      <Header language={languageEnglish} setLanguage={setLanguageEnglish}/>
      <About language={languageEnglish}/>
      <Education language={languageEnglish}/>
      <Skills language={languageEnglish}/>
      <Projects language={languageEnglish}/>
      <Contacts language={languageEnglish}/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    color: white;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  body{
    background-color: #080808;
  }
`;
