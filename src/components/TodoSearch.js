import { PropTypes } from 'prop-types';
import { Label, TextInput } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <div className='block mb-2'>
        <Label htmlFor='todosSearch' value='Search your task' />
      </div>
      <TextInput
        id='todosSearch'
        type='text'
        maxLength='30'
        placeholder='Search...'
        required={true}
        icon={FaSearch}
        onChange={onSearchValueChange}
        value={searchValue}
      />
    </div>
  );
}

TodoSearch.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export { TodoSearch };
