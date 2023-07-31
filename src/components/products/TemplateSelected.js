import useAccordion from '../../hooks/useAccordion';

function TemplateSelected({
  selectSwitch = 'false',
  setSelectSwitch = (f) => f,
  title = '',
  items = [],
}) {
  const [elementRef] = useAccordion(selectSwitch);
  return (
    <div className='template'>
      <h2
        onClick={() => setSelectSwitch((selectSwitch) => !selectSwitch)}
        className='template__title'
      >
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
}

export default TemplateSelected;
