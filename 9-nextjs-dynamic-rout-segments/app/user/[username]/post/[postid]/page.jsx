'use client';

import React from 'react'

function page({ params }) {


    console.log(params)
    const post = React.use(params)
    console.log(post)


    return (
        <div>
            <h1 className="text-4xl font-bold text-center pt-40">Post page</h1>
            <h1 className="text-4xl font-bold text-center pt-40">Post id:{post.postid}</h1>
        </div>
    )
}

export default page
