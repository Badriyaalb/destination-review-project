import './Header.css' ;
import LOGO from '../imgs/logo.PNG';
import  { Link } from "react-router-dom";

function Header(){

    return(
        <>
        <div id="PartofNav">
            <img id='LOGO' src={LOGO} alt="LOGO"  />
            <nav id="nav">
               <Link to='/Home'><a href="" className='Navtit'>Home</a></Link>
                <a href="https://www.google" className='Navtit'>Search</a>
                <a href="https://www.google" className='Navtit'>Login </a>
            </nav>
        </div><br/>
        <hr/>
        </>
    )
}
export default Header;