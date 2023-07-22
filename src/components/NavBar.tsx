import 'react-bootstrap'
import { Button, FormControl } from 'react-bootstrap'


const NavBar = () => (
<div className="navbar fixed-top bg-dark">
        <nav className="navbar">
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
                    id="form"
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
            </form>
        </div>
    </div>
)
export default NavBar

