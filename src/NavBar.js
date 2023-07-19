import 'react-bootstrap'
import { Button, FormControl } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
const NavBar = () => (

<div className="navbar fixed-top bg-dark">
        <nav className="navbar bg-body-dark">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#/product">Products</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#/us">About Us</a>
                </li>
            </ul>
        </nav>
        <div className='d-flex-end'>
            <form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </form>
        </div>
    </div>
)
export default NavBar

