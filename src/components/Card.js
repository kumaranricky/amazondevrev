import { useStateValue } from './StateProvider';
import Rating from './Rating';
const Card = (props) => {
  const { title, price, rating, imageURL } = props;
  const { myReducer } = useStateValue();
  const [ , dispatch] = myReducer;

  const clickHanler = (selectedValue) => {
    dispatch({
      type:'ADD_TO_CART',
      payload: selectedValue
    });
  }
  return(
    <div className='card'>
      <p className='title'>{ title }</p>
      <p className='price'>${ price }</p>
      <p className='starRating'>{ <Rating rating={rating} /> }</p>
      <div className='imageHolder'>
        <img src={imageURL} alt=''/>
        <br/>
        <br/>
        <button onClick={()=>clickHanler(props)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card;