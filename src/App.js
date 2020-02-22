import React , {Component} from 'react';
import { NavLink } from 'react-router-dom'

import Router from './Router'

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink className="navi" to='/'>Go to Home</NavLink></li>
    <li><NavLink className="navi" to='/cart'>Go to Cart</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render () {
    return <div className='page-container'>
      <Navigation />
      <Router />
    </div>
  }
}

export default App;
