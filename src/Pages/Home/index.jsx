import './home.css'
import Cahr from '../../assets/car1.webp';
import Rolly from '../../assets/car3.webp';
import Nissan from '../../assets/car2.webp';
import Gas from '../../assets/gas-station.png';
import Emptyheart from '../../assets/Vector.png';
import Heart from '../../assets/heart.png';
import Carrol from '../../assets/Car.png';
import Profileuser from '../../assets/profile-2user.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';





const Home = () => {
    const [users, setUsers] = useState([])
    const [changeColor, setChangeColor] = useState(false)

    useEffect(() => {
        axios.get('https://665e436d1e9017dc16ef7d74.mockapi.io/car/info/data')
            .then(response => {
                setUsers(response.data);
            })
    }, [])



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <section>
                            <div className='boxes'>
                                <div className='box-1'>
                                    <div className='text'>
                                        <h3>The Best Platform for Car Rental</h3>
                                        <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                                        <div><Link className='btn rentbnt' to="/detail/1">Rental Car</Link></div>
                                    </div>
                                </div>
                                <div className='box-2'>
                                    <div className='text'>
                                        <h3>Easy way to rent a car at a low price</h3>
                                        <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                                        <div><Link className='btn rentbnt' to="/detail/2">Rental Car</Link></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='popular-car'>
                            <div>Popular car</div>
                            <div className='view-all'><Link to="/category">View all</Link></div>
                        </div>
                        <section>
                            <div className='section'>
                                <div className='car-info'>
                                    <div className='head'>
                                        <div>
                                            <Link to="./detail/1"><h4>Koenigsegg</h4></Link>
                                            <p>sport</p>
                                        </div>
                                        <div>
                                            <img src={Emptyheart} alt="" /></div>
                                    </div>
                                    <div className='car'>
                                        <img className='car-imgg' src={Cahr} alt="" />
                                    </div>
                                    <div className='features'>
                                        <div><img src={Gas} alt="" />80L</div>
                                        <div><img src={Carrol} />Manual</div>
                                        <div><img src={Profileuser} />2 people</div>
                                    </div>
                                    <div className='price-box'>
                                        <div className='price'>$99.00/<span className='days'>day</span></div>
                                        <div ><Link className='btn rentbnt' to="./payment/1">Rent Car</Link></div>
                                    </div>
                                </div>
                                <div className='car-info'>
                                    <div className='head'>
                                        <div>
                                            <Link to="./detail/2"><h4>Nissan GT-R</h4></Link>
                                            <p>sport</p>
                                        </div>
                                        <div><img src={Emptyheart} alt="" /></div>
                                    </div>
                                    <div className='car'>
                                        <img className='car-imgg' src={Nissan} alt="" />

                                    </div>
                                    <div className='features'>
                                        <div><img src={Gas} alt="" />80L</div>
                                        <div><img src={Carrol} />Manual</div>
                                        <div><img src={Profileuser} />2 people</div>
                                    </div>
                                    <div className='price-box'>
                                        <div className='price'>$80.00/<span className='days'>day</span></div>
                                        <div><Link className='btn rentbnt' to="./payment/2">Rent Car</Link></div>
                                    </div>
                                </div>
                                <div className='car-info'>
                                    <div className='head'>
                                        <div>
                                            <Link to="./detail/3"> <h4>Roll-Royce</h4></Link>
                                            <p>sedan</p>
                                        </div>
                                        <div>  <img src={Emptyheart} alt="" /></div>
                                    </div>
                                    <div className='car'>
                                        <img className='car-imgg' src={Rolly} alt="" />
                                    </div>
                                    <div className='features'>
                                        <div><img src={Gas} alt="" />70L</div>
                                        <div><img src={Carrol} />Manual</div>
                                        <div><img src={Profileuser} />4 people</div>
                                    </div>
                                    <div className='price-box'>
                                        <div className='price'>$96.00/<span className='days'>day</span></div>
                                        <div><Link className='btn rentbnt' to="./payment/3">Rent Car</Link></div>
                                    </div>
                                </div>
                                <div className='car-info'>
                                    <div className='head'>
                                        <div>
                                            <Link to="./detail/2"><h4>Nissan GT-R</h4></Link>
                                            <p>sport</p>
                                        </div>
                                        <div><img src={Emptyheart} alt="" /></div>
                                    </div>
                                    <div className='car'>
                                        <img className='car-imgg' src={Nissan} alt="" />
                                    </div>
                                    <div className='features'>
                                        <div><img src={Gas} alt="" />80L</div>
                                        <div><img src={Carrol} />Manual</div>
                                        <div><img src={Profileuser} />2 people</div>
                                    </div>
                                    <div className='price-box'>
                                        <div className='price'>$80.00/<span className='days'>day</span></div>
                                        <div><Link className='btn rentbnt' to="./payment/2">Rent Car</Link></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="popular-car">
                            <div>Recomennded car</div>
                            <div className='view-all'><Link to="/category">View all</Link></div>
                        </div>
                        <section>
                            <div className='section'>
                                {users.map((car, index) => {
                                    return <div className="car-info" key={index}>
                                        <div className="head">
                                            <div>
                                                <Link to={`/detail/${car.id}`}><h4>{car.name}</h4></Link>
                                                <p>{car.type}</p>
                                            </div>
                                            <div>
                                                <img onClick={() => setChangeColor(!changeColor)} src={changeColor ? Emptyheart : Heart} alt="" /></div>
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
                        </section>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Home;