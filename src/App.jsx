import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage.jsx';
import FeedPage from './pages/FeedPage.jsx';
import LikesPage from './pages/LikesPage.jsx';
import Header from './components/Header.jsx';

export default class App extends React.Component {
	render() {
		return (
		  <BrowserRouter>
				<div className="App">
					<Header />
	        <Route exact path="/" component={FeedPage} />
		      <Route path="/profile" component={ProfilePage} />
		      <Route path="/likes" component={LikesPage} />
	      </div>
      </BrowserRouter>
    );
  }
}