import useTheme from './hooks/useTheme';
import Header from './components/header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [elementRef, setTheme] = useTheme();
  console.log('Render App');

  return (
    <div className='container' ref={elementRef}>
      <Header {...{ setTheme }} />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
