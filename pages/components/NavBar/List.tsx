import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const List = () => {
  const router = useRouter();
  const nav_items = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' },
  ];

  useEffect(() => {}, []);
  return (
    <ul className='flex gap-x-6 mr-0 ml-auto'>
      {nav_items.map((item) => {
        return (
          <li key={item.name}>
            <Link href={item.link}>
              <a
                className={
                  item.link === router.asPath
                    ? 'text-sky-400'
                    : 'text-gray-300 hover:text-white transition duration-100'
                }
              >
                <p className='font-semibold text-[1em] tracking-tighter leading-none'>
                  {item.name}
                </p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
