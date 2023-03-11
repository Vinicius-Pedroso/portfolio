import { createGlobalStyle } from "styled-components";
import About from "./components/about";
import Header from "./components/header";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <About/>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  *{
    color: white;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  body{
    background-color: #080808;
    font-family: "Lato", sans-serif;
  }
`;
