import React from 'react';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';
// import { FiTwitter } from 'react-icons/fi';
const Social = () => {
  return (
    <>
      <div className='w-full flex flex-col'>
        <h3 className='info_header text-3xl mb-1 font-semibold'>Follow Us</h3>
        <div className=' flex gap-x-2 text-gray-200'>
          <RiInstagramFill className='social_icon' />
          <IoLogoTwitter className='social_icon' />
          <IoLogoFacebook className='social_icon' />
        </div>
      </div>
    </>
  );
};

export default Social;
