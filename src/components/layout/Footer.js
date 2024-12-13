import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'
function Footer(){

    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="#" className={styles.icon}>
                        <FaFacebook />
                    </a>

                    <a href="#" className={styles.icon}>
                        <FaInstagram />
                    </a>

                    <a href="#" className={styles.icon}>
                        <FaLinkedin />
                    </a>
                </li>
            </ul>

            <p className={styles.copy_right}><span>MITRA</span> &copy; 2024</p>

        </footer>
    )
}



export default Footer;