import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="jamsHeader">
          <nav>
            <Link to='/' className="header-link-styles">Landing</Link>
            <Link to='/library' className="header-link-styles">Library</Link>
          </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main className="main-styles">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        <footer className="jamsFooter">
          Contact us at blocJams@gmail.com
        </footer>
      </div>
    );
  }
}

export default App;
