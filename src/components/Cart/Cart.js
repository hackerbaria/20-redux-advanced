import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              // Ensure the item has the necessary properties
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price
            }}
          />
        ))}
      </ul>
      
    </Card>
  );
};

export default Cart;

