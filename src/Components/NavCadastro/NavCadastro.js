import LabelCadastrar from "../LabelCadastrar/LabelCadastrar";
import LabelEsqueceuSenha from "../LabelEsqueceuSenha/LabelEsqueceuSenha";
import './NavCadastro.css';
const NavCadastro = () => {
    return(
        <nav>
            <ul className="NavCadastro">
                <li>
                    <LabelCadastrar/>
                </li>
                <li>
                    <LabelEsqueceuSenha/>
                </li>
            </ul>
        </nav>
    )
}

export default NavCadastro;