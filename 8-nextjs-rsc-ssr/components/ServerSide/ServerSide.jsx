
async function ServerSide() {

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json();

  return (
    <div className='mt-5'>
      <h1> Data from JsonPlaceHolder server side </h1>
      {data ? (<>
        <p>id: {data.id}</p>
        <p>title : {data.title}</p>
        <p>{data.completed}</p>
      </>
      ) : "loading..."}

    </div>
  )
}

export default ServerSide
