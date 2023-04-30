import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import './index.css'
import {Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from './components/index'


export const App = () => {
  return (
    <BrowserRouter>
    <Box>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Feed/>} />
        <Route path='/video/:id' element={<VideoDetails/>} />
        <Route path='/channel/:id' element={<ChannelDetails/>} />
        <Route path='/search/:searchTerm' element={<SearchFeed/>} />
      </Routes>
    </Box>
    </BrowserRouter>
  )
}




export default App
