"use client"
import { useState } from 'react';
import Plus from '../icons/PlusIcon';
import Minus from '../icons/Minus';

export default function Modal({title, desc}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <section className='pt-6 pb-6 border-y text-white'>
      <button onClick={() => setIsModalOpen(!isModalOpen)} className='flex justify-between w-full'>
        <span className='text-2xl'>{title}</span>
        {isModalOpen ? <Minus /> : <Plus />}
      </button>
      <div className={`grid overflow-hidden transition-all ease-in-out  ${isModalOpen ? 'grid-rows-[1fr] opacity-100 text-lg' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className='overflow-hidden'>{desc}</div>
      </div>
    </section>
    </>
  );
}