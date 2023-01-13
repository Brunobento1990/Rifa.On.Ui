import Form from "./Pages/Form/Form";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useVendedorContext } from "./Hooks/useVendedorContext";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Cadastro from "./Pages/Cadastro/Cadastro";
import Header from './Components/Header/Header';
import Rifa from "./Components/Rifa/Rifa.js";
import { CadastroRifa } from "./Components/CadastroRifa/CadastroRifa";

let ContatoVendedor ={
  Id:0,
  Ddd:"",
  Telefone:"",
  Ativo:true,
  VendedorId:0
}

let RedesSociaisVendedor = {
  Id:0,
  Link:"",
  Ativo:true,
  VendedorId:0
}

let Vendedor = {
  id:0,
  nome:"",
  cpf:"",
  dataNascimento:"",
  email:"",
  senha:"",
  ativo:true,
  contatoVendedor:ContatoVendedor,
  redesSociaisVendedor:RedesSociaisVendedor
}

function App() {
  const vendedor = useVendedorContext();
  return (
    <div className="App">
      
        <BrowserRouter>
          {vendedor && <Header/>}
          <Routes>
            <Route path="/" element={<Form/>} />
            <Route path="/Cadastro" element={<Cadastro modelVendedor={Vendedor} bool={false}/>} />
            <Route path="/AtualizaCadastro" element={<Cadastro modelVendedor={vendedor} bool={true}/>} />
            <Route path="/CadastroRifa" element={<CadastroRifa/>} />
            <Route path="/Rifas" element={<Rifa/>} />
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
    
  );
}

export default App;
