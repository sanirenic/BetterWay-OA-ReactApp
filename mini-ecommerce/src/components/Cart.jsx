export default function Cart({
  cart,
  removeFromCart,
  updateQty,
  totalItems,
  totalPrice
}) {
  if (cart.length === 0) {
    return <p>Cart is empty</p>;
  }

  return (
    <div className="cart">
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.title}</span>

          <input
            type="number"
            value={item.qty}
            onChange={e =>
              updateQty(item.id, Number(e.target.value), item.stock)
            }
          />

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h4>Total Items: {totalItems}</h4>
      <h4>Total Price: ₹{totalPrice}</h4>
    </div>
  );
}
