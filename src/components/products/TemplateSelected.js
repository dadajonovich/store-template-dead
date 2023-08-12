import useAccordion from '../../hooks/useAccordion';
import { useState } from 'react';

function TemplateSelected({
  selectSwitch = 'false',
  setSelectSwitch = (f) => f,
  title = '',
  items = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [elementRef] = useAccordion(selectSwitch);

  const templateListItemClassName = 'template__list-item';
  const templateListItemActiveClassName =
    'template__list-item template__list-item_active';

  // const handleClickSelect = (index) => {
  //   if (index === activeIndex) {
  //     setActiveIndex();
  //   } else setActiveIndex(index);
  // };
  return (
    <div className='template'>
      <h2
        onClick={() => setSelectSwitch((selectSwitch) => !selectSwitch)}
        className='template__title'
      >
        {title}
        <span className='template__selected'>{items[activeIndex]}</span>
      </h2>
      <ul ref={elementRef} className='template__list'>
        {items.map((item, index) => (
          <li
            onClick={() => setActiveIndex(index)}
            className={
              activeIndex === index
                ? templateListItemActiveClassName
                : templateListItemClassName
            }
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TemplateSelected;
