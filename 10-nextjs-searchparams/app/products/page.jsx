import React from 'react'

const page = async (props) => {
    const searchpram = await props.searchParams;
    console.log(searchpram)

    const category = searchpram?.category || 'all';
    const page = searchpram?.page || 1;


    return (
        <div>
            <h1 className="text-center font-bold text-3xl pt-40">Products Page</h1>
            <h2 className="text-center font-bold text-3xl ">Category : {category}</h2>
            <h2 className="text-center font-bold text-3xl ">page : {page}</h2>
        </div>
    )
}

export default page
