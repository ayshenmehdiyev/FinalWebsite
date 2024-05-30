import React, { useRef, useState } from 'react'
import './category.css'
import Shadow from '../../assets/shadow.png';
import Gas from '../../assets/gas-station.png';
import Carrol from '../../assets/Car.png';
import Emptyheart from '../../assets/Vector.png';
import Heart from '../../assets/heart.png';
import Profileuser from '../../assets/profile-2user.png';
import { Link } from 'react-router-dom';
import { data } from '../data';

const Category = () => {
    const [item, setItem] = useState(data)
    function Sport(e) {
        if (e.target.checked) {
            const updateFilter = data.filter((select) => {
                return select.type === "sport"
            });
            setItem(updateFilter)
        }
        else {
            setItem(data)
        }


    }
    function SUV(e) {
        if (e.target.checked) {
            const updateFilter = data.filter((select) => {
                return select.type === "SUV"
            });
            setItem(updateFilter)
        }
        else {
            setItem(data)
        }
    }
    function Sedan(e) {
        if (e.target.checked) {
            const updateFilter = data.filter((select) => {
                return select.type === "Sedan"
            });
            setItem(updateFilter)
        }
        else {
            setItem(data)
        }

    }
    function Hack(e) {
        if (e.target.checked) {
            const updateFilter = data.filter((select) => {
                return select.type === "Hatchback"
            });
            setItem(updateFilter)
        }
        else {
            setItem(data)
        }
    }

    function two(e) {
        if (e.target.checked) {
            const updateFilter = data.filter((select) => {
                return select.capacity === "2"
            });
            setItem(updateFilter)
        }
        else {
            setItem(data)
        }

    }
    function four(e) {
        if (e.target.checked) {
            const updateFilter = data.filter((select) => {
                return select.capacity === "4"
            });
            setItem(updateFilter)
        }
        else {
            setItem(data)
        }

    }
    function six(e) {
        if (e.target.checked) {
            const updateFilter = data.filter((select) => {
                return select.capacity === "6"
            });
            setItem(updateFilter)
        }
        else {
            setItem(data)
        }

    }


    return (
        <div className='d-flex'>
            <div className='select'>
                <div>
                    <div className='type'>
                        <span>TYPE</span>
                        <p><input className='checkbox' type='checkbox' onClick={(e) => Sport(e)} /> Sport (2)</p>
                        <p><input className='checkbox' type='checkbox' onClick={(e) => SUV(e)} /> SUV (4)</p>
                        <p><input className='checkbox' type='checkbox' onClick={(e) => Sedan(e)} /> Sedan (1)</p>
                        <p><input className='checkbox' type='checkbox' onClick={(e) => Hack(e)} /> Hatchback (1)
                        </p>
                    </div>
                    <div className='capacity'>
                        <span>CAPACITY</span>
                        <p><input type='checkbox' name='' id='two' value='2' onClick={(e) => two(e)} />2 Person (2)</p>
                        <p><input type='checkbox' name='' id='four' value='4' onClick={(e) => four(e)} /> 4 Person (2)</p>
                        <p><input type='checkbox' name='' id='six' value='6' onClick={(e) => six(e)} /> 6 Person (4)</p>
                    </div>
                    <div className='max-price'>
                        <span>PRICE</span>
                        <input type='range' name='' id='' />
                        <p>Max. $100.00</p>
                    </div>
                </div>
            </div>
            <div id='sectionn' className='container'>
                {item.map((car, index) => {
                    return <div key={index}>
                        <div className="boxcarr">
                            <div className="head">
                                <div>
                                    <Link to={`/detail/${car.id}`}><h4>{car.name}</h4></Link>
                                    <p>{car.type}</p>
                                </div>
                                <div ><img  src={Emptyheart} alt="" /></div>
                            </div>
                            <div>
                                <img  className="car-foto" src={car.img} alt="" />
                                <img src={Shadow} alt="" />
                            </div>
                            <div className="features">
                                <div><img src={Gas} alt="" />{car.gasoline}</div>
                                <div><img src={Carrol} />{car.steering}</div>
                                <div><img src={Profileuser} />{car.capacity} people</div>
                            </div>
                            <div className="price-box">
                                <div className="price">{car.price}/ day</div>
                                <div><Link className="btn rentbnt" to={`/payment/${car.id}`}>Rent Car</Link></div>
                            </div>
                        </div>
                    </div>

                })}
            </div>
        </div>
    )
}

export default Category
