import useTheme from './hooks/useTheme';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Card from './components/Card/Card';
import SkeletonCard from './components/Card/SkeletonCard';
import useFetch from './hooks/useFetch';

function App() {
  const [elementRef, setTheme] = useTheme();
  console.log('Render App');

  const { loading, data, error } = useFetch(
    'https://640df143b07afc3b0dba8dc9.mockapi.io/articles'
  );

  return (
    <div ref={elementRef}>
      <Header {...{ setTheme }} />
      <main>
        <div className='container'>
          <Products />
          <section className='card-block'>
            {loading
              ? [...new Array(6)].map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : data.map((item, index) => <Card key={index} {...item} />)}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
