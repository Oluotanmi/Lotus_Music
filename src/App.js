import { Route, Switch } from 'react-router'

import AllMeetupsPage from './Pages/NewRelease/NewRelease'
import Profile from './Pages/Profile/Profile'
import Home from './Pages/Home/Home'
import MainNavigation from './MainNavigation/MainNavigation'
import Footer from './Pages/Footer/Footer'

import './index.css'



export default function App(){  
     return (
       <div className='app_div' >
         <MainNavigation /> 
        
          <Switch>
              <Route path='/' exact>
                <AllMeetupsPage />
              </Route>
              <Route path='/Home' >
              <Home />
              </Route>
              <Route path='/Profile'>
              <Profile />
              </Route>
          </Switch> 
       
      <Footer />       
       </div>
     )
}


