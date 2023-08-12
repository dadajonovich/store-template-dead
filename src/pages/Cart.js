import { AiOutlineShoppingCart, AiOutlineClear } from 'react-icons/ai';

function Cart() {
  return (
    <section className='cart'>
      <div className='cart-header'>
        <AiOutlineShoppingCart />
        <p className='cart-title'>Your products</p>
      </div>
    </section>
  );
}

export default Cart;
