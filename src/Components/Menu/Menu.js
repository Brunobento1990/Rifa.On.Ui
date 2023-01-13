import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Menu() {

  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className='nav-link active' to='/Rifas'>Rifas</Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link' to='/AtualizaCadastro'>Cadastro</Link>
      </li>
    </ul>
  );
}

export default Menu;
