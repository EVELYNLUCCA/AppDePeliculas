import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";


function App() {

  {/*
  const getMovies = async()=>{
    const response=await fetch(url)
    const data= response.json(response)
    console.log(data)
  
  }
  getMovies()

*/}
  

  return (
    <div className="App">
      <h1>FreeNetflix</h1>
      {/* <Card/> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    
    {/* <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route path="" element={<div>Home</div>} />
        <Route path="form" element={<div>formularios</div>} />
        <Route path="todo" element={<ToDo />} />
        <Route path="contexto" element={<Contexto />} />
        <Route path="rutas" element={<HooksYFuncionesDeRutas />} />
      </Routes>
    </BrowserRouter> */}
    </div> 
  
  )
}

export default App;
