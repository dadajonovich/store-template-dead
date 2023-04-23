import useTheme from './hooks/useTheme';
import Header from './components/header/Header';
import Products from './components/products/Products';

const App = () => {
  const [theme, setTheme] = useTheme();

  return (
    <div data-theme={theme}>
      <Header {...{ setTheme }} />
      <main>
        <div className='container'>
          <Products />
        </div>
      </main>
    </div>
  );
};

export default App;
