import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CommunityOwner from './pages/CommunityOwner'
import Sidebar from './components/Sidebar'
import CommunityPage from './pages/CommunityPage'
import CollaborationType from './pages/CollaborationType'
import BrowserOwner from './pages/BrowserOwner'
import InsideBrowseOwner from './components/insideBrowseOwner'
import InnerBrowsePage from './components/InnerBrowsePage'
import BrowserPage from './pages/BrowserPage'
import BrowserSubPlans from './pages/BrowserSubPlans'
import PurchaseHistory from './pages/PurchaseHistory'
import ListCommunity from './pages/ListCommunity'
import Settings from './pages/Settings'
import SwitchPremium from './pages/SwitchPremium'
import { UserContextProvider } from './context/UserContext'
import Pricing from './pages/Pricing'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import Faq from './pages/Faq'


const App = () => {
  return (
    <UserContextProvider>
      <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/register" element={<Register />}/>
     <Route exact path="/pricing" element={<Pricing />}/>
     <Route exact path="/contactus" element={<ContactUs />}/>
     <Route exact path="/blog" element={<Blog />}/>
     <Route exact path="/aboutus" element={<AboutUs />}/>
     <Route exact path="/faq" element={<Faq />}/>

  
     <Route exact path="/communityowner" element={<CommunityOwner />}/>
     <Route exact path="/communitypage/:id" element={<CommunityPage />}/>
     <Route exact path="/collaborationtype" element={<CollaborationType />}/>
     <Route exact path="/browseowner" element={<BrowserOwner />}/>
     <Route exact path="/innerbrowsepage" element={<BrowserPage />}/>
     <Route exact path="/subscriptionplans" element={<BrowserSubPlans />}/>
     <Route exact path="/purchasehistory" element={<PurchaseHistory />}/>
     <Route exact path="/listcommunity" element={<ListCommunity />}/>
     <Route exact path="/settings" element={<Settings />}/>
     <Route exact path="/switchpremium" element={<SwitchPremium />}/>


      </Routes>
      </UserContextProvider>

  )
}

export default App