import useTheme from './hooks/useTheme';
import Header from './components/header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const [elementRef, setTheme] = useTheme();
  console.log('Render App');

  return (
    <div className='container' ref={elementRef}>
      <Header {...{ setTheme }} />
      <main>
        {/* <Home /> */}
        <NotFound />
      </main>
    </div>
  );
}

export default App;
