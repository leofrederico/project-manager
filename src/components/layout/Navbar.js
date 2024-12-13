
import { Link } from 'react-router-dom'; 

import Container from './Container.js'

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar(){

    return(
            <nav className={styles.navbar}>
                <Container>
                    <Link to="/">
                        <img src={logo} alt="costs_logo"/>
                    </Link>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Pagina Inicial</Link>
                        </li>

                        <li className={styles.item}>
                            <Link to="/company">Empresa</Link>
                        </li>

                        <li className={styles.item}>
                            <Link to="/projects">Projetos</Link>
                        </li>

                        <li className={styles.item}>
                            <Link to="/contact">Contatos</Link>
                        </li>

                    </ul>

                </Container>
            </nav>

    )
} 


export default Navbar;