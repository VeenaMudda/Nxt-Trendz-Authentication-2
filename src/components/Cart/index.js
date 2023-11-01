// Write your JS code here
// Write your JS code here
import './index.css'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

const Cart = () => {
  console.log('card')
  const cookiesToken = Cookies.get('jwt_token')
  if (cookiesToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="bg-container-card">
        <img
          className="card-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
        />
      </div>
    </>
  )
}

export default Cart
