import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
function Header() {
    return(
       <nav>
        <h1>Go Mart</h1>
        <ul>
            <li> <Icon disabled name='home' /> <Link to="/Home">Home</Link> |</li>
            <li> <Icon disabled name='users' />  <Link to="/About">About</Link> |</li>
            <li> <Icon disabled name='shop' />  <Link to="/Cart">Cart</Link> |</li>
            <li> <Icon disabled name='users' /><Link to="/Login">Login</Link> |</li>
           
       
      
        
        </ul>
       </nav>
    );
};
export default Header;