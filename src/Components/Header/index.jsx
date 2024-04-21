import React from 'react';
import Logo from '../../assets/Logo.png';
import Search from '../../assets/search-normal.png';
import Filter from '../../assets/filter.png';
import './style.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
           
<div className="row"><div className="col-12">
     <header>
                    <div className='main-part'>
                        <div className='name'>
                           <Link to="/"><img src={Logo} alt="" /></Link> 
                        </div>
                        <div className="input-class">
                            <img src={Search} className='img-search' alt="" />
                            <input type="search" id='search' placeholder='Search something here' />
                            <img className='img-filter' src={Filter} alt="" /></div>
                    </div>
                    <div className='favority'>
                        <div className='circle'><i className='fa-solid fa-heart'></i></div>
                    </div>
            </header></div></div>
        </>
    )
}

export default Header;
