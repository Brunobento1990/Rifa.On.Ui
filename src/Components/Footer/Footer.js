import './Footer.css'

const Footer = () => {

    const dataAtual = new Date();
    const anoAtual = dataAtual. getFullYear();
    return(
        <footer>
            <p className='pFooter'>&copy;{anoAtual} Rifa.On</p>
        </footer>
    )
}

export default Footer;