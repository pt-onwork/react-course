import { formatMoney } from "../../utils/money"
import axios from "axios"
import { useState } from "react";
export function CartItemDetails({cartItem, loadCart }) {
  const [updatingQuantity, setUpdatingQuantity]= useState(false);
  const [quantity, setQuantity]= useState(cartItem.quantity);
  const deleteCartItem = async ()=>{
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  }
  const updateQuantity = async()=>{
    if(updatingQuantity){
      await axios.put(`/api/cart-items/${cartItem.productId}`,{
        quantity: Number(quantity)
      });
      await loadCart();
      setUpdatingQuantity(false);
    }
    else{
      setUpdatingQuantity(true)
    }
  }
  const changeQuantity = (event)=>{
    setQuantity(event.target.value);
  }
  const enterForUpdating = (event)=>{
    if(event.key === 'Enter'){
      updateQuantity();
    }
    if(event.key ==='Escape'){
      setQuantity(cartItem.quantity);
    }

  }

  return (
    <>
      <img className="product-image"
        src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity: {updatingQuantity && <input className = "updateQuantity" type = "text" value = {quantity} onChange={changeQuantity} onKeyDown={enterForUpdating} ></input>}<span className="quantity-label">{cartItem.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary" onClick={updateQuantity}>
            Update
          </span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  )
}