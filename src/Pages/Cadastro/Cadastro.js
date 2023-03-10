import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import LoadingSucess from "../../Components/Loading/LoadingSucess/LoadingSucess";
import { VendedorContext } from '../../Context/VendedorContext';

const Cadastro = ({modelVendedor,bool}) => {

    const Cadastar = async (e) => {
        e.preventDefault();
        setLoading(true);

        if(!Nome || !Cpf || !DataNascimento || !Ddd || !Link || !Telefone){
            setError("É necessário preencher todos os campos !")
            setErrorBool(true);
            setLoading(false);
            return;
        }

        let validarEmail = (email) => {
            var result = /\S+@\S+\.\S+/;
            return result.test(email);
        }
        
        if(!Email || !validarEmail(Email)){
            setError("E-mail inválido !")
            setErrorBool(true);
            setLoading(false);
            return;
        }

        if(Senha !== ConfimaSenha || Senha.length < 8 || ConfimaSenha.length < 8){
            setError("Senhas inválidas !")
            setErrorBool(true);
            setLoading(false);
            return;
        }

        setErrorBool(false);
        setError("")
        setAtivo(true)
        
        let ContatoVendedor ={
            Id:0,
            Ddd,
            Telefone,
            Ativo:Ativo,
            VendedorId:0
        }

        let RedesSociaisVendedor = {
            Id:0,
            Link,
            Ativo:Ativo,
            VendedorId:0
        }

        let Vendedor = {
            Id:0,
            Nome,
            Cpf,
            DataNascimento,
            Email,
            Senha,
            Ativo:Ativo,
            ContatoVendedor:ContatoVendedor,
            RedesSociaisVendedor:RedesSociaisVendedor
        }

        if(modelVendedor.id > 0){
            Vendedor.Id = modelVendedor.id;
            Vendedor.ContatoVendedor.VendedorId = modelVendedor.id;
            Vendedor.RedesSociaisVendedor.VendedorId = modelVendedor.id;
            Vendedor.RedesSociaisVendedor.Id = modelVendedor.redesSociaisVendedor.id;
            Vendedor.ContatoVendedor.Id = modelVendedor.contatoVendedor.id
        }

        if(!bool){
            const url = "https://localhost:44363/Vendedors/AdicionarVendedor";

            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json'},
                body: JSON.stringify(Vendedor)
            };
        
            const useFetch = await fetch(url, options);
    
            if(useFetch.status === 200){
                let data = await useFetch.json();
                setVendedor(data.vendedor);
                navigate('/Rifas');
            }else{
                setLoading(false);
                setError("Ocorreu algum erro. Tente novamente mais tarde.")
            }

        }else{
            const url = "https://localhost:44363/Vendedors/EditarVendedor";

            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json','Authorization': 'Bearer ' + modelVendedor.token },
                body: JSON.stringify(Vendedor)
            };
        
            const useFetch = await fetch(url, options);
    
            if(useFetch.status === 200){
                let data = await useFetch.json();
                setVendedor(data.vendedor);
                navigate('/Rifas');
            }else{
                setLoading(false);
                setError("Ocorreu algum erro. Tente novamente mais tarde.")
            }
        }

        
    }

    let date = modelVendedor.dataNascimento.slice(0,10);

    const [Nome, setNome] = useState(modelVendedor.nome);
    const [Cpf, setCpf] = useState(modelVendedor.cpf);
    const [DataNascimento, setDataNascimento] = useState(date);
    const [Email, setEmail] = useState(modelVendedor.email);
    const [Senha, setSenha] = useState(modelVendedor.senha);
    const [ConfimaSenha, setConfimaSenha] = useState(modelVendedor.senha);
    const [Ativo, setAtivo] = useState(true);
    const [Error, setError] = useState("");
    const [ErrorBool, setErrorBool] = useState(false);
    const [Ddd, setDdd] = useState(modelVendedor.contatoVendedor.ddd);
    const [Telefone, setTelefone] = useState(modelVendedor.contatoVendedor.telefone);
    const [Link, setLink] = useState(modelVendedor.redesSociaisVendedor.link);
    const [loading,setLoading] = useState(false);
    const {setVendedor} = useContext(VendedorContext);
    const navigate = useNavigate();

    return(
        <div>
            <div className='container-md col-12'>
                <div className='card-body'>
                    <div className='form-group row'>    
                        <div className='col-4'>
                            <h4>Cadastro</h4>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-8">
                            <label className='text-danger'>Todos os campos são de preenchimento obrigatório.</label>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input id="nome" className='form-control' maxLength="100" value={Nome} type="text" placeholder='Digite seu Nome' name="nome" onChange={(e) => setNome(e.target.value)}/>
                        <label htmlFor="nome">Nome</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input id="cpf" className='form-control' maxLength="11"  value={Cpf} type="text" placeholder='Digite seu CPF' name="cpf" onChange={(e) => setCpf(e.target.value)}/>
                        <label htmlFor="cpf">CPF</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input id="dataNascimento" className='form-control' value={DataNascimento} type="date" placeholder='Digite sua Data de Nascimento' name="dataNascimento" onChange={(e) => setDataNascimento(e.target.value)}/>
                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input id="email" className='form-control' value={Email} type="email" maxLength="100" placeholder='Digite seu e-mail' name="email" onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="email">E-mail</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input id="senha" className='form-control' value={Senha} type='password' minLength="8" maxLength="20" placeholder='Digite sua senha' name='senha' onChange={(e) => setSenha(e.target.value)}/>
                        <label htmlFor="senha">Senha</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input id="confirmeSenha" className='form-control' value={ConfimaSenha} minLength="8" maxLength="20" type='password' placeholder='Digite sua senha' name='confirmaSenha' onChange={(e) => setConfimaSenha(e.target.value)}/>
                        <label htmlFor="confirmeSenha">Confirme sua senha</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input id="link" className='form-control' value={Link} type="text" maxLength="100" placeholder='Digite seu usuário do Instagran' name="link" onChange={(e) => setLink(e.target.value)}/>
                        <label htmlFor="link">Instagran</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input id="ddd" className='form-control' value={Ddd} type="text" placeholder='Digite o DDD' maxLength="2" name="ddd" onChange={(e) => setDdd(e.target.value)}/>
                        <label htmlFor="ddd">DDD</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input id="telefone" className='form-control' value={Telefone} type="text" placeholder='Digite o WhatsApp' maxLength="11" name="telefone" onChange={(e) => setTelefone(e.target.value)}/>
                        <label htmlFor="telefone">WhatsApp</label>
                    </div>

                    
                    {ErrorBool && 
                        <div className="alert alert-danger" role="alert">
                            {Error}
                        </div>
                    }
                    
                    <div className='form-group row'>
                        <div className='col-12'>
                            {loading ?

                                <button onClick={Cadastar} className='form-control btn btn-success waves-effect waves-light'>
                                    <LoadingSucess/>
                                </button>
                            :
                                <button onClick={Cadastar} className='form-control btn btn-success waves-effect waves-light'>Finalizar  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </button>
                            }
                        </div>
                    </div>
                </div>           
            </div>
            </div>
    )
}

export default Cadastro;