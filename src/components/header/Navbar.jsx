function NavBar({ items, active, setActive }) {
  return (
    <nav
      className='header__nav'
      data-state-hide={active ? 'active' : 'closed'}
      onClick={() => setActive(false)}
    >
      <div
        className='header__list-wrapper'
        onClick={(e) => e.stopPropagation()}
      >
        <ul className='header__list'>
          {items.map((item, index) => (
            <>
              <li key={index} className='header__list-item'>
                {<item.icon />}
                <a href='#'>{item.value}</a>
              </li>
              <hr className='header__vl' />
            </>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
