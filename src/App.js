import { useState, useEffect } from 'react';
import useTheme from './hooks/useTheme';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Card from './components/Card';

function App() {
  const [elementRef, setTheme] = useTheme();
  console.log('Render App');

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://640df143b07afc3b0dba8dc9.mockapi.io/articles')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setArticles(arr);
      });
  }, []);

  return (
    <div ref={elementRef}>
      <Header {...{ setTheme }} />
      <main>
        <div className='container'>
          <Products />
          <div className='card-product'>
            {' '}
            {articles.map((item, index) => (
              <Card key={index} {...item} />
            ))}{' '}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
