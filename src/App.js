import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import { Feed, Header, LeftNav, LeftNavMenu, SearchResultVideoCard, SuggestionVideoCard, SearchResult, VideoCard, VideoDetails } from './componets'

import { AppContext, Context } from './context/ContextApi'
const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header/>
        <Routes>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </div>
      </BrowserRouter>
      </AppContext> 
  )
}

export default App