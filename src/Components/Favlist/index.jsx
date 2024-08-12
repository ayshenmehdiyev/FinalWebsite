import React from 'react'
import './favlist.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavListAction } from '../../Redux/actions/favlist.actions'
import Heart from '../../assets/heart.png';


const Favlist = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    function removeProduct (id){
        dispatch(removeFromFavListAction(id))  
      }


    return (
        <div className='favoritylist'>
            <ul className='Addlist'>
                {state.map((car) => {
                    return <li className='List'>
                        <div className='ListCar'><img src={car.img} alt="" /></div>
                        <div className='Fav-info'>
                            <div className='car-qrup'>
                            <p className='ListName'>{car.name}</p>
                            <p className='ListType'>{car.type}</p>
                        </div>
                        <div className='Heart-icon'>
                        {
                                    state.find(item => item.id === car.id ) ?
                                    <img src={Heart}  onClick={() => removeProduct(car.id)} alt="" /> :
                                    <img src={Emptyheart} onClick={()=> addList(car)} alt="" />

                                }
                            </div>
                        </div>
                        
                    </li>
                })}
            </ul>
            <span className='ListDet'></span>
            </div>

    )
}

export default Favlist


