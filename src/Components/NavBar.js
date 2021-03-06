import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = (props) => {

    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);

    return ( 

        <nav>
            {props.name.map((name) => (
                    <div className ="host" key= {name.id}>
                      <div className="profile-image">
                          <FontAwesomeIcon className= "icon" icon={['fas', 'store']} />
                      </div>
                        <div className ="title">
                          <h3>{name.name}</h3>
                          <p>{name.location}</p>
                        </div>
                    </div>
            ))}
            <ul className={"navlist"}>
                <li><Link to=""> <FontAwesomeIcon className = "icon" icon={['fas', 'shopping-bag']} /> <p>Bag</p></Link></li>
                <li><Link to=""> <FontAwesomeIcon className = "icon" icon={['fas', 'user']}/> <p>Accounts</p></Link></li>
            </ul>
        {/* <div className="menu">
        <button className="my-nav-icon" onClick={handleClick}>
          {click ? (
            <CloseMenu className="my-menu-icon" />
          ) : (
            <MenuIcon className="my-menu-icon" />
          )}
        </button>
        </div> */}
    </nav>
     );
}
 
export default NavBar;