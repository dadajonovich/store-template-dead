import useAccordion from '../../hooks/useAccordion';

const TemplateSelected = ({ title = '', items = [] }) => {
  const [elementRef, setSelectSwitch] = useAccordion();
  return (
    <div className='template'>
      <h2 onClick={setSelectSwitch} className='template__title'>
        {title}
        <span className='template__selected'>All</span>
      </h2>
      <ul ref={elementRef} className='template__list'>
        {items.map((item, index) => (
          <li className='template__list-item' key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateSelected;
