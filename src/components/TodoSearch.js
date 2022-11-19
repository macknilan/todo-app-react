// import React from 'react'
import { Label, TextInput } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';

function TodoSearch() {
  return (
    <div>
      <div className='block mb-2'>
        <Label htmlFor='todosSearch' value='Search your task' />
      </div>
      <TextInput id='todosSearch' type='email' placeholder='Search...' required={true} icon={FaSearch} />
    </div>
  );
}

export { TodoSearch };
