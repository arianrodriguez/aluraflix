import './Navbar.css'
import Button from '../Button'

const Navbar = () => {
    return <nav className="navbar">
        <div className="navbar__content">
            <img src="images/aluraflix.png" alt="Aluraflix" className="logo"/>
            <Button 
                title="Nuevo video"
            />
        </div>
    </nav>
}

export default Navbar