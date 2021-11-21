import {NavLink} from 'react-router-dom';
import { NavbarStyle } from './styles'

const Navbar = (props: any) => {

    return (
        <NavbarStyle>
                <div>
                    <ul>
                        <li><NavLink className="link" to='/'>Home</NavLink></li>
                        <li><NavLink className="link" 
                                    to={{pathname:'/shortlist',state: props.favItems}}>Shortlisted</NavLink></li>
                        <li><NavLink className="link" 
                                    to={{pathname:'/rejected',state: props.favItems}}>Rejected</NavLink></li>
                    </ul>
                </div>
        </NavbarStyle>
        
    )
}

export default Navbar
