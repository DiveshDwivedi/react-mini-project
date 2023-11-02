import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link style = {{ margin: 2 }} to='/menu'>Menu</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}