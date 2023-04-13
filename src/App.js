import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
//import { Feed } from '@mui/icons-material';

function App() {
  return (
    <BrowserRouter>

      <Box sx={{ backgroundColor: '#000' }}>
        Navbar
      </Box>
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
