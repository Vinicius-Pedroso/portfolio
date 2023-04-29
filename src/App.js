import { createGlobalStyle } from "styled-components";
import About from "./components/about.js";
import Skills from "./components/skills.js";
import Header from "./components/header.js";
import Experience from "./components/experience.js";
import Education from "./components/education.js";
import Contacts from "./components/contacts.js";
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
      <Experience language={languageEnglish}/>
      <Contacts language={languageEnglish}/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #080808;
  }
`;
