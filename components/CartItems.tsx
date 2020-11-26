import { useShoppingCart } from 'use-shopping-cart'

/**
 * CartItems.tsx
 * 
 *
 */
export function CartItems() {
  const {
    cartDetails,
    decrementItem,
    incrementItem,
    removeItem
  } = useShoppingCart()

  const cart = []
  // Note: Object.keys().map() takes 2x as long as a for-in loop
  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku]

    // all of your basic product data still exists (i.e. name, image, price)
    cart.push(
      <article>
        {/* image here */}
        {/* name here */}
        {/* formatted total price of that item */}
        <p>
        <div id="cartDetails">
            <div class="cartDetails1">
            {cartEntry.name} total: {cartEntry.formattedValue} 
                
                {/* What if we want to remove one of the item... or add one */}  
            </div>
            <div class="cartDetails2">
            Quantity: {cartEntry.quantity} 
                
            </div>
            <div class="cartDetails3">

                <button class="cartDetailsButton"
                    onClick={() => decrementItem(cartEntry.sku)}
                    aria-label={`Remove one ${cartEntry.name} from your cart`}
                >
                    -
                </button>

                
            </div>
            <div class="cartDetails4"> 

                {/* What if we don't want this product at all */}
                <button class="cartDetailsButton"
                    onClick={() => incrementItem(cartEntry.sku)}
                    aria-label={`Add one ${cartEntry.name} to your cart`}
                >
                    +
                </button>          
                
            </div>
            <div class="cartDetails5">
                <button class="cartDetailsButton"
                    onClick={() => removeItem(cartEntry.sku)}
                    aria-label={`Remove all ${cartEntry.name} from your cart`}
                >
                    Remove
                </button>
            </div>
        </div>
        </p>
      </article>
    )
  }

  return cart
}