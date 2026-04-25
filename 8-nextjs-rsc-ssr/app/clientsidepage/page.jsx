'use client';
import React from 'react';

// import ClientSide from '../../components/clientside/ClientSide';
import ClientSide from '../../components/ClientSide/ClientSide';

function page() {
  return (
    <div className='flex flex-col items-center '>
      <h1 className="text-center font-bold text-4xl py-40">This is Client side Page</h1>
      <ClientSide />
    </div>
  )
}

export default page
