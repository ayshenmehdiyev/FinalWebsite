import Logo from '../../assets/Logo.png';
import Search from '../../assets/search-normal.png';
import Filter from '../../assets/filter.png';
import './header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Header = () => {
    const [list, setList] = useState([])
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
                                <div className="input-class">
                                    <img src={Search} className='img-search' alt="" />
                                    <input type="search" id='search' placeholder='Search something here' />
                                    <img className='img-filter' src={Filter} alt="" /></div>
                            </div>
                            <div className='favority'>
                                <div className='circle'><i className='fa-solid fa-heart'></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}


/*import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Suppliers = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/suppliers")
            .then(res => setTimeout(() => setList(res.data), 3000))
    }, [])

    const filteredSub = (e) => {
        const filterList = list.filter(company => {
            return company.companyName.includes(e.target.value)
        })
        console.log(filterList);
    }

    return (
        <div>
            <input type="search" onChange={filteredSub} />
            <ul>{list.length ? list.map(sup => {
                return <li><span>{sup.companyName}</span>
                    <Link to={`/deatil/${sup.id}`}><button>detail</button></Link>
                </li>
            }
            ) : <div>Not Found</div>}</ul>
        </div>
    )
}

export default Suppliers

 <ul>{data.filter((item) => {
                return item.name.includes(e.target.value)
            })
        .map(sup => {
                return <li><span>{sup.companyName}</span>
                    <Link to={`/deatil/${sup.id}`}><button>detail</button></Link>
                </li>)



*/

export default Header;
