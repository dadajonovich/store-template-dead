import useTheme from './hooks/useTheme';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Card from './components/Card';

const App = () => {
  const [elementRef, setTheme] = useTheme();
  console.log('Render App');

  return (
    <div ref={elementRef}>
      <Header {...{ setTheme }} />
      <main>
        <div className='container'>
          <Products />
          <Card />
        </div>
      </main>
    </div>
  );
};

export default App;
