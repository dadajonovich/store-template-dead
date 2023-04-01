import { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillHome,
  AiOutlineInfoCircle,
  AiOutlineBulb,
} from 'react-icons/ai';
import Navbar from './Navbar';

function Header({ theme, setTheme }) {
  const items = [
    { value: 'Home', href: '/#', icon: AiFillHome },
    { value: 'About', href: '/#', icon: AiOutlineInfoCircle },
  ];
  const [menuSwitch, setMenuSwitch] = useState(false);
  return (
    <>
      <header className='header'>
        <div className='header__wrapper'>
          <div className='header__menu'>
            <button
              onClick={() => setMenuSwitch(!menuSwitch)}
              className='header__burger'
            >
              {!menuSwitch ? <AiOutlineMenu /> : <AiOutlineClose />}
            </button>
            <a href='#' className='header__title'>
              Tupperware Store
            </a>
          </div>
          <div className='header__left'>
            <button className='header__cart'>
              <AiOutlineShoppingCart />
              <span className='header__counter'>1</span>
            </button>
            <button>
              <AiOutlineUser />
            </button>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <AiOutlineBulb />
            </button>
          </div>
        </div>
      </header>
      {<Navbar active={menuSwitch} setActive={setMenuSwitch} items={items} />}
    </>
  );
}

export default Header;
