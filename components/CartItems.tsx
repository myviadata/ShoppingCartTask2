import { useShoppingCart } from 'use-shopping-cart'

/**
 * CartItems.tsx
 * 26.11.2020 / RAM
 * Cart item details in list of rows with add, remove, delete functions 
 * Used in CartSummary
 */
export function CartItems() {
  const {
    cartDetails,
    decrementItem,
    incrementItem,
    removeItem
  } = useShoppingCart()

  const cart = []
  // Traverse through the details
  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku]

    // Product data details with add, remove one, remove all buttons
    cart.push(
      <article>
        <p>
        <div id="cartDetails">
            <div class="cartDetails1">
                {cartEntry.name} total: {cartEntry.formattedValue}   
            </div>
            <div class="cartDetails2">
                Quantity: {cartEntry.quantity}      
            </div>
            <div class="cartDetails3">
                {/* remove one product*/} 
                <button class="cartDetailsButton" onClick={() => decrementItem(cartEntry.sku)}>
                    <b>-</b>
                </button>
            </div>
            <div class="cartDetails4"> 
                {/* add one product*/} 
                <button class="cartDetailsButton" onClick={() => incrementItem(cartEntry.sku)}>
                    <b>+</b>
                </button>          
            </div>
            <div class="cartDetails5">
                {/* remove row */}
                <button class="cartDetailsButton" onClick={() => removeItem(cartEntry.sku)}>
                    delete
                </button>
            </div>
        </div>
        </p>
      </article>
    )
  }

  return cart
}