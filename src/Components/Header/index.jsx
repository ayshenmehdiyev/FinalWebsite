import Logo from '../../assets/Logo.png';
import './header.css'
import { Link } from 'react-router-dom';
import UserList from './search';
import Favlist from '../Favlist';
import { useState } from 'react';



const Header = () => {
        const [show, setShow ] = useState(true);
    return (
        <>
            <header>
                <div class="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <div className='main-part'>
                                <div className='name'>
                                    <Link to="/"><img src={Logo} alt="" /></Link>
                                </div>
                                <UserList />
                            </div>
                            <div className='circle'  onClick={() => setShow(!show)}>
                                <i className='fa-solid fa-heart'></i>
                            </div>
                        </div>
                    </div>
                    {!show && <Favlist />  }
                </div>
            </header >
        </>
    )
}


export default Header;
