import TemplateSelected from './TemplateSelected';
import Search from './Search';
import { AiOutlineAppstore } from 'react-icons/ai';
import useAccordion from '../../hooks/useAccordion';

const categories = ['All', 'Bottles', 'Tableware', 'Other'];

const Products = () => {
  const [elementRef, setSelectSwitch] = useAccordion();
  return (
    <div className='products'>
      <div className='products__wrapper'>
        <span className='products__btn' onClick={setSelectSwitch}>
          <AiOutlineAppstore />
          <p>Products</p>
        </span>
        <Search />
      </div>
      <div ref={elementRef} className='products__accordion'>
        <TemplateSelected title={'Category selected: '} items={categories} />
        <TemplateSelected title={'Sort by: '} items={categories} />
      </div>
      <hr
        style={{
          opacity: '80%',
        }}
      />
    </div>
  );
};

export default Products;
