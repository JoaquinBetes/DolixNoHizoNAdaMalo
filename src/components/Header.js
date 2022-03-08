import "../index.css";
import "./components.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faMessage } from '@fortawesome/free-solid-svg-icons'

const message = <FontAwesomeIcon icon={faMessage} />
const home = <FontAwesomeIcon icon={faHouse} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
/* const message = <FontAwesomeIcon icon={faMessagePlus} />; */

export function Header(){
    return(
        <header className="header">
            <ul className="header-list">
                <li className="header-list-item">
                    {home}
                </li>
                <li className="header-list-item">Tattoo</li>
                <li className="header-list-item">
                    {instagram}
                </li>
                <li className="header-list-item">
                    {message}
                </li>
            </ul>
        </header>
    )
}