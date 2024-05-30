import React, { useState } from 'react'
import './payment.css'
import Paypal from '../../assets/PayPal.png'
import Vrstva from '../../assets/Vrstva 302.png'
import Bitcoin from '../../assets/Bitcoin.png'
import Carone from '../../assets/Car (1).png'
import Star from '../../assets/Layer.png'
import Emptystar from '../../assets/ic-actions-star.png'
import Visa from '../../assets/Visa.png'
import { useParams } from 'react-router'
import { data } from '../data'
/*import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';*/


const Payment = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [adress, setAdress] = useState("")
    const [city, setCity] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [cardnum, setCradnum] = useState("")
    const [cardholder, setCardholder] = useState("")
    const [expra, setExpra] = useState("")
    const [cvc, setCvc] = useState("")
    const [paypal, setPaypal] = useState("")
    const [bitcoin, setBitcoin] = useState("")
    const value = {
        Name: name,
        Addres: adress,
        TownCity: city,
        Phone: number,
        Locations: location
    }

    console.log(adress, location)
    function getHandleForm(e) {
        e.preventDefault()
        console.log(value)
    }

    const param = useParams()

    const cars = data.find((info) => {
        return info.id === param.id;
    })


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="form-box">
                        <div className="form-box-1">
                            <form action="" className="form-1 ml-5">
                                <div className="info d-flex flex-direction-row justify-content-between">
                                    <div className="bill-info">
                                        <h5>Billing Info</h5>
                                        <p>Please enter your billing info</p>
                                    </div>
                                    <div className="div">Step 1 of 4</div>
                                </div>
                                <div className="form d-flex flex-direction-row">
                                    <div>
                                        <label for="name">Name</label>
                                        <input className="grey" type="text" placeholder="Your name" id="name" onChange={(e) => setName(e.target.value)} />
                                        <label for="address">Address</label>
                                        <input className="grey" type="text" placeholder="address" id="address" onChange={(e) => setAdress(e.target.value)} />
                                    </div>
                                    <div className="ml-4">
                                        <label for="phone">Phone Number</label>
                                        <input className="grey" type="text" placeholder="Phone number" id="phone" onChange={(e) => setNumber(e.target.value)} />
                                        <label for="city">Town/City</label>
                                        <input className="grey" type="text" placeholder="Town or city" id="city" onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                </div>
                            </form>
                            <form action="" className="form-2 ml-5" >
                                <div className="info d-flex flex-direction-row justify-content-between">
                                    <div className="bill-info">
                                        <h5>Rental Info</h5>
                                        <p>Please enter your billing info</p>
                                    </div>
                                    <div className="div">Step 2 of 4</div>
                                </div>
                                <span><input type="radio" name="" id="" /> Pick-up </span>
                                <div className="form d-flex flex-direction-row">
                                    <div>
                                        <label for="name">Locations</label>
                                        <select className="grey" name="" id="" placeholder="Select your city" onChange={(e) => setLocation(e.target.value)}>
                                            <option value="Baku">Baku</option>
                                            <option value="Sumqayit">Sumqayit</option>
                                            <option value="gence">gence</option>
                                            <option value="Bilesuvar">Bilesuvar</option>
                                        </select>
                                        <label for="address">Time</label>
                                        <input className="grey" type="time" placeholder="address" id="address" onChange={(e) => setTime(e.target.value)} />
                                    </div>
                                    <div className="ml-4">
                                        <label for="phone">Date</label>
                                        <input className="grey" type="date" name="" id="date" onChange={(e) => setDate(e.target.value)} />
                                    </div>
                                </div>
                                <span>
                                    <input type="radio" name="" id="" /> Pick-up </span>
                                <div className="form d-flex flex-direction-row">
                                    <div>
                                        <label for="name">Locations</label>
                                        <select className="grey" name="" id="" placeholder="Select your city" onChange={(e) => setLocation(e.target.value)}>
                                            <option value="Baku">Baku</option>
                                            <option value="Sumqayit">Sumqayit</option>
                                            <option value="gence">gence</option>
                                            <option value="Bilesuvar">Bilesuvar</option>
                                        </select>
                                        <label for="address">Time</label>
                                        <input className="grey" type="time" placeholder="address" id="address" onChange={(e) => setTime(e.target.value)} />
                                    </div>
                                    <div className="ml-4">
                                        <label for="phone">Date</label>
                                        <input className="grey" type="date" name="" id="date" />
                                    </div>
                                </div>
                            </form>
                            <form action="" className="form-3 ml-5">
                                <div className="info d-flex flex-direction-row justify-content-between">
                                    <div className="bill-info">
                                        <h5>Payment Method</h5>
                                        <p>Please enter your payment method</p>
                                    </div>
                                    <div className="div">Step 2 of 4</div>
                                </div>
                                <div className="payment">
                                    <div className=" d-flex flex-direction-row justify-content-between"><span><input type="radio" name="" id="" /> Credit Card </span><span><img src={Visa} alt="" /></span></div>
                                    <div className="form d-flex flex-direction-row">
                                        <div>
                                            <label for="name">Card Number</label>
                                            <input className="white" type="text" placeholder="Card number" id="name" onChange={(e) => setCradnum(e.target.value)} />
                                            <label for="address">Card Holder</label>
                                            <input className="white" type="text" placeholder="Card holder" id="address" onChange={(e) => setCardholder(e.target.value)} />
                                        </div>
                                        <div className="ml-3">
                                            <label for="phone">Expration Date</label>
                                            <input className="white" type="date" placeholder="Phone number" id="phone" onChange={(e) => setExpra(e.target.value)} />
                                            <label for="city">CVC</label>
                                            <input className="white" type="text" placeholder="CVC" id="city" />
                                        </div>
                                    </div>
                                </div>
                                <div className="method">
                                    <div className="paypal d-flex flex-direction-row justify-content-between">
                                        <div><input type="radio" name='payment' onChange={(e) => setPaypal(e.target.value)} />PayPal</div>
                                        <div><img src={Paypal} alt="" />
                                        </div>
                                    </div>
                                    <div className="bitcoin d-flex flex-direction-row justify-content-between">
                                        <div><input type="radio" name='payment' onChange={(e) => setBitcoin(e.target.value)} />Bitcoin</div>
                                        <div><img src={Bitcoin} alt="" /></div>
                                    </div>

                                </div>
                            </form>
                            <form className="form-3 ml-5" action="">
                                <div className="info d-flex flex-direction-row justify-content-between">
                                    <div className="bill-info">
                                        <h5>Confirmation</h5>
                                        <p>We are getting to the end. Just few clicks and your rental is ready!</p>
                                    </div>
                                    <div className="div">Step 2 of 4</div>
                                </div>
                                <div className="method">
                                    <div className="paypal d-flex">
                                        <input type="checkbox" name='check' />I agree with sending an Marketing and newsletter emails. No spam,
                                        promissed!
                                    </div>
                                    <div className="paypal d-flex">
                                        <input type="checkbox" name='check' />I agree with our terms and conditions and privacy policy.
                                    </div>
                                </div>
                                <div className='safe'>
                                    <button type='submit' className='btn-now' onClick={getHandleForm} >Rent Now</button>
                                    <div><img src={Vrstva} alt="" />
                                    </div>
                                    <h4>All your data are safe</h4>
                                </div>
                                <p>We are using the most advanced security to provide you the best experience ever.</p>
                            </form>
                        </div>
                        <div className="form-box-2">
                            <div className="form-5">
                                <form action="">
                                    <div className="bill-info">
                                        <h5>Rental Summary</h5>
                                        <p>Prices may change depending on the length of the rental and the price of your rental car.</p>
                                    </div>
                                    <div>
                                        <div className="main d-flex flex-row">
                                            <div className="car-img"><img src={cars.img} alt="" /></div>
                                            <div className="infoo ml-3">
                                                <h4>{cars.name}</h4>
                                                <div className="img-star">
                                                    <img src={Star} alt="" />
                                                    <img src={Star} alt="" />
                                                    <img src={Star} alt="" />
                                                    <img src={Star} alt="" />
                                                    <img src={Emptystar} alt="" />
                                                    <span className="d-block review">100+ Reviewer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="Total d-flex flex-row justify-content-between">
                                            <span className='sub-total'>Subtotal</span>
                                            <span className='price-text'>{cars.price}</span>
                                        </div>
                                        <div className="Total d-flex flex-row justify-content-between">
                                            <span className='sub-total'>Tax</span>
                                            <span className='price-text'>$0</span>
                                        </div>
                                    </div>
                                    <div className="input position-relative">
                                        <input type="text" className="grey w-100 mt-3 mb-3" placeholder="Apply promo code" /><span className='Apply-now'>Apply now</span>
                                    </div>
                                    <div className="total-price d-flex flex-row justify-content-between">
                                        <div className="bill-info">
                                            <h5>Total Rental Price</h5>
                                            <p>Overall price and includes rental discount</p>
                                        </div>
                                        <div>{cars.price}</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div></div></div>

        </div>
    )
}

export default Payment