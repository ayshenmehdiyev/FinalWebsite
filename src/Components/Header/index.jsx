import Logo from '../../assets/Logo.png';
import './header.css'
import { Link } from 'react-router-dom';
import UserList from './search';


const Header = () => {
    return (
        <>
            <header>
                <div class="container">
                    <div className="row">
                        <div className="col-12 d-flex">
                            <div className='main-part'>
                                <div className='name'>
                                    <Link to="/"><img src={Logo} alt="" /></Link>
                                </div>
                                <UserList />
                            </div>
                            <div className='favority'>
                                <div className='circle'>
                                    <i className='fa-solid fa-heart'></i>
                                    </div>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}


export default Header;
