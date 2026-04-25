import React from 'react'

async function page(props) {

    console.log(props)
    const user = await props.params
    console.log(user)


    return (
        <div>
            <h1 className="text-4xl font-bold text-center pt-40">User page</h1>
            <h1 className="text-4xl font-bold text-center pt-40">User: {user.username}</h1>
        </div>
    )
}

export default page
