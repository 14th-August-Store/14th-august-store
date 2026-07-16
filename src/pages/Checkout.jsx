import { useCart } from "../context/CartContext";
import "../css/checkout.css";


function Checkout(){

const {cart}=useCart();


const total = cart.reduce(
  (sum,item)=>
    sum + item.price * item.quantity,
  0
);


function handleSubmit(e){

e.preventDefault();

alert("Order placed successfully! 🇵🇰");

}


return (

<div className="checkout-page">


<h1>
Checkout
</h1>


<div className="order-summary">

<h2>
Order Summary
</h2>


{
cart.map(item=>(

<p key={item.id}>

{item.name} 
× {item.quantity}

&nbsp; 
Rs. {item.price * item.quantity}

</p>

))
}


<h3>
Total: Rs. {total}
</h3>


</div>



<form 
onSubmit={handleSubmit}
>


<input
type="text"
placeholder="Full Name"
required
/>


<input
type="text"
placeholder="Phone Number"
required
/>


<input
type="text"
placeholder="City"
required
/>


<textarea

placeholder="Complete Address"

required

></textarea>



<select>

<option>
Cash on Delivery
</option>

</select>



<button>
Place Order
</button>


</form>


</div>

);

}


export default Checkout;