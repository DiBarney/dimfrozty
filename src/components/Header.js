import logo from '../img/flake_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return(
        <header>
            <div className='columna'>
                <div className='logoContainer menu'>
                    <img src={logo} alt="Dim Frozty logo" className='logoHeader'/>
                    <div className='redes'>
                        <a href="https://www.instagram.com/dimfrozty/" target="_blank" rel="noreferrer" className='enlaceComun separacion'><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://twitter.com/dimfrozty/" target="_blank" rel="noreferrer" className='enlaceComun separacion'><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href="https://www.youtube.com/channel/UCAZVstvdItllenvLf5nDrBw" target="_blank" rel="noreferrer" className='enlaceComun separacion'><FontAwesomeIcon icon={faYoutube}/></a>
                    </div>
                </div>
            </div>
            <div className='columna leftAlign'>
                <nav className='mainMenu menu'>
                    <p className='enlaceComun separacion' href="https://www.beatstars.com/dimfrozty">BeatStars</p>
                    <p className='enlaceComun separacion' href="#">Instrumentals</p>
                    <p className='enlaceComun separacion' href="#">About</p>
                </nav>
            </div>
        </header>
    );
}

export default Header;