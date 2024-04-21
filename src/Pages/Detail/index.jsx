import React, { useState } from 'react'
import './detail.css'
import Eleven from '../../assets/11.png'
import Viewtwo from '../../assets/View 2.png'
import Viewthree from '../../assets/View 3.png'
import Star from '../../assets/Layer.png'
import Emptystar from '../../assets/ic-actions-star.png'
import Profill from '../../assets/Profill.png'
import Profile from '../../assets/Profill (1).png'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { data } from '../data'

const Detail = () => {
    const param = useParams()
    const cars = data.find((info) => {
        return info.id === param.id;
    })
    return (
        <section className='d-flex flex-column'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-item-center detail'>
                    <div className='car-image'>
                        <div className='box'>
                            <div className='text'>
                                <h3>Sports car with the best design and acceleration</h3>
                                <p>Safety and comfort while driving a futuristic and elegant sports car</p>
                            </div>
                            <img src={cars.img} alt="" width={267} height={120} />
                        </div>
                        <div className='box-photo'>
                            <img src={Eleven} alt="" width='208' height='124' />
                            <img src={Viewtwo} alt="" srcset="" />
                            <img src={Viewthree} alt="" />
                        </div>
                    </div>
                    <div className='car-detail'>
                        <div className='car-name'>
                            <div>
                                <h3>{cars.name}</h3>
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Emptystar} alt="" />
                                <span>440+ Reviewer</span>
                            </div>
                            <div className='like'></div>
                        </div>
                        <div className='car-info'>
                            <p>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most
                                unforgiving proving ground, the 'race track'.</p>
                            <table width='444'>
                                <tr>
                                    <td className='type-text'>Type Car</td>
                                    <td className='info-text'>{cars.type}</td>
                                    <td className='type-text'>Capacity</td>
                                    <td className='info-text'>{cars.capacity}</td>
                                </tr>
                                <tr>
                                    <td className='type-text'>Steering </td>
                                    <td className='info-text'>{cars.steering}</td>
                                    <td className='type-text'>Gasoline</td>
                                    <td className='info-text'>{cars.gasoline}</td>
                                </tr>
                            </table>

                        </div>
                        <div className='rent-now'>
                            <div className='price'>
                                {cars.price} days</div>
                            <div><Link className="btn rentbnt" to={`/payment/${cars.id}`}>Rent Car</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-center align-item-center '>
                <div className='reviews'>
                    <div className='row pt-3 pl-3'>
                        <h4>Reviews</h4>
                        <div className='number'>13</div>
                    </div>
                    <div className='profile-comment-1 d-flex flex-direction-column justify-content-between'>
                        <div className='profile mr-3'>
                            <img src={Profill} alt="" />
                        </div>
                        <div className='comment'>
                            <div className='profile-name d-flex flex-direction-row justify-content-between'>
                                <div>
                                    <h5>Alex Stanton</h5>
                                    <p>CEO at Bukalapak</p>
                                </div>
                                <div className='date'>
                                    <div>
                                        <p>21 July 2022</p>
                                    </div>
                                    <div>
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Emptystar} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p>We are very happy with the service from the MORENT App. Morent has a low price and also a
                                large
                                variety of cars with good and comfortable facilities. In addition, the service provided by
                                the
                                officers is also very friendly and very polite.</p>
                        </div>
                    </div>
                    <div className='profile-comment-2 d-flex flex-direction-row justify-content-between'>
                        <div className='profile mr-3'>
                            <img src={Profile} alt="" />
                        </div>
                        <div className='comment'>
                            <div className='profile-name d-flex flex-direction-row justify-content-between'>
                                <div>
                                    <h5>Skylar Dias</h5>
                                    <p>CEO at Amazon</p>
                                </div>
                                <div className='date'>
                                    <div>
                                        <p>20 July 2022</p>
                                    </div>
                                    <div>
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Emptystar} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p>We are greatly helped by the services of the MORENT Application. Morent has low prices and
                                also a wide variety of cars with good and comfortable facilities. In addition, the service
                                provided by the officers is also very friendly and very polite.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Detail