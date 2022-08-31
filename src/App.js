import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>

          <h1> Blog </h1>
          <nav>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/blog" >Blog</NavLink>
            <NavLink to="acercade">Acerca de</NavLink>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={
                <div>
                  <h2>Pagina de inicio</h2>
                  <p>Esta es la pagina inicial del sitio.</p>
                </div>

              } />
              <Route path="/blog" element={
                <div>
                  <h2>Blog</h2>
                  <ul>
                    <li>Articulo numero 1</li>  
                    <li>Articulo numero 2</li>
                    <li>Articulo numero 3</li>
                  </ul>
                </div>
              } />
              <Route path="acercade" element={
                <div>
                  <h2>Acerca de</h2>
                  <p>Esta es la pagina de acerca de.</p>
                </div>
              } />
            </Routes>
          </main>

        </header>
      </div>
    </BrowserRouter>
    );
}
 
export default App;