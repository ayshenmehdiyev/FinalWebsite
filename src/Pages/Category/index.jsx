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
import Favlist from '../../Components/Favlist';
import { useDispatch, useSelector} from 'react-redux';
import { addToFavListAction, removeFromFavListAction } from '../../Redux/actions/favlist.actions';

const Category = () => {
    const [item, setItem] = useState(data)
    const [value, setValue] = useState(100);
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const handleChange = (event) => {
        setValue(event.target.value);
        const updateFilter = data.filter((select) => {
            return select.price <= value
        });
        setItem(updateFilter)

    };
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
    const addList = (param) => {
        dispatch(addToFavListAction(param))
      }
      const removeProduct = (id)=> {
        dispatch(removeFromFavListAction(id))
    }
    return (
        <div className='d-flex'>
            <div className='select'>
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
                        <span className='price-text'>PRICE</span>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={value}
                            onChange={handleChange}
                        />
                        <p className="value-display">Max. ${value}.00</p>
                    </div>
            </div>
            <div id='car-category' className='container'>
                {item.map((car, index) => {
                    return <div key={index} id="boxcarr">
                            <div className="header">
                                <div>
                                    <Link to={`/detail/${car.id}`}><h4>{car.name}</h4></Link>
                                    <p>{car.type}</p>
                                </div>
                                <div >{
                                    state.find(item => item.id === car.id ) ?
                                    <img src={Heart}  onClick={() => removeProduct(car.id)} alt="" /> :
                                    <img src={Emptyheart} onClick={()=> addList(car)} alt="" />

                                }</div>
                            </div>
                            <div className='carr'>
                                        <img className='carr-imgg' src={car.img} alt="" />
                                    </div>
                            <div className="features">
                                <div><img src={Gas} alt="" />{car.gasoline}</div>
                                <div><img src={Carrol} />{car.steering}</div>
                                <div><img src={Profileuser} />{car.capacity} people</div>
                            </div>
                            <div className="price-box">
                                <div className="price">${car.price}.00/ day</div>
                                <div><Link className="btn rentbnt" to={`/payment/${car.id}`}>Rent Car</Link></div>
                            </div>
                        </div>
                   

                })}
            </div>
        </div>
    )
}




/*
 const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Range Slider</h1>
      <div className="range-slider-container">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={handleChange}
          className="range-slider"
        />
        <div className="value-display">{value}</div>*/

export default Category
