import { useVendedorContext } from "../../Hooks/useVendedorContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "../../Components/Menu/Menu";
const Principal = () => {

    const vendedor = useVendedorContext();

    return(
        <div>
            <Menu/>
            <h1>{vendedor.id}</h1>
            <h1>{vendedor.nome}</h1>
            <h1>{vendedor.cpf}</h1>
            <h1>{vendedor.dataNascimento}</h1>
            <h1>{vendedor.contatoVendedor.telefone}</h1>
        </div>
    )
        
}

export default Principal;