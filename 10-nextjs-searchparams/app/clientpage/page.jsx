'use client';
import React from 'react'
import { useSearchParams } from 'next/navigation';

const page = () => {
    const searchpram = useSearchParams();
    console.log(searchpram)

    const category = searchpram?.get('category') || 'all';
    const page = searchpram?.get('page') || 1;
    const entries = Object.fromEntries(searchpram?.entries())

    console.log(entries)

    return (
        <div>
            <h1 className="text-center font-bold text-3xl pt-40">Client Products Page</h1>
            <h2 className="text-center font-bold text-3xl ">Category : {category}</h2>
            <h2 className="text-center font-bold text-3xl ">page : {page}</h2>
        </div>
    )
}

export default page
