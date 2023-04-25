import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <div className='search'>
      <a className='search__btn' href='#'>
        <AiOutlineSearch />
      </a>
      <input
        className='search__input'
        type='text'
        name=''
        placeholder='Search...'
      />
    </div>
  );
};

export default Search;
