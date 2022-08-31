import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from './componentes/Inicio.js';
import Blog from './componentes/Blog.js';
import Acercade from './componentes/Acercade.js';
import styled from 'styled-components';
import Header from './componentes/Header.js';

const App = () => {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main>
            <Routes>
              <Route path="/" element={
                <Inicio />
                

              } />
              <Route path="/blog" element={
                <Blog />
              } />
              <Route path="acercade" element={
                
                  <Acercade />
              } />
            </Routes>
        </Main>

        
      </ContenedorPrincipal>
    </BrowserRouter>
    );
}
 
const ContenedorPrincipal = styled.div`
  padding: 40px;
  witdh: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129,129,129,0.1);
  
  
  
`;

export default App;