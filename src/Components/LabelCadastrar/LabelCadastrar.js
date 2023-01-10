import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const LabelCadastrar = () => {
    return(
        <div>
            <Link className="text-reset" to="/Cadastro">Cadastre-se</Link>
        </div>
    )
        
}

export default LabelCadastrar;