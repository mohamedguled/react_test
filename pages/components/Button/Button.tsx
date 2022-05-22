import React from 'react';

const Button = ({ children }: any) => {
  return (
    <button
      style={{ paddingBlock: '10px', paddingInline: '20px' }}
      className='bg-sky-600 text-white rounded-sm font-bold tracking-wider flex justify-center items-center'
    >
      <p className='text-xl'>{children}</p>
    </button>
  );
};

export default Button;
