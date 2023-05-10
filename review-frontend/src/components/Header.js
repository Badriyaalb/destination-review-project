import './Header.css' ;
import LOGO from '../imgs/logo.PNG';

function Header(){

    return(
        <>
        <div id="PartofNav">
            <img id='LOGO' src={LOGO} alt="LOGO"  />
            <nav id="nav">
                <a href="https://www.google" className='Navtit'>Home</a>
                <a href="https://www.google" className='Navtit'>Search</a>
                <a href="https://www.google" className='Navtit'>Login </a>
            </nav>
        </div><br/>
        <hr/>
        </>
    )
}
export default Header;