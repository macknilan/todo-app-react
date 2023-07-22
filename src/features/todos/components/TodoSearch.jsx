import { TextInput } from 'flowbite-react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className='container'>
      <TextInput
        icon={HiMagnifyingGlass}
        id='email4'
        placeholder='search...'
        required
        type='text'
        onChange={onSearchValueChange}
        value={searchValue}
      />
    </div>
  );
}

export { TodoSearch };
