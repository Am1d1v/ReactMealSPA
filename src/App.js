import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contacts' element={<Contact />}/>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;