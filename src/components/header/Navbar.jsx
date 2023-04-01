function Navbar({ items, active, setActive }) {
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
          {items.map((item, i) => (
            <li className='header__list-item' key={i}>
              <a className='header__list-text' href='#'>
                {<item.icon />}
                {item.value}
              </a>
              <hr className='header__list-item-vl' />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
