import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import SinginScreen from './screens/SinginScreen'

function App() {
    const cart = useSelector((state) => state.cart)

    const { cartItems } = cart

    const userSignin = useSelector((state) => state.userSignin)

    const { userInfo } = userSignin

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
                        {cartItems.length > 0 && (
                            <span className='badge'>{cartItems.length}</span>
                        )}
                        {userInfo ? (
                            <Link to='#'>{userInfo.name}</Link>
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
                    <Route path='/' component={HomeScreen} exact></Route>
                </main>
                <footer className='row center'>All right reserved</footer>
            </div>
        </BrowserRouter>
    )
}

export default App
