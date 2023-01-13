import { useState } from "react"
import LoadingSucess from "../Loading/LoadingSucess/LoadingSucess";

export const CadastroRifa = () => {

    const [loading,setLoading] = useState(false);
    const [descricao,setDescricao] = useState("");
    const [premios, setPremios] = useState([]);
    const [descricaoPremio, setDescricaoPremio] = useState("");
    const [premio,setPremio] = useState(0);
    const [preco, setPreco] = useState(0);
    const [qtdNumero, setqtdNumero] = useState(1);
    
    function CadastarRifa(){

        setLoading(true)

        let Numeros = [];

        for(var i = 0; i < parseInt(qtdNumero); i++){
            let Numero = {
                Id:0,
                Numero: i + 1,
                RifaId:0
            }

            Numeros.push(Numero)
        }

        
        
        let Rifa = {
            Id:0,
            Descricao:descricao,
            Preco:0.00,
            Premios: premios,
            Numeros:Numeros
        }

        console.log(Rifa)

    }
    
    function DescricaoPremio(item,descricao){
        setDescricaoPremio(descricao)
        item.Descricao = descricao;

    }


    function QuantidadePremios(qtd){

        
        if(parseInt(qtd) === 0){
            setPremio(0);
            return;
        }

        for(var i = 0; i < qtd; i++){

            let premioObj = {
                Id:0,
                Numero:i+1,
                Descricao:"",
                RifaId:0
            } 

            premios.splice(i,1)
            premios.push(premioObj);
        }

        setPremio(qtd);
        
        // if(parseInt(qtd) === 1 || parseInt(qtd) === 0){
        //     premios.length = 0;
        //     setPremio(1)
        //     return;
        // }
        
        // if(parseInt(qtd) > parseInt(premio)){
        //     let premioObj = {
        //         Id:0,
        //         Numero:qtd,
        //         Descricao:"",
        //         RifaId:0
        //     } 
    
        //     premios.push(premioObj);
        // }
        
        // if(parseInt(qtd) < parseInt(premio)){    
        //     premios.splice(qtd,1);
        // }
        // premios.length = qtd;

        // setPremio(qtd);
        
    }

    return(
        <div>
            <div className='container-md col-12'>
                <div className='card-body'>

                    <div className='form-group row'>    
                        <div className='col-4'>
                            <h4>Cadastro de Rifa</h4>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-8">
                            <label className='text-danger'>Todos os campos são de preenchimento obrigatório.</label>
                        </div>
                    </div>

                    <div className="form-floating mb-3">
                        <input id="descricao" required className='form-control' maxLength="100" value={descricao} type="text" placeholder='Descrição' name="descricao" onChange={(e) => setDescricao(e.target.value)}/>
                        <label htmlFor="descricao">Nome da Rifa</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input id="preco" className='form-control' value={preco} type="number" placeholder='Preço' name="preco" onChange={(e) => setPreco(e.target.value)}/>
                        <label htmlFor="preco">Preço</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input id="qtdNumero" className='form-control' value={qtdNumero} type="number" placeholder='Quantidade de números' name="qtdNumero" onChange={(e) => setqtdNumero(e.target.value)}/>
                        <label htmlFor="qtdNumero">Quantidade de Números</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input id="premio" className='form-control' value={premio} type="number" placeholder='Premios' name="premio" onChange={(e) => QuantidadePremios(e.target.value)}/>
                        <label htmlFor="premio">Quantidade de Prêmios</label>
                    </div>

                    {premios.map((premio,i) =>(
                        <div key={i} className="form-floating mb-3">
                            <input id="descricaoPremio" className='form-control' value={premio.Descricao} type="text" placeholder='Descrição do premio' name="descricaoPremio" onChange={(e) => DescricaoPremio(premio, e.target.value)}/>
                            <label htmlFor="descricaoPremio">Descrição do Prêmio {premio.Numero}</label>
                        </div>
                    ))}

                    <div className='form-group row'>
                        <div className='col-12'>
                            {loading ?

                                <button onClick={CadastarRifa} className='form-control btn btn-success waves-effect waves-light'>
                                    <LoadingSucess/>
                                </button>
                            :
                                <button onClick={CadastarRifa} className='form-control btn btn-success waves-effect waves-light'>Finalizar  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square" viewBox="0 0 16 16">
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