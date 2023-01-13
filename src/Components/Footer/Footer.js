const Footer = () => {

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    return(
        <footer>
            <p className='text-primary'>&copy;{anoAtual} Rifa.On</p>
        </footer>
    )
}

export default Footer;