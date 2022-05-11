function Store({items , addToCart}){
    return (
        <li>
              <div className="store--item-icon">
                <img src={`assets/icons/${items.id}.svg`} alt={`${items.name}`} />
              </div>
              <button onClick={() => addToCart(items)}>Add to cart</button>
        </li>
    )
}

export default Store 