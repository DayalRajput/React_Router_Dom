import React, { useState, useEffect } from 'react'


function GitHub() {

   
    const [data , setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/user/DayalRajput')
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        setData(data)
      })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub followers : {data.followers}
    <img className='text-center'src="{data.avatar_url}" alt="Git picture" width={300}/>
    </div>
  )
}

export default GitHub

