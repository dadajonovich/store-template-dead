import Products from '../components/products/Products';
import Card from '../components/Card/Card';
import SkeletonCard from '../components/Card/SkeletonCard';
import useFetch from '../hooks/useFetch';

function Home() {
  const { loading, data, error } = useFetch(
    'https://640df143b07afc3b0dba8dc9.mockapi.io/articles'
  );
  return (
    <div className='catalog'>
      <Products />
      <section className='card-block'>
        {loading
          ? [...new Array(6)].map((_, index) => <SkeletonCard key={index} />)
          : data.map((item, index) => <Card key={index} {...item} />)}
      </section>
    </div>
  );
}

export default Home;
