import { useNavigate } from "react-router-dom";

const Rifa = () => {

    let navigate = useNavigate();

    function NovaRifa(){
        navigate('/CadastroRifa');
    }

    return(
        <div className="container">

            <div className="col-6">
                <button className="btn btn-success" onClick={NovaRifa}>Incluir Nova Rifa</button>
            </div>
            <br></br>
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
    )
}

export default Rifa;