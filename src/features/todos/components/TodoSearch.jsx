import { TextInput } from 'flowbite-react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

function TodoSearch() {
  return (
    <div className='container'>
      <TextInput icon={HiMagnifyingGlass} id='email4' placeholder='search...' required type='text' />
    </div>
  );
}

export { TodoSearch };
