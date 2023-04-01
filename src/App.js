import { useEffect, useState } from 'react';
import Header from './components/header/Header';

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('themes')) || 'dark'
  );

  useEffect(
    () => localStorage.setItem('themes', JSON.stringify(theme)),
    [theme]
  );
  return (
    <div data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <div className='container'></div>
      </main>
    </div>
  );
}

export default App;
