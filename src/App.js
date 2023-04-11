import useTheme from './hooks/useTheme';
import Header from './components/header/Header';
import ProductsPanel from './components/products_panel/ProductsPanel';

const App = () => {
  const [theme, setTheme] = useTheme();

  return (
    <div data-theme={theme}>
      <Header {...{ setTheme }} />
      <main>
        <div className='container'>
          <ProductsPanel />
        </div>
      </main>
    </div>
  );
};

export default App;
