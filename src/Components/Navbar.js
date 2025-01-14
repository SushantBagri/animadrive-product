import './Navbar.css'
import { logAction } from '../Redux';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Route, Redirect } from 'react-router-dom';
// import SvgIcon from '@material-ui/core/SvgIcon';
import PetIcon from '@material-ui/icons/Pets';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Navbar(props) {
    const [click, setClick] = useState(false)
    const [search, setSearch] = useState(false)
    const [signmenu, setSignmenu] = useState(false)
    const [formmenu, setFormmenu] = useState(false)
    // const [authenticate, setAuthenticate] = useState(false)
    // const [windowScroll, setWindowScroll] = useState(false)
    // const [prevScrollPos, setPrevScrollPos] = useState()
    // const [currentScrollPos, setCurrentScrollPos] = useState()
    // const scrollNavbar = useRef()

    const login = useSelector(state => state.login)
    const message = useSelector(state => state.message)


    const openSignInMenu = () => {
        setSignmenu(!signmenu)
        // setSignmenu(false)
    }

    const openFormMenu = (e) => {
        setFormmenu(!formmenu)
        setSignmenu(false)
    }

    const closeButtonHandler = () => {
        setClick(!click)
        setSearch(false)
    }
    const closeMenuHandler = () => {
        setClick(false)
        setSignmenu(false)
        setFormmenu(false)
    }
    const handleSearchAnimation = () => {
        setSearch(!search)
        setClick(false)
    }
    const handleLogIN = () => {
        setFormmenu(false)
        props.logAction(true)
        // setClick(false)
        // setAuthenticate(false)
    }

    const handleLogOUT = () => {
        props.logAction(false)
        setSignmenu(false)
        setFormmenu(false)
    }
    // useEffect(() => {
    //     console.log('running');
    //     window.addEventListener('scroll', () => {
    //         console.log('scrolling');
    //         if (window.pageYOffset >= 100) {
    //             alert('alert')
    //         }
    //     })
    // }, [])


    return (
        <>
            <nav className='navbar'>
                <div className='navbar_container'>
                    <Link to='/' className='navbar_logo' onClick={closeMenuHandler}>
                        <div><PetIcon className='petIcon' fontSize="large" /></div>
                    </Link>
                    <div className='navbar_menu_icon' onClick={closeButtonHandler}>
                        {click ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
                    </div>
                    <div className={search ? 'search_box active' : 'search_box'}>
                        <div className={search ? 'active_navbar_search_input' : 'navbar_search_input'}>
                            <form>
                                <input type='text' className='search' placeholder='Explore products...' />
                            </form>
                        </div>
                        <div className='search_bar_icon' onClick={handleSearchAnimation}>
                            <SearchIcon fontSize='large' />
                        </div>
                    </div>
                    <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                        <div className='nav_menu_box'>
                            <li className='nav_item'>
                                <Link to='/' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Home
                            </Link>
                            </li>
                            <li className='nav_item'>
                                <Link to='/shop' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Shop
                            </Link>
                            </li>
                            {/* <li className='nav_item'>
                                <Link to='/joinus' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Join Us
                            </Link>
                            </li>
                            <li className='nav_item'>
                                <Link to='/colleboration' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Colleboration
                            </Link>
                            </li> */}
                            <li className='nav_item'>
                                <div className='dropdown'>
                                    <Link className='navbar_links_item dropdown_btn'>
                                        <div onClick={openFormMenu}>
                                            Join
                                            <div className={(formmenu) ? 'dropdown_content_active' : 'dropdown_content'}>
                                                <div className='dropdown_content_container'>
                                                    <Link to='/joinus' className='dropdown_content_item' onClick={closeButtonHandler} >
                                                        Join as Team
                                        </Link>
                                                    <Link to='/colleboration' className='dropdown_content_item' onClick={closeButtonHandler} >
                                                        Colleboration with us
                                        </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                            <li className={login ? 'nav_item' : 'nav_item hidden'}>
                                <Link className='navbar_links_item' onClick={handleLogOUT}>
                                    LogOut
                                </Link>
                            </li>
                            <li className='nav_item'>
                                <div className='dropdown'>
                                    <Link className='navbar_links_item dropdown_btn' onClick={handleLogIN}>
                                        <div onClick={openSignInMenu}>
                                            {(login) ? 'Profile' : 'SignUp'}
                                            <div className={(signmenu) ? 'dropdown_content_active' : 'dropdown_content'}>
                                                <div className='dropdown_content_container'>
                                                    <Link to='/order' className='dropdown_content_item' onClick={closeButtonHandler} >
                                                        Your Orders
                                        </Link>
                                                </div>
                                                <div className='register_container'>
                                                    <CloseIcon className='signmenu_close_btn' />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    {/* <ExpandMoreIcon className='dropdown_symbol' /> */}
                                </div>
                            </li>
                            <div className='nav_menu_boxer'>
                                <Link to='/cart' className='navbar_links_item cart_image'>
                                    <ShoppingCartIcon fontSize='large' />
                                </Link>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

// export default Navbar
export default connect(null, { logAction })(Navbar);
