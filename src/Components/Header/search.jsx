// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './header.css'
import Search from '../../assets/search-normal.png';
import Filter from '../../assets/filter.png';
import icon from '../../assets/Property 1=linear.png';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        axios.get('https://665e436d1e9017dc16ef7d74.mockapi.io/car/info/data')
            .then(response => {
                setUsers(response.data);
                setFilteredUsers(response.data);
            })
            .catch(error => {
                console.error('Məlumatları çəkməkdə xəta:', error);
            });
    }, []);

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        const filtered = users.filter(user =>
            user.name.includes(searchTerm)
        );
        setFilteredUsers(filtered);
    };

    return (
        <div>
            <div className="input-class">
                <img src={Search} className='img-search' alt="" onClick={handleSearch} />
                <input type="search" id='search' value={searchTerm}
                    onChange={handleSearchTermChange} />
                <div className='list'>
                    {searchTerm.length ?
                        filteredUsers.map(user => (
            <div key={user.id}><Link className='Link-name' to={`/detail/${user.id}`}><img className='icon' src={icon} />{user.name}</Link></div>
                        ))
                        : null
                    }
                </div>
                <img className='img-filter' src={Filter} alt="" />
            </div>


        </div>
    );
};

export default UserList;
