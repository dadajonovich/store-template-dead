import { AiOutlineSearch } from 'react-icons/ai';

function Search() {
  return (
    <div className='search'>
      <input
        className='search__input'
        type='text'
        name=''
        placeholder='Search'
      />
      <a className='search__btn' href='#'>
        <AiOutlineSearch />
      </a>
    </div>
  );
}

export default Search;
