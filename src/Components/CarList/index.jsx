import React from 'react'
import "./car.css"
import Gas from '../../assets/gas-station.png';
import Emptyheart from '../../assets/Vector.png';
import Heart from '../../assets/heart.png';
import Carrol from '../../assets/Car.png';
import Profileuser from '../../assets/profile-2user.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { addToFavListAction, removeFromFavListAction } from '../../Redux/actions/favlist.actions';
import { useDispatch, useSelector } from 'react-redux';


const CarList = () => {
    const [users, setUsers] = useState([])
    const state = useSelector(state =>state)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://665e436d1e9017dc16ef7d74.mockapi.io/car/info/data')
            .then(response => {
                setUsers(response.data);
            })
    }, [])

  const addList = (param) => {
    dispatch(addToFavListAction(param))
  }
const removeProduct = (id)=> {
    dispatch(removeFromFavListAction(id))
}
    return (
        <div>
            <div className='section'>
                {users.map((car, index) => {
                    return <div className="car-info" key={index}>
                        <div className="head">
                            <div>
                                <Link to={`/detail/${car.id}`}><h4>{car.name}</h4></Link>
                                <p>{car.type}</p>
                            </div>
                            <div>
                                {
                                    state.find(item => item.id === car.id ) ?
                                    <img src={Heart}  onClick={() => removeProduct(car.id)} alt="" /> :
                                    <img src={Emptyheart} onClick={()=> addList(car)} alt="" />

                                }
                            </div>
                        </div>
                        <div className='car'>
                            <img className='car-imgg' src={car.img} alt="" />
                        </div>
                        <div className="features">
                            <div><img src={Gas} alt="" />{car.gasoline}</div>
                            <div><img src={Carrol} />Manual</div>
                            <div><img src={Profileuser} />{car.capacity} people</div>
                        </div>
                        <div className="price-box">
                            <div className="price">{car.price}/ <span className='days'>day</span> </div>
                            <div><Link className="btn rentbnt" to={`/payment/${car.id}`}>Rent Car</Link></div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default CarList


/*
<img src={Emptyheart} onClick={()=> addList(car)} alt="" />
*/ 