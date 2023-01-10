import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavCadastro from '../../Components/NavCadastro/NavCadastro';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VendedorContext } from '../../Context/VendedorContext';

const Form = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(true);
    const {setVendedor} = useContext(VendedorContext);

    const Logar = async (e) => {

        e.preventDefault();

        setLoading(false);
        
        let validarEmail = (email) => {
            var result = /\S+@\S+\.\S+/;
            setLoading(true);
            return result.test(email);
        }
        
        if(!email || !validarEmail(email)){
            setError("E-mail inválido !")
            setLoading(true);
            return;
        }
        
        if(!senha){
            setError("Senha inválida.");
            setLoading(true);
            return;
        }
        
        setError("");

        const url = 'https://localhost:44363/Login/Login?email='+email+'&senha='+senha;

        const options = {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        };
    
        const useFetch = await fetch(url, options);

        if(useFetch.status === 200){
            let data = await useFetch.json();
            setVendedor(data.vendedorLogin);
            navigate('/Principal');
        }else{
            setError("E-mail ou senha inválidos.");
            setLoading(true);
        }
            
    };

    return(
            <div className='container-md col-12'>
                <div className='card-body'>
                    <div className='form-group row'>    
                        <div className='col-4'>
                            <h4>LOGIN</h4>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input id="floatingInput" className='form-control' value={email} type="email" placeholder='Digite seu e-mail' name="email" onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">E-mail</label>
                    </div>
                    <div className="form-floating">
                        <input id="floatingPassword" className='form-control' value={senha} type='password' placeholder='Digite sua senha' name='senha' onChange={(e) => setSenha(e.target.value)}/>
                        <label htmlFor="floatingPassword">Senha</label>
                    </div>

                    {!loading &&
                        <div className="form-group row">
                            <div className="col-4 spinner-border text-primary" role="status">
                            </div>
                        </div>
                    }

                    <label className='text-danger'>{error}</label>
                    <div className='form-group row'>
                        <div className='col-12'>
                            <button onClick={Logar} className='form-control btn btn-primary waves-effect waves-light'>Entrar  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-10'>
                            <NavCadastro/>
                        </div>
                    </div>
                </div>           
            </div>
    )
}

export default Form;

