function Cart({ cartItem, increaseBtn, decreaseBtn }) {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${cartItem.item.id}.svg`}
        alt={`${cartItem.item.id}`}
      />
      <p>{`${cartItem.item.name}`}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => {
          decreaseBtn(cartItem)
        }}
      >
        -
      </button>
      <span className="quantity-text center">{`${cartItem.quantity}`}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => {
            increaseBtn(cartItem)
        }}
      >
        +
      </button>
    </li>
  )
}

export default Cart
