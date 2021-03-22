import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import SinginScreen from './screens/SinginScreen'
import {signout} from './actions/userActions'
import RegisterScreen from './screens/RegisterScreen'
import ShippingAddressScreen from './screens/ShippingAddressScreen'

function App() {
    const cart = useSelector((state) => state.googleReducer)

    const { cartItems } = cart

    const userSignin = useSelector((state) => state.userSignin)

    const { userInfo } = userSignin


    const dispatch = useDispatch()

    const signoutHandler = (e) => {
        console.log('eeeee', e)

        e.preventDefault()

       dispatch(signout())
        

    }

    return (
        <BrowserRouter>
            <div className='grid-container'>
                <header className='row'>
                    <div>
                        <Link to='/' className='brand'>
                            Web store IV
                        </Link>
                    </div>
                    <div>
                        <Link to='/cart'>Cart</Link>
                        {cartItems !== null && cartItems.length > 0 && (
                            <span className='badge'>{cartItems.length}</span>
                        )}
                        {userInfo ? (
                            <div className='dropdown'>
                                <Link to='#'>
                                    {userInfo.name}{' '}
                                    <i className='fa fa-caret-down'></i>
                                </Link>
                                <ul className='dropdown-content'>
                                    <Link
                                        to='#signout'
                                        onClick={signoutHandler}
                                    >
                                        Sign out
                                    </Link>
                                </ul>
                            </div>
                        ) : (
                            <Link to='/signin'>Sign In</Link>
                        )}
                    </div>
                </header>
                <main>
                    <Route path='/cart/:id?' component={CartScreen}></Route>
                    <Route
                        path='/product/:id'
                        component={ProductScreen}
                    ></Route>
                    <Route path='/signin' component={SinginScreen}></Route>
                    <Route path='/register' component={RegisterScreen}></Route>
                    <Route path='/shipping' component={ShippingAddressScreen}></Route>
                    <Route path='/' component={HomeScreen} exact></Route>
                </main>
                <footer className='row center'>All right reserved</footer>
            </div>
        </BrowserRouter>
    )
}

export default App
