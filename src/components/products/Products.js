import TemplateSelected from './TemplateSelected';
import Search from './Search';
import { AiOutlineAppstore } from 'react-icons/ai';
import useAccordion from '../../hooks/useAccordion';
import { useReducer, useState } from 'react';

const categories = ['All', 'Bottles', 'Tableware', 'Other'];

const Products = () => {
  const [selectSwitch, setSelectSwitch] = useState(false);
  const [selectSwitchCategories, setSelectSwitchCategories] = useState(false);
  const [selectSwitchSort, setSelectSwitchSort] = useState(false);

  const handleSetSelectSwitch = () => {
    setSelectSwitch((selectSwitch) => !selectSwitch);
    setSelectSwitchCategories(false);
    setSelectSwitchSort(false);
  };
  const [elementRef] = useAccordion(selectSwitch);
  return (
    <div className='products'>
      <div className='products__wrapper'>
        <span className='products__btn' onClick={handleSetSelectSwitch}>
          <AiOutlineAppstore />
          <p>Products</p>
        </span>
        <Search />
      </div>
      <div ref={elementRef} className='products__accordion'>
        <TemplateSelected
          selectSwitch={selectSwitchCategories}
          setSelectSwitch={setSelectSwitchCategories}
          title={'Category selected: '}
          items={categories}
        />
        <TemplateSelected
          selectSwitch={selectSwitchSort}
          setSelectSwitch={setSelectSwitchSort}
          title={'Sort by: '}
          items={categories}
        />
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
