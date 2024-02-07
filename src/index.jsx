import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projets from './pages/Projets'
import Skills from './pages/Skills'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import Article from './components/Article'
// import Article from './components/Article'
// import { createGlobalStyle } from 'styled-components'

// const GlobalStyle = createGlobalStyle`
//     * {
//       font-family: 'Trebuchet MS', Helvetica, sans-serif;
//     }

//     body {
//       margin: 0;
//     }
// `

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />'
      <Article />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/skills" element={< Skills/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)