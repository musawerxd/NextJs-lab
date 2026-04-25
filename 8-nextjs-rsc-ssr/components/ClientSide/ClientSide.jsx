//finding the issue in this 

// 'use client';

import React from 'react'
import { useState, useEffect } from 'react'


// const [fethcedData, setFethcedData] = useState(null)




function ClientSide() {
    const [fetchedData, setFetchedData] = useState([])

    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        // setFethcedData(data)
        console.log("Data : ", data)
        console.log("Datatype : ", typeof data)
        setFetchedData(data);
    }



    useEffect(() => {
        fetchData();
    }, [])

    const [counter, setCounter] = useState(0)

    return (
        <div className='bg-amber-800 w-fit p-6 rounded-2xl mb-20'>
            <button className='hover:cursor-pointer bg-white rounded-2xl text-4xl py-3 px-5 text-black' onClick={() => { setCounter(prev => prev + 1) }}>
                counter: {counter}

            </button>
            {counter === 5 ? alert("Stop!") : null}

            <div className='mt-5'>
                <h1> Data from JsonPlaceHolder client side </h1>
                {fetchedData ? (<>
                    <p>id: {fetchedData.id}</p>
                    <p>title : {fetchedData.title}</p>
                    <p>{fetchedData.completed}</p>
                </>
                ) : "loading..."}

            </div>
        </div>
    )
}

export default ClientSide
