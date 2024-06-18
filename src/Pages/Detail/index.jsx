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
import './../../Pages/Home/home.css'
import Cahr from '../../assets/Car (3).png';
import Rolly from '../../assets/Car (4).png';
import Nissan from '../../assets/Car (5).png';
import Nissan1 from '../../assets/Car (8).png';                                                  /**/
import Gas from '../../assets/gas-station.png';
import Emptyheart from '../../assets/Vector.png';
import Carrol from '../../assets/Car.png';
import Profileuser from '../../assets/profile-2user.png';

const Detail = () => {
    const param = useParams()
    const cars = data.find((info) => {
        return info.id === param.id;
    })
    return (
        <section className='container detail d-flex flex-column'>
            <div>
                <div className='detail col-12 d-flex justify-content-center align-item-center'>
                    <div className='car-image'>
                        <div className='box'>
                            <div className='text'>
                                <h3>Sports car with the best design and acceleration</h3>
                                <p>Safety and comfort while driving a futuristic and elegant sports car</p>
                            </div>
                            <div className='Main-car' width={310} height={120}>
                               <img src={cars.img} alt=""  /> 
                            </div>
                            
                        </div>
                        <div className='box-photo'>
                            <img className='detail-car' src={cars.img} alt="" width='208' height='124' />
                            <img src={Viewtwo} alt="" srcset="" width='208' height='124' />
                            <img src={Viewthree} alt="" width='208' height='124'/>
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
                                <span>{cars.reviewer}+ Reviewer</span>
                            </div>
                            <div className='like'></div>
                        </div>
                        <div className='car-infoo'>
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
                                ${cars.price}.00/<span className='days'>days</span>
                            </div>
                            <div>
                                <Link className="btn rentbnt" to={`/payment/${cars.id}`}>Rent Car</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-item-center '>
                <div className='reviews'>
                    <div className='row pt-3 pl-3'>
                        <h4>Reviews</h4>
                        <div className='number'>{cars.reviewer}</div>
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
            <div className='popular-car'>
                <div>Recent Car</div>
                <div className='view-all'><Link to="/category">View all</Link></div>
            </div>
            <section>
                <div className='section'>
                    <div className='car-info'>
                        <div className='head'>
                            <div>
                                <h4>All New Rush</h4>
                                <p>SUV</p>
                            </div>
                            <div>
                                <img src={Emptyheart} alt="" /></div>
                        </div>
                        <div className='car'>
                            <img className='car-imgg' src={Cahr} alt="" />
                        </div>
                        <div className='features'>
                            <div><img src={Gas} alt="" />70L</div>
                            <div><img src={Carrol} />Manual</div>
                            <div><img src={Profileuser} />6 people</div>
                        </div>
                        <div className='price-box'>
                            <div className='price'>$72.00/<span className='days'>day</span></div>
                            <div className='btn rentbnt'>Rent Car</div>
                        </div>
                    </div>
                    <div className='car-info'>
                        <div className='head'>
                            <div>
                                <h4>CR - V</h4>
                                <p>SUV</p>
                            </div>
                            <div><img src={Emptyheart} alt="" /></div>
                        </div>
                        <div className='car'>
                            <img className='car-imgg' src={Nissan} alt="" />

                        </div>
                        <div className='features'>
                            <div><img src={Gas} alt="" />80L</div>
                            <div><img src={Carrol} />Manual</div>
                            <div><img src={Profileuser} />6 people</div>
                        </div>
                        <div className='price-box'>
                            <div className='price'>$80.00/<span className='days'>day</span></div>
                            <div className='btn rentbnt'>Rent Car</div>
                        </div>
                    </div>
                    <div className='car-info'>
                        <div className='head'>
                            <div>
                                <h4>All New Terios</h4>
                                <p>SUV</p>
                            </div>
                            <div>  <img src={Emptyheart} alt="" /></div>
                        </div>
                        <div className='car'>
                            <img className='car-imgg' src={Rolly} alt="" />
                        </div>
                        <div className='features'>
                            <div><img src={Gas} alt="" />90L</div>
                            <div><img src={Carrol} />Manual</div>
                            <div><img src={Profileuser} />6 people</div>
                        </div>
                        <div className='price-box'>
                            <div className='price'>$74.00/<span className='days'>day</span></div>
                            <div className='btn rentbnt'>Rent Car</div>
                        </div>
                    </div>
                    <div className='car-info'>
                        <div className='head'>
                            <div>
                                <h4>Nissan GT-R</h4>
                                <p>sport</p>
                            </div>
                            <div><img src={Emptyheart} alt="" /></div>
                        </div>
                        <div className='car'>
                            <img className='car-imgg' src={Nissan1} alt="" />
                        </div>
                        <div className='features'>
                            <div><img src={Gas} alt="" />80L</div>
                            <div><img src={Carrol} />Manual</div>
                            <div><img src={Profileuser} />2 people</div>
                        </div>
                        <div className='price-box'>
                            <div className='price'>$80.00/<span className='days'>day</span></div>
                            <div className='btn rentbnt'>Rent Car</div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Detail