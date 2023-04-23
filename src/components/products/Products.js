import TemplateSelected from './TemplateSelected';
import Search from './Search';
import { AiOutlineAppstore } from 'react-icons/ai';
import { useReducer } from 'react';
import useAccordion from '../../hooks/useAccordion';

const categories = ['All', 'Bottles', 'Tableware', 'Other'];

function Products() {
  console.log('Render Products');
  const [selectSwitch, setSelectSwitch] = useReducer(
    (selectSwitch) => !selectSwitch,
    false
  );
  const [elementRef] = useAccordion(selectSwitch);
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
      <hr />
    </div>
  );
}

export default Products;
