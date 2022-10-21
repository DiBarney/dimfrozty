const Footer = () => {
    let fecha = new Date();

    return(
        <footer>
            <div className="linea"></div>
            <div className="copyright">
                <p>Dim Frozty <sup>TM</sup> By Barney <sup>TM</sup> {fecha.getFullYear()}</p>
            </div>
        </footer>
    );
}

export default Footer;

