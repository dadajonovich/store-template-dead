import Categories from './Categories';
import Search from './Search';
import AiOutlineAppstore from 'react-icons/ai';

function ProductsPanel() {
  return (
    <div className='products-panel'>
      <Categories />
      <Search />
    </div>
  );
}

export default ProductsPanel;
