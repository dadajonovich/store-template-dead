function Categories() {
  const categories = ['Все', 'Бутылки', 'Посуда', 'Разное'];

  return (
    <div className='categories'>
      <ul className='categories__title'>
        {categories.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
