import './shopBasket.css';
import { useStateValue } from './StateProvider';

const ShopBasket = () => {
  const { myReducer } = useStateValue();
  const [ state, dispatch ] = myReducer;

  const clickHanler=(id)=>{
    dispatch({
        type:'REMOVE_FROM_CART',
        payload:id
      })
    
  }
  return(
    <div className="shopBasket">
      <h2>Your Shopping Basket</h2>
      <hr/>
      <ul className='list'>
        {
          state.cartList.map((item,index) => (<li key={index}>
            <div className='imageHolder'>
              <img src={item.imageURL} alt="" />
            </div>
            <div className='itemDeatils'>
              <div>{item.title}</div>
              <p><strong>Rs{item.price}</strong></p>
              <div>{item.rating}</div>
              <button onClick={()=>clickHanler(item.id)}> Remove from Cart</button>
            </div>
          </li>))
        }
      </ul>
    </div>
  )
}

export default ShopBasket;