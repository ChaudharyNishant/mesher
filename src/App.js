import React from 'react';
import './App.css';
import HeaderAppBar from './components/Header/HeaderComponent';
import WallpapersComponent from './components/AllWallpapers/AllWallpapersComponent';
import BottomNavigationBar from './components/BottomNavigation/BottomNavigationComponent';
import InfoPage from './components/Info/InfoComponent';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import SearchBar from './components/Header/SearchBarComponent';
import FullscreenView from './components/AllWallpapers/FullScreenViewComponent';
import NotFound from './components/NotFound/NotFoundPage';

function App() {
  return (
    <div>
        <HeaderAppBar />
        <Switch>
        <Route exact path='/meshers/' 
        render={() => 
        <div>
          <WallpapersComponent />
        </div> 
        } />
        <Route path='/meshers/#/:name' component={FullscreenView}/>
        <Route exact path='/meshers/search' 
        render={() => 
        <div>
            <SearchBar />
            <WallpapersComponent />
        </div> 
        } />
        <Route exact path='/meshers/info' 
        render={() => 
        <div>
            <InfoPage />
        </div> 
        } />
        <Route path="/meshers/404" component={NotFound}/>
        <Redirect to="404" />
        </Switch>
        <BottomNavigationBar />
      </div>
  );
}

export default withRouter(App);
