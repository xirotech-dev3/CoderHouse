import { CartWidget }  from '../CartWidget/CartWidget.jsx'
import { Categorias }  from './Categorias/Categorias.jsx'
export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid container-nav">
                <a className="navbar-brand" href="./index.html">
                    <img className="navbar-logo-img" src="./img/logo.png" alt="Logo"/>
                </a>
                <h2>Grabac Store</h2>
                <CartWidget number={0}/>
            </div>
            <Categorias />
        </nav>
    )
};