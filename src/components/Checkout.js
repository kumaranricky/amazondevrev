import './checkout.css';
import { useStateValue } from './StateProvider';

const Checkout = () => {
  const { myReducer } = useStateValue();
  const [ state,dispatch ] = myReducer;

  const getTotalAmount = () => {
    let total = 0;
    state.cartList.map(item =>{
      return total = Number(total) + Number(item.price);
    })
    return total;
  }

  return(
    <div className="checkout">
      <div className='leftSide'>
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
      </div>
      <div className="rightSide">
        <div className="subtotal">
          <p>Subtotal({state.cartList.length} items): <strong>Rs{getTotalAmount()}</strong></p>
          <p><input type="checkbox"/>This order contains a gift</p>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout;