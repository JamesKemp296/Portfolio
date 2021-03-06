import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Portfolio} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
