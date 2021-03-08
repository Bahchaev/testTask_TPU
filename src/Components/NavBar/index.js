import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from './styles.module.css'
import logo from '../../Images/logo-tpu.png'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="md" className={styles.navBar} variant="dark">
                <Navbar.Brand href=""><img src={logo} alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={styles.nav}>
                        <Nav.Link href="" className={styles.link}>О компании</Nav.Link>
                        <Nav.Link href="" className={styles.link}>Научтные проекты</Nav.Link>
                        <Nav.Link href="" className={styles.link}>Поддержать</Nav.Link>
                        <Nav.Link href="" className={styles.link}>Проекты ТПУ</Nav.Link>
                        <Nav.Link href="" className={styles.link}>Меценаты</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar