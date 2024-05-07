import React, { useState } from 'react'
import Loader  from './Loader';
import useGif from '../hooks/useGif';


const Searchedgif = () => {
  const [query,setQuery] = useState('cute');
  const {random, fetchInfo,isLoading} =useGif(query);
 
  return (
    <div>
      {isLoading ? 
        ( <div className='gif'><Loader /></div>) : 
        (random ? <img src={random.url} className='gif' alt='randomgif'/>: <div className='gif'>Not found</div>)
      }
      <input className='form-control' id='search' type='text' name='search' value={query} onChange={(e)=>setQuery(e.target.value)}/>
      <button type='button' className='btn' onClick={() => fetchInfo(query)}>Search</button>
    </div>
  )
}

export default Searchedgif