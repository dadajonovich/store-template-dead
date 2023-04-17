import Categories from './Categories';
import Search from './Search';
import { AiOutlineAppstore } from 'react-icons/ai';

function ProductsPanel() {
  return (
    <div className='products-panel'>
      <span>
        <AiOutlineAppstore />
        <p>Products</p>
      </span>
      <Search />
    </div>
  );
}

export default ProductsPanel;
