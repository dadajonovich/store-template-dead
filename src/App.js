import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Search from './components/product_variants/Search';

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('themes')) || 'dark'
  );

  useEffect(
    () => localStorage.setItem('themes', JSON.stringify(theme)),
    [theme]
  );

  // useEffect(() => {
  //   const darkModeMediaQuery = window.matchMedia(
  //     '(prefers-color-scheme: dark)'
  //   );
  //   setTheme(darkModeMediaQuery.matches);
  // }, []);

  return (
    <div data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <div className='container'>
          <Search />
        </div>
      </main>
    </div>
  );
}

export default App;
