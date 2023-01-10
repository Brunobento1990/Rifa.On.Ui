import Form from "./Pages/Form/Form";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Principal from "./Pages/Principal/Principal";
import Footer from './Components/Footer/Footer';
import Header from "./Components/Header/Header";
import Cadastro from "./Pages/Cadastro/Cadastro";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/Principal" element={<Principal/>} />
          <Route path="/Cadastro" element={<Cadastro/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
    
  );
}

export default App;
