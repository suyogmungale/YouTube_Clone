import React, {useContext, useEffect} from 'react';

import {Context} from '../context/ContextApi'
import LeftNav from './LeftNav'


const Feed = () => {
  return (
    <div className=" flex flex-row h-[calc(100%-56px)] ">
      <LeftNav/>
    </div>
  )
}

export default Feed