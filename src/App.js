import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

//import { Feed, Header, LeftNav, LeftNavMenu, SearchResultVideoCard, SuggestionVideoCard, SearchResult, VideoCard, VideoDetails } from './componets'

import Feed from './componets/Feed'
import Header from './componets/Header'
import SearchResult from './componets/SearchResult'
import VideoDetails from './componets/VideoDetails'

import { AppContext, Context } from './context/ContextApi'
const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
          <Route path='/video/:id' element={<VideoDetails/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      </AppContext> 
  )
}

export default App