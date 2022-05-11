import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'

import {useState} from "react"

import Store from "./Store"
import Cart from "./Cart"
/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

console.log(initialStoreItems)

export default function App() {
  // Setup state here...
  const [store, setStore] = useState(initialStoreItems)
  const [cart, setCart] = useState([])
  
  const addToCart = item => {
    const vegInCart = cart.find(vegItem => vegItem.item.id === item.id)
    if (vegInCart) {
      vegInCart.quantity++
      setCart([...cart])
    } else {
      const cart = { item: item, quantity: 1 }
      setCart(cartItems => [...cartItems, cart])
    }
  }
function increaseBtn(){
}

function decreaseBtn(){
  
}

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {/* Wrtite some code here... */}
          {store.map(items => {
            return (
              <Store
              key={items.id}
              items={items}  
              addToCart={addToCart}
              />
            )
          })
          }
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* Wrtite some code here... */}
            {cart.map(cartItem =>{
              return(
                <Cart
                key={cartItem.item.id}
                cartItem={cartItem}
                increaseBtn = {increaseBtn}
                decreaseBtn = {decreaseBtn}
                />
              )
            })}

          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
