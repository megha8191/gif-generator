import React from 'react'
import Loader  from './Loader';
import useGif from '../hooks/useGif';

const Randomgif = () => {
  const {random, fetchInfo,isLoading} = useGif();

  return (
    <div>
       {isLoading ? 
         (<div className='gif'><Loader /></div>) : 
         (random ? <img src={random.url} className='gif' alt='randomgif'/>: <div className='gif'>Not found</div>)
       }
       <button type='button' className='btn' onClick={fetchInfo}>Generate</button>
    </div>
  )
}
export default Randomgif