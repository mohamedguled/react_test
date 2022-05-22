import React from 'react';
import List from './List';

const Container = () => {
  return (
    <div className='px-6 lg:px-12 py-9 flex justify-between items-center'>
      <h1 className='text-3xl font-bold'>Lorem Ipsum</h1>
      <List />
    </div>
  );
};

export default Container;
