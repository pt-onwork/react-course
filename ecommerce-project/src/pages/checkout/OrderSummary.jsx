import { DeliveryOptions } from './DeliveryOptions'
import { CartItemDetails } from './CartItemDetails'
import { DeliveryDate } from './DeliveryDate'
export function OrderSummary({ cart, deliveryOptions, loadCart}) {
  return (
    <div className="order-summary">

      {deliveryOptions.length > 0 && cart.map((cartItem) => {
        
        return (
          <div key={cartItem.productId} className="cart-item-container">
            <DeliveryDate cartItem = {cartItem} deliveryOptions = {deliveryOptions}/>
            <div className="cart-item-details-grid">
              <CartItemDetails cartItem={cartItem} />

              {/* <img className="product-image"
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
                    Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                  </span>
                  <span className="update-quantity-link link-primary">
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div> shifted to cartitemdetails.jsx */}

              {<DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />}
            </div>
          </div>
        )
      })}

    </div>
  )
}