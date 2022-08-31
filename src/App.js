import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from './componentes/Inicio.js';
import Blog from './componentes/Blog.js';
import Acercade from './componentes/Acercade.js';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        
        <main>
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
        </main>

        
      </div>
    </BrowserRouter>
    );
}
 
export default App;