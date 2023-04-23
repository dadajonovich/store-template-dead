function TemplateSelected({ title = '', items = [] }) {
  return (
    <div className='template'>
      <h2 className='template__title'>
        {title}
        <span className='template__selected'>All</span>
      </h2>
      <ul className='template__list'>
        {items.map((item, index) => (
          <li className='template__list-item_active' key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TemplateSelected;
